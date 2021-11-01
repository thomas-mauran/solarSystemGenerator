class Planet {
  constructor(sunDiameter, distance, orbitSpeed, angle, numberOfPlanet, color) {
    this.r = random(255)
    this.g = random(255)
    this.b = random(150)

    this.angle = angle
    this.speed = orbitSpeed

    this.diameter = sunDiameter/3 + random(30, 40)
    // this.sunDiameter = sunDiameter + random(30)
    this.planetNumber = numberOfPlanet
    this.espacement = random(10)
    this.starSpace = 30 + sunDiameter
    this.randomNumber = int(random(numberOfPlanet))
    console.log(this.randomNumber)
    this.strokeColor = random(100, 200)
    this.satellitesList = []
    this.nombreDeSatellites = random(0,2)
    this.asColors = color
    this.distance = distance

  }


  anneaux(){
    if (this.randomNumber == 1){
      return true
    }else{
      return false
    }
  }

  satellitesSpawn(){
    for (i = 0; i < this.nombreDeSatellites; i ++){
      this.satellite = new Planet(this.diameter/8, this.distance/4, random(-1,1), random(360), 0, false)
      this.satellitesList.push(this.satellite)
    }
  }

  orbit() {
      this.angle += this.speed
      for (let i in this.satellitesList) {
          this.satellitesList[i].orbit()
      }
    }

  show(){
    push()
        noStroke()
      if (this.asColors == true){
        fill(this.r, this.g, this.b)
        }
      else{
        fill(this.strokeColor)
      }
        rotate(this.angle)
        translate(this.distance, 0)
        push()
        if (this.anneaux()){
          fill(0, 0, 0, 0)
          stroke(this.strokeColor)
          strokeWeight(this.diameter/10)
          ellipse(0, 0, this.diameter*4, this.diameter*2.5)
        }
        pop()
        ellipse(0, 0, this.diameter, this.diameter)
        for (let i in this.satellitesList) {
            this.satellitesList[i].show()
        }
        pop()
      }
  }
