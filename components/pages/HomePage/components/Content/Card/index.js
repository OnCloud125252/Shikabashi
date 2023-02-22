import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.css";
import { haveProperties } from "../../../../../functions";


export function Card_16x9({ image, content }) {
    if (
        haveProperties(image, ["src", "width", "height"]) &&
        haveProperties(content, ["title", "description"])
    ) {
        return (
            <Link href="/" className={styles.card_16x9}>
                <Image
                    src={image.src}
                    alt={image.alt ?? "image 16x9"}
                    width={image.width}
                    height={image.height}
                    className={styles.image}
                />
                <article className={styles.card_content_container}>
                    <div className={styles.card_title}>{content.title}</div>
                    <div
                        className={styles.card_description}
                        dangerouslySetInnerHTML={{ __html: content.description.join("<br />") }}
                    />
                </article>
            </Link>
        );
    }
    else {
        return (<></>);
    }
}

export function Card_10x18({ image, content }) {
    if (
        haveProperties(image, ["src", "width", "height"]) &&
        haveProperties(content, ["title", "description"])
    ) {
        return (
            <Link href="/" className={styles.card_10x18}>
                <Image
                    src={image.src}
                    alt={image.alt ?? "image 10x18"}
                    width={image.width}
                    height={image.height}
                    className={styles.image}
                />
                <article className={styles.card_content_container}>
                    <div className={styles.card_title}>{content.title}</div>
                    <div
                        className={styles.card_description}
                        dangerouslySetInnerHTML={{ __html: content.description.join("<br />") }}
                    />
                </article>
            </Link>
        );
    }
    else {
        return (<></>);
    }
}

export function Card_16x9_empty() {
    return (
        <div className={styles.card_16x9_empty} />
    );
}