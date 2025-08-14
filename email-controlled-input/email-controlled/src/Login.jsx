import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email:${email}, Password:${password}`);
        setEmail("");
        setPassword("");
        history.push("/page");
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input value={email} onChange={handleEmailChange} id="email" type="email" />
            <label htmlFor="passw">Şifre:</label>
            <input value={password} onChange={handlePasswordChange} id="passw" type="password" />
            <button type="submit">Giriş</button>
        </form>
    )
}