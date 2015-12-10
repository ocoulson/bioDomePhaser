var LoadWorldState = {
	
	init: function() {
		this.game.stage.backgroundColor = '#ffffff';
	},
	
	preload: function() {
		// Preload the images to be used on the title screen
		this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1_24-32.png', 24, 32);
		this.game.load.tilemap('Island1', 'assets/tilemaps/Island1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.spritesheet('shoreBottom', 'assets/Spritesheets/beach.png', 16,32);
		this.game.load.spritesheet('shoreCorner', 'assets/Spritesheets/beachCorner.png', 32,32);

		this.game.load.image('TilesheetBiodome', 'assets/images/TilesheetBiodome.png');
		
	},

	create: function() {
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.state.start('world');
	}
};