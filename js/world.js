var WorldState = {

	create: function() {
		//Set the JSON Island 1 as the map of the world
		this.map = this.game.add.tilemap('Island1');

		//Set the tileset image
		this.map.addTilesetImage('TilesheetBiodome', 'TilesheetBiodome');

		//Create the layers from the Tiled tilemap
		this.BaseLayer = this.map.createLayer('BaseLayer');
		this.Beach = this.map.createLayer('Beach');
		this.BeachFeatures = this.map.createLayer('BeachFeatures');
		this.map.createLayer('Beach2Forest');
		this.map.createLayer('Ridges');
		this.Forest = this.map.createLayer('Forest');

		//Make the world bounds as big as the tilesheet
		game.world.setBounds(0, 0, 3200, 2400);

		//Set the collisions using the blocking tile at position
		//21 in the tilesheet
		this.map.setCollision(21, true, 'Blocking');
		game.physics.p2.convertTilemap(this.map, "Blocking");

		//Create and animate the shore



		// Create sprite for first character
		eve = this.game.add.sprite(240, 2288, 'Eve');
		eve.anchor.setTo(0.5, 0.5);

		//Give Eve physics and prevent her from moving outside the world bounds
		game.physics.p2.enable(eve);
		eve.body.collideWorldBounds = false;
		eve.body.clearShapes();
		eve.body.addRectangle(20, 11, 6, 2);
		eve.body.physicsBodyType = Phaser.Physics.P2JS;

		eve.body.fixedRotation = true;

		//Set up movement animations

    	eve.animations.add('west', [8, 9, 8, 10], 10, true);
   	 	eve.animations.add('east', [11, 12, 11, 13], 10, true);
   	 	eve.animations.add('north', [3, 4, 3, 5], 10, true);
   	 	eve.animations.add('south', [0,1,0,2], 10, true);

   	 	//Create controls to move Eve around
   	 	cursors = game.input.keyboard.createCursorKeys();

		//Set the camera to follow Eve
		game.camera.follow(eve);

		//Create the trees after Eve so she passes behind them.
		this.map.createLayer('Trees');

	},

	update: function() {


		if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
			this.moveCharacter(eve, 150);
		} else {
			this.moveCharacter(eve, 100);
		}

	},
	moveCharacter: function (character, speed) {
		character.body.velocity.x = 0;
		character.body.velocity.y = 0;


		//Link cursor keys to the movement of the character and the animation
   	 	if (cursors.left.isDown){
	        //  Move to the west
	        character.body.velocity.x = -speed;

	        character.animations.play('west');

    	} else if (cursors.right.isDown) {
	        //  Move to the east
	        character.body.velocity.x = speed;

	        character.animations.play('east');

	    } else if (cursors.up.isDown) {
	    	// Move to the north
	        character.body.velocity.y = -speed;

	    	character.animations.play('north');

	    } else if (cursors.down.isDown) {
	    	// Move to the south
	        character.body.velocity.y = speed;

	    	character.animations.play('south');

	    } else {
	    	// Stop animations if no cursor is pressed
	    	character.animations.stop();
	    }

	}

};