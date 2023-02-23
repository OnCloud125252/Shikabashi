import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

import { languagePack } from "../components/languagePack";
import { LanguageContex } from "../contexts/contexts";
import "../styles/globals.css";


export default function App({ Component, pageProps }) {
    const languageList = Object.keys(languagePack.languages);
    const [language, setLanguage] = useState("zh-TW");

    useEffect(() => {
        setLanguage(languageList.includes(getCookie("language")) ? getCookie("language") : "zh-TW");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <LanguageContex.Provider value={{ language, setLanguage }}>
            <Component {...pageProps} />
        </LanguageContex.Provider>
    );
}