import Card from "./card";
import TinyCard from "./TinyCard";
import TestimonialCard from "./TestimonialCard";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section>
        <h1>Choose a career in tech in minutes</h1>
        <p>
          Personarise is your tech talent development platform for eliminating
          time consuming activities while making decision on a tech career you
          will succeed in — and so much more.
        </p>
        <p>
          Images <span>3k users</span>
        </p>
        <div className="hero_input">
          <input type="text" placeholder="type your email address" />
        </div>
      </section>
      <section>
        <div>
          <h2>Map your passion to a tech career in minutes</h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          consequuntur corrupti ut. Quibusdam ullam deleniti, accusantium
          voluptate ad nisi suscipit provident! Laudantium explicabo, nobis
          molestiae nemo eius sed commodi laboriosam!
        </div>
        <div>Images</div>
      </section>
      <section className="card_section">
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
      </section>
      <section>
        <h2>Switch to a career in tech with ease</h2>
        <p>
          Personarise makes it easier for you to switch to a highly demanded
          tech career with ease and become a world class talent in any career of
          choice
        </p>
        <div className="nav_div">
          <nav>
            <ul>
              <li>Sales</li>
              <li>Marketing</li>
              <li>Customer success</li>
              <li>Recruiting</li>
              <li>Information Technology</li>
              <li>Education</li>
            </ul>
          </nav>
          <div>
            <div>
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
            <div>Images</div>
            <div>
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
        </div>
        <div>
          <div>Image</div>
          <div>
            <h3>Become a world class individual in your field</h3>
            <p>
              Personarise makes it easier for you to switch to a highly demanded
              tech career
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div>
          <div>
            <h3>Hit your numbers</h3>
            <p>
              Personarise makes it easier for you to switch to a highly demanded
              tech career
            </p>
            <span>Learn More</span>
          </div>
          <div>Image</div>
        </div>
      </section>
      <section>
        <div>
          <h2>Swich to a acreer in tech with ease</h2>
          <p>
            Personarise makes it easier for you to switch to a highly demanded
          </p>
          <button>Get Started</button>
        </div>
      </section>
      <section className="testimonials_section">
        <h3>
          Personarise makes it easier for you to switch to a highly demanded
          tech career
        </h3>
        <div className="testimonial_card_container">
          <TestimonialCard
            text="Personarise makes it easier for you to switch to a highly demanded
          tech to switch to a highly demanded
          tech career"
          />
          <TestimonialCard
            text="Personarise makes it easier for you to switch to a highly demanded
          tech to switch to a highly demanded
          tech career"
          />
          <TestimonialCard
            text="Personarise makes it easier for you to switch to a highly demanded
          tech to switch to a highly demanded
          tech career"
          />
          <TestimonialCard
            text="Personarise makes it easier for you to switch to a highly demanded
          tech to switch to a highly demanded
          tech career"
          />
        </div>
        <div>
          <div>
            <h2>Curious to try? Get started now</h2>
            <p>
              Personarise makes it easier for you to switch to a highly demanded
              tech to switch
            </p>
          </div>
          <div>
            <form>
              <textarea placeholder="example@gmail.com" />
              <button type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
