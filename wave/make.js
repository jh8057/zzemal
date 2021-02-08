import{
    Point
} from './point'

export class Wave{
    constructor(){

    }
    resize(stageWidth,stageHeight){
        this.stageWidth=stageWidth
        this.stageHeight = stageHeight

        this.centerx = stageWidth/2
        this.centery = stageHeight/2

        this.init()

    }
    init(){
        this.point = new Point(
            this.centerx,
            this.centery
        )
    }

    draw(ctx){
        ctx.beginPath()
        ctx.fillStyle = '#ff0000'

        this.point.update()

        ctx.arc(this.point.x, this.point.y,30,0,2*Math.PI)
        ctx.fill()
    }
}