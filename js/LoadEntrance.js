/**
 * Created by ocouls01 on 13/12/2015.
 */

var LoadEntranceState = {

    init: function() {
        this.game.stage.backgroundColor = '#ffffff';
    },

    preload: function() {
        // Preload the images to be used on the title screen
        this.game.load.spritesheet('Eve', 'assets/Spritesheets/Eve1_24-32.png', 24, 32);
        this.game.load.tilemap('Entrance', 'assets/tilemaps/Entrance.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.spritesheet('shoreBottom', 'assets/Spritesheets/beach.png', 16,32);
        this.game.load.spritesheet('waveBottom', 'assets/Spritesheets/wave.png', 16,32);


        this.game.load.image('TilesheetBiodome', 'assets/images/TilesheetBiodome.png');

    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.P2JS);
        game.state.start('entrance');
    }
};
