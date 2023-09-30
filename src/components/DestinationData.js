import { Component } from "react";
import Image1 from "../assets/VeniceImage1.jpg";
import Image2 from "../assets/VeniceImage2.jpg";
import Image3 from "../assets/QueensTown2.jpg";
import Image4 from "../assets/QueensTown1.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img className="image-first" alt="img" src={this.props.img1} />
          <img className="image-second" alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
