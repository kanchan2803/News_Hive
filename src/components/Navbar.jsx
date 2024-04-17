const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid" >
        <div className="navbar-brand h-100 p-3 d-flex flex-column" href="#">
          <img src="./public/images/klipartz.com.png" className="img-fluid h-75 aign-center" style={{height:"100px" , width:"70px"}} alt="logo" />
          <span className="badge fs-4 "> News Hive</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <div className="nav-link" onClick={()=>setCategory("world")}>
                World
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("nation")}>
                Nation
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("health")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("technology")}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("entertainment")}>
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=>setCategory("health")}>
                Health
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
