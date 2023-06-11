import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {ReactComponent as GitarLogo} from '../../assets/crown.svg';

import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="nav">
            <div> <Link to="/">
                    <GitarLogo className="logo"/>
                </Link></div>
                <h1>Bounce Gitar</h1>
               <ul>
               <Link className="nav-link" to="/Ekipman">
                   Ekipman
                    </Link>
                    <Link className="nav-link" to="/Sepet">
                        Sepet
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        Giriş yap
                    </Link>
               </ul>
            </nav>
                
            <Outlet />
        </Fragment>
    );
}

export default Navigation;