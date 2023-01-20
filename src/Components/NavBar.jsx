import Logo from "../Images/main-logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="top_nav">
        <div className="logo">
          <img src={Logo} className="main_logo_img" /> Personarise
        </div>
        <ul>
          <li className="top_nav_item">Who we are</li>
          <li className="top_nav_item">what we do</li>
          <li className="top_nav_item">Contact</li>
        </ul>
        <div className="nav_btn_div">
          <button className="nav-btn btn-1">Watch a demo</button>
          <button className="nav-btn btn-2">Sign up</button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
