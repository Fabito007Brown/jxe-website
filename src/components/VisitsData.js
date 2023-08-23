import { Component } from "react";
import "./VisitsStyles.css";
import soccerVisits from "../assets/soccerVisits.jpg";
import kidsVisits from "../assets/kidsVisits.jpg";

class VisitsData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="visit-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default VisitsData;
