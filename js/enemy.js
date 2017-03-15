class enemy {
  constructor(x,y,spriteName,configs) {
    this.sprite=Nakama.game.add.sprite(x,y, 'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds=true;
    this.configs=configs;
  }
  update(){
      if(this.sprite.x>0 && temp==false){
        this.sprite.body.velocity.x=-ShipController.SHIP_SPPED;

        if (this.sprite.x<7) {
          temp = true;

        }
      }else if(this.sprite.x<550 && temp==true){
        this.sprite.body.velocity.x=ShipController.SHIP_SPPED;
        if (this.sprite.x>545) {
          temp = false;
        }
      }
  }
}
enemy.ENEMY_SPEED=50;
