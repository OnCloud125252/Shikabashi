import { useEffect, useState } from "react";

import styles from "./TopRightMenu.module.css";


function join(...array) {
    return array.join(" ");
}

export default function TopRightMenu({ language, setLanguage, isLoading, setIsLoading }) {
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
                    "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.4)",
                    "--rotate-angle": isLoading ? "0deg" : `${Math.atan(190 / windowDimensions.width)}rad`,
                    "height": isLoading ? "100vh" : "100px",
                    "zIndex": isLoading ? "999" : "1",
                }}>
            </div>
        </>
    );
};