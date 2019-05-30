class SliderBar {
  float w;
  float h;
  float rectX;
  float rectY;
  float circleX;
  float r = 15;
  float mapedValue;
  float mapMin;
  float mapMax;


  SliderBar(float _x, float _y, float _w, float _h) {
    rectX = _x;
    rectY = _y;
    circleX = rectX - r/2;
    w = _w;
    h = _h;
  }

  void display() {
    fill(0, 10);
    rect(rectX, rectY, w, h);
    fill(230);
    ellipse(circleX, rectY, r, r);
  }

  void update() {
    if ((mouseX > rectX  && mouseX < (rectX + w) && (mouseY > rectY - r && mouseY < (rectY + r)))) {
      circleX = mouseX;
    }
  }
}