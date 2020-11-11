class Box{
    constructor(x,y,width,height){
  
        var ops={
            isStatic = true
        }

       this.body = Bodies.rectangle(x,y,width,height,ops);
       this.width = width;
       this.height = height;
       World.add(this.world,body);
        }     
        
        display(){

            push();
            var pos= this.body.position;
            translate(pos.x, pos.y);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }
}