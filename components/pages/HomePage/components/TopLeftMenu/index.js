import Image from "next/image";
import { useEffect, useState } from "react";

import { languagePack } from "../../../../languagePack";
import styles from "./TopLeftMenu.module.css";


function join(...array) {
    return array.join(" ");
}

export default function TopLeftMenu({ language, setLanguage, isLoading, setIsLoading }) {
    const [windowDimensions, setWindowDimensions] = useState(0);

    function getWindowDimensions(window) {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    useEffect(() => {
        setWindowDimensions(getWindowDimensions(window));
    }, []);

    useEffect(() => {
        async function handleResize() {
            setWindowDimensions(getWindowDimensions(window));
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        <>
            <div className={join(styles.triangle)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",
                "--rotate-angle": isLoading ? "0deg" : `-${Math.atan(100 / windowDimensions.width)}rad`,
                "height": isLoading ? "100vh" : "90px",
                "zIndex": isLoading ? "999" : "1",
            }}>
                <nav className={join(styles.navbar, "noselect")}>

                    <div className={styles.menu}>
                        <Image src="/logo_noName.svg" alt="Shikabashi logo" className={styles.logo} width={600} height={600} />
                        <p className={styles.item}>{languagePack.pages.HomePage.components.TopLeftMenu["Creation Hall"][language]}</p>
                        <p className={styles.item}>{languagePack.pages.HomePage.components.TopLeftMenu["About Us"][language]}</p>
                        <p className={styles.item}>{languagePack.pages.HomePage.components.TopLeftMenu["Frequently Asked"][language]}</p>
                        <p className={styles.item}>{languagePack.pages.HomePage.components.TopLeftMenu["Contact Us"][language]}</p>

                    </div>
                </nav>
            </div>
        </>
    );
};