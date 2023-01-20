const TinyCard = (props) => {
  return (
    <>
      <div className="tinycard">
        <h5 className="tinycard_header">{props.title}</h5>
        <p className="tinycard_text">{props.text}</p>
      </div>
    </>
  );
};

export default TinyCard;
