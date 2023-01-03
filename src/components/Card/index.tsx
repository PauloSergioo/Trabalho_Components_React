import "./styles.css";
import carImg from "../../assets/car.png";

export default function Card() {
  return (
    <div className="dsc-card-container">
      <div className="dsc-card">
        <img src={carImg} alt="Computer" />
        <h4>Lorem ipsum dolor</h4>
      </div>
    </div>
  );
}
