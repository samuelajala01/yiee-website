const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">Personarise</div>
        <ul>
          <li>Home</li>
          <li>what we do</li>
          <li>about me</li>
        </ul>
        <div className="btn-div">
          <button className="nav-btn">Sign up</button>
          <button className="nav-btn">Log in </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
