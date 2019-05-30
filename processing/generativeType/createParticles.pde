void particlesFromPG() { //CREATE PARTICLES FROM PG FUNCTION
  for (int i = 0; i < pg.width; i+=10) {
    for (int j = 0; j < pg.height; j+=10) {
      boolean insideText;
      if (pg.get(i, j) == TEXTCOLOR) {
        insideText = true;
      } else {
        insideText = false;
      }
      if (insideText == true) {
        Particle dot = new Particle();
        particles.add(dot);
      }
    }
  }
}