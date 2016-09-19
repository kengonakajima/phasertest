
window.onload = function() {

    //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
    //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
    //  Be sure to replace it with an updated version before you start experimenting with adding your own code.

    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update:update });

    function preload () {
        game.load.image('logo', 'phaser.png');
        game.load.image("ene", "ene.png");
    }

    function range(x,y) {
        return x + (y-x) * Math.random();
    }
    var n = 20000;
    var enemies = [];
    function create () {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        for(var i=0;i<n;i++) {
            enemies[i] = game.add.sprite(game.world.centerX +range(-100,100) , game.world.centerY + range(-100,100), "ene" );
            enemies[i].vx = range(-5,5);
            enemies[i].vy = range(-5,5);            
        }
    }
    function update() {
        for(var i=0;i<n;i++) {
            enemies[i].x += enemies[i].vx;
            enemies[i].y += enemies[i].vy;
            if( enemies[i].x < 0 || enemies[i].x > 700 ) enemies[i].vx *= -1;
            if( enemies[i].y < 0 || enemies[i].y > 700 ) enemies[i].vy *= -1;            
        }
    }

};
