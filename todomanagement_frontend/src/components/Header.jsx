import React from 'react';
import { Link } from 'react-router-dom';
  
export default class Header extends React.Component {
    handleLogOut() {
        window.sessionStorage.removeItem("Username");
        window.location.href='/logout';
    }

    render() {
        const isLoggedIn = window.sessionStorage.getItem("Username") ? true : false;

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.google.com" className="navbar-brand"> Google </a>
                    </div>

                    <ul className="navbar-nav">
                        {isLoggedIn ? <li> <Link className="nav-link" to="/todos"> Todos </Link> </li> : null}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn ? <li> <Link className="nav-link" to="/login"> Login </Link> </li> : null}
                        {isLoggedIn ? <li> <Link className="nav-link" onClick={this.handleLogOut} to="/logout"> Logout </Link> </li> : null}
                    </ul>
                </nav>
            </header>
        );        
    }

};