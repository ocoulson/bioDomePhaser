//State for the Title state
var TitleState = {
	create: function() {
		//Place the background image
		this.background = game.add.sprite(0,0,'background');

		this.dome = game.add.sprite(this.game.world.centerX, 290, 'dome');
		this.dome.anchor.setTo(0.5, 0.5);


		this.title = game.add.sprite(130, 60, 'title');
	},
	update: function() {

	},
}; 




