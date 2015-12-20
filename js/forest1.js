/**
 * Created by olliecoulson on 19/12/2015.
 */
var Forest1State = {

    create: function() {
        // Set the map object
        this.map = this.game.add.tilemap('Forest1');
        //Make the world bounds as big as the tilemap
        game.world.setBounds(0, 0, 1920, 800);

        //Set the tileset image
        this.map.addTilesetImage('TilesheetBiodome', 'TilesheetBiodome');

        //Create the layers from the Tiled tilemap
        this.BaseLayer = this.map.createLayer('BaseLayer');
        this.Forest = this.map.createLayer('Forest');

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



        //Create a new eve for now, but will want to pass the previous sprite object through

        eve = this.game.add.sprite(1872, 512, 'Eve');
        eve.anchor.setTo(0.5, 0.5);

        //Give Eve physics and prevent her from moving outside the world bounds
        game.physics.p2.enable(eve);
        eve.body.collideWorldBounds = false;
        eve.body.clearShapes();
        eve.body.addRectangle(24, 20, 2, 6);
        eve.body.physicsBodyType = Phaser.Physics.P2JS;
        eve.checkWorldBounds = true;

        eve.body.fixedRotation = true;

        eve.animations.add('west', [8, 9, 8, 10], 10, true);
        eve.animations.add('east', [11, 12, 11, 13], 10, true);
        eve.animations.add('north', [3, 4, 3, 5], 10, true);
        eve.animations.add('south', [0,1,0,2], 10, true);

        //Create controls to move Eve around
        cursors = game.input.keyboard.createCursorKeys();

        //Set the camera to follow Eve
        game.camera.follow(eve);

        //Graphics rendered on top of character
        this.Trees = this.map.createLayer('Trees');
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