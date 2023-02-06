import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { setCookie } from "cookies-next";

import { LanguageContex } from "../../contexts/contexts";
import { languagePack } from "../languagePack";
import styles from "./TopMenu.module.css";


export default function TopMenu({ parameters }) {
    const languageList = Object.keys(languagePack.languages);

    const isLoading = parameters.isLoading;
    const router = useRouter();

    const { language, setLanguage } = useContext(LanguageContex);
    const [windowDimensions, setWindowDimensions] = useState(0);
    const [languagePosition, setLanguagePosition] = useState(languageList.findIndex(ele => ele === language));
    const [openMenu, setOpenMenu] = useState({
        isOpen: false,
        options: {
            height: "500px"
        }
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
            <div className={join(styles.triangle_top)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": openMenu.isOpen ? `${-Math.atan(100 / windowDimensions.width)}rad` : "0deg",
                "height": isLoading ? "100vh" : openMenu.isOpen ? openMenu.options.height : "70px",
                "zIndex": isLoading ? "999" : "3",
            }}>
                <nav className={join(styles.navbar, "noselect")}>
                    <div className={styles.menu}>
                        <Image className={styles.logo} onClick={() => router.push("/")} src="/logo_noName.svg" alt="Shikabashi logo" width={600} height={600} />
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["Creation Hall"][language]}</p>
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["About Us"][language]}</p>
                        <p className={styles.item} onClick={() => setOpenMenu({ isOpen: true, options: { height: "500px" } })}>{languagePack.pages.HomePage.components.TopMenu["Frequently Asked"][language]}</p>
                        <p className={styles.item} onClick={() => router.push("/contact_us")}>{languagePack.pages.HomePage.components.TopMenu["Contact Us"][language]}</p>
                    </div>
                    <div className={styles.languageChanger}>
                        <div className={styles.languageChanger_leftArrow} onClick={() => switchLanguage("backward")} />
                        {languagePack.languages[language].displayName}
                        <div className={styles.languageChanger_rightArrow} onClick={() => switchLanguage("forward")} />
                    </div>
                </nav>
            </div>
            <div className={join(styles.triangle_right)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": isLoading ? "0deg" : `${Math.atan(120 / windowDimensions.width)}rad`,
                "height": isLoading ? "100vh" : openMenu.isOpen ? `${openMenu.options.height}` : "0px",
                "zIndex": isLoading ? "999" : "2",
            }} />
            {openMenu.isOpen ? <div className={styles.closeMenu} onClick={() => setOpenMenu({ isOpen: false })} /> : <></>}
        </>
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