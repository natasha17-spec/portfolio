import React from 'react';
import styles from './Project.module.css';
import project from "./project_1.png";


function Project2() {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={project} alt="project1"/>
                <button className={styles.btn}>Смотреть</button>
            </div>
            <span className={styles.title}>TodoList</span>
            <span className={styles.description}>Программа, которая управляет очередью задач</span>
        </div>
    );
}
export default Project2;