class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,800,20,options);
        World.add(world,this.body);
        this.x=x;
        this.y=y;
    }
    display(){
        rectMode(CENTER);
        rect(this.x,this.y,800,20);

    }

    
}