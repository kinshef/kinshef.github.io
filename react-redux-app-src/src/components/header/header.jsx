import React from 'react';
import style from './header.module.css';
import photoUser from '../../assets/img/logo192.png'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader";

let Header = ({isFetching, isAuth, login, AuthLogout}) => {
    return (
        <header>
            <div className="wrap">
                <div className={style.content}>
                    <a href='/' className={style.logo}>
                        <img  alt='' src={photoUser}/>
                    </a>
                    <div className={style.title}>test: react/redux</div>
                    {isFetching
                        ? <Preloader class={style.preloader}/>
                        : isAuth
                            ? <div className={style.authWrap}>
                                <button className={style.btnLogout} onClick={AuthLogout}>LogOut</button>
                                <div className={style.login}>{login}</div>
                            </div>
                            : <NavLink className={style.NavLogin} to='/login'>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;