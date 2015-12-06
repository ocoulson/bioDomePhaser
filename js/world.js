var WorldState = {

	create: function() {

		this.map = this.game.add.tilemap('BasicForest');

		this.map.addTilesetImage('Grass1', 'Grass1');
		this.map.addTilesetImage('Pines', 'Pines');

		this.backgroundLayer = this.map.createLayer('Ground');
		this.trunks = this.map.createLayer('Trunks');
		
		
		//this.map.setCollision(249, true, 'Collisions');

		game.physics.startSystem(Phaser.Physics.P2JS);

		//game.physics.p2.convertTilemap(this.map, "Collisions");

		// Create sprite for first character
		eve = this.game.add.sprite(game.world.centerX, game.world.centerY +70, 'Eve');
		eve.anchor.setTo(0.5, 0.5);

		//Give Eve physics and prevent her from moving outside the world bounds
		game.physics.p2.enable(eve);
		eve.body.collideWorldBounds = true;
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

   	 	this.topLayer = this.map.createLayer('Trees');
		
		this.topLayer.resizeWorld();

		this.generateCollisions(eve);

	},
	generateCollisions: function(character) {
		//Create a physics collision group which will interact with eve

		blocksCollisionGroup = game.physics.p2.createCollisionGroup();


		//Add make eve collide with the group
		
		eve.body.collidesWith =blocksCollisionGroup;

		//Ensure that eve will still collide with world bounds.
		game.physics.p2.updateBoundsCollisionGroup();

		// Get the blocks object from the Tiled JSON file.
		this.blocks = this.game.add.group();
	    this.blocks.enableBody = true;
	    this.blocks.physicsBodyType = Phaser.Physics.P2JS;

	    var block;    
	    result = this.findObjectsByType('blocks', this.map, 'Collisions');
	    result.forEach(function(element){
	      this.createFromTiledObject(element, this.blocks);
	    }, this);

	    this.blocks.setCollisionGroup(blocksCollisionGroup);
	    this.blocks.collides(character);
		
	},
	findObjectsByType: function(type, map, layer) {
	    var output = new Array();
	    map.objects[layer].forEach(function(element){
	      if(element.properties.type === type) {
	        //Phaser uses top left, Tiled bottom left so we have to adjust
	        //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
	        //so they might not be placed in the exact position as in Tiled
	        element.y -= map.tileHeight;
	        output.push(element);
	      }      
	    });
    return output;
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
		
	},

};