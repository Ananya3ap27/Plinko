class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:0.6
        }
        this.body=Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }
    display(){
        var r=Math.round(random(1,3));
        var i;
        if(r===1){
            i="red";
        }
        if(r===2){
            i="pink";
        }
        if(r===3){
            i="lightblue";
        }
        if(r===4){
            i="lightgreen";
        }
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //console.log(i);
        fill(i);
        ellipse(0,0,30,30);
        pop();
       
          
    }

    
}