import styles from "./Loader.module.css";

import { join } from "../../../functions";


export default function Loader({ isLoading }) {
    return (
        <>
            <div className={styles.mosaicLoader} style={{ "opacity": isLoading ? 1 : 0 }}>
                <div className={join(styles.cell, styles.d_0)} />
                <div className={join(styles.cell, styles.d_1)} />
                <div className={join(styles.cell, styles.d_2)} />
                <div className={join(styles.cell, styles.d_3)} />
                <div className={join(styles.cell, styles.d_1)} />
                <div className={join(styles.cell, styles.d_2)} />
                <div className={join(styles.cell, styles.d_3)} />
                <div className={join(styles.cell, styles.d_4)} />
                <div className={join(styles.cell, styles.d_2)} />
                <div className={join(styles.cell, styles.d_3)} />
                <div className={join(styles.cell, styles.d_4)} />
                <div className={join(styles.cell, styles.d_5)} />
                <div className={join(styles.cell, styles.d_3)} />
                <div className={join(styles.cell, styles.d_4)} />
                <div className={join(styles.cell, styles.d_5)} />
                <div className={join(styles.cell, styles.d_6)} />
            </div>
        </>
    );
}