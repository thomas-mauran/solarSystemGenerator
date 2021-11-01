class Satellite {
  constructor(diameter, currentPlanet) {
    this.satelliteAngle = random(-360,360)
    this.satelliteDiameter = diameter/2
    this.color = random(10, 230)
    this.speed = random(-PI/180, PI/179)
    this.planet = currentPlanet
  }
  showSatellites(){


}
  satelliteMove(pos){
    push()
    translate(pos, pos)
    console.log(pos)
    rotate(this.satelliteAngle)
    this.satelliteAngle += this.speed
    fill(this.color)
    noStroke()
    ellipse(this.satelliteDiameter* 2 , this.satelliteDiameter *2 , this.satelliteDiameter, this.satelliteDiameter)
    pop()
  }

}
