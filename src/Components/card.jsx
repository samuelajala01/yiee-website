const Card = (props) => {
  return (
    <>
      <div className="card">
        <h3 className="card_header">{props.title}</h3>
        <p className="card_description">{props.text}</p>
      </div>
    </>
  );
};

export default Card;
