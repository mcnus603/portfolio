void addRemoveParticles() { //REMOVE PARTICLES AND KEEP PARTICLES FLOWING
  for (int i = particles.size()-1; i >= 0; i--) {
    Particle p = particles.get(i);
    if (p.life <= 0) {
      particles.remove(i);
    }
    while (particles.size () < maxParticles) {
      particles.add(new Particle());
    }
  }
}