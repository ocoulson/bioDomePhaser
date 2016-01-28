var BootState = {
	init: function() {
		this.game.add.plugin(Phaser.Plugin.Debug);
	},
	create: function() {
		//Start the arcade physics system
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Load the title screen
		//game.state.start('loadTitle');

		//Skip straight to entrance
        //game.state.start('loadEntrance');

        //Skip straight to forest1;
        //game.state.start('loadForest1');

		//Skip straight to beach1;
		game.state.start('loadBeach1');
	}
};