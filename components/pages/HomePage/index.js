import { useState, useContext } from "react";

import { languagePack } from "../../languagePack";
import { LanguageContex } from "../../../contexts/contexts";
import Banner from "./components/Banner";
import TopMenu from "../../TopMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./HomePage.module.css";


export default function HomePage() {
    const { language, setLanguage } = useContext(LanguageContex);
    const [isLoading, setIsLoading] = useState(true);

    const font_family = languagePack.languages[language].fontFamily;

    return (
        <div style={{ "--font-family": font_family }} className={styles.index_container}>
            <TopMenu parameters={{
                isLoading
            }} />
            <Banner parameters={{
                setIsLoading
            }} />
            {isLoading ? <></> :
                <>
                    <Content />
                    <Footer />
                </>
            }
        </div>
    );
};