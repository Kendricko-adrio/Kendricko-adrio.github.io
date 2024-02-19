import {ReactComponent} from "*.svg";
import {Parallax} from "react-parallax";
import styles from './Profile.module.scss';
import {useState, useEffect, forwardRef, useRef} from 'react';
import github from '../../Assets/github.png';
import myphoto from '../../Assets/my-photo.jpg';
import isIntersect from "../../Handler/intersectionHandler";
import intersectionHandler from "../../Handler/intersectionHandler";


// const Profile: React.FC = () => {

const Profile = forwardRef<HTMLElement>((_, ref) => {
    // eslint-disable-next-line no-lone-blocks
    {
        const [scrollY, setScrollY] = useState(0);
        const [isFocus, setIsFocus] = useState(false);

        const [divRef, isPhotoIntersect] = intersectionHandler("0px");
        const [nameRef, isNameIntersect] = intersectionHandler("0px");
        const [educationRef, isEducationIntersect] = intersectionHandler("0px");
        const [jobRef, isJobIntersect] = intersectionHandler("0px");
        const [findRef, isFindIntersect] = intersectionHandler("0px");
        console.log('intersect : ' + isPhotoIntersect);
        useEffect(() => {
            // setScrollY(scrollY * 0.5);
            // console.log(scrollY)
            if (scrollY > 0.2 && scrollY < 1.4) {
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
                        <div className={styles.data} >
                            <img src={myphoto}  ref={divRef as React.RefObject<HTMLImageElement>} className={`${isPhotoIntersect ? styles.fadeIn : styles.fadeOut}`}/>
                            <div className={`${styles.profile} ${isPhotoIntersect ? styles.fadeIn : styles.fadeOut}`}>
                                <div ref={nameRef as React.RefObject<HTMLDivElement>} className={`${styles.component} ${isNameIntersect ? styles.fadeIn : styles.fadeOut}`}  >
                                    <div className={styles.title}>Name:</div>
                                    <div className={styles.description}>Kendricko Adrio</div>
                                </div>
                                <div ref={educationRef as React.RefObject<HTMLDivElement>} className={`${styles.component} ${isEducationIntersect ? styles.fadeIn : styles.fadeOut}`}>
                                    <div className={styles.title}>Education:</div>
                                    <div className={styles.description}>Bachelor of Computer Science Student At Bina
                                        Nusantara
                                    </div>
                                </div>
                                <div ref={jobRef as React.RefObject<HTMLDivElement>} className={`${styles.component} ${isJobIntersect ? styles.fadeIn : styles.fadeOut}`}>
                                    <div className={styles.title}>Job:</div>
                                    <div className={styles.description}>
                                        <ul>
                                            <li>Ex: Assistant Laboratory At Binus Alam Sutera</li>
                                            <li>Ex: Operations & System Development At Binus Alam Sutera</li>
                                            <li>Current: Software Engineer at Bank Central Asia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={findRef as React.RefObject<HTMLDivElement>} className={`${isFindIntersect ? styles.fadeIn : styles.fadeOut} ${styles.bottom}`}>
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
