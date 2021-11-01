planets = []
var planetNumber

function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  rectMode(CENTER)
  background(0)
  var planetNumber = 3

  sun = new Sun()
  for (i = 1; i < planetNumber; i ++){
    planet = new Planet(sun.diameter,random(200, 400), random(-2, 2), random(360), planetNumber, true)
    planet.satellitesSpawn()
    planets.push(planet)
  }
}

function draw() {
  background(0)
  translate(width/2,height/2)
  sun.show()
  for (i = 0; i < planets.length; i ++){
      planets[i].show()
      planets[i].orbit()
    }
}
