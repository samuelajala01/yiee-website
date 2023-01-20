import Card from "./card";
import TinyCard from "./TinyCard";
import TestimonialCard from "./TestimonialCard";
import NavBar from "./NavBar";
import molecule from "../Images/molecule.png";
import usersImg from "../Images/users-logo.png";
import group from "../Images/Group 55829.png";
import InfoCard from "./InfoCard";
import womanimg from "../Images/woman-img.png";
import numbers from "../Images/numbers-img.png";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section className="hero_section">
        <h1 className="hero_header">Choose a career in tech in minutes</h1>
        <p className="hero_description">
          Personarise is your tech talent development platform for eliminating
          time consuming activities while making decision on a tech career you
          will succeed in — and so much more.
        </p>
        <p className="users_img_div">
          <img src={usersImg} /> <span>3k users</span>
        </p>
        <div className="hero_input_container">
          <input type="text" placeholder="type your email address" />
          <button className="hero_input_btn">Get Started</button>
        </div>
      </section>
      <section className="myp_section">
        <div className="myp_wrapper">
          <div className="myp_text_div">
            <h2 className="myp_header">
              Map your passion to a tech career in minutes
            </h2>
            <p className="myp_description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              consequuntur corrupti ut. Quibusdam ullam deleniti, accusantium
              voluptate ad nisi suscipit provident! Laudantium explicabo, nobis
              molestiae nemo eius sed commodi laboriosam
            </p>
          </div>
          <div className="molecule_div">
            <img src={molecule} className="molecule_img" />
          </div>
        </div>
        <div className="card_wrapper">
          <Card
            title="SIGN UP/LOGIN"
            text="Explore the unique approach use to help you
           maximise your career by clivking - Get started"
          />
          <Card
            title="COMMUNICATE YOUR PASSION"
            text="Explore the unique approach use to help you
           maximise your career by clivking - Get started"
          />
          <Card
            title="BECOME WORLD-CLASS"
            text="Explore the unique approach use to help you
           maximise your career by clivking - Get started"
          />
        </div>
      </section>

      <section className="stc_section">
        <h2 className="stc_header">Switch to a career in tech with ease</h2>
        <p className="stc_description">
          Personarise makes it easier for you to switch to a highly demanded
          tech career with ease and become a world class talent in any career of
          choice
        </p>
        <nav className="stc_nav">
          <ul>
            <li className="stc_nav_item">Sales</li>
            <li className="stc_nav_item">Marketing</li>
            <li className="stc_nav_item">Customer success</li>
            <li className="stc_nav_item">Recruiting</li>
            <li className="stc_nav_item">Information Technology</li>
            <li className="stc_nav_item">Education</li>
          </ul>
        </nav>

        <div className="stc_wrapper">
          <div className="tinycard_wrapper">
            <TinyCard
              title="LEARN ABOUT SALES"
              text="Personarise makes it easier for you
               to switch to a highly demanded"
            />
            <TinyCard
              title="LEARN ABOUT SALES"
              text="Personarise makes it easier for you
               to switch to a highly demanded"
            />
          </div>
          <div>
            <img src={group} />
          </div>
          <div className="tinycard_wrapper">
            <TinyCard
              title="LEARN ABOUT SALES"
              text="Personarise makes it easier for you
               to switch to a highly demanded"
            />
            <TinyCard
              title="LEARN ABOUT SALES"
              text="Personarise makes it easier for you
               to switch to a highly demanded"
            />
          </div>
        </div>

        <InfoCard
          className="infocard"
          img={womanimg}
          title="Become a world-class individual in your field"
          text="Personarise makes it easier for you to switch to a highly demanded
        tech career Personarise makes it easier for you to switch"
        />

        <InfoCard
          img={numbers}
          className="infocard infocard_reverse"
          title="Hit your numbers"
          text="Personarise makes it easier for you to switch to a highly demanded
          tech career Personarise makes it easier for you to switch"
        />
      </section>
      <section>
        <div className="stc_box">
          <h2 className="stc_box_header">
            Switch to a a career in tech with ease
          </h2>
          <p className="stc_box_text">
            Personarise makes it easier for you to switch to a highly demanded
          </p>
          <button className="stc_box_btn">Get Started</button>
        </div>
      </section>
      <section className="testimonials_section">
        <h1 className="t_header">Testimonials</h1>
        <p className="t_tagname">
          Personarise makes it easier for you to switch to a highly demanded
          tech career
        </p>
        <div className="t_card_wrapper">
          <TestimonialCard
            text="Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Fuga, odit maiores! Asperiores amet ea
             sit excepturi voluptatum libero deleniti unde tempore rerum,
              earum quae"
          />

          <TestimonialCard
            text="Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Fuga, odit maiores! Asperiores amet ea
             sit excepturi voluptatum libero deleniti unde tempore rerum,
              earum quae"
          />
          <TestimonialCard
            text="Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Fuga, odit maiores! Asperiores amet ea
             sit excepturi voluptatum libero deleniti unde tempore rerum,
              earum quae"
          />
          <TestimonialCard
            text="Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Fuga, odit maiores! Asperiores amet ea
             sit excepturi voluptatum libero deleniti unde tempore rerum,
              earum quae"
          />
        </div>
        <div className="ctt_box">
          <div className="ctt_box_1">
            <h2>Curious to try? Get started now</h2>
            <p>
              Personarise makes it easier for you to switch to a highly demanded
              tech to switch
            </p>
          </div>
          <div className="ctt_box_2">
            <form>
              <textarea placeholder="example@gmail.com" />
              <button
                type="submit"
                className="
              ctt_btn"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
