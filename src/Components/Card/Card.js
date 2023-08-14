import "./Card.css";

export const Card = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="icon" alt="icon">
        <i className={icon}></i>
      </div>

      <h2 className="title">{title}</h2>
    </div>
  );
};

export default Card;
