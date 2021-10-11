import {ReactComponent} from "*.svg";
import {Parallax} from "react-parallax";
import styles from './Education.module.scss';
import {useState, useEffect} from 'react';

const Education: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);
    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
        // setScrollY(scrollY * 0.5);
        // console.log(scrollY)
        if(scrollY > 0.6 && scrollY < 1.4){
            setIsFocus(true);
        }
        else {
            setIsFocus(false);
        }
    }, [scrollY]);

    return (
        // <Parallax
        //     strength={200}
        //     renderLayer={percentage =>
        //
        //         (
        //
        //             <div
        //                 className={styles.education}
        //                 style={{background: `rgba(0,0,0,${percentage})`}}
        //             >
        //                 Hai
        //             </div>)
        //     }
        // >
        //
        // </Parallax>
        <Parallax
            strength={200}
            renderLayer={percentage =>{
                if(percentage < 1){
                    setScrollY(percentage);
                }else if(percentage >= 1){
                    setScrollY(2 - percentage);
                }
            }
            }
        >
            <div
                className={styles.education}
                style={{background: `rgba(0,0,0,${scrollY * 0.5})`}}
            >
                <h1 className={`${isFocus? styles.fadeIn: styles.fadeOut} `}>
                    Test
                </h1>
            </div>
        </Parallax>
    );
}

export default Education;
