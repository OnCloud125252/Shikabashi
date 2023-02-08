import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/logo_noName.svg" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600;900&display=swap&text=1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%20%21%22%23%24%25%26%27" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}