import { useState, useContext } from "react";

import { languagePack } from "../../languagePack";
import { LanguageContex } from "../../../contexts/contexts";
import TopMenu from "../../TopMenu";
import styles from "./ContactUsPage.module.css";


export default function ContactUsPage() {
    const { language, setLanguage } = useContext(LanguageContex);
    const [isLoading, setIsLoading] = useState(false);

    const font_family = languagePack.languages[language].fontFamily;

    return (
        <>
            <div style={{ "--font-family": font_family }} className={styles.contactUs_container}>
                <TopMenu parameters={{
                    isLoading
                }} />
            </div>
        </>
    );
}