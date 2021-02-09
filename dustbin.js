class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      imageMode(CENTER);
      image(this.image, 500, 390, 200, 200)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };