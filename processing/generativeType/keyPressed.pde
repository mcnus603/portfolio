//KEY PRESSED
void keyPressed() {

    //ALL KEYS
    if ((keyCode >= 32 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) ) {
    letters += key;

    //LETTER CONTRUCTOR
    Letter l = new Letter(location, key);
    l.display();

    //RETURN AT THE END
    if (location.x > width-200) {
      location.y += (typeSize + typeSize/10); 
      location.x = typeSize/2;
    }

    //KERNING
    kerning.x = l.kerning;
    kerning.y = 0;
    location.add(kerning);

    letterArray.add(l);
    particlesFromPG(); // CREATE NEW PARTICLES
    
  } else if ( keyCode == 10) {
    location.y += (typeSize + typeSize/10) ; 
    location.x = typeSize/2;
  }
}