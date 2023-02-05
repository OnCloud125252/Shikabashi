import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";

import { languagePack } from "../../languagePack";
import Banner from "./components/Banner";
import TopMenu from "./components/TopMenu";
import TopRightMenu from "./components/TopRightMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./HomePage.module.css";


export default function HomePage() {
    const languageList = Object.keys(languagePack.languages);

    const [language, setLanguage] = useState("zh-TW"); // zh-TW, en-US, ja-JP
    const [languagePosition, setLanguagePosition] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState({
        isOpen: false,
        options: {
            height: "500px"
        }
    });

    const font_family = languagePack.languages[language].fontFamily;

    useEffect(() => {
        const defaultLanguage = languageList.includes(getCookie("language")) ? getCookie("language") : "zh-TW";
        setLanguage(defaultLanguage);
        setLanguagePosition(languageList.findIndex(ele => ele === defaultLanguage));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{ "--font-family": font_family }} className={styles.index_container}>
            <TopMenu parameters={{
                language,
                isLoading,
                openMenu,
                setOpenMenu,
                switchLanguage
            }} />
            <TopRightMenu parameters={{
                isLoading,
                openMenu
            }} />
            <Banner parameters={{
                language,
                setIsLoading
            }} />
            {openMenu.isOpen ? <div className={styles.closeMenu} onClick={() => setOpenMenu({ isOpen: false })} /> : <></>}
            {isLoading ? <></> :
                <>
                    <Content parameters={{
                        language
                    }} />
                    <Footer parameters={{
                        language
                    }} />
                </>
            }
        </div>
    );

    function switchLanguage(switchPosition) {
        var position = languagePosition;
        if (switchPosition === "forward") {
            if ((position + 1) > (languageList.length - 1)) {
                position = 0;
            }
            else {
                position++;
            }
        }
        else if (switchPosition === "backward") {
            if ((position - 1) < 0) {
                position = languageList.length - 1;
            }
            else {
                position--;
            }
        }
        setLanguagePosition(position);
        setLanguage(languageList[position]);
        setCookie("language", languageList[position]);
    }
};