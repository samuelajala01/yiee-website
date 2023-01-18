const TestimonialCard = (props) => {
  return (
    <>
      <div className="testimonial_card">
        <span>Images</span>
        <p>{props.text}</p>
        <div>
          <div>Image</div>
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
