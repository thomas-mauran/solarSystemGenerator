class Sun {
  constructor() {
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
    this.strokeR = random(255)
    this.strokeG = random(255)
    this.strokeB = random(255)
    this.angle = random(360)
    this.diameter = random(50, 100)
    this.strokeWeight = random(1, 4)
  }
  show(){
    pop()
    fill(this.r, this.g, 50)
    ellipse(0, 0, this.diameter, this.diameter)
    strokeWeight(this.strokeWeight)
    stroke(this.strokeR, this.strokeG, this.strokeB)
    push()
  }
}
