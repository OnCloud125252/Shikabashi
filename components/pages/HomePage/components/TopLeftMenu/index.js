import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./TopLeftMenu.module.css";


function join(...array) {
    return array.join(" ");
}

export default function TopLeftMenu({ languagePack, language, setLanguage, isLoading, setIsLoading }) {
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
                "opacity": isLoading ? "1" : "0.4",
                "--rotate-angle": isLoading ? "0deg" : `-${Math.atan(130 / windowDimensions.width)}rad`,
                "height": isLoading ? "100vh" : "120px",
                "zIndex": isLoading ? "999" : "1",
            }}>
                <Image src="/logo_withName.svg" alt="Shikabashi logo" className={styles.logo} width={56} height={80} />
            </div>
        </>
    );
};