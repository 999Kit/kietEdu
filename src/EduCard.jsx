const EduCard = ({ edu }) => {
  return (
    <div className="eduCard">
      <div>
        <p>{edu.Year}</p>
      </div>

      <div>
        <img
          src={
            edu.Poster !== "N/A" ? edu.Poster : "http://via.placeholder.com/400"
          }
          alt={edu.Title}
        />
      </div>

      <div>
        <h3>{edu.Title}</h3>
      </div>
    </div>
  );
};

export default EduCard;
