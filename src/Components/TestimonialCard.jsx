import quotes from "../Images/quote-logo.png";
import circle from "../Images/circle.png";

const TestimonialCard = (props) => {
  return (
    <>
      <div className="t_card">
        <span>
          <img src={quotes} />
        </span>
        <p className="t_card_text">{props.text}</p>
        <div className="t_bottom_wrapper">
          <div>
            <img src={circle} />
          </div>
          <div>
            <h4>Jason Umon</h4>
            <p>CEO of Zeno World</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
