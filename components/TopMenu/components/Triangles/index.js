import Loader from "../Loader";
import styles from "./Triangle.module.css";

import { join } from "../../../functions";


export default function Triangles({ isLoading, openMenu, menuOption, windowDimensions }) {
    return (
        <>
            <div className={join(styles.triangle_top)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": openMenu ? `${-Math.atan(100 / windowDimensions.width)}rad` : "0deg",
                "height": isLoading ? "100vh" : openMenu ? menuOption.height : "70px",
                "zIndex": isLoading ? "999" : "3",
            }}>
                <Loader isLoading={isLoading} />
            </div>
            <div className={join(styles.triangle_right)} style={{
                "backgroundColor": isLoading ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.3)",
                "--rotate-angle": isLoading ? "0deg" : `${Math.atan(120 / windowDimensions.width)}rad`,
                "height": isLoading ? "100vh" : openMenu ? `${menuOption.height}` : "0px",
                "zIndex": isLoading ? "998" : "2",
            }} />
        </>
    );
}