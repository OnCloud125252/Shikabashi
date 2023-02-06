import { useState, useContext } from "react";

import { languagePack } from "../../languagePack";
import { LanguageContex } from "../../../contexts/contexts";
import Banner from "./components/Banner";
import TopMenu from "../../TopMenu";
import TopRightMenu from "./components/TopRightMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./HomePage.module.css";


export default function HomePage() {
    const { language, setLanguage } = useContext(LanguageContex);
    const [isLoading, setIsLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState({
        isOpen: false,
        options: {
            height: "500px"
        }
    });

    const font_family = languagePack.languages[language].fontFamily;

    return (
        <div style={{ "--font-family": font_family }} className={styles.index_container}>
            <TopMenu parameters={{
                isLoading,
                openMenu,
                setOpenMenu
            }} />
            <TopRightMenu parameters={{
                isLoading,
                openMenu
            }} />
            <Banner parameters={{
                setIsLoading
            }} />
            {openMenu.isOpen ? <div className={styles.closeMenu} onClick={() => setOpenMenu({ isOpen: false })} /> : <></>}
            {isLoading ? <></> :
                <>
                    <Content />
                    <Footer />
                </>
            }
        </div>
    );
};