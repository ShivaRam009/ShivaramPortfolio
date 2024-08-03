
import React from 'react';
import react from '../icons/React.png';
import next from '../icons/next.png';
import angular from '../icons/Angular.jpeg';
import node from '../icons/node.png';
import mongo from '../icons/mongodb.png';
import js from '../icons/JavaScript.png';
import ts from '../icons/TypeScript.png';
import git from '../icons/git.png';
import cpp from '../icons/CPP.png';
import java from '../icons/Java.png';
import './Skills.css';



export const Skills = () => {

  const skills = [
    { name: 'React', icon: react },
    { name: 'Next.js', icon: next }, 
    { name: 'Angular', icon: angular },
    { name: 'Node.js', icon: node },
    { name: 'MongoDB', icon: mongo },
    { name: 'Git', icon: git },
    { name: 'JavaScript', icon: js },
    { name: 'TypeScript', icon: ts }, 
    { name: 'C++', icon: cpp }, 
    { name: 'Java', icon: java},
  ];

  return (
    <div className="skills-section" id="skills">
      <h2 className="text-4xl font-bold text-center my-10">Skills</h2>
      <p className="text-xl text-center mb-10">Here are some of the technologies and tools I am proficient in:</p>
      
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


