import style from "./Banner.module.css";


function join(...array) {
    return array.join(" ");
}

export const Banner = ({ languagePack, language, isLoading, setIsLoading }) => {
    return (
        <div className={style.banner_container}>
            <div className={style.banner}>
                <div className={style.banner_video}>
                    <video autoPlay muted loop onLoadedData={() => setIsLoading(false)}>
                        <source src="/Fauna.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className={style.banner_filter}></div>
            </div>
            <div className={style.learnmore_container}>
                <div className={style.learnmore}>
                    <h1 className={style.learnmore_title}>
                        Ceres Fauna Christmas ASMR
                    </h1>
                    <button className={style.learnmore_button} title={languagePack["Learn More"][language]}>
                        <span className={style.learnmore_button_circle} aria-hidden="true">
                            <span className={join(style.learnmore_button_circle_icon, style.learnmore_button_circle_icon_arrow)}></span>
                        </span>
                        <span className={style.learnmore_button_text}>{languagePack["Learn More"][language]}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};