class Ball{
    constructor(x,y){
        var option= {
            'density':1.5,
            'friction':1.0,
            'restitution':0.5

        }
        this.body = Bodies(x,y,20,20,option);
        this.width=20;
        this.height=20;
        this.shapeColor="purple";
        World.add(world.this.body);
     }
     display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;

        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        Pop();
  

     };
};