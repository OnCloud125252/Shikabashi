import { useState } from "react";

import { languagePack } from "../../languagePack";
import Banner from "./components/Banner";
import TopLeftMenu from "./components/TopLeftMenu";
import TopRightMenu from "./components/TopRightMenu";
import styles from "./HomePage.module.css";


export default function HomePage() {
    const [language, setLanguage] = useState("zh-TW"); // zh-TW, en-US, ja-JP
    const [isLoading, setIsLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState({
        isOpen: false,
        options: {
            height: "500px"
        }
    });

    const font_family = languagePack.font_family;

    return (
        <div style={{ "--font-family": font_family[language] }} className={styles.index_container}>
            <TopLeftMenu parameters={{
                language,
                isLoading,
                openMenu,
                setOpenMenu
            }} />
            <TopRightMenu parameters={{
                isLoading,
                openMenu
            }} />
            <Banner parameters={{
                language,
                setIsLoading
            }} />
            {openMenu.isOpen ? <div className={styles.closeMenu} onClick={() => setOpenMenu({ isOpen: false })}></div> : <></>}
            <div className={styles.content}></div>
        </div>
    );
};