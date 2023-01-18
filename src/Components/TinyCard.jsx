const TinyCard = (props) => {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default TinyCard;
