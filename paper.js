class paper {
    constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.image = loadImage("paper.png");
    this.x= x;
    this.y= y;
    this.radius= radius;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world, this.body);
}

display(){
    var pos =this.body.position;
    //ellipse(pos.x, pos.y, 10, 10);
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50)
    pop();
}
}