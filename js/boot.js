var BootState = {
	init: function() {
		this.game.add.plugin(Phaser.Plugin.Debug);
	},
	create: function() {
		//Start the arcade physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Load the title screen
		game.state.start('loadWorld');
	}
};