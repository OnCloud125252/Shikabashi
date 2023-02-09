import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { LanguageContex } from "../../../../../contexts/contexts";
import { languagePack } from "../../../../languagePack";
import styles from "./Content.module.css";


export default function Content() {
    const { language, setLanguage } = useContext(LanguageContex);

    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}><span>{languagePack.pages.HomePage.components.Content["Our Works"][language]}</span></h1>
                <div className={styles.card_container}>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>1-Tomato</div>
                            <div className={styles.card_description}>Why did the tomato turn red?<br />Because it saw the salad dressing!</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>2-Goldfish</div>
                            <div className={styles.card_description}>Two goldfish are in a tank. One says to the other, &quot;Do you know how to drive this thing?&quot;</div>
                        </article>
                    </Link>
                    <Link href="" className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>3-Scarecrow</div>
                            <div className={styles.card_description}>Why did the scarecrow win an award?<br />Because he was outstanding in his field!</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>4-Switzerland</div>
                            <div className={styles.card_description}>What&apos;s the best thing about Switzerland?<br />I don&apos;t know, but the flag is a big plus.</div>
                        </article>
                    </Link>
                    <Link href="" className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>5-Restaurant</div>
                            <div className={styles.card_description}>Hear about the new restaurant called Karma?<br />There&apos;s no menu: You get what you deserve.</div>
                        </article>
                    </Link>
                    <Link href="" className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>6-Actor</div>
                            <div className={styles.card_description}>Did you hear about the actor who fell through the floorboards?<br />He was just going through a stage.</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>7-Astronaut</div>
                            <div className={styles.card_description}>Did you hear about the claustrophobic astronaut?<br />He just needed a little space.</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>8-Atoms</div>
                            <div className={styles.card_description}>Why don&apos;t scientists trust atoms?<br />Because they make up everything.</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>9-Hipster</div>
                            <div className={styles.card_description}>How do you drown a hipster?<br />Throw him in the mainstream.</div>
                        </article>
                    </Link>
                </div>
                <h1 className={styles.title}><span>{languagePack.pages.HomePage.components.Content["Our Works"][language]}</span></h1>
                <div className={styles.card_container}>
                    <div className={styles.card_16x9_empty} />
                    <Link href="" className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>10-288</div>
                            <div className={styles.card_description}>Why should the number 288 never be mentioned?<br />It&apos;s two gross.</div>
                        </article>
                    </Link>
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>11-Eye</div>
                            <div className={styles.card_description}>What did the left eye say to the right eye?<br />Between you and me, something smells.</div>
                        </article>
                    </Link>
                    <Link href="" className={styles.card_10x18}>
                        <Image src="/92765703.jpg" alt="image 10x18" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>12-Belt</div>
                            <div className={styles.card_description}>What did the 0 say to the 8?<br />Nice belt!</div>
                        </article>
                    </Link>
                    <div className={styles.card_16x9_empty} />
                    <div className={styles.card_16x9_empty} />
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>13-Hat</div>
                            <div className={styles.card_description}>What did one hat say to the other?<br />You wait here. I’ll go on a head.</div>
                        </article>
                    </Link>
                    <div className={styles.card_16x9_empty} />
                    <Link href="/" className={styles.card_16x9}>
                        <Image src="/92765703.jpg" alt="image 16/9" width={2200} height={1555} className={styles.image} />
                        <article className={styles.card_content_container}>
                            <div className={styles.card_title}>14-Clownfish</div>
                            <div className={styles.card_description}>What did the shark say when he ate the clownfish?<br />This tastes a little funny.</div>
                        </article>
                    </Link>
                </div>
            </div>
        </>
    );
}