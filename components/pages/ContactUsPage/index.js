import { useState, useContext, useEffect } from "react";
import Image from "next/image";

import { languagePack } from "../../languagePack";
import { LanguageContex } from "../../../contexts/contexts";
import TopMenu from "../../TopMenu";
import styles from "./ContactUsPage.module.css";


export default function ContactUsPage() {
    const { language, setLanguage } = useContext(LanguageContex);
    const [isLoading, setIsLoading] = useState(false);

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
            <div className={styles.contactUs_container}>
                <TopMenu parameters={{
                    isLoading
                }} />
                <div className={styles.clipText} style={{ "--topPosition": `${scrollY}px`, "--imgURL": "url(/86914115.jpg)" }}>
                    {languagePack.pages.ContactUsPage.index["Contact Us"][language]}
                </div>
                <h1>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</h1>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
                <p>{languagePack.pages.ContactUsPage.index["Test Message"][language]}</p>
            </div>
        </>
    );
}