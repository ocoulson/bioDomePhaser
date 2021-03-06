/**
 * Created by ocouls01 on 13/12/2015.
 */

var EntranceState = {


    create: function() {
        //Set the JSON Entrance as the map of the area
        this.map = this.game.add.tilemap('Entrance');
        //Make the world bounds as big as the tilemap
        game.world.setBounds(0, 0, 640, 800);

        //Set the tileset image
        this.map.addTilesetImage('TilesheetBiodome', 'TilesheetBiodome');

        //Create the layers from the Tiled tilemap
        this.BaseLayer = this.map.createLayer('BaseLayer');
        this.Beach = this.map.createLayer('Beach');

        //Create and animate the shore
        //Create a group of sprites to be the south shore, and animate them
        shore = game.add.group();
        for (var i = 2; i < 40; i++) {
            shorePiece =  shore.create(i*16,720, 'shoreBottom');

        }

        shore.callAll('animations.add', 'animations', 'wave',
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 10, true);
        shore.callAll('play', null, 'wave');

        //Create a group to animate the secondary wave sprites

        wave = game.add.group();
        for (var i = 1; i < 40; i ++) {
            wavePiece = wave.create(i*16, 752, 'waveBottom');
        }

        wave.callAll('animations.add', 'animations', 'wave2', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 10, true);
        wave.callAll('play', null, 'wave2');


        // add the rest of the layers (rendered in this order)
        this.map.createLayer('BeachShadows');
        this.BeachFeatures = this.map.createLayer('BeachFeatures');
        this.map.createLayer('Beach2Forest');
        this.Forest = this.map.createLayer('Forest');
        //Ridges before features and trees so they render on top.
        this.map.createLayer('Ridges');
        forestFeatures = this.map.createLayer('ForestFeatures');

        this.map.createLayer('Trunks');


        //Set the collisions using the blocking tile at position
        //21 in the tilesheet
        this.map.setCollision(21, true, 'Blocking');

        //And all the tiles on these layers
        this.map.setCollisionBetween(23, 305, true, 'ForestFeatures');
        this.map.setCollisionBetween(392, 629, true, 'Trunks');

        game.physics.p2.convertTilemap(this.map, "Blocking");
        game.physics.p2.convertTilemap(this.map, "ForestFeatures");
        game.physics.p2.convertTilemap(this.map, "Trunks");


        //Create a sign sprite for Player to interact with.
        sign = game.add.sprite(48, 80, 'Sign');
        game.physics.p2.enable(sign);
        sign.body.static = true;
        sign.body.physicsBodyType = Phaser.Physics.P2JS;


        // Create sprite for first character
        eve = this.game.add.sprite(224, 672, 'Eve');
        eve.anchor.setTo(0.5, 0.5);

        //Give Eve physics and prevent her from moving outside the world bounds
        game.physics.p2.enable(eve);
        eve.body.collideWorldBounds = false;
        eve.body.clearShapes();
        eve.body.addRectangle(24, 20, 2, 6);
        eve.body.physicsBodyType = Phaser.Physics.P2JS;
        eve.checkWorldBounds = true;

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


        spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        spacebar.onDown.add(this.printPosition, this);


        if ((eve.position.x <10) && ((eve.position.y > 80) && (eve.position.y < 113))) {
            this.game.state.start('loadForest1');
        }



        // log the position to the console
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)) {
            this.moveCharacter(eve, 150);
        } else {
            this.moveCharacter(eve, 100);
        }

    },

    printPosition: function() {
        console.log(eve.position.toString()) ;
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
