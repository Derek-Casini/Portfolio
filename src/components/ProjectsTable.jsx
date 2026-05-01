import React from 'react';
import { VscDebugStart, VscGithub } from "react-icons/vsc";

function ProjectsTable() {
    const projects = [
        {
            name: "Car Crash Detection (Senior Capstone)",
            language: "Python, OpenCV",
            description: "Uses computer vision and sensor data to detect car crashes in real time. Logs incidents and triggers alerts for emergency response.",
            demo: "https://drive.google.com/file/d/1sVsHUD8HLBMBFYfRW-ZVvtkXg1HTShpW/view",
            code: "https://github.com/StillwellJ/Count-How-Many"
        },
        {
            name: "Mobile Treasure Hunt",
            language: "Kotlin",
            description: "An android app that takes users on a treasure hunt around to key destinations around Corvallis.",
            demo: "https://www.youtube.com/watch?v=JOAcNuZWeJQ",
            code: "https://github.com/Derek-Casini/Mobile-Treasure-Hunt"
        },
        {
            name: "Pool Game CV Model (In Progress)",
            language: "Python, OpenCV",
            description: "Analyzes pool game footage to track balls, calculate scores, and suggest optimal shots each turn using computer vision.",
            demo: "#",
            code: "https://github.com/Derek-Casini/Pool-Game-Analysis"
        },
        {
            name: "MERN Exercise Tracker",
            language: "JavaScript, HTML, CSS, JSON",
            description: "Full stack MERN app to track exercises. Supports creating, editing, and viewing workout logs. Backend spins down after inactivity, so initial load may take a few seconds.",
            demo: "https://derek-casini.github.io/Exercise_Tracker/#/",
            code: "https://github.com/Derek-Casini/Full-Stack-MERN-Exercise-Tracker"
        },
        {
            name: "Hash Map Implementation",
            language: "Python",
            description: "Custom hash map using open addressing to handle collisions, supporting insert, delete, and lookup operations.",
            demo: "https://www.youtube.com/watch?v=NMXpLVjcm7g",
            code: "https://github.com/Derek-Casini/Hash-Map"
        }
    ];

    return (
        <div className="projects-table-container">
            <table className="projects-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="language">Language(s)</th>
                        <th>Description</th>
                        <th>Demo</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((proj, index) => (
                        <tr key={index}>
                            <td>{proj.name}</td>
                            <td className="language">{proj.language}</td>
                            <td>{proj.description}</td>
                            <td>
                                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                                    <VscDebugStart id="video-button"/>
                                </a>
                            </td>
                            <td>
                                <a href={proj.code} target="_blank" rel="noopener noreferrer">
                                    <VscGithub id="code-button"/>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectsTable;