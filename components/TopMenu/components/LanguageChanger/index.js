import Image from "next/image";
import { useState } from "react";
import { setCookie } from "cookies-next";

import { languagePack } from "../../../languagePack";
import globe from "./globe.png";
import styles from "./LanguageChanger.module.css";


export default function LanguageChanger({ language, setLanguage }) {
    const languageList = Object.keys(languagePack.languages);

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <div className={styles.languageChanger}>
                <div className={styles.selectedLanguage} onClick={() => setShowDropdown(!showDropdown)}>
                    {languagePack.languages[language].displayName}
                    <Image className={styles.globe} src={globe} alt="globe image" width={24} height={24} />
                </div>
                {
                    showDropdown ? (
                        languageList
                            .filter((languageCode) => languageCode !== language)
                            .map((languageCode, index) =>
                                <div key={index} className={styles.languageDropdownOption} onClick={() => {
                                    switchLanguageTo(languageCode);
                                    setShowDropdown(false);
                                }} style={{ "fontFamily": languagePack.languages[languageCode].fontFamily }}>
                                    {languagePack.languages[languageCode].displayName}
                                </div>
                            )
                    ) : <></>
                }
            </div>
        </>
    );

    function switchLanguageTo(languageCode) {
        setLanguage(languageCode);
        setCookie("language", languageCode);
    }
}