// Create the game object
var game = new Phaser.Game(640, 400, Phaser.AUTO, 'gameDiv');

// Create the states of the game
game.state.add('title', TitleState);
game.state.add('boot', BootState);
game.state.add('loadTitle', LoadTitleState);
game.state.add('loadEntrance', LoadEntranceState);
game.state.add('entrance', EntranceState);
game.state.add('loadForest1', LoadForest1State);
game.state.add('forest1', Forest1State);



//game.state.add('loadWorld', LoadWorldState);
//game.state.add('world', WorldState);


// Load the first state
game.state.start('boot');