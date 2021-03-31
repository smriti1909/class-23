class Ground{
constructor(){
    var options ={
        isStatic: true
    }
this.body= Bodies.rectangle(200,380,400,20,options);
World.add(world,this.body);
this.width=400;
this.height=20;

}
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}

}

