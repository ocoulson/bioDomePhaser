var LoadTitleState = {
	preload: function() {
		// Preload the images to be used on the title screen
		this.load.image('background', 'assets/background.png');
		this.load.image('cloud1', 'assets/cloud1.png');
		this.load.image('cloud2', 'assets/cloud2.png');
		this.load.image('cloud3', 'assets/cloud3.png');
		this.load.image('title', 'assets/title.png');
		this.load.image('dome', 'assets/Dome1.png');
	},

	create: function() {
		game.state.start('title');
	}

};