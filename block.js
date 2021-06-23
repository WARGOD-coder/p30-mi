class Block{
    constructor(x, y, width, height) {
      var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("block.png")

        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.v=255
      }
      display(){
        if(this.body.speed >3){
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          pop();
        }else{
          this.v=this.v-10
          push()
           fill(255,this.v)  
          World.remove(world,this.body)
          image(this.image,this.body.position.x,this.body.position.y,30,40)
           pop()

}
        
       
        
}
}
