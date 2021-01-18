import React from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div>Profile Page</div>;
  }
}

const mapStateToProps = (state) => ({ cats: state.cats });

export default connect(mapStateToProps)(Profile);
