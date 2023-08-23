import { Component } from "react";
import "./FundadorStyles.css";
import soccerVisits from "../assets/soccerVisits.jpg";
import kidsVisits from "../assets/kidsVisits.jpg";

class FundadorData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="funda-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="imagef">
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default FundadorData;
