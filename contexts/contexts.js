import { createContext } from "react";

export const LanguageContex = createContext({
    laguage: "zh-TW",
    setLanguage: () => { },
});