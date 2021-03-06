import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
// import Search from "../components/Search";

class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");

    }


    render() {
        const isLoggedIn = this.props.auth.isAuthenticated;
        const userName = this.props.auth.user.name;
        const admin = "admin";
        // let userMarketId = 
        let adminLoggedIn = false;
        if (isLoggedIn && userName === admin) {
            adminLoggedIn = true;
        } else {
            adminLoggedIn = false;
        }
        console.log(userName)
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Green Street</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className={window.location.pathname === "/" ? "active" : ""}>
                        <Link className="nav-link" to="/">Home </Link>
                    </li> */}
                        <li className={window.location.pathname === "/about" ? "active" : ""}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        {/* <li className={window.location.pathname === "/about" ? "active" : ""} >
                            <Link className="nav-link" to={"/markets/" + userMarketId}>My Market</Link>
                        </li> */}


                        <li>
                            <Link className={"nav-link " + (isLoggedIn ? '' : 'disabled dis-link')} to="/newmarket">NewMarket</Link>
                        </li>
                        <li>
                            <Link className={"nav-link " + (isLoggedIn ? '' : 'disabled dis-link')} to="/admin/messages" style={{ display: adminLoggedIn ? "block" : "none" }}>Admin Messages</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav">


                        <li className={window.location.pathname === "/register" ? "active" : ""} style={{ display: isLoggedIn ? "none" : "block" }}>
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li style={{ display: isLoggedIn ? "block" : "none" }} className="userName">[ &nbsp;{userName}&nbsp; ]
                        </li>
                        <li className={window.location.pathname === "/" ? "active" : ""} style={{ display: isLoggedIn ? "block" : "none" }} >
                            <Link className="nav-link" to="/" onClick={this.onLogoutClick}>Logout</Link>
                        </li>
                        <li className={window.location.pathname === "/login" ? "active" : ""} style={{ display: isLoggedIn ? "none" : "block" }}>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>

                </div>
            </nav>

        )
    }
}


Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(Navbar));


// export default Navbar;
