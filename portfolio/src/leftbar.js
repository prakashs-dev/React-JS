const skillData = {
  language: [, "C++", "Java", "Python", "JavaScript"],
  database: ["MySql", "Mongo DB", "Oracle"],
  achivements: ["30days Google Cloud", "50 Days Leetcode Badge"],
  freamworks: ["React", "Spring Boot", "Anglur"],
};

const SubSection = ({ title, points }) => {
  return (
    <div className="subsection">
      <p className="title">{title}</p>
      <ul>
        {points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const education = [
  {
    institution: "GRT IET",
    course: "BE",
    branch: "Computer Science and Engineering",
    year: "2017 - 2021",
    grade: "7.45",
  },
  {
    institution: "Govt Boys Hr, Sec, School",
    course: "HSC",
    branch: "Biology",
    year: "2015 - 2027",
    grade: "57%",
  },
  {
    institution: "TKV Matric Hr, Sec, School",
    course: "SSLC",
    branch: "",
    year: "2010 - 2015",
    grade: "83%",
  },
];

export const LeftBar = () => {
  return (
    <div className="leftbar-container">
      <div className="education">
        <h2>Education</h2>
        {education.map((eduObj) => {
          return (
            <div className="edcation-card">
              <h3>{eduObj.institution}</h3>
              <span className="course">{eduObj.course}</span>
              {eduObj.branch ? <p>{eduObj.branch}</p> : null}
              <p>{eduObj.year}</p>
              <p>Grade : {eduObj.grade}</p>
            </div>
          );
        })}
      </div>
      <SubSection title="Language" points={skillData.language} />
      <SubSection title="DataBase" points={skillData.database} />
      <SubSection title="Framewo    rk" points={skillData.freamworks} />
      <SubSection title="Achivements" points={skillData.achivements} />
    </div>
  );
};
