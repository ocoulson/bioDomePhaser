var LoadTitleState = {
	preload: function() {
		// Preload the images to be used on the title screen
		this.load.image('background', 'assets/Title/background.png');
		this.load.image('cloud1', 'assets/Title/cloud1.png');
		this.load.image('cloud2', 'assets/Title/cloud2.png');
		this.load.image('cloud3', 'assets/Title/cloud3.png');
		this.load.image('title', 'assets/Title/title.png');
		this.load.image('dome', 'assets/Title/Dome1.png');
		this.load.image('floor', 'assets/Title/titleFloor.png');
	},

	create: function() {
		game.state.start('title');
	}

};