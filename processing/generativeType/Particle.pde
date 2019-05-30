//FLOW FIELD PARTICLES

class Particle {
  PVector loc;
  float maxLife;
  float life;
  float lifeRate;

  Particle() {
    findIfInsideText();
    life = random(minLife, maxLife);
    lifeRate = random(3, 5);
  }

  void update() {
    float angle = noise(loc.x * 0.01, loc.y * .01) * TWO_PI;
    PVector vel = PVector.fromAngle(angle);
    loc.add(vel);
    life -= lifeRate; // decrease life by the lifeRate
  }

  void display() {
    stroke(map(life, 200, 0, 255, 0), 125); 
    float r = map(life, 200, 0, 7, 1); 

    fill(rColorValue, map(loc.x, 0, width, 255, 0), map(loc.y, 0, height, 255, 0));
    ellipse(loc.x, loc.y, r, r); // draw particle
  }

  void findIfInsideText() {
    while (loc == null || !isInText (loc)) loc = new PVector(random(width), random(height));
  }

  // return if point is inside the text
  boolean isInText(PVector v) {
    return pg.get(int(v.x), int(v.y)) == TEXTCOLOR;
  }
}