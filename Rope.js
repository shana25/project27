class Rope
{
 constructor(body1,body2,offsetX)
{
 var options=
 {
     bodyA : body1,
     bodyB : body2,
     pointB :{x:offsetX,y:0},
     stiffness : 0.05,
     length : 450
 }
   this.offsetX=offsetX;
   this.sling = Constraint.create(options)
   World.add(world,this.sling)
  
}

display()
    {
      var A=this.sling.bodyA.position;
      var B=this.sling.bodyB.position;
      var anchor1X=A.x;
      var anchor1Y=A.y;
      var anchor2X=B.x+this.offsetX;
      var anchor2Y=B.y;

      line(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }
}
