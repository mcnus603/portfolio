void controls () {
  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(0, height-100, width, 100);
  red.display();
  min.display();

  if (mousePressed==true) {
    red.update(); 
    min.update();


    rColorValue = map(red.circleX, red.rectX, red.rectX + red.w, 0, 255);
    minLife = map(min.circleX, min.rectX, min.rectX + min.w, 50, 300);
    maxLife = map(min.circleX, min.rectX, min.rectX + min.w, 20, 400);
  }
  fill(0);

  textSize(15);
  fill(100);
  rectMode(CORNER);
  text("reset", width - 80, height - 50, 40, 20);
  text("save", width - 80, height - 80, 40, 20);
}

void mousePressed() { //RESET

  if (mouseX > width - 80 && mouseX < width - 80 + 40 && mouseY > height - 50 && mouseY < height - 50 + 20) {
    //clear screen
    background(BACKGROUND_COLOR); 
    particles.clear();
    location.x = typeSize/2;
    location.y = typeSize;

    for (int i =0; i < letterArray.size(); i++) { //CLEAR PARTICLES
      letterArray.remove(i);
      pg.clear(); //CLEAR PGRAPHICS
    }

    for (int i = particles.size()-1; i >= 0; i--) { //CLEAR PARTICLES
      particles.remove(i);
    }
  } else if (mouseX > width - 80 && mouseX < width - 80 + 40 && mouseY > height - 80 && mouseY < height - 50 + 20) {
    PImage excludeControls = get(0, 0, width, height - 100);
    excludeControls.save("artwork/image-" + frameRate +".png");
  }
}

void mouseDragged() {
}