import React from 'react';
import { Link } from 'react-router-dom';
  
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="http://www.google.com" className="navbar-brand"> Google </a>
                    </div>

                    <ul className="navbar-nav">
                        <li> <Link className="nav-link" to="/welcome"> Home </Link> </li>
                        <li> <Link className="nav-link" to="/todos"> Todos </Link> </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li> <Link className="nav-link" to="/login"> Login </Link> </li>
                        <li> <Link className="nav-link" to="/logout"> Logout </Link> </li>
                    </ul>

                </nav>
            </header>


        );        
    }

};