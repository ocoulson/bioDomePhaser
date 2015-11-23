//State for the Title state
var TitleState = {
	create: function() {
		startTimer = timeCheck = game.time.now;
		//Place the background image
		background = game.add.sprite(0,0,'background');

		// Place the 'floor' which the dome will land on
		floor = game.add.sprite(0, game.world.height -10, 'floor');
		floor.enableBody = true;
		game.physics.arcade.enable(floor);
		floor.body.immovable = true;

		//Generate a cloud which will scroll across the screen
		clouds = game.add.group();
		clouds.enableBody = true;

		// Generate random cloud height
		randomNumber = Math.random();
		if (randomNumber < 0.25) {
			cloudHeight = 60;
		} else if (randomNumber < 0.50) {
			cloudHeight = 90;
		} else if (randomNumber < 0.75) {
			cloudHeight = 115;
		} else {
			cloudHeight = 145;
		}

		// Randomly choose one of 3 cloud templates
		randomNumber = Math.random();
		if (randomNumber < 0.33) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud1');
		} else if (randomNumber < 0.66) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud2');
		} else {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud3');
		}
		
		

		// Create a dome which falls from outside the game
		// screen and lands on the floor, bouncing slightlly
		dome = game.add.sprite(this.game.world.centerX, -200, 'dome');
		dome.anchor.setTo(0.5, 0.5);
		dome.enableBody = true;
		game.physics.arcade.enable(dome);

		dome.body.bounce.y = 0.3;
		dome.body.gravity.y = 300;

		// Now the title Graphic falls in on top
		title = game.add.sprite(130, -300, 'title');
		game.physics.arcade.enable(title);
		title.enableBody = true;

		
		
	},
	update: function() {
		// Display start text after a timer
		if (game.time.now - startTimer > 7000) {
			//displayText();
		}

		//Generate Clouds
		cloudIncrement = Math.random() * 50000;
		
		if (game.time.now - timeCheck > cloudIncrement) {
			this.cloudGen();
			timeCheck = game.time.now;
		} else {}

		// Collision checks for dome and title
		collision1 = game.physics.arcade.collide(dome, floor);
		collision2 = game.physics.arcade.collide(dome, title);

		if(collision1) {	

			title.body.gravity.y = 200;
			title.body.bounce.y = 0.3;
		}

		

		if (collision2) {

		}

	},

	cloudGen: function() {
		// Generate random cloud altitude
		randomNumber = Math.random();
		if (randomNumber < 0.25) {
			cloudHeight = 60;
		} else if (randomNumber < 0.50) {
			cloudHeight = 90;
		} else if (randomNumber < 0.75) {
			cloudHeight = 115;
		} else {
			cloudHeight = 145;
		}

		// Randomly choose one of 3 cloud templates
		randomNumber = Math.random();
		if (randomNumber < 0.2) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud1');
			cloud.scale.setTo(0.5);
		}else if (randomNumber < 0.5) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud1');
		} else if (randomNumber < 0.75) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud2');
			cloud.scale.setTo(0.5);
		} else if (randomNumber < 0.95) {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud2');
		} else {
			cloud = clouds.create(game.world.width + 50, cloudHeight, 'cloud3');
			cloud.scale.setTo(0.75);
		}

		// Randomly choose one of 3 cloud speeds
		randomNumber = Math.random();
		if (randomNumber < 0.33) {
			cloudSpeed = -10;
		} else  if (randomNumber < 0.66) {
			cloudSpeed = -15;
		} else  {
			cloudSpeed = -20;
		}
		cloud.body.velocity.x = cloudSpeed;
	},

	displayText: function() {

	}
}; 




