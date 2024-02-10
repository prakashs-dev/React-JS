import picture from "./images/picture.jpg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="head-card">
        <img src={picture} alt="My Picture" />
        <h1>Prakash S</h1>
      </div>
      <div className="contact-details">
        <b>prakashs@gmail.com</b>
        <span>6987456321</span>
      </div>
    </div>
  );
};
