import { useEffect, useState, useContext } from "react";

import { LanguageContex } from "../../../../../contexts/contexts";
import { languagePack } from "../../../../languagePack";
import styles from "./Banner.module.css";


function join(...array) {
    return array.join(" ");
}

export default function Banner({ parameters }) {
    const setIsLoading = parameters.setIsLoading;

    const { language, setLanguage } = useContext(LanguageContex);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);;
    }, []);

    return (
        <>
            <div className={join(styles.banner_container, "noselect")}>
                <div className={styles.banner_video_container}>
                    <div className={styles.banner_video}>
                        <video autoPlay muted loop playsInline onTimeUpdate={() => setIsLoading(false)}>
                            <source src="/Fauna.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className={styles.banner_filter}></div>
                </div>
                <div className={styles.learnmore_container}>
                    <div className={styles.learnmore}>
                        <h1 className={styles.learnmore_title}>
                            Ceres Fauna <label className={styles.title_split}>|</label> Christmas ASMR
                        </h1>
                        <button className={styles.learnmore_button} title={languagePack.pages.HomePage.components.Banner["Learn More"][language]}>
                            <span className={styles.learnmore_button_circle} aria-hidden="true">
                                <span className={join(styles.learnmore_button_circle_icon, styles.learnmore_button_circle_icon_arrow)}></span>
                            </span>
                            <span className={styles.learnmore_button_text}>{languagePack.pages.HomePage.components.Banner["Learn More"][language]}</span>
                        </button>
                    </div>
                </div>
                <div className={styles.arrow_down} style={{
                    "--arrow_down__height": `${(50 - scrollY / 10) <= 0 ? 0 : (50 - scrollY / 10)}px`
                }}>
                    {languagePack.pages.HomePage.components.Banner["Scroll For More"][language]}
                </div>
            </div>
        </>
    );
}