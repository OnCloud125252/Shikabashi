import { useState } from "react";

import { languagePack } from "../../languagePack";
import Banner from "./components/Banner";
import TopLeftMenu from "./components/TopLeftMenu";
import TopRightMenu from "./components/TopRightMenu";
import style from "./HomePage.module.css";


export default function HomePage() {
    const [language, setLanguage] = useState("zh-TW"); // zh-TW, en-US, ja-JP
    const [isLoading, setIsLoading] = useState(true);

    const font_family = languagePack.font_family;


    return (
        <div style={{ "--font-family": font_family[language] }} className={style.index_container}>
            <TopLeftMenu language={language} setLanguage={setLanguage} isLoading={isLoading} setIsLoading={setIsLoading} />
            <TopRightMenu language={language} setLanguage={setLanguage} isLoading={isLoading} setIsLoading={setIsLoading} />
            <Banner language={language} isLoading={isLoading} setIsLoading={setIsLoading} />
            <div className={style.content}></div>
        </div>
    );
};