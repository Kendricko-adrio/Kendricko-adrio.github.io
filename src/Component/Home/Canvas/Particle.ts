class Particle{

    private x: number;
    private y: number;
    private directionX: number;
    private directionY: number;
    private readonly size: number;
    private color: string;


    constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string){
        this.x = x + size;
        this.y = y + size;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;

    }

    public draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);

        ctx.fillStyle = this.color;
        ctx.fill();
    }

    public drawConnector(ctx: CanvasRenderingContext2D, particle: Particle){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    public update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        if(this.y + this.size > canvas.height || this.y - this.size < 0){
            this.directionY = this.directionY * -1;
            console.log("hai");
        }
        if(this.x + this.size > canvas.width || this.x - this.size < 0){
            this.directionX = this.directionX * -1 ;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(ctx);
    }

    public connect(ctx: CanvasRenderingContext2D, radius: number, particles: Particle[]){
        // console.log("masuk");
        particles.forEach(x => {

            const range = Math.sqrt((this.x - x.x)**2 + (this.y - x.y)**2);
            if(range < radius){
                this.drawConnector(ctx, x);
            }
        });
    }
}
export default Particle;
