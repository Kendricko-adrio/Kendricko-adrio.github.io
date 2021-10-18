import {forwardRef} from "react";
import styles from "./Project.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import book from "../../Assets/book-kn.png";
import getAllProject from "../../DataRepository/projectRepository";

const Project = forwardRef<HTMLElement>((_, ref) => {

    const data = getAllProject();

    return (
        <section ref={ref} id={"project"} className={styles.project}>
            <div className={styles.title}>
                My Project
            </div>
            <div className={styles.content}>
                {/*<ProjectCard image={book} desc={"First time learn to use react and fetching data from public API"} title={"Book KN"} codeLink={"https://google.com"} webLink={"https://book-kn.netlify.app/"}/>*/}
                {data.map((d) => {
                    // console.log(d.image);
                    return (
                        <ProjectCard image={d.image} title={d.title} desc={d.desc} codeLink={d.codeLink as string} webLink={d.webLink}/>
                    )
                })}
            </div>
        </section>
    )
});


export default Project;
