const InfoCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="infocard_img_wrapper">
          <img src={props.img} className="woman_img" />
        </div>
        <div className="infocard_text_wrapper">
          <h2 className="infocard_header">{props.title}</h2>
          <p className="infocard_text">{props.text}</p>
          <span className="learn_more">Learn More</span>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
