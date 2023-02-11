import { useState, useContext } from "react";

import { LanguageContex } from "../../../contexts/contexts";
import TopMenu from "../../TopMenu";
import styles from "./ContactUsPage.module.css";


export default function ContactUsPage() {
    const { language, setLanguage } = useContext(LanguageContex);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className={styles.contactUs_container}>
                <TopMenu parameters={{
                    isLoading
                }} />
                <h1><br /><br />{languagePack.pages.ContactUsPage.index["Test Message"][language]}</h1>
            </div>
        </>
    );
}