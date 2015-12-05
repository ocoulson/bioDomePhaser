var LoadWorldState = {
	
	init: function() {
		this.game.stage.backgroundColor = '#ffffff';
	},
	
	preload: function() {
		// Preload the images to be used on the title screen
		this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1_24-32.png', 24, 32);
		this.game.load.tilemap('BasicForest', 'assets/tilemaps/BasicForest.json', null, Phaser.Tilemap.TILED_JSON);

		this.game.load.image('Grass1', 'assets/images/Grass1.png');
		this.game.load.image('Pines', 'assets/images/Pines.png');
		
	},

	create: function() {
		game.state.start('world');
	}
};