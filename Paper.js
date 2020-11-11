class Paper{
    constructor(x,y,r){

        var ops={
            isStatic:false,
            restitution:0.3,
            friction:1.2,
            density:1
        }
    

        this.x=x;
        this.y=y;
        this.r=r;
    
        this.body = Bodies.circle(x,y,r/2,ops);
      this.image = loadImage("sprites/Paper.png");
        World.add(world,this.body);
    } 

    

display(){
    
    Paperpos = this.body.position;
    push();
    translate(Paperpos.x,Paperpos.y,);
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    pop();
   }
}
