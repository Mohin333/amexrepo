import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Signin.module.css';
function SignUp() {
    const user = {
        EmailId: '',
        FullName: '',
        Password: ''
    };
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(user);
    const [errors, setErrors] = useState(user);
   
    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs((values) => ({ ...values, [id]: value.trim() }));
        setErrors((values) => ({ ...values, [id]: value.trim() === '' ? `! Enter your ${id}` : '' }));
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const input_fields = Object.keys(user);
        const canSubmit = input_fields.every((key) => inputs[key] !== '');
    
        if (canSubmit) {
            const data = {
                email: inputs.EmailId,
                fullName: inputs.FullName,
                password: inputs.Password
            };
    
            fetch('http://localhost:8083/amazonUser/addUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(() => {
                alert('User added Successfully');
                navigate('/welcome', { state: { inputs } }); 
            })
            .catch((err) => console.log(err));
        } else {
            input_fields.forEach((input) => {
                setErrors((values) => ({ ...values, [input]: inputs[input] === '' ? `! Enter your ${input}` : '' }));
            });
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 style={{ textAlign: 'center' }}>Create Account</h2>
            <div className={styles.inputs}>
                <label htmlFor="EmailId">Email ID</label>
                <input type="email" id="EmailId" className={errors.EmailId !== '' ? styles.inputsWarning : ''} value={inputs.EmailId} onChange={handleChange} placeholder="Email ID" />
                <span className={styles.warning}>{errors.EmailId}</span>
            </div>
            <div className={styles.inputs}>
                <label htmlFor="FullName">Your Name</label>
                <input type="text" id="FullName" className={errors.FullName !== '' ? styles.inputsWarning : ''} value={inputs.FullName} onChange={handleChange} placeholder="First and Last Name" />
                <span className={styles.warning}>{errors.FullName}</span>
            </div>
            <div className={styles.inputs}>
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" className={errors.Password !== '' ? styles.inputsWarning : ''} value={inputs.Password} onChange={handleChange} placeholder="At least 6 characters" />
                <span className={styles.warning}>{errors.Password}</span>
            </div>
            <button type="submit" className={styles.button}>Sign Up</button>
            <p>Already have an account? <Link to="/">Sign In</Link></p>
        </form>
    );
}

export default SignUp;
