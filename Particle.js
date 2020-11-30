class Particle{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }
    display(){
        rectMode(CENTER);
        ellipse(this.x,this.y,20,20);

    }

    
}