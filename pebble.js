class pebble{
    constructor(x,y,radius){
       var options={
           isStatic:false,
           restitution:0.5,
           friction:1,
           density:1.2
       }
       this.body=Bodies.circle(x,y,radius,options);
       this.radius=radius;
       this.image=loadImage("Images/pebble.png");
       World.add(world,this.body);
    }

  display(){
        
        var pos=this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
       pop();
        }
    
   }