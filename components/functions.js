export function getRequiredTextsURI(objArray, language) {
    return objArray.map((objName) => {
        const requiredTexts = (function getText(obj, language) {
            let wantedValues = [];
            for (const key in obj) {
                if (key === language) {
                    wantedValues.push(obj[key]);
                } else if (typeof obj[key] === "object") {
                    wantedValues = wantedValues.concat(getText(obj[key], language));
                }
            }
            return wantedValues.filter(ele => typeof (ele) !== "object");
        })(objName, language).join("");
        return encodeURIComponent(requiredTexts);
    }).join("");
}

export function join(...array) {
    return array.join(" ");
}