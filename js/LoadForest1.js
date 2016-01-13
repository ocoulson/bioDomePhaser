/**
 * Created by olliecoulson on 19/12/2015.
 */

var LoadForest1State = {

    preload: function() {
        //Load the new tilemap json
        this.game.load.tilemap('Forest1', 'assets/tilemaps/Forest1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('TilesheetBiodome', 'assets/images/TilesheetBiodome.png');

        // Load the player
        this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1_24-32.png', 24, 32);


        //load the wave animation sheets
        this.game.load.spritesheet('shoreBottom', 'assets/Spritesheets/beach.png', 16,32);
        this.game.load.spritesheet('waveBottom', 'assets/Spritesheets/wave.png', 16,32);


    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.state.start('forest1');

    }
};
