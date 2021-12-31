import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthenticationService } from '../services/AuthenticationService';
  
class MenuBar extends React.Component {
    render() {
        const isLoggedIn = AuthenticationService.isLoggedIn();

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
                        {isLoggedIn ? <li> <Link className="nav-link" onClick={() => AuthenticationService.logout()} to="/logout"> Logout </Link> </li> : null}
                    </ul>
                </nav>
            </header>
        );        
    }
};

export default withRouter(MenuBar);