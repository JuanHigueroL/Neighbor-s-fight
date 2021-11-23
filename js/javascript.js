class EscenaInicio extends Phaser.Scene{
    preload ()
    {
        //cargar imgs
    }

    create ()
    {
        //mostrar imgs
    }

    update ()
    {
    }
}


class EscenaJuego extends Phaser.Scene{
    preload ()
    {
        //cargar imgs
    }

    create ()
    {
        //mostrar imgs
    }

    update ()
    {
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: EscenaInicio,
    scale: {
        mode: Phaser.scale
    }
};

var game = new Phaser.Game(config);

