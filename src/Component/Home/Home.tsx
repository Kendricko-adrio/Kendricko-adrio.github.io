import styles from './Home.module.scss';
import {forwardRef, MutableRefObject, useEffect, useState} from "react";
import space from '../../Assets/space3.jpg';
import {Parallax} from 'react-parallax';


const Home = forwardRef<HTMLElement>((_, ref) => {
    {

        // const home = document.getElementById('home');

        const [offsetY, setOffsetY] = useState(0);

        const scrollHandle = () => {
            setOffsetY(window.pageYOffset);
        };

        useEffect(() => {
            window.addEventListener('scroll', scrollHandle);

            return () => window.removeEventListener('scroll', scrollHandle);
        }, []);

        return (

            <section ref={ref} className={styles.home} id={"home"}>

                <div className={styles.header} style={{transform: `translateY(-${offsetY * 0.7}px)`}}>
                    Hello World, My Name
                </div>
                <div className={styles.header} style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
                    Kendricko Adrio
                </div>
                <div className={styles.header} style={{transform: `translateY(-${offsetY * 0.3}px)`}}>
                    an Undergraduate Computer Science Student
                </div>


            </section>

        )
    }
});

export default Home;
