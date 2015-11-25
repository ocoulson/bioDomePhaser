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
		//Link cursor keys to the movement of the character and the animation
   	 	if (cursors.left.isDown){
	        //  Move to the left
	        player.body.velocity.x = -100;

	        player.animations.play('west');
    	} else if (cursors.right.isDown) {
	        //  Move to the right
	        player.body.velocity.x = 100;

	        player.animations.play('east');
	    } else if (cursors.up.isDown) {
	    	player.body.velocity.y = -100;
	    	player.animations.play('north');

	    } else if (cursors.down.isDown) {
	    	player.body.velocity.y = 100;
	    	player.animations.play('south');

	    }
	}	
};