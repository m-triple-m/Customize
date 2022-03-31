import "./homepage.css";

const Homepage = ({ data }) => {
  const renderIcons = () => {
    return data.map((obj) => (
      <div key={obj.title} className="col-md-2 col-lg-2 col-xl-2 col-xxl-1">
        <div className="logo-card" onClick={(e) => sendTo(obj.link)}>
          <img
            className="logo-img-top"
            src={"/images/" + obj.icon}
            alt={obj.title}
          />
          <div className="card-body logo-card-body">
            {/* <p className="link-title">{obj.title}</p> */}
          </div>
        </div>
      </div>
    ));
  };

  const sendTo = (url) => {
    window.location = url;
  };

  return (
    <div className="home-back">
      <div className="container-fluid">
        <div className="row">{renderIcons()}</div>
      </div>
    </div>
  );
};

export default Homepage;
