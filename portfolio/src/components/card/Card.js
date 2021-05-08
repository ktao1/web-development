import { CardItems } from "./CardItems";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      {CardItems.map((item, index) => {
        return (
          <div className="card">
            <div
              className="front"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            >
              <h1 className="title">{item.title}</h1>
            </div>
            <div className="back">
              <h1 className="discription">{item.discription}</h1>
              <Link to={item.url} className="explore">
                Explore
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
