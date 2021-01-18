import React from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { storage } from "../../firebase/firebase.utils";

import { Image } from "react-bootstrap/Image";

class Profile extends React.Component {
  componentDidMount() {
    console.log("storage");
    console.log(storage);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="profile-body">
        <div className="profile">
          <div className="image">
            <Image src="https://placehold.it/500" roundedCircle />
          </div>
          <div className="bio">
            <h2>{currentUser ? currentUser.displayName : "Loading..."}</h2>
            <p>Nothing is here...</p>
          </div>
        </div>

        <div className="wrapper">
          <div className="box">
            <img
              className="image"
              src="https://placekitten.com/500"
              alt="cat"
            />
          </div>
          <div className="box">
            <img
              className="image"
              src="https://placekitten.com/500"
              alt="cat"
            />
          </div>
          <div className="box">
            <img
              className="image"
              src="https://placekitten.com/500"
              alt="cat"
            />
          </div>
          <div className="box">
            <img
              className="image"
              src="https://placekitten.com/500"
              alt="cat"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Profile);
