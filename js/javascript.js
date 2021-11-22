const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    scale: {
        mode: Phaser.scale
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //cargar imgs
}

function create ()
{
    //mostrar imgs
}

function update ()
{
}
