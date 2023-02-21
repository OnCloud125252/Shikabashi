import { loadSync, Font } from "opentype.js";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";


const rootDir = process.cwd();
const fontDir = join(rootDir, "fonts");

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).send({ message: "Method Not Allowed" });
    }

    try {
        const query = req.query;
        const { family, text } = query;
        const decodedFamily = decodeURIComponent(family);
        const decodedText = decodeURIComponent(text);

        if (!query || !decodedFamily) {
            return res.status(400).send({ message: "Bad Request" });
        }
        else if (!readdirSync(fontDir).includes(`${decodedFamily}.otf`)) {
            return res.status(404).send({ message: "Font Family Not Found" });
        }

        if (!decodedText) {
            res.setHeader("Content-Type", "application/octet-stream");
            res.setHeader(`Content-Disposition", "attachment; filename=${decodedFamily}.otf`);
            return res.status(200).send(readFileSync(join(rootDir, "fonts", `${decodedFamily}.otf`)));
        }
        else if (decodedText) {
            const subseted = await subsetFont(decodedFamily, decodedText);
            res.setHeader("Content-Type", "application/octet-stream");
            res.setHeader("Content-Disposition", `attachment; filename=${decodedFamily}.otf`);
            return res.status(200).send(subseted.fontBuffer);
        }
        else {
            return res.status(422).send({ message: "Unprocessable Entity" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

async function subsetFont(family, requireTexts) {
    const fontPath = join(fontDir, `${family}.otf`);

    const glyphs = [...new Set(requireTexts.split(""))].join("");

    const font = loadSync(fontPath);
    const postScriptName = font.getEnglishName("postScriptName");
    const [familyName, styleName] = postScriptName.split("-");

    const notdefGlyph = font.glyphs.get(0);
    notdefGlyph.name = ".notdef";
    const subGlyphs = [notdefGlyph].concat(font.stringToGlyphs(glyphs));

    const subsetFont = new Font({
        familyName: familyName,
        styleName: styleName,
        unitsPerEm: font.unitsPerEm,
        ascender: font.ascender,
        descender: font.descender,
        designer: font.getEnglishName("designer"),
        designerURL: font.getEnglishName("designerURL"),
        manufacturer: font.getEnglishName("manufacturer"),
        manufacturerURL: font.getEnglishName("manufacturerURL"),
        license: font.getEnglishName("license"),
        licenseURL: font.getEnglishName("licenseURL"),
        version: font.getEnglishName("version"),
        description: font.getEnglishName("description"),
        copyright: "This is a subset font of " + postScriptName + ". " + font.getEnglishName("copyright"),
        trademark: font.getEnglishName("trademark"),
        glyphs: subGlyphs
    });

    return {
        fontName: postScriptName,
        fontBuffer: arrayBufferToNodeBuffer(subsetFont.toArrayBuffer())
    };
}

function arrayBufferToNodeBuffer(arrayBuffer) {
    const buffer = Buffer.alloc(arrayBuffer.byteLength);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
}