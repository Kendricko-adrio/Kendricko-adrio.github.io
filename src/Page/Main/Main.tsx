import './Main.scss'
import NavBar from "../../Component/NavBar/NavBar";
import Home from "../../Component/Home/Home";
import space from "../../Assets/space3.jpg";
import {Parallax, Background} from 'react-parallax';
import Education from "../../Component/Education/Education";
import {useEffect, useRef, useState} from "react";

const MainPage: React.FC = () => {
    const homeRef = useRef<HTMLDivElement | null>(null);
    // const educationRef = useRef<HTMLDivElement | null>();
    const refs = [homeRef];
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return (
        <div className={"main"}>
            <NavBar refs={refs}/>
            {/*<NavBar />*/}
            <Parallax
                className={'parallax'}
                renderLayer={percentage => {
                    setScrollY(percentage);
                }}


            >
            <div className={'parallax'} style={{
                transform: `translateY(${scrollY * 10}px)`,
            }}>
                <Home ref={homeRef}/>
                <Education/>
                <div style={{height: '1000vh'}}>
                </div>
            </div>



            </Parallax>

        </div>
    );
}

export default MainPage;
