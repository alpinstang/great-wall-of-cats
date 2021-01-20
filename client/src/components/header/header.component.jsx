import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span className="title">GREAT WALL OF CATS</span>
        <span className="subtitle"></span>
      </Link>

      <div className="options">
        <a href="http://www.github.com/alpinstang/yarrt" className="option">
          GITHUB
        </a>
        <Link to="/store" className="option">
          STORE
        </Link>
        <Link className="option" to="/profile">
          PROFILE
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Header);
