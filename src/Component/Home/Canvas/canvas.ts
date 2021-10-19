import {useEffect, useRef} from "react";
import Particle from "./Particle";

const initParticle = (canvas: HTMLCanvasElement) => {
    let particles: Particle[] = [];
    for(let i = 0; i < 100; i++){
        let size = 5;
        let x = Math.random() * (canvas.width - size * 2);
        let y = Math.random() * (canvas.height - size *2);
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        particles.push(new Particle(x,y,directionX, directionY, size, '#610094'));
    }

    console.log(canvas.height);
    return particles;
}

export const GetCanvas = () => {
    const ref = useRef<HTMLCanvasElement>(null);


    useEffect(() => {

        let canvas = ref.current;
        if(canvas === null) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext("2d");
        if(ctx === null) return;
        window.onresize = () => {
            if(canvas === null) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        let animationFrameId: number;
        const particleArray = initParticle(canvas);
        const render = () => {
            if(ctx === null) return;
            ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
            particleArray.forEach(x => {
                x.update(ctx as CanvasRenderingContext2D, canvas as HTMLCanvasElement);
                x.connect(ctx as CanvasRenderingContext2D, 100, particleArray);
            });
            animationFrameId = requestAnimationFrame(render);
        }

        render();

        return () => window.cancelAnimationFrame(animationFrameId);
    }, []);


    // let par1 = new Particle(0, 0, 1,1,0.5, '#FFFFFF');

    // par1.draw(ctx);

    return ref;
}
