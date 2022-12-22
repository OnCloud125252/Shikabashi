import { useEffect } from "react";
import styles from "./TopLeftMenu.module.css";
// import contactLogo from "./contact.png";
// import languageLogo from "./language.png";


function join(...array) {
    return array.join(" ");
}

export const TopLeftMenu = ({ languagePack, language, setLanguage, isLoading, setIsLoading }) => {

    useEffect(() => {
        console.log(isLoading);
    }, [isLoading]);

    return (
        <>
            {/* <div className={join(styles.triangle, (isLoading ? styles.triangle_cover : styles.triangle_show))}></div> */}
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