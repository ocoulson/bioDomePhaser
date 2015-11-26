var WorldState = {

	create: function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Create sprite for first character
		player = this.game.add.sprite(game.world.centerX, game.world.centerY, 'Eve');
		player.anchor.setTo(0.5, 0.5);

		//Give Eve physics and prevent her from moving outside the world bounds
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;


		//Set up movement animations
		// player.animations.add('left', [0, 1, 2, 3], 10, true);
		// player.animations.add('right', [5, 6, 7, 8], 10, true);

    	player.animations.add('west', [8, 9, 8, 10], 10, true);
   	 	player.animations.add('east', [11, 12, 11, 13], 10, true);
   	 	player.animations.add('north', [3, 4, 3, 5], 10, true);
   	 	player.animations.add('south', [0,1,0,2], 10, true);

   	 	//Create controls to move Eve around
   	 	cursors = game.input.keyboard.createCursorKeys();



	},

	update: function() {

		this.moveCharacter(player);
		




	    // Detect collision between eve and world limit
	    
	},
	moveCharacter: function (character) {
		character.body.velocity.setTo(0,0);
		if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
			this.runCharacter(character);
		} else {

			//Link cursor keys to the movement of the character and the animation
	   	 	if (cursors.left.isDown){
		        //  Move to the west
		        character.body.velocity.setTo(-100, 0);	      

		        character.animations.play('west');

	    	} else if (cursors.right.isDown) {
		        //  Move to the east
		        character.body.velocity.setTo(100, 0);	

		        character.animations.play('east');

		    } else if (cursors.up.isDown) {
		    	// Move to the north
		    	character.body.velocity.setTo(0, -100);	

		    	character.animations.play('north');

		    } else if (cursors.down.isDown) {
		    	// Move to the south
				character.body.velocity.setTo(0, 100);	

		    	character.animations.play('south');

		    } else {
		    	// Stop animations if no cursor is pressed
		    	character.animations.stop();
		    }
		}
	},

	runCharacter: function(character) {
		character.body.velocity.setTo(0,0);

		//Link cursor keys to the movement of the character and the animation
	   	 	if (cursors.left.isDown){
		        //  Move to the west
		        character.body.velocity.setTo(-200, 0);	      

		        character.animations.play('west');

	    	} else if (cursors.right.isDown) {
		        //  Move to the east
		        character.body.velocity.setTo(200, 0);	

		        character.animations.play('east');

		    } else if (cursors.up.isDown) {
		    	// Move to the north
		    	character.body.velocity.setTo(0, -200);	

		    	character.animations.play('north');

		    } else if (cursors.down.isDown) {
		    	// Move to the south
				character.body.velocity.setTo(0, 200);	

		    	character.animations.play('south');

		    } else {
		    	// Stop animations if no cursor is pressed
		    	character.animations.stop();
		    }
	}

};