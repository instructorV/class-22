
var engine,world1,ground, groundOptions

function setup() {
  createCanvas(1000,600);
  engine = Matter.Engine.create()
  world1 = engine.world

  groundOptions = {
    isStatic:true
  }

  ground = Matter.Bodies.rectangle(500,580,1000,40,groundOptions)
  Matter.World.add(world1,ground)

  

 
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1000,40)
  console.log(ground)
}