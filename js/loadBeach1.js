/**
 * Created by olliecoulson on 13/01/2016.
 */
var LoadBeach1State = {

    preload: function() {
        //Load the new tilemap json
        this.game.load.tilemap('Beach1', 'assets/tilemaps/Beach1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('TilesheetBiodome', 'assets/images/TilesheetBiodome.png');

        // Load the player
        this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1_24-32.png', 24, 32);


        //load the wave animation sheets
        this.game.load.spritesheet('shoreBottom', 'assets/Spritesheets/beach.png', 16,32);
        this.game.load.spritesheet('waveBottom', 'assets/Spritesheets/wave.png', 16,32);
        this.game.load.spritesheet('shoreCorner', 'assets/Spritesheets/beachCorner.png', 32,32);


    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.state.start('beach1');

    }
};