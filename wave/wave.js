import {Point} from './point.js';

export class Wave{
    constructor(color){
        this.color = color;
        this.points = [];
        this.numberOfPoints = 6;
    }
    resize(stageWidth,stageHeight){
        this.stageWidth=stageWidth;
        this.stageHeight = stageHeight;

        this.centerx = stageWidth/2;
        this.centery = stageHeight/2;
        this.lowy = (stageHeight*2)/3;

        this.pointGap = this.stageWidth/(this.numberOfPoints-1);

        this.init();

    }
    init(){
        //this.point = new Point(this.centerx, this.centery);
        for (let i =0; i < this.numberOfPoints;i++){
            this.points[i] = new Point(i, this.pointGap*i,this.lowy);
        }
    }

    
    draw(ctx){ // 점 여러개 그리기

        ctx.beginPath();

        let prex = this.points[0].x;
        let prey = this.points[0].y;
        
        ctx.moveTo(prex, prey);

        for (let i = 0; i < this.numberOfPoints;i++){
            const cx = (prex + this.points[i].x) /2
            const cy = (prey + this.points[i].y) /2

            ctx.quadraticCurveTo(prex,prey,cx,cy);
            prex = this.points[i].x;
            prey = this.points[i].y;
            
            if (i !=0 && i !=this.numberOfPoints -1){
                this.points[i].update();
                }
        }
        ctx.lineTo(prex,prey);
        ctx.lineTo(this.stageWidth,this.stageHeight);
        ctx.lineTo(0,this.stageHeight);
        ctx.lineTo(this.points[0].x,this.points[0].y);
        ctx.fillStyle = '#ff0000';
        ctx.fill()
        ctx.closePath();
    }
    draw_ponint(ctx){ // 점 여러개 그리기
        for(let i =0; i < this.numberOfPoints;i++){

        ctx.beginPath();
        ctx.arc(this.points[i].x, this.points[i].y,30,0,2*Math.PI)
        ctx.fillStyle = '#ff0000';
        ctx.fill()
        ctx.closePath();
        //도형그리기 : https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Drawing_shapes
        if (i !=0 && i !=this.numberOfPoints -1){
            this.points[i].update();
            }
        }
        
    }
}