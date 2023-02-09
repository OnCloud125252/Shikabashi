import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";

import { LanguageContex } from "../../contexts/contexts";
import { languagePack } from "../languagePack";
import { join } from "../functions";
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
            <div className={join(styles.navbar, "noselect")}>
                <nav className={styles.menu}>
                    <Link className={styles.logo} href="/">
                        <Image onClick={() => router.push("/")} src="/logo_noName.svg" alt="Shikabashi logo" width={600} height={600} />
                    </Link>
                    <p tabindex="0" className={styles.item}
                        onKeyDown={(event) => { if (event.key === "Enter") openMenuTo(500); }}
                        onClick={() => openMenuTo(500)}
                    >
                        {languagePack.TopMenu["Creation Hall"][language]}
                    </p>
                    <p tabindex="0" className={styles.item}
                        onKeyDown={(event) => { if (event.key === "Enter") openMenuTo(500); }}
                        onClick={() => openMenuTo(500)}
                    >
                        {languagePack.TopMenu["About Us"][language]}
                    </p>
                    <p tabindex="0" className={styles.item}
                        onKeyDown={(event) => { if (event.key === "Enter") openMenuTo(500); }}
                        onClick={() => openMenuTo(500)}
                    >
                        {languagePack.TopMenu["Frequently Asked"][language]}
                    </p>
                    <p tabindex="0" className={styles.item}
                        onKeyDown={(event) => { if (event.key === "Enter") router.push("/contact_us"); }}
                        onClick={() => router.push("/contact_us")}
                    >
                        {languagePack.TopMenu["Contact Us"][language]}
                    </p>
                </nav>
                <LanguageChanger language={language} setLanguage={setLanguage} />
            </div>
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

function getWindowDimensions(window) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}