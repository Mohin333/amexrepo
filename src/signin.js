import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Signin.module.css';


function MylogIn() {
    const user = {
        EmailId: '',
        Password: '',
        ConfirmPassword: ''
    };
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(user);
    const [errors, setErrors] = useState(user);
    
    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value.trim();
        setInputs((values) => ({ ...values, [name]: value }));
        setErrors((values) => ({ ...values, [name]: value === '' ? `! Enter your ${name}` : '' }));  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const input_fields = Object.keys(user);
        const canSubmit = input_fields.every((input) => inputs[input] !== '');
        
        if (canSubmit) {
            if (inputs.Password !== inputs.ConfirmPassword) {
                setErrors((values) => ({ ...values, ConfirmPassword: 'Passwords do not match' }));
                return;
            }
            
            const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            const valid = pattern.test(inputs.EmailId);
            
            if (valid) {
               fetch(`http://localhost:8083/amazonUser/login?email=${inputs.EmailId}&password=${inputs.Password}&confirmpassword=${inputs.ConfirmPassword}`)
                    .then((response) => response.text())
                    .then((response) => {
                        if (response) {
                          navigate('/helo', { state: { 'emailId': inputs.EmailId } });
                        } else {
                            setErrors((values) => ({ ...values, Password: 'Incorrect Email ID or Password' }));
                        }
                    });
            } else {
                setErrors((values) => ({ ...values, EmailId: 'Enter a valid Email ID' }));
            }
        } else {
            input_fields.forEach((input) => {
                setErrors((values) => ({ ...values, [input]: inputs[input] === '' ? `! Enter your ${input}` : '' }));
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputs}>
                <label htmlFor="EmailId">Email ID</label>
                <input type="text" id="EmailId" className={errors.EmailId !== '' ? styles.inputsWarning : ''} value={inputs.EmailId} onChange={handleChange}/>
                <span className={styles.warning}>{errors.EmailId}</span>
            </div>
            <div className={styles.inputs}>
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" className={errors.Password !== '' ? styles.inputsWarning : ''} value={inputs.Password} onChange={handleChange}/>
                <span className={styles.warning}>{errors.Password}</span>
            </div>
            <div className={styles.inputs}>
                <label htmlFor="ConfirmPassword">Confirm Password</label>
                <input type="password" id="ConfirmPassword" className={errors.ConfirmPassword !== '' ? styles.inputsWarning : ''} value={inputs.ConfirmPassword} onChange={handleChange}/>
                <span className={styles.warning}>{errors.ConfirmPassword}</span>
            </div>
            <br></br><div><button type="submit" className={styles.button}>Sign In</button></div>
            <p>New User? <Link to="/up">Sign Up</Link></p>
        </form>
    );
}

export default MylogIn;
