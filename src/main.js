import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./main.module.css";

function MainPage() {
    const location = useLocation();
    const userEmail = location.state?.emailId;

    return (
        <div className={styles.container}>
            <h1> Hey {userEmail}! Welcome to Netflix Watch & Chill...</h1>
            <div className={styles.content}>
                <p>
                Netflix is an American subscription video-on-demand over-the-top streaming service.
                The service primarily distributes original and acquired films and television shows from various genres, 
                and it is available internationally in multiple languages.
                </p>
            </div>
        </div>
    );
}

export default MainPage;

