import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { LanguageContex } from "../../../../../contexts/contexts";
import { languagePack } from "../../../../languagePack";
import { Card_16x9, Card_10x18, Card_16x9_empty } from "./Card";
import styles from "./Content.module.css";


export default function Content() {
    const { language, setLanguage } = useContext(LanguageContex);

    return (
        <>
            <div className={styles.content}>
                <h1 className={styles.title}><span>{languagePack.pages.HomePage.components.Content["Our Works"][language]}</span></h1>
                <div className={styles.card_container}>
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "1-Tomato",
                            description: ["Why did the tomato turn red?", "Because it saw the salad dressing!"]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "2-Goldfish",
                            description: ["Two goldfish are in a tank. One says to the other, \"Do you know how to drive this thing?\""]
                        }}
                    />
                    <Card_10x18
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "3-Scarecrow",
                            description: ["Why did the scarecrow win an award?", "Because he was outstanding in his field!"]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "4-Switzerland",
                            description: ["What's the best thing about Switzerland?", "I don't know, but the flag is a big plus."]
                        }}
                    />
                    <Card_10x18
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "5-Restaurant",
                            description: ["Hear about the new restaurant called Karma?", "There's no menu: You get what you deserve."]
                        }}
                    />
                    <Card_10x18
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "6-Actor",
                            description: ["Did you hear about the actor who fell through the floorboards?", "He was just going through a stage."]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "7-Astronaut",
                            description: ["Did you hear about the claustrophobic astronaut?", "He just needed a little space."]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "8-Atoms",
                            description: ["Why don't scientists trust atoms?", "Because they make up everything."]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "9-Hipster",
                            description: ["How do you drown a hipster?", "Throw him in the mainstream."]
                        }}
                    />
                </div>
                <h1 className={styles.title}><span>{languagePack.pages.HomePage.components.Content["Our Works"][language]}</span></h1>
                <div className={styles.card_container}>
                    <Card_16x9_empty />
                    <Card_10x18
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "10-288",
                            description: ["Why should the number 288 never be mentioned?", "It's two gross."]
                        }}
                    />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "11-Eye",
                            description: ["What did the left eye say to the right eye?", "Between you and me, something smells."]
                        }}
                    />
                    <Card_10x18
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "12-Belt",
                            description: ["What did the 0 say to the 8?", "Nice belt!"]
                        }}
                    />
                    <Card_16x9_empty />
                    <Card_16x9_empty />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "13-Hat",
                            description: ["What did one hat say to the other?", "You wait here. I'll go on a head."]
                        }}
                    />
                    <Card_16x9_empty />
                    <Card_16x9
                        image={{
                            src: "/92765703.jpg",
                            width: 2200,
                            height: 1555
                        }}
                        content={{
                            title: "14-Clownfish",
                            description: ["What did the shark say when he ate the clownfish?", "This tastes a little funny."]
                        }}
                    />
                </div>
            </div>
        </>
    );
}