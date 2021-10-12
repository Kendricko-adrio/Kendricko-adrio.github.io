import {ReactComponent} from "*.svg";
import {Parallax} from "react-parallax";
import styles from './Profile.module.scss';
import {useState, useEffect, forwardRef} from 'react';
import github from '../../Assets/github.png';

// const Profile: React.FC = () => {

const Profile = forwardRef<HTMLElement>((_, ref) => {
    {
        const [scrollY, setScrollY] = useState(0);
        const [isFocus, setIsFocus] = useState(false);
        useEffect(() => {
            // setScrollY(scrollY * 0.5);
            // console.log(scrollY)
            if (scrollY > 0.6 && scrollY < 1.4) {
                setIsFocus(true);
            } else {
                setIsFocus(false);
            }
        }, [scrollY]);

        return (
            <Parallax
                strength={200}
                renderLayer={percentage => {
                    if (percentage < 1) {
                        setScrollY(percentage);
                    } else if (percentage >= 1) {
                        setScrollY(2 - percentage);
                    }
                }
                }
            >
                <section ref={ref} id={"profile"}>
                    <div
                        className={styles.education}
                        style={{background: `rgba(97,0,148,${scrollY * 0.3})`}}
                    >
                        <div className={`${isFocus ? styles.fadeIn : styles.fadeOut} ${styles.header}`}>
                            Profile
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.component}>
                                <div className={styles.title}>Name:</div>
                                <div className={styles.description}>Kendricko Adrio</div>
                            </div>
                            <div className={styles.component}>
                                <div className={styles.title}>Education:</div>
                                <div className={styles.description}>Undergraduate Computer Science Student At Bina
                                    Nusantara
                                </div>
                            </div>
                            <div className={styles.component}>
                                <div className={styles.title}>Job:</div>
                                <div className={styles.description}>
                                    <ul>
                                        <li>Ex: Assistant Laboratory At Binus Alam Sutera</li>
                                        <li>Current: Operations & System Development At Binus Alam Sutera</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div>You can find me at</div>
                            <div className={styles.sosmed}>
                                <a href={"https://www.linkedin.com/in/kendricko-adrio-5334bb158/"}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png" alt="" />
                                </a>
                                <a href={"https://github.com/Kendricko-adrio"}>
                                    <img src={github} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Parallax>
        );
    }
});


export default Profile;
