class Box{
    constructor(x,y,width,height){
  
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add (world,this.body)
    }

    display(){

      var pos=this.body.position;
      push ();
      rectMode(CENTER);
      strokeWeight(5);
      stroke (0)
       fill("red")
      rect (pos.x,pos.y,this.width,this.height);
     pop ();


    }
}