var LoadWorldState = {
	
	init: function() {
		this.game.stage.backgroundColor = '#ffffff';
	},
	
	preload: function() {
		// Preload the images to be used on the title screen
		this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1.png', 32, 32);
		
	},

	create: function() {
		game.state.start('world');
	}
};