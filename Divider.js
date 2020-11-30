class Divider{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,200,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }
    display(){
        rectMode(CENTER);
        rect(this.x,this.y,20,200);

    }

    
}