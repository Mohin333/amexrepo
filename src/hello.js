import React from "react";
import styles from "./hello.module.css";

function Weeknd() {
    return (
        <div className={styles.songs}>
            <h1> Welcome to The Weeknd Fan Page</h1>
            <div className={styles.music}>
                <p className={styles.hills}>
                    The Weeknd, born Abel Tesfaye, is a Canadian singer, songwriter, and record producer known for his
                    distinctive voice and genre-blending music that incorporates R&B, pop, and electronic influences.
                </p>
                <p>
                    His breakthrough mixtapes, including "House of Balloons," introduced fans to his dark, atmospheric sound.
                    He later gained worldwide fame with hit albums like "Beauty Behind the Madness," featuring chart-topping
                    singles such as "Can't Feel My Face" and "The Hills."
                </p>
                <p className={styles.hills1}>
                    "Starboy," one of his most iconic albums, showcases his signature style with tracks like "Starboy" and "I Feel It Coming."
                    His album "After Hours" further cemented his legacy, delivering global hits like "Blinding Lights" and "Save Your Tears."
                </p>
                <p>
                    In 2022, The Weeknd released "Dawn FM," a concept album that takes listeners on a journey through haunting melodies
                    and introspective lyrics, featuring standout tracks like "Sacrifice" and "Out of Time."
                </p>
            </div>
        </div>
    );
}

export default  Weeknd;