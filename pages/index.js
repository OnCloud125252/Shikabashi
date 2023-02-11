import Head from "next/head";
import { useContext } from "react";

import { LanguageContex } from "../contexts/contexts";
import { languagePack } from "../components/languagePack";
import { getRequiredTextsURI } from "../components/functions";
import HomePage from "../components/pages/HomePage";


export default function Home() {
    const { language, setLanguage } = useContext(LanguageContex);

    const requiredTextPackages = [
        languagePack.pages.HomePage,
        languagePack.TopMenu
    ];
    const requiredFonts__zh_TW = getRequiredTextsURI(requiredTextPackages, "zh-TW");
    const requiredFonts__ja_JP = getRequiredTextsURI(requiredTextPackages, "ja-JP");
    const font_family = languagePack.languages[language].fontFamily;

    return (
        <>
            <Head>
                <title>Home | Shikabashi</title>
                <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200;400;600;900&display=swap&text=${requiredFonts__zh_TW}`} />
                <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;400;600;900&display=swap&text=${requiredFonts__ja_JP}`} />
            </Head>
            <main style={{ "--font-family": font_family }}>
                <HomePage />
            </main>
        </>
    );
}