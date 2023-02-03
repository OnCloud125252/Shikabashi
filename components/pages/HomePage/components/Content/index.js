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
                        <div className={styles.card_content_container}>
                            <div className={styles.card_title}>Tomato</div>
                            <div className={styles.card_description}>Why did the tomato turn red?<br />Because it saw the salad dressing!</div>
                        </div>
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <div className={styles.card_content_container}>
                            <div className={styles.card_title}>Goldfish</div>
                            <div className={styles.card_description}>Two goldfish are in a tank. One says to the other, &quot;Do you know how to drive this thing?&quot;</div>
                        </div>
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <div className={styles.card_content_container}>
                            <div className={styles.card_title}>Scarecrow</div>
                            <div className={styles.card_description}>Why did the scarecrow win an award?<br />Because he was outstanding in his field!</div>
                        </div>
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
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
                    <div className={styles.card_16x9_empty} />
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9_empty} />
                    <div className={styles.card_16x9_empty} />
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                    <div className={styles.card_16x9_empty} />
                    <div className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                    </div>
                </div>
            </div>
        </>
    );
}