class Block {
    constructor(x,y,width,height){
        var options = {
            'restitiution':0.8,
            'density':1.0,
            'fricition':20
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0, this.width, this.height);
        pop()
    }
}