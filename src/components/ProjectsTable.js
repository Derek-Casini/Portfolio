import React from 'react';
import { VscDebugStart, VscGithub } from "react-icons/vsc";

function ProjectsTable(){
    return(
        <table className="projects-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Demo</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Recursive Stair Stepper Problem Solver
                    </td>
                    <td>
                        Uses recursion to solve the stair stepper problem. Written in C++.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=CBAGSYVloRY" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Recursive-Stair-Stepper-Problem-Solver" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Hunt The Wumpus
                    </td>
                    <td>
                        A game where the user moves around rooms to defeat the wumpus using their bow and arrow. Written in C++.
                    </td>
                    <td>
                    <a href="https://www.youtube.com/watch?v=c5bvdJeFmZE" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Hunt-The-Wumpus" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Integer Calculator
                    </td>
                    <td>
                    About
                    Asks the user for 10 signed decimal integers, then returns each number along with the sum and average. Written in Assembly.
                    </td>
                    <td>
                    <a href="https://www.youtube.com/watch?v=Jf5DD1MYL_0" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Integer-Calculator" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Random Integers
                    </td>
                    <td>
                        Generates random integers, then sorts and counts them. Written in Assembly.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=3yFlUTK6pvw" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Random-Integers" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Exercise Tracker
                    </td>
                    <td>
                        A full stack MERN app which tracks exercises completed.
                    </td>
                    <td>
                        <a href="https://derek-casini.github.io/Exercise_Tracker/#/" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Full-Stack-MERN-Exercise-Tracker" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Min Heap
                    </td>
                    <td>
                        A heap where data is stored in a tree ordered from smallest to largest. Written in Python.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=3RbXo1nWfxE" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Min-Heap" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        Hash Map
                    </td>
                    <td>
                        Hash map implementation created in python using open addressing.
                    </td>
                    <td>
                        <a href="https://www.youtube.com/watch?v=NMXpLVjcm7g" target="_blank" rel="noopener noreferrer">
                            <VscDebugStart id="video-button"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://github.com/Derek-Casini/Hash-Map" target="_blank" rel="noopener noreferrer">
                            <VscGithub id="code-button"/>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ProjectsTable;