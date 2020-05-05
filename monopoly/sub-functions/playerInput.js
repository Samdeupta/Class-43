class PlayerInput {

  constructor() {
    this.windowImg = loadImage('images/inputWindow/registerWindow.png')

    this.input = createInput("Name");
    this.button = createButton("PLAY");
  } 

  display(){
    this.window = createSprite(displayWidth/2,(displayHeight-111)/2);
    this.window.addImage(this.windowImg);

    textFont('Agency FB');
    this.input.position(displayWidth/2 -100, (displayHeight-111)/2 + 30);
    this.button.position(displayWidth/2 +100, (displayHeight-111)/2 + 30);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      
      player.name = this.input.value();
      playerCount +=1;
      player.index = playerCount; 
      player.update();
      player.updateCount(playerCount);
    });   
  }
}
