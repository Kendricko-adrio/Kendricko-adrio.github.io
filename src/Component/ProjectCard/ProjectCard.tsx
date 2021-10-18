import styles from "./ProjectCard.module.scss";

interface Props {
    image: string,
    title: string,
    desc: string,
    webLink?: string,
    codeLink: string
}

const ProjectCard: React.FC<Props> = ({image, desc, webLink, codeLink, title}) => {

    const bgImage = {
        background: `url(${image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
    }

    return (
        <div

            className={styles.projectCard}>
            <div className={styles.bg} style={bgImage}>

            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.desc}>
                    {desc}
                </div>
                <div className={styles.link}>
                    {webLink && (<a href={webLink}>Website/Download Link</a>)}
                    {codeLink && (<a href={codeLink}>Code Repository Link</a>)}
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;
