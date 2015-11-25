var LoadTitleState = {
	preload: function() {
		// Preload the images to be used on the title screen
		this.load.image('background', 'assets/title/background.png');
		this.load.image('cloud1', 'assets/title/cloud1.png');
		this.load.image('cloud2', 'assets/title/cloud2.png');
		this.load.image('cloud3', 'assets/title/cloud3.png');
		this.load.image('title', 'assets/title/title.png');
		this.load.image('dome', 'assets/title/Dome1.png');
		this.load.image('floor', 'assets/Title/titleFloor.png');
	},

	create: function() {
		game.state.start('title');
	}

};