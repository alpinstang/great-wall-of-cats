import React from "react";
import "./cat-wall.styles.scss";
import { connect } from "react-redux";

const MyCats = ({ cats }) => {
  <div className="my-cats">
    {cats
      ? cats.map((cat) => {
          return <CatImage key={cat.id} cat={cat} />;
        })
      : "You have no cats! Add some!"}
  </div>;
};

const mapStateToProps = (state) => ({
  cats: state.cats,
});

export default connect(mapStateToProps)(MyCats);
