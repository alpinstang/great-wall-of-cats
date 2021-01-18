import React from "react";
import "./profile.styles.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div>Profile Page</div>;
  }
}

mapStateToProps = (state) => ({ cats: state.cats });

export default connect(mapStateToProps)(Profile);
