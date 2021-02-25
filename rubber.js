class rubber{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:5
        }
        this.pointB=pointB;
        this.rubber=Constraint.create(options);
        World.add(world, this.rubber);
    }
    attach(body){
        this.rubber.bodyA=body;
    }
    fly(){
        this.rubber.bodyA =null;
    }

   display(){
    if(this.rubber.bodyA){
    var pointA = this.rubber.bodyA.position;
    var pointB = this.pointB;
    push();
    
    strokeWeight(4);
    stroke(48,22,8);

    strokeWeight(7);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop();
   }
}
}