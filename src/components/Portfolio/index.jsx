import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surfReport',
      description: 'MERN Stack',
      link: "https://github.com/Josepharo98",
      repo: "https://github.com/Josepharo98"
    },
    {
      name: 'pastelPuzzels',
      description: 'MERN Stack',
      link: "https://github.com/Josepharo98",
      repo: "https://github.com/Josepharo98"
    },
    {
      name: 'runBuddy',
      description: 'HTML/CSS',
      link: "https://github.com/Josepharo98",
      repo: "https://github.com/Josepharo98"
    },
    {
      name: 'ledWall',
      description: 'Node/IoT',
      link: "https://github.com/Josepharo98",
      repo: "https://github.com/Josepharo98"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/Josepharo98",
      repo: "https://github.com/Josepharo98"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
