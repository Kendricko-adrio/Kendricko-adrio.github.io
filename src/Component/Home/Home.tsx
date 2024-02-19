import styles from "./Home.module.scss";
import { forwardRef, MutableRefObject, useEffect, useState } from "react";
import space from "../../Assets/space3.jpg";
import { Parallax } from "react-parallax";
import { GetCanvas } from "./Canvas/canvas";

const Home = forwardRef<HTMLElement>((_, ref) => {
  {
    // const home = document.getElementById('home');

    const [offsetY, setOffsetY] = useState(0);

    const scrollHandle = () => {
      setOffsetY(window.pageYOffset);
    };

    const canvasRef = GetCanvas();

    useEffect(() => {
      window.addEventListener("scroll", scrollHandle);

      return () => window.removeEventListener("scroll", scrollHandle);
    }, []);

    return (
      <section ref={ref} className={styles.home} id={"home"}>
        <canvas ref={canvasRef} id={styles.canvas} />

        <div
          className={styles.header}
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        >
          Hello World, My Name is Kendricko Adrio
        </div>
        <div
          className={styles.header}
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >
          
        </div>
        <div
          className={styles.header}
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        >
            An Enthusiast Software Engineer
        </div>
      </section>
    );
  }
});

export default Home;
