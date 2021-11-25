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

        // ------------------------- Recursos generales -------------------------
        new Phaser.Game(config);
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        var cursors;

        // ------------------------- Zonas de movimiento -------------------------
        // Suelos
        var suelo;
        var sueloD1;
        var sueloD2;
        var sueloI1;
        var sueloI2;

        // Escaleras
        var escaleras;
        var escalerasD;
        var escalerasI;
        var detectorD;
        var detectorI;

        // ------------------------- Jugadores -------------------------
        var P1;
        var P2;

        // ------------------------- Edificios -------------------------
        // Edificio 1 (izquierda)
        var vida1P1;
        var vida1P2;
        var vida1P3;

        var edificio1P1;
        var edificio1P2;
        var edificio1P3;

        var subirEscaleras1 = false;

        // Edificio 2 (derecha)
        var vida2P1;
        var vida2P2;
        var vida2P3;

        var edificio2P1;
        var edificio2P2;
        var edificio2P3;

        var subirEscaleras2 = false;

        // ------------------------- Cañones -------------------------
        // Cañones izquierda
        // Cañon 1
        var cannonHead1;
        var cannon1;
        var chick1;
        var gfx1;
        var line1;
        var angle1;

        // Cañones derecha
        // Cañon 4
        var cannonHead2;
        var cannon2;
        var chick2;
        var gfx2;
        var line2;
        var angle2;

    
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

            this.load.image('edificio_P1', 'assets/images/edificio_P1.png');
            this.load.image('edificio_P2', 'assets/images/edificio_P2.png');
            this.load.image('edificio_P3', 'assets/images/edificio_P3.png');

            this.load.spritesheet('edificio_parte1', 'assets/images/edificio_pruebas_parteArriba.png', { frameWidth: 100, frameHeight: 87 });
            this.load.spritesheet('edificio_parte2', 'assets/images/edificio_pruebas_parteMedio.png', { frameWidth: 100, frameHeight: 54 });
            this.load.spritesheet('edificio_parte3', 'assets/images/edificio_pruebas_parteAbajo.png', { frameWidth: 100, frameHeight: 54 });

            // Cargamos las imagenes de las zonas de movimiento
            this.load.image('suelo', 'assets/images/suelo_pruebas.png');
            this.load.image('escaleras', 'assets/images/escaleras_pruebas.png');
            this.load.image('detector_escaleras', 'assets/images/detector_escaleras_pruebas.png');

            // Cargamos las imagenes de los personajes
            this.load.spritesheet('P1', 'assets/images/personaje_pruebas.png', { frameWidth: 32, frameHeight: 48 });
    }

    function create ()
    {
            // Input del cursor
            cursors = this.input.keyboard.createCursorKeys();

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
                frames: [{ key: 'edificio_parte1', frame: 0 }]
            });
            this.anims.create({
                key: 'v2',
                frames: [{ key: 'edificio_parte1', frame: 1 }]
            });
            this.anims.create({
                key: 'v3',
                frames: [{ key: 'edificio_parte1', frame: 2 }]
            });

            this.anims.create({
                key: 'v4',
                frames: [{ key: 'edificio_parte2', frame: 0 }]
            });
            this.anims.create({
                key: 'v5',
                frames: [{ key: 'edificio_parte2', frame: 1 }]
            });
            this.anims.create({
                key: 'v6',
                frames: [{ key: 'edificio_parte2', frame: 2 }]
            });

            this.anims.create({
                key: 'v7',
                frames: [{ key: 'edificio_parte3', frame: 0 }]
            });
            this.anims.create({
                key: 'v8',
                frames: [{ key: 'edificio_parte3', frame: 1 }]
            });
            this.anims.create({
                key: 'v9',
                frames: [{ key: 'edificio_parte3', frame: 2 }]
            });

            // ------------------------- Fondo -------------------------
            this.add.image(640, 360, 'backdrop');

            // ------------------------- Edificios -------------------------
            // Creamos el edificio 1
            edificio1P1 = this.physics.add.sprite(1110, 165, 'edificio_parte1').setScale(3.5);
            edificio1P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
            edificio1P2 = this.physics.add.sprite(1110, 410, 'edificio_parte2').setScale(3.5);
            edificio1P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
            edificio1P3 = this.physics.add.sprite(1110, 600, 'edificio_parte3').setScale(3.5);
            edificio1P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);

            // Creamos el edificio 2
            edificio2P1 = this.physics.add.sprite(180, 165, 'edificio_parte1').setScale(3.5);
            edificio2P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
            edificio2P2 = this.physics.add.sprite(180, 410, 'edificio_parte2').setScale(3.5);
            edificio2P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
            edificio2P3 = this.physics.add.sprite(180, 600, 'edificio_parte3').setScale(3.5);
            edificio2P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);

            // ------------------------- Suelos -------------------------
            // Suelo principal
            suelo = this.physics.add.staticGroup();
            suelo.create(640, 775, 'suelo').setScale(3).refreshBody();

            // Suelo edificio derecha
            sueloD1 = this.physics.add.staticGroup();
            sueloD1.create(1080, 500, 'suelo').setScale(0.6).refreshBody();
            sueloD2 = this.physics.add.staticGroup();
            sueloD2.create(1080, 350, 'suelo').setScale(0.6).refreshBody();

            // Suelo edificio izquierda
            sueloI1 = this.physics.add.staticGroup();
            sueloI1.create(200, 500, 'suelo').setScale(0.6).refreshBody();
            sueloI2 = this.physics.add.staticGroup();
            sueloI2.create(200, 350, 'suelo').setScale(0.6).refreshBody();

            // ------------------------- Escaleras -------------------------
            // Escalera izquierda
            escalerasI = this.physics.add.staticGroup();
            escalerasI.create(25, 550, 'escaleras').setScale(0.45).refreshBody();

            // Detectores de la escalera izquierda
            detectorI = this.physics.add.staticGroup();
            detectorI.create(95, 550, 'detector_escaleras').setScale(0.31).refreshBody();
            detectorI.create(25, 0, 'detector_escaleras').setScale(0.27).refreshBody();
            
            // Escalera derecha
            escalerasD = this.physics.add.staticGroup();
            escalerasD.create(1250, 550, 'escaleras').setScale(0.45).refreshBody();

            // Detectores de la escalera derecha
            detectorD = this.physics.add.staticGroup();
            detectorD.create(1180, 550, 'detector_escaleras').setScale(0.31).refreshBody();
            detectorD.create(1250, 0, 'detector_escaleras').setScale(0.27).refreshBody();

            // ------------------------- Jugador 1 -------------------------
            P1 = this.physics.add.sprite(440, 600, 'P1');
            P1.setCollideWorldBounds(true);

            // ------------------------- Jugador 2 -------------------------
            P2 = this.physics.add.sprite(840, 600, 'P1');
            P2.setCollideWorldBounds(true);
            
            // ------------------------- Cañones derecha -------------------------
            // Creamos el cañon 1 (arriba)
            cannonHead1 = this.add.image(300, 300, 'cannon_head').setDepth(1).setScale(0.5);
            cannon1 = this.add.image(cannonHead1.x, cannonHead1.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
            chick1 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick').setScale(1.5);
            gfx1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
            line1 = new Phaser.Geom.Line();
            angle1 = 0;

            // ------------------------- Cañones izquierda -------------------------
            // Creamos el cañon 4 (arriba)
            cannonHead2 = this.add.image(980, 300, 'cannon_head').setDepth(2).setScale(0.5);
            cannon2 = this.add.image(cannonHead2.x, cannonHead2.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
            chick2 = this.physics.add.sprite(cannonHead2.x, cannonHead2.y, 'chick').setScale(1.5);
            gfx2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
            line2 = new Phaser.Geom.Line();
            angle2 = 0;
            
            // ------------------------- Fisicas -------------------------
            // ********** Personajes - suelos **********
            // P1
            this.physics.add.collider(P1, suelo);
            this.physics.add.collider(P1, sueloD1);
            this.physics.add.collider(P1, sueloD2);
            this.physics.add.collider(P1, sueloI1);
            this.physics.add.collider(P1, sueloI2);

            // P2
            this.physics.add.collider(P2, suelo);
            this.physics.add.collider(P2, sueloD1);
            this.physics.add.collider(P2, sueloD2);
            this.physics.add.collider(P2, sueloI1);
            this.physics.add.collider(P2, sueloI2);

            // ********** Personajes - escaleras **********
            // P1
            this.physics.add.overlap(P1, escalerasD, escalera1.bind());
            this.physics.add.overlap(P1, escalerasI, escalera1.bind());
            this.physics.add.overlap(P1, detectorD, noEscalera1.bind());
            this.physics.add.overlap(P1, detectorI, noEscalera1.bind());

            // P2
            this.physics.add.overlap(P2, escalerasD, escalera2.bind());
            this.physics.add.overlap(P2, escalerasI, escalera2.bind());
            this.physics.add.overlap(P2, detectorD, noEscalera2.bind());
            this.physics.add.overlap(P2, detectorI, noEscalera2.bind());

            // ********** Proyectil - edificio **********
            // P1
            this.physics.add.overlap(chick1, edificio1P1, hit11, null, this);
            this.physics.add.overlap(chick1, edificio1P2, hit12, null, this);
            this.physics.add.overlap(chick1, edificio1P3, hit13, null, this);

            // P2
            this.physics.add.overlap(chick2, edificio2P1, hit21, null, this);
            this.physics.add.overlap(chick2, edificio2P2, hit22, null, this);
            this.physics.add.overlap(chick2, edificio2P3, hit23, null, this);

            // ------------------------- Valores a variables -------------------------
            // Desactivamos la bala 1
            chick1.disableBody(true, true);
            // Desactivamos la bala 2
            chick2.disableBody(true, true);

            // Le asignamos la vida al edificio 1
            vida1P1 = 100;
            vida1P2 = 100;
            vida1P3 = 100;
            // Le asignamos la vida al edificio 2
            vida2P1 = 100;
            vida2P2 = 100;
            vida2P3 = 100;
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
        function hit11(chick1, edificio2) {
            this.add.image(chick1.x + 25, chick1.y, 'efecto_roto_1').setScale(0.05);

            chick1.disableBody(true, true);

            vida1P1 -= 10;
            console.log("11: " + vida1P1);

            if(vida1P1 <=60){
                edificio1P1.anims.play('v2');
            }
            if(vida1P1 <=30){
                edificio1P1.anims.play('v3');
            }
            if(vida1P1 <= 0){
                edificio1P1.setVelocity(0, 200);
            }
        }
        function hit12(chick1, edificio2) {
            this.add.image(chick1.x + 25, chick1.y, 'efecto_roto_1').setScale(0.05);

            chick1.disableBody(true, true);

            if(vida1P1 > 0 && vida1P2 > 50){
                vida1P2 -= 10;
            }else if(vida1P1 <= 0){
                vida1P2 -= 10;
            }

            console.log("12: " + vida1P2);

            if(vida1P2 <=60){
                edificio1P2.anims.play('v5');
            }
            if(vida1P2 <=30){
                edificio1P2.anims.play('v6');
            }
            if(vida1P2 <= 0){
                edificio1P2.setVelocity(0, 200);
            }
        }
        function hit13(chick1, edificio2) {
            this.add.image(chick1.x + 25, chick1.y, 'efecto_roto_1').setScale(0.05);

            chick1.disableBody(true, true);

            if(vida1P1 <= 0 && vida1P2 > 0 && vida1P3 > 50){
                vida1P3 -= 10;
            }else if(vida1P2 <= 0){
                vida1P3 -= 10;
            }

            console.log("13: " + vida1P3);

            if(vida1P3 <=60){
                edificio1P3.anims.play('v8');
            }
            if(vida1P3 <=30){
                edificio1P3.anims.play('v9');
            }
            if(vida1P3 <= 0){
                edificio1P3.setVelocity(0, 200);
            }
        }
        // Colisiones de los disparos del jugador 2
        function hit21(chick2, edificio1) {
            this.add.image(chick2.x - 35, chick2.y, 'efecto_roto_2').setScale(0.05);

            chick2.disableBody(true, true);

            vida2P1 -= 10;
            console.log("21: " + vida2P1);

            if(vida2P1 <=60){
                edificio2P1.anims.play('v2');
            }
            if(vida2P1 <=30){
                edificio2P1.anims.play('v3');
            }
            if(vida2P1 <= 0){
                edificio2P1.setVelocity(0, 200);
            }
        }
        function hit22(chick2, edificio1) {
            this.add.image(chick2.x - 35, chick2.y, 'efecto_roto_2').setScale(0.05);

            chick2.disableBody(true, true);

            if(vida2P1 > 0 && vida2P2 > 50){
                vida2P2 -= 10;
            }else if(vida2P1 <= 0){
                vida2P2 -= 10;
            }

            console.log("12: " + vida2P2);

            if(vida2P2 <=60){
                edificio2P2.anims.play('v5');
            }
            if(vida2P2 <=30){
                edificio2P2.anims.play('v6');
            }
            if(vida2P2 <= 0){
                edificio2P2.setVelocity(0, 200);
            }
        }
        function hit23(chick2, edificio1) {
            this.add.image(chick2.x - 35, chick2.y, 'efecto_roto_2').setScale(0.05);

            chick2.disableBody(true, true);

            if(vida2P1 <= 0 && vida2P2 > 0 && vida2P3 > 50){
                vida2P3 -= 10;
            }else if(vida2P2 <= 0){
                vida2P3 -= 10;
            }

            console.log("13: " + vida2P3);

            if(vida2P3 <=60){
                edificio2P3.anims.play('v8');
            }
            if(vida2P3 <=30){
                edificio2P3.anims.play('v9');
            }
            if(vida2P3 <= 0){
                edificio2P3.setVelocity(0, 200);
            }
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

