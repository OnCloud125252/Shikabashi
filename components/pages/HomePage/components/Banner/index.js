import { languagePack } from "../../../../languagePack";
import styles from "./Banner.module.css";


function join(...array) {
    return array.join(" ");
}

export default function Banner({ language, isLoading, setIsLoading }) {
    return (
        <>
            <div className={join(styles.banner_container, "noselect")}>
                <div className={styles.banner}>
                    <div className={styles.banner_video}>
                        <video autoPlay muted loop onPlaying={() => setIsLoading(false)} >
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
            </div>
        </>
    );
};