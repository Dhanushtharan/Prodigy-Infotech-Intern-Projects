
const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" className="skill-icon" />
          <h3 className="skill-title">HTML & CSS</h3>
          <p className="skill-description">Proficient in creating structured web pages with semantic HTML5 & CSS.</p>
        </div>
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className="skill-icon" />
          <h3 className="skill-title">JavaScript</h3>
          <p className="skill-description">Skilled in writing interactive and dynamic web applications with JavaScript ES6+.</p>
        </div>
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="skill-icon" />
          <h3 className="skill-title">React</h3>
          <p className="skill-description">Experienced in building single-page applications with React.js and managing state with hooks.</p>
        </div>
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Boot" className="skill-icon" />
          <h3 className="skill-title">Spring Boot</h3>
          <p className="skill-description">Knowledgeable in developing backend applications with Spring Boot for scalable and robust solutions.</p>
        </div>
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="SQL" className="skill-icon" />
          <h3 className="skill-title">SQL</h3>
          <p className="skill-description">Experienced in database management and writing complex queries using SQL.</p>
        </div>
        <div className="skill-card">
          <img src="https://img.icons8.com/color/48/000000/power-bi.png" alt="Power BI" className="skill-icon" />
          <h3 className="skill-title">Power BI</h3>
          <p className="skill-description">Intermediate experience in data visualization and reporting using Power BI to derive actionable insights.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
