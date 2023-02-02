import Image from "next/image";
import { languagePack } from "../../../../languagePack";
import styles from "./Content.module.css";


export default function Content({ parameters }) {
    const language = parameters.language;

    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><span>{languagePack.pages.HomePage.components.Content["Our Works"][language]}</span></div>
                <div className={styles.card_container}>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                </div>
            </div>
        </>
    );
}