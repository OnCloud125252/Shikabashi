import { Html, Head, Main, NextScript } from "next/document";


const headConfig = {
    author: "OnCloud",
    themeColor: "#2f3542",
    description: "Shikabashi",
    copyright: "Copyright (c) by OnCloud",
    icon: "/logo_noName.svg",
    contentLanguage: "zh-TW",
    cards: {
        openGraph: {
            title: "Shikabashi",
            description: "Shikabashi",
            type: "website",
            url: "",
            image: ""
        },
        twitter: {
            cardType: "summary_large_image",  // “summary”, “summary_large_image”, “app”, or “player”
            title: "Shikabashi",
            description: "Shikabashi",
            site: "@",  // @username for the website used in the card footer.
            creator: "@",  // @username for the content creator / author.
            image: ""
        }
    }
};

export default function Document() {
    return (
        <Html lang="zh">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta httpEquiv="content-Type" content="text/html" />
                <meta httpEquiv="content-language" content={headConfig.contentLanguage} />
                <meta httpEquiv="widow-target" content="_top" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta name="author" content={headConfig.author} />
                <meta name="theme-color" content={headConfig.themeColor} />
                <meta name="description" content={headConfig.description} />
                <meta name="copyright" content={headConfig.copyright} />
                <link rel="icon" href={headConfig.icon} />

                {/* <!-- Open Graph --> */}
                <meta property="og:title" content={headConfig.cards.openGraph.title} />
                <meta property="og:description" content={headConfig.cards.openGraph.description} />
                <meta property="og:type" content={headConfig.cards.openGraph.type} />
                <meta property="og:url" content={headConfig.cards.openGraph.url} />
                <meta property="og:image" content={headConfig.cards.openGraph.image} />

                {/* <!-- Twitter --> */}
                <meta name="twitter:card" content={headConfig.cards.twitter.cardType} />
                <meta name="twitter:title" content={headConfig.cards.twitter.title} />
                <meta name="twitter:description" content={headConfig.cards.twitter.description} />
                <meta name="twitter:site" content={headConfig.cards.twitter.site} />
                <meta name="twitter:creator" content={headConfig.cards.twitter.creator} />
                <meta name="twitter:image" content={headConfig.cards.twitter.image} />

                {/* Fonts */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600;900&display=swap&text=1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%20%21%22%23%24%25%26%27" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}