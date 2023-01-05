import { useEffect, useState } from "react";
import styles from "./TopRightMenu.module.css";
// import contactLogo from "./contact.png";
// import languageLogo from "./language.png";


function join(...array) {
    return array.join(" ");
}

export default function TopRightMenu({ languagePack, language, setLanguage, isLoading, setIsLoading }) {
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
            <div className={join(styles.triangle)}
                style={{
                    "opacity": isLoading ? "1" : "0.4",
                    "--rotate-angle": isLoading ? "0deg" : `${Math.atan(170 / windowDimensions.width)}rad`,
                    "height": isLoading ? "100vh" : "120px",
                    "zIndex": isLoading ? "999" : "1",
                }}>
            </div>
            <div className={styles.menu_container}>
                {/* <div className={join(styles.logo_container, "noselect")}>
                    <p>Shikabashi</p>
                    <img alt="logo" src="./logo_noName.svg" />
                </div> */}
                {/* <ul>
                    <li>

                    </li>
                </ul> */}
            </div>
        </>
    );
};