import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

import { LanguageContex } from "../../contexts/contexts";
import { languagePack } from "../languagePack";
import Triangles from "./components/Triangles";
import LanguageChanger from "./components/LanguageChanger";
import styles from "./TopMenu.module.css";


export default function TopMenu({ parameters }) {
    const isLoading = parameters.isLoading;
    const router = useRouter();

    const { language, setLanguage } = useContext(LanguageContex);
    const [windowDimensions, setWindowDimensions] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);
    const [menuOption, setMenuOption] = useState({
        height: "500px"
    });

    useEffect(() => {
        setWindowDimensions(getWindowDimensions(window));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWindowDimensions(window));
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <>
            <Triangles isLoading={isLoading} openMenu={openMenu} menuOption={menuOption} windowDimensions={windowDimensions} />
            <nav className={join(styles.navbar, "noselect")}>
                <div className={styles.menu}>
                    <Image className={styles.logo} onClick={() => router.push("/")} src="/logo_noName.svg" alt="Shikabashi logo" width={600} height={600} />
                    <p className={styles.item} onClick={() => openMenuTo(500)}>
                        {languagePack.pages.HomePage.components.TopMenu["Creation Hall"][language]}
                    </p>
                    <p className={styles.item} onClick={() => openMenuTo(500)}>
                        {languagePack.pages.HomePage.components.TopMenu["About Us"][language]}
                    </p>
                    <p className={styles.item} onClick={() => openMenuTo(500)}>
                        {languagePack.pages.HomePage.components.TopMenu["Frequently Asked"][language]}
                    </p>
                    <p className={styles.item} onClick={() => router.push("/contact_us")}>
                        {languagePack.pages.HomePage.components.TopMenu["Contact Us"][language]}
                    </p>
                </div>
                <LanguageChanger language={language} setLanguage={setLanguage} />
            </nav>
            {openMenu ? <div className={styles.closeMenu} onClick={() => setOpenMenu(false)} /> : <></>}
        </>
    );

    function openMenuTo(pixel) {
        pixel = typeof (pixel) === "number" ? pixel : 0;
        setOpenMenu(true);
        setMenuOption({
            height: `${pixel}px`
        });
    }
}

function join(...array) {
    return array.join(" ");
}

function getWindowDimensions(window) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}