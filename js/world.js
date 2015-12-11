var WorldState = {

	create: function() {
		//Set the JSON Island 1 as the map of the world
		this.map = this.game.add.tilemap('Island1');

		//Set the tileset image
		this.map.addTilesetImage('TilesheetBiodome', 'TilesheetBiodome');

		//Create the layers from the Tiled tilemap
		this.BaseLayer = this.map.createLayer('BaseLayer');
		this.Beach = this.map.createLayer('Beach');

        //Create and animate the shore


        shoreCorner = this.game.add.sprite(64, 2320, 'shoreCorner');
        shoreCorner.animations.add('wave');

        //Create a group of sprites to be the south shore, and animate them
        shore = game.add.group();
        for (var i = 6; i < 400; i++) {
           shorePiece =  shore.create(i*16,2320, 'shoreBottom');
        }
        for (var i = 144; i > 140; i--) {
            left = shore.create(96, 16 * i, 'shoreBottom');
            left.angle = 90;

        }
        for (var i = 129; i > 122; i--) {
            left = shore.create(80, 16 * i, 'shoreBottom');
            left.angle = 90;
        }

        shore.callAll('animations.add', 'animations', 'wave',
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 10, true);
        shore.callAll('play', null, 'wave');

        //shore1 = this.game.add.sprite(96,2320, 'shoreBottom');

        //shore.animations.add('wave',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 10, true);

        // add the rest of the layers (rendered in this order)
		this.BeachFeatures = this.map.createLayer('BeachFeatures');
		this.map.createLayer('Beach2Forest');
		this.Forest = this.map.createLayer('Forest');
        this.map.createLayer('ForestFeatures');
        this.map.createLayer('Ridges');
        this.map.createLayer('Trunks');

		//Make the world bounds as big as the tilesheet
		game.world.setBounds(0, 0, 3200, 2400);

		//Set the collisions using the blocking tile at position
		//21 in the tilesheet
		this.map.setCollision(21, true, 'Blocking');
		game.physics.p2.convertTilemap(this.map, "Blocking");



		// Create sprite for first character
		eve = this.game.add.sprite(240, 2288, 'Eve');
		eve.anchor.setTo(0.5, 0.5);

		//Give Eve physics and prevent her from moving outside the world bounds
		game.physics.p2.enable(eve);
		eve.body.collideWorldBounds = true;
		eve.body.clearShapes();
		eve.body.addRectangle(20, 16, 0, 10);
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

        //Create 'deadzone' for camera so it only follows eve
        //when she enters the edges of the screen.
        game.camera.deadzone = new Phaser.Rectangle(128, 128, 384, 144);

		//Create the trees after Eve so she passes behind them.
		this.map.createLayer('Trees');

	},

	update: function() {

        //shore1.animations.play('wave');
        shoreCorner.animations.play('wave',10, true);


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