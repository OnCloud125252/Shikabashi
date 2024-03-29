import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { LanguageContex } from "../../../../../contexts/contexts";
import profile_image from "./profile.jpg";
import styles from "./Footer.module.css";


export default function Footer() {
    const { language, setLanguage } = useContext(LanguageContex);

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.profile_container}>
                    <article className={styles.profile_content}>
                        <p className={styles.profile_name}>
                            Seki
                        </p>
                        <Link href="/" className={styles.profile_image}>
                            <Image src={profile_image} alt="profile image" width={2747} height={2747} />
                        </Link>
                        <p className={styles.profile_description}>
                            商業洽談 聯絡洽詢: <a href="mailto:contact@newmd.eu.org?subject=Test%20Business%20Negotiation" className={styles.contact_email}>contact@newmd.eu.org</a><br />
                            連動合作、其他 聯絡洽詢: <a href="mailto:contact@newmd.eu.org?subject=Test%20Other%20Negotiation" className={styles.contact_email}>contact@newmd.eu.org</a><br />
                            所屬子午計畫 MeridianProject 團隊，且無在經營B站<br />
                            <br />
                            🌊如果想寄送禮物，請寄到工作室並註明給Seki 🌊<br />
                            地址 ▷【桃園市中壢區大華路197號-子午計畫工作坊】<br />
                            <br />
                            ⚠️⚠️食物、生物與含電池的物品是NG的喔⚠️⚠️
                        </p>
                    </article>
                </div>
            </footer>
        </>
    );
}