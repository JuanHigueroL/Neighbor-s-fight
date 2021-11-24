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
        var config = {
            type: Phaser.AUTO,
            width: 1280,
            height: 720,
            parent: 'phaser-example',
            pixelArt: true,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false,
                    gravity: { y: 300 }
                }
            },
            scene: {
                preload: preload,
                create: create,
                update: update
            }
        };

        // Recursos generales
        new Phaser.Game(config);
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        var cursors;

        // Variables de zonas de movimiento
        var suelos;
        var escaleras;
        var detectorD;
        var detectorI;

        // ------------------------- Jugador 1 -------------------------
        var cannonHead1;
        var cannon1;
        var chick1;
        var gfx1;
        var line1;
        var angle1;

        var edificio1;
        var vida1;

        var P1;

        var subirEscaleras1 = false;

        // ------------------------- Jugador 2 -------------------------
        var cannonHead2;
        var cannon2;
        var chick2;
        var gfx2;
        var line2;
        var angle2;

        var edificio2;
        var vida2;

        var P2;

        var subirEscaleras2 = false;
    
    function preload ()
    {
            // KeyCodes
            console.log(Phaser.Input.Keyboard.KeyCodes);

            // Cargamos la imagen del fondo
            this.load.image('backdrop', 'assets/images/background.png');

            // Cargamos las imagenes del cañon
            this.load.image('cannon_head', 'assets/images/cannon_head.png');
            this.load.image('cannon_body', 'assets/images/cannon_body.png');
            this.load.spritesheet('chick', 'assets/images/pollo.png', { frameWidth: 16, frameHeight: 18 });

            // Cargamos las imagenes de los edificios
            this.load.image('edificio1', 'assets/images/edificio_v1.png');
            this.load.image('efecto_roto_1', 'assets/images/efecto_roto_1.png');
            this.load.image('efecto_roto_2', 'assets/images/efecto_roto_2.png');

            this.load.spritesheet('edificio_parte1', 'assets/images/edificio_pruebas_parteArriba.png', { frameWidth: 100, frameHeight: 87 });
            this.load.spritesheet('edificio_parte2', 'assets/images/edificio_pruebas_parteMedio.png', { frameWidth: 100, frameHeight: 54 });
            this.load.spritesheet('edificio_parte3', 'assets/images/edificio_pruebas_parteAbajo.png', { frameWidth: 100, frameHeight: 87 });
    }

    function create ()
    {
            // Input del cursor
            cursors = this.input.keyboard.createCursorKeys();
            // Añadimos fisicas estaticas a los suelos
            suelos = this.physics.add.staticGroup();

            // ------------------------- Escenario -------------------------
            // Añadimos el fondo
            this.add.image(640, 360, 'backdrop');

            // Creamos los suelos
            suelos.create(640, 750, 'suelo').setScale(2).refreshBody();
            suelos.create(800, 500, 'suelo').setScale(0.5).refreshBody();

            // Creamos las escaleras
            escaleras = this.physics.add.staticGroup();
            escaleras.create(640, 550, 'escaleras').setScale(0.25).refreshBody();
            // Creamos los detectores de la escalera
            escalerasD = this.physics.add.staticGroup();
            escalerasD.create(680, 550, 'escaleras').setScale(0.25).refreshBody();
            escalerasI = this.physics.add.staticGroup();
            escalerasI.create(600, 550, 'escaleras').setScale(0.25).refreshBody();

            // ------------------------- Animaciones -------------------------
            // Animaciones del personaje
            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('P1', { start: 0, end: 3 }),
                frameRate: 10,
                repeat: -1
            });
            this.anims.create({
                key: 'turn',
                frames: [{ key: 'P1', frame: 4 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('P1', { start: 5, end: 8 }),
                frameRate: 10,
                repeat: -1
            });

            // Animacion del pollo
            this.anims.create({
                key: 'fly',
                frames: this.anims.generateFrameNumbers('chick', [0, 1, 2, 3]),
                frameRate: 5,
                repeat: -1
            });

            // Frames de los edificios
            this.anims.create({
                key: 'v1',
                frames: [{ key: 'edificio_parte1', frame: 1 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v2',
                frames: [{ key: 'edificio_parte1', frame: 2 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v3',
                frames: [{ key: 'edificio_parte1', frame: 3 }],
                frameRate: 20
            });

            this.anims.create({
                key: 'v4',
                frames: [{ key: 'edificio_parte2', frame: 1 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v5',
                frames: [{ key: 'edificio_parte2', frame: 2 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v6',
                frames: [{ key: 'edificio_parte2', frame: 3 }],
                frameRate: 20
            });

            this.anims.create({
                key: 'v7',
                frames: [{ key: 'edificio_parte3', frame: 1 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v8',
                frames: [{ key: 'edificio_parte3', frame: 2 }],
                frameRate: 20
            });
            this.anims.create({
                key: 'v9',
                frames: [{ key: 'edificio_parte3', frame: 3 }],
                frameRate: 20
            });

            // ------------------------- Jugador 1 -------------------------
            // Creamos al jugador 1
            P1 = this.physics.add.sprite(440, 600, 'P1');
            P1.setCollideWorldBounds(true);
            this.physics.add.collider(P1, suelos);

            // Creamos el edificio 1
            edificio1 = this.physics.add.staticGroup();
            edificio1.create(1100, 400, 'edificio1').setScale(3.5).refreshBody();

            // Creamos el cañon 1 (arriba)
            cannonHead1 = this.add.image(300, 300, 'cannon_head').setDepth(1).setScale(0.5);
            cannon1 = this.add.image(cannonHead1.x, cannonHead1.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
            chick1 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick').setScale(1.5);
            gfx1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
            line1 = new Phaser.Geom.Line();
            angle1 = 0;

            // Añadimos la deteccion de fisicas entre el proyectil 1 y el edificio 2
            this.physics.add.collider(chick1, edificio1, hit1, null, this);

            // Desactivamos la bala 1
            chick1.disableBody(true, true);

            // Le asignamos la vida al edificio 1
            vida1 = 100;

            // Creamos la deteccion entre el jugador 1 y las escaleras
            this.physics.add.overlap(P1, escaleras, escalera1.bind());
            this.physics.add.overlap(P1, escalerasD, noEscalera1.bind());
            this.physics.add.overlap(P1, escalerasI, noEscalera1.bind());

            // ------------------------- Jugador 2 -------------------------
            // Creamos al jugador 2
            P2 = this.physics.add.sprite(840, 600, 'P1');
            P2.setCollideWorldBounds(true);
            this.physics.add.collider(P2, suelos);

            // Creamos el edificio 2
            edificio2 = this.physics.add.staticGroup();
            edificio2.create(180, 400, 'edificio1').setScale(3.5).refreshBody();

            // Creamos el cañon 2 (arriba)
            cannonHead2 = this.add.image(980, 300, 'cannon_head').setDepth(2).setScale(0.5);
            cannon2 = this.add.image(cannonHead2.x, cannonHead2.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
            chick2 = this.physics.add.sprite(cannonHead2.x, cannonHead2.y, 'chick').setScale(1.5);
            gfx2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
            line2 = new Phaser.Geom.Line();
            angle2 = 0;

            // Añadimos la deteccion de fisicas entre el proyectil 2 y el edificio 1
            this.physics.add.collider(chick2, edificio2, hit2, null, this);

            // Desactivamos la bala 2
            chick2.disableBody(true, true);

            // Le asignamos la vida al edificio 2
            vida2 = 100;

            // Creamos la deteccion entre el jugador 2 y las escaleras
            this.physics.add.overlap(P2, escaleras, escalera2.bind());
            this.physics.add.overlap(P2, escalerasD, noEscalera2.bind());
            this.physics.add.overlap(P2, escalerasI, noEscalera2.bind());
    }

    function update ()
    {
            // ------------------------- Jugador 1 -------------------------
            // Girar cañon
            if (cursors.up.isDown && angle1 >= -1) {
                angle1 = cannonHead1.rotation - 0.02;
                cannonHead1.rotation = angle1;
            }
            else if (cursors.down.isDown && angle1 <= 1) {
                angle1 = cannonHead1.rotation + 0.02;
                cannonHead1.rotation = angle1;
            }

            Phaser.Geom.Line.SetToAngle(line1, cannonHead1.x, cannonHead1.y, angle1, 128);
            gfx1.clear().strokeLineShape(line1);

            if (cursors.space.isDown) {
                chick1.enableBody(true, cannon1.x, cannon1.y - 25, true, true);
                chick1.play('fly');
                this.physics.velocityFromRotation(angle1, 800, chick1.body.velocity);
            }

            // Mover personaje
            this.input.keyboard.on("keydown_A", () => {
                P1.setVelocityX(-200);

                P1.anims.play('left', true);
            });
            this.input.keyboard.on("keydown_D", () => {
                P1.setVelocityX(200);

                P1.anims.play('right', true);
            });
            this.input.keyboard.on("keyup_A", () => {
                P1.setVelocityX(0);

                P1.anims.play('turn');
            });
            this.input.keyboard.on("keyup_D", () => {
                P1.setVelocityX(0);

                P1.anims.play('turn');
            });

            // Escaleras
            this.input.keyboard.on("keydown_W", () => {
                if (subirEscaleras1 === true) {
                    P1.setVelocityY(-200);
                }
            });
            this.input.keyboard.on("keydown_S", () => {
                if (subirEscaleras1 === true) {
                    P1.setVelocityY(200);
                }
            });

            // ------------------------- Jugador 2 -------------------------
            // Girar cañon
            if (cursors.right.isDown && angle2 >= -1) {
                angle2 = cannonHead2.rotation - 0.02;
                cannonHead2.rotation = angle2;
            }
            else if (cursors.left.isDown && angle2 <= 1) {
                angle2 = cannonHead2.rotation + 0.02;
                cannonHead2.rotation = angle2;
            }

            Phaser.Geom.Line.SetToAngle(line2, cannonHead2.x, cannonHead2.y, 3.14159265 + angle2, 128);
            gfx2.clear().strokeLineShape(line2);

            if (cursors.shift.isDown) {
                chick2.enableBody(true, cannon2.x, cannon2.y - 25, true, true);
                chick2.play('fly');
                this.physics.velocityFromRotation(angle2, -800, chick2.body.velocity);
            }

            // Mover personaje
            this.input.keyboard.on("keydown_J", () => {
                P2.setVelocityX(-200);

                P2.anims.play('left', true);
            });
            this.input.keyboard.on("keydown_L", () => {
                P2.setVelocityX(200);

                P2.anims.play('right', true);
            });
            this.input.keyboard.on("keyup_J", () => {
                P2.setVelocityX(0);

                P2.anims.play('turn');
            });
            this.input.keyboard.on("keyup_L", () => {
                P2.setVelocityX(0);

                P2.anims.play('turn');
            });

            // Escaleras
            this.input.keyboard.on("keydown_I", () => {
                if (subirEscaleras2 === true) {
                    P2.setVelocityY(-200);
                }
            });
            this.input.keyboard.on("keydown_K", () => {
                if (subirEscaleras2 === true) {
                    P2.setVelocityY(200);
                }
            });
            
            /*
            // Otra forma de girar los cañones pero que a la larga se bugea
            var incremento = 0.0002;
            this.input.keyboard.on("keydown_S", () => {
                if (angle2 >= -1) {
                    angle2 = cannonHead2.rotation - incremento;
                    cannonHead2.rotation = angle2;
                }
            });
            this.input.keyboard.on("keydown_W", () => {
                if (angle2 <= 1) {
                    angle2 = cannonHead2.rotation + incremento;
                    cannonHead2.rotation = angle2;
                }
            });*/
    }
        // Colisiones de los disparos del jugador 1
        function hit1(chick1, edificio2) {
            this.add.image(chick1.x + 30, chick1.y, 'efecto_roto_1').setScale(0.05);

            chick1.disableBody(true, true);

            vida1 -= 10;
            console.log(vida1);
        }
        // Colisiones de los disparos del jugador 2
        function hit2(chick2, edificio1) {
            this.add.image(chick2.x - 35, chick2.y, 'efecto_roto_2').setScale(0.05);

            chick2.disableBody(true, true);

            vida2 -= 10;
            console.log(vida2);
        }

        // Detectores de subir escaleras del jugador 1
        function escalera1() {
            subirEscaleras1 = true;
        };
        function noEscalera1() {
            subirEscaleras1 = false;
        };
        // Detectores de subir escaleras del jugador 2
        function escalera2() {
            subirEscaleras2 = true;
        };
        function noEscalera2() {
            subirEscaleras2 = false;
        };
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

