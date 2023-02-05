import Image from "next/image";
import { useEffect, useState } from "react";

import { languagePack } from "../../../../languagePack";
import styles from "./TopMenu.module.css";


export default function TopLeftMenu({ parameters }) {
    const language = parameters.language;
    const isLoading = parameters.isLoading;
    const openMenu = parameters.openMenu;
    const setOpenMenu = parameters.setOpenMenu;
    const switchLanguage = parameters.switchLanguage;

    const [windowDimensions, setWindowDimensions] = useState(0);

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
            <div className={join(styles.triangle)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": openMenu.isOpen ? `${-Math.atan(100 / windowDimensions.width)}rad` : "0deg",
                "height": isLoading ? "100vh" : openMenu.isOpen ? openMenu.options.height : "70px",
                "zIndex": isLoading ? "999" : "2",
            }}>
                <nav className={join(styles.navbar, "noselect")}>
                    <div className={styles.menu}>
                        <Image src="/logo_noName.svg" alt="Shikabashi logo" className={styles.logo} width={600} height={600} />
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["Creation Hall"][language]}</p>
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["About Us"][language]}</p>
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["Frequently Asked"][language]}</p>
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["Contact Us"][language]}</p>
                    </div>
                    <div className={styles.languageChanger}>
                        <div className={styles.languageChanger_leftArrow} onClick={() => switchLanguage("backward")} />
                        {languagePack.languages[language].displayName}
                        <div className={styles.languageChanger_rightArrow} onClick={() => switchLanguage("forward")} />
                    </div>
                </nav>
            </div>
        </>
    );


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

