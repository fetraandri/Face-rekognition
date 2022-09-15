import React from "react";
import AntInput from "../../components/input";
import { Button } from "antd";
import './style.scss';
import { Link } from "react-router-dom";

export default function Login() {
    return(
        <div className="loginContainer">
            <div className="login">
                <h1>Se connecter</h1>
                <AntInput label="Votre nom" name="name"></AntInput>
                <AntInput label="Mot de passe" name="password"></AntInput>
                
                <Link to="/home">
                    <Button type="primary" htmlType="submit">
                        Terminer
                    </Button>
                </Link>
            </div>
        </div>
    )
}