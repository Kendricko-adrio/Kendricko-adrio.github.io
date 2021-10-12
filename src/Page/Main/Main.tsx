import './Main.scss'
import NavBar from "../../Component/NavBar/NavBar";
import Home from "../../Component/Home/Home";
import space from "../../Assets/space3.jpg";
import {Parallax, Background} from 'react-parallax';
import Profile from "../../Component/Profile/Profile";
import {useEffect, useRef, useState} from "react";

const MainPage: React.FC = () => {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const profileRef = useRef<HTMLDivElement | null>(null);
    // const educationRef = useRef<HTMLDivElement | null>();
    const refs = [homeRef, profileRef];
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

    return (
        <div className={"main"}>
            <NavBar refs={refs}/>
            {/*<NavBar />*/}
            <Parallax
                renderLayer={percentage => {
                    setScrollY(percentage);
                }}
            >
                <Home ref={homeRef}/>
                <Profile ref={profileRef}/>
                <div style={{height: '100vh'}}>
                </div>

            </Parallax>

        </div>
    );
}

export default MainPage;
