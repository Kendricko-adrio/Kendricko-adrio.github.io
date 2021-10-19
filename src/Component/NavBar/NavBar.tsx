import style from './NavBar.module.scss';
import home from '../../Assets/home.png';
import education from '../../Assets/education.png';
import skill from '../../Assets/skill.png';
import project from '../../Assets/project.png';
import arrow from '../../Assets/arrow-right.png';
import {MutableRefObject, useEffect} from "react";


interface Props {
    refs: MutableRefObject<HTMLDivElement | null>[],
};


const NavBar: React.FC<Props> = ({refs}: Props) => {
// const NavBar: React.FC = () => {
    // useEffect(() => {
    //     if(refs[0].current === null){
    //         return;
    //     }
    // });
    console.log(refs);
    const click = (ref: MutableRefObject<HTMLDivElement | null>) => {
        console.log(ref);
        if (ref.current === null) {
            console.log('hai');
            return;
        }
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <section className={style.navbar}>
            <div className={style.component} onClick={() => click(refs[0])}>
            {/*<div className={style.component}>*/}
                <img src={home} alt=""/>
            </div>

            <div className={style.component} onClick={() => click(refs[1])}>
                <img src={education}/>
            </div>
            <div className={style.componentarrow}>
                <img src={arrow} alt=""/>
            </div>
            <div className={style.component} onClick={() => click(refs[2])}>
                <img src={project}/>
            </div>
            <div className={style.component}>
                <img src={skill}/>
            </div>
        </section>
    )
}

export default NavBar;
