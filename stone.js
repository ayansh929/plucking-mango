class Stone{
    constructor(x,y,r){
        this.image = loadImage("sprites/stone.png");
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        World.add(world,this.body);
    }
    display(){
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			ellipse(0,0,this.r, this.r);
			pop()
	}
}