import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías agregar la lógica de autenticación
        navigate('/welcome');  // Redirige a la página de bienvenida
    }

    return (
        <div className="hold-transition auth-page">
            <div className="auth-box">
                <div className="auth-logo">
                    <Link to="#"><b>Login</b> :D</Link>
                </div>
                <div className="card">
                    <div className="card-body auth-card-body">
                        <p className="auth-box-msg">Completa los campos para iniciar sesión</p>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Recuérdame
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar</button>
                                </div>
                            </div>
                        </form>
                        <div className="social-auth-links text-center mb-3">
                        </div>
                        <p className="mb-0">
                            <Link to="/register" className="text-center">Nuevo registro</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

