class Dustbin {
    constructor(x,y,width,height){
      var options = {
          isStatic: true,
          'restitution' :0,
          'friction' :1,
          'density' :0.1,
      }
      this.x=x;
      this.y=y;
      this.width= width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
     
      World.add(world,this.body);
    }
    display(){
        var dustbinPos=this.body.position;

        push()
        translate(dustbinPos.x,dustbinPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(225);
        rect(0,0,this.width,this.height);
        pop()
    }
};