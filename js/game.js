// Create the game object
var game = new Phaser.Game(640, 400, Phaser.AUTO, 'gameDiv');

// Create the states of the game
game.state.add('title', TitleState);
game.state.add('boot', BootState);
game.state.add('loadTitle', LoadTitleState);
game.state.add('loadWorld', LoadWorldState);
game.state.add('world', WorldState);


// Load the first state
game.state.start('boot');