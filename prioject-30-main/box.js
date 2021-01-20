class box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':1.0
      }
      this.Visibility = 355
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed)
      if(this.body.speed < 18){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }else{
     World.remove(world,this.body)
    push ();
    tint(355,this.Visibility = this.Visibility - 5)
    pop ();
  }
}
score(){
  if(this.Visibility<0 && this.Visibility>-105){
    score = score + 10;
  }
}
}

  
    
   
    
  