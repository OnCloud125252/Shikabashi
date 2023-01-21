import { useEffect, useState } from "react";

import styles from "./TopRightMenu.module.css";


function join(...array) {
    return array.join(" ");
}

export default function TopRightMenu({ parameters }) {
    const isLoading = parameters.isLoading;
    const openMenu = parameters.openMenu;

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
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": isLoading ? "0deg" : `${Math.atan(120 / windowDimensions.width)}rad`,
                "height": isLoading ? "100vh" : openMenu.isOpen ? `calc(${openMenu.options.height} + 110px)` : "0px",
                "zIndex": isLoading ? "999" : "1",
            }}>
            </div>
        </>
    );
}