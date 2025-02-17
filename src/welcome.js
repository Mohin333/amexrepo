import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './welcome.module.css';

function Welcome() {
    const location = useLocation();
    const navigate = useNavigate();

    const FullName = location.state?.inputs?.FullName || '';
    const EmailId = location.state?.inputs?.EmailId || '';

    return (
        <div className={styles.body}>
            <section id={styles.confirmationPage}>
                <h2>Welcome {FullName}!</h2>
                <p>Your account has been successfully created.</p>
                <p>A verification email has been sent to <strong>{EmailId}</strong>.</p>
                <p>Please check your inbox and follow the instructions to verify your account.</p>
                <button className={styles.button} onClick={() => navigate("/")}>Go to Sign In</button>
            </section>
        </div>
    );
}

export default Welcome;
