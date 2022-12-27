import { useState } from "react";

import { languagePack } from "./languagePack";
import Banner from "./components/Banner";
import TopLeftMenu from "./components/TopLeftMenu";
import TopRightMenu from "./components/TopRightMenu";
import style from "./HomePage.module.css";


export default function HomePage() {
    const [language, setLanguage] = useState("zh-TW");
    const [isLoading, setIsLoading] = useState(true);

    const font_family = {
        "en-US": "Oswald, sans-serif",
        "zh-TW": "Noto Serif TC, serif",
        "ja-JP": "Noto Serif JP, serif"
    };


    return (
        <div style={{ "--font-family": font_family[language] }} className={style.index_container}>
            <TopLeftMenu languagePack={languagePack} language={language} setLanguage={setLanguage} isLoading={isLoading} setIsLoading={setIsLoading} />
            <TopRightMenu languagePack={languagePack} language={language} setLanguage={setLanguage} isLoading={isLoading} setIsLoading={setIsLoading} />
            <Banner languagePack={languagePack} language={language} isLoading={isLoading} setIsLoading={setIsLoading} />
            <div className={style.content}></div>
        </div>
    );
};