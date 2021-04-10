class umbrella{
    constructor(x,y,width,height){
        
        this.body = Bodies.rectangle(x,y,width,height, {isStatic : true})
        this.width = width
        this.height = height
        this.image = loadImage("walking_1.png")
        World.add(world,this.body);
    }
display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,300,300)
    pop()

    
}
}