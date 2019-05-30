//everytime key is pressed create new letter object 
//pass key that was pressed through the constructor 
//use string abd text width to tell position -- position in string 
//sting or array list full of the letter objects 
//this class creates a PGraphics class 

class Letter {
  //PVector position;
  float wholeTextWidth = 0;
  PVector pos;
  char c;
  float kerning;

  Letter(PVector _position, char _c) {
    pos = _position;
    c = _c;
  }

  void removeParticles() {
    println("removed particles");
    particles.clear();
  }

  void display() {
    pg.beginDraw();
    pg.textSize(typeSize);
    pg.fill(TEXTCOLOR);
    pg.text(c, pos.x, pos.y);
    xPos += textWidth(c) * 12;
    kerning = textWidth(c) * 18;
    wholeTextWidth += xPos;
  }
}