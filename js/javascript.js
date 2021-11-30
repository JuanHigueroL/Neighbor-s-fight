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
var game = new Phaser.Game(config);
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
var municion1 = [10, 10, 10];
var bala1 = 0;

var P2;
var municion2 = [10, 10, 10];
var bala2 = 0;

// ------------------------- Edificios -------------------------
var vidaMax = 100;

// Edificio 1 (izquierda)
var vida1P1 = 100;
var vida1P2 = 100;
var vida1P3 = 100;

var edificio1P1;
var edificio1P2;
var edificio1P3;

var subirEscaleras1 = false;

// Edificio 2 (derecha)
var vida2P1 = 100;
var vida2P2 = 100;
var vida2P3 = 100;

var edificio2P1;
var edificio2P2;
var edificio2P3;

var subirEscaleras2 = false;

// Barras de vida
var configBarra1;
var configBarra2;
var configBarra3;
var configBarra4;
var configBarra5;
var configBarra6;
var barra1;
var barra2;
var barra3;
var barra4;
var barra5;
var barra6;

// ------------------------- Cañones -------------------------
// Variables de disparo
var tiempos = [2000, 3000, 5000];
var daños = [10, 20, 50];
var pollos = [];
var maxAngle = 0.4;

// Cañones izquierda
// Cañon 1
var cannonHead1;
var cannon1;
var gfx1;
var line1;
var angle1;

// Cañon 2
var cannonHead2;
var cannon2;
var gfx2;
var line2;
var angle2;

// Cañon 3
var cannonHead3;
var cannon3;
var gfx3;
var line3;
var angle3;

// Cañones derecha
// Cañon 4
var cannonHead4;
var cannon4;
var gfx4;
var line4;
var angle4;

// Cañon 5
var cannonHead5;
var cannon5;
var gfx5;
var line5;
var angle5;

// Cañon 6
var cannonHead6;
var cannon6;
var gfx6;
var line6;
var angle6;

// ------------------------- Proyectiles -------------------------
var chick1;
var chick2;
var chick3;
var chick4;
var chick5;
var chick6;

// ------------------------- Crafteo -------------------------
var mesa1;
var mesa2;

var timer1;
var timer2;

var crafteando1 = false;
var crafteando2 = false;

// Prueba de detectar la duracion de la pulsacion (no funciona)
//var key;

function preload() {
    // Prueba de detectar la duracion de la pulsacion (no funciona): 
    // http://labs.phaser.io/edit.html?src=src\input\keyboard\key%20down%20duration.js
    // KeyCodes
    console.log(Phaser.Input.Keyboard.KeyCodes);

    // Cargamos la imagen del fondo
    this.load.image('backdrop', 'assets/images/background.png');

    // Cargamos las imagenes del cañon
    this.load.image('cannon_head', 'assets/images/cannon_head.png');
    this.load.image('cannon_body', 'assets/images/cannon_body.png');
    this.load.spritesheet('chick1', 'assets/images/pollo1.png', { frameWidth: 16, frameHeight: 18 });
    this.load.spritesheet('chick2', 'assets/images/pollo2.png', { frameWidth: 16, frameHeight: 18 });
    this.load.spritesheet('chick3', 'assets/images/pollo3.png', { frameWidth: 16, frameHeight: 18 });
    this.load.spritesheet('chick4', 'assets/images/pollo4.png', { frameWidth: 16, frameHeight: 18 });
    this.load.spritesheet('chick5', 'assets/images/pollo5.png', { frameWidth: 16, frameHeight: 18 });
    this.load.spritesheet('chick6', 'assets/images/pollo6.png', { frameWidth: 16, frameHeight: 18 });

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

    // Cargamos la imagen de la mesa de crafteo
    this.load.image('mesa', 'assets/images/mesa_crafteo.png');
}


function create() {
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
        key: 'fly0',
        frames: this.anims.generateFrameNumbers('chick1', [0, 1, 2, 3]),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'fly1',
        frames: this.anims.generateFrameNumbers('chick2', [0, 1, 2, 3]),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'fly2',
        frames: this.anims.generateFrameNumbers('chick3', [0, 1, 2, 3]),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'fly3',
        frames: this.anims.generateFrameNumbers('chick4', [0, 1, 2, 3]),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'fly4',
        frames: this.anims.generateFrameNumbers('chick5', [0, 1, 2, 3]),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'fly5',
        frames: this.anims.generateFrameNumbers('chick6', [0, 1, 2, 3]),
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

    mesa1 = this.add.image(500, 660, 'mesa').setDepth(1).setScale(0.5);

    // ------------------------- Jugador 2 -------------------------
    P2 = this.physics.add.sprite(840, 600, 'P1');
    P2.setCollideWorldBounds(true);

    mesa2 = this.add.image(780, 660, 'mesa').setDepth(1).setScale(0.5);

    // ------------------------- Cañones derecha -------------------------
    // Creamos el cañon 1 (arriba)
    cannonHead1 = this.add.image(300, 300, 'cannon_head').setDepth(1).setScale(0.5);
    cannon1 = this.add.image(cannonHead1.x, cannonHead1.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line1 = new Phaser.Geom.Line();
    angle1 = 0;

    // Creamos el cañon 2 (medio)
    cannonHead2 = this.add.image(300, 450, 'cannon_head').setDepth(1).setScale(0.5);
    cannon2 = this.add.image(cannonHead2.x, cannonHead2.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line2 = new Phaser.Geom.Line();
    angle2 = 0;

    // Creamos el cañon 3 (abajo)
    cannonHead3 = this.add.image(300, 650, 'cannon_head').setDepth(1).setScale(0.5);
    cannon3 = this.add.image(cannonHead3.x, cannonHead3.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx3 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line3 = new Phaser.Geom.Line();
    angle3 = 0;

    // ------------------------- Cañones izquierda -------------------------
    // Creamos el cañon 4 (arriba)
    cannonHead4 = this.add.image(980, 300, 'cannon_head').setDepth(2).setScale(0.5);
    cannon4 = this.add.image(cannonHead4.x, cannonHead4.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx4 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line4 = new Phaser.Geom.Line();
    angle4 = 0;

    // Creamos el cañon 5 (medio)
    cannonHead5 = this.add.image(980, 450, 'cannon_head').setDepth(2).setScale(0.5);
    cannon5 = this.add.image(cannonHead5.x, cannonHead5.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx5 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line5 = new Phaser.Geom.Line();
    angle5 = 0;

    // Creamos el cañon 6 (abajo)
    cannonHead6 = this.add.image(980, 650, 'cannon_head').setDepth(2).setScale(0.5);
    cannon6 = this.add.image(cannonHead6.x, cannonHead6.y + 20, 'cannon_body').setDepth(1).setScale(0.5);
    gfx6 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
    line6 = new Phaser.Geom.Line();
    angle6 = 0;

    // ------------------------- Proyectiles -------------------------
    chick1 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick1').setScale(1.5);
    chick2 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick2').setScale(1.5);
    chick3 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick3').setScale(1.5);
    chick4 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick4').setScale(1.5);
    chick5 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick5').setScale(1.5);
    chick6 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick6').setScale(1.5);

    chick1.disableBody(true, true);
    chick2.disableBody(true, true);
    chick3.disableBody(true, true);
    chick4.disableBody(true, true);
    chick5.disableBody(true, true);
    chick6.disableBody(true, true);

    pollos[0] = chick1;
    pollos[1] = chick2;
    pollos[2] = chick3;
    pollos[3] = chick4;
    pollos[4] = chick5;
    pollos[5] = chick6;

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

    this.physics.add.overlap(chick2, edificio1P1, hit11, null, this);
    this.physics.add.overlap(chick2, edificio1P2, hit12, null, this);
    this.physics.add.overlap(chick2, edificio1P3, hit13, null, this);

    this.physics.add.overlap(chick3, edificio1P1, hit11, null, this);
    this.physics.add.overlap(chick3, edificio1P2, hit12, null, this);
    this.physics.add.overlap(chick3, edificio1P3, hit13, null, this);

    // P2
    this.physics.add.overlap(chick4, edificio2P1, hit21, null, this);
    this.physics.add.overlap(chick4, edificio2P2, hit22, null, this);
    this.physics.add.overlap(chick4, edificio2P3, hit23, null, this);

    this.physics.add.overlap(chick5, edificio2P1, hit21, null, this);
    this.physics.add.overlap(chick5, edificio2P2, hit22, null, this);
    this.physics.add.overlap(chick5, edificio2P3, hit23, null, this);

    this.physics.add.overlap(chick6, edificio2P1, hit21, null, this);
    this.physics.add.overlap(chick6, edificio2P2, hit22, null, this);
    this.physics.add.overlap(chick6, edificio2P3, hit23, null, this);

    // ------------------------- Barras de vida -------------------------
    configBarra1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    configBarra2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    configBarra3 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    configBarra4 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    configBarra5 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    configBarra6 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFF0000, alpha: 1 } });
    barra1 = new Phaser.Geom.Line();
    barra2 = new Phaser.Geom.Line();
    barra3 = new Phaser.Geom.Line();
    barra4 = new Phaser.Geom.Line();
    barra5 = new Phaser.Geom.Line();
    barra6 = new Phaser.Geom.Line();

    // Prueba de detectar la duracion de la pulsacion (no funciona)
    //key = this.input.keyboard.addKey('A');
}

function update() {
    // Prueba de detectar la duracion de la pulsacion (no funciona)
    //key.getDuration();
    // ------------------------- Jugador 1 -------------------------
    // Girar cañon 1
    var distancia1X = P1.x - cannonHead1.x;
    if (distancia1X < 0) {
        distancia1X = -distancia1X;
    }
    var distancia1Y = P1.y - cannonHead1.y;
    if (distancia1Y < 0) {
        distancia1Y = -distancia1Y;
    }
    var distancia1 = distancia1X + distancia1Y;
    if (distancia1 <= 50) {
        if (cursors.up.isDown && angle1 >= -maxAngle / 3) {
            angle1 = cannonHead1.rotation - 0.02;
            cannonHead1.rotation = angle1;
        }
        else if (cursors.down.isDown && angle1 <= maxAngle / 3) {
            angle1 = cannonHead1.rotation + 0.02;
            cannonHead1.rotation = angle1;
        }

        if (this.input.keyboard.checkDown(cursors.space, 1000) && municion1[bala1] > 0) {
            pollos[bala1].enableBody(true, cannon1.x, cannon1.y - 25, true, true);
            pollos[bala1].play('fly' + bala1);
            this.physics.velocityFromRotation(angle1, 800, pollos[bala1].body.velocity);
            municion1[bala1]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line1, cannonHead1.x, cannonHead1.y, angle1, 128);
    gfx1.clear().strokeLineShape(line1);

    // Girar cañon 2
    var distancia2X = P1.x - cannonHead2.x;
    if (distancia2X < 0) {
        distancia2X = -distancia2X;
    }
    var distancia2Y = P1.y - cannonHead2.y;
    if (distancia2Y < 0) {
        distancia2Y = -distancia2Y;
    }
    var distancia2 = distancia2X + distancia2Y;
    if (distancia2 <= 50) {
        if (cursors.up.isDown && angle2 >= -maxAngle) {
            angle2 = cannonHead2.rotation - 0.02;
            cannonHead2.rotation = angle2;
        }
        else if (cursors.down.isDown && angle2 <= maxAngle) {
            angle2 = cannonHead2.rotation + 0.02;
            cannonHead2.rotation = angle2;
        }

        if (this.input.keyboard.checkDown(cursors.space, 1000) && municion1[bala1] > 0) {
            pollos[bala1].enableBody(true, cannon2.x, cannon2.y - 25, true, true);
            pollos[bala1].play('fly' + bala1);
            this.physics.velocityFromRotation(angle2, 800, pollos[bala1].body.velocity);
            municion1[bala1]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line2, cannonHead2.x, cannonHead2.y, angle2, 128);
    gfx2.clear().strokeLineShape(line2);

    // Girar cañon 3
    var distancia3X = P1.x - cannonHead3.x;
    if (distancia3X < 0) {
        distancia3X = -distancia3X;
    }
    var distancia3Y = P1.y - cannonHead3.y;
    if (distancia3Y < 0) {
        distancia3Y = -distancia3Y;
    }
    var distancia3 = distancia3X + distancia3Y;
    if (distancia3 <= 50) {
        if (cursors.up.isDown && angle3 >= -maxAngle) {
            angle3 = cannonHead3.rotation - 0.02;
            cannonHead3.rotation = angle3;
        }
        else if (cursors.down.isDown && angle3 <= maxAngle) {
            angle3 = cannonHead3.rotation + 0.02;
            cannonHead3.rotation = angle3;
        }

        if (this.input.keyboard.checkDown(cursors.space, 5000) && municion1[bala1] > 0) {
            pollos[bala1].enableBody(true, cannon3.x, cannon3.y - 25, true, true);
            pollos[bala1].play('fly' + bala1);
            this.physics.velocityFromRotation(angle3, 800, pollos[bala1].body.velocity);
            municion1[bala1]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line3, cannonHead3.x, cannonHead3.y, angle3, 128);
    gfx3.clear().strokeLineShape(line3);

    // Mover personaje
    this.input.keyboard.on("keydown_A", () => {
        if (crafteando1 === false) {
            P1.setVelocityX(-200);

            P1.anims.play('left', true);
        }
    });
    this.input.keyboard.on("keydown_D", () => {
        if (crafteando1 === false) {
            P1.setVelocityX(200);

            P1.anims.play('right', true);
        }
    });
    this.input.keyboard.on("keyup_A", () => {
        if (crafteando1 === false) {
            P1.setVelocityX(0);

            P1.anims.play('turn');
        }
    });
    this.input.keyboard.on("keyup_D", () => {
        if (crafteando1 === false) {
            P1.setVelocityX(0);

            P1.anims.play('turn');
        }
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

    // Craftear
    var distanciaMesa1X = P1.x - mesa1.x;
    if (distanciaMesa1X < 0) {
        distanciaMesa1X = -distanciaMesa1X;
    }
    var distanciaMesa1Y = P1.y - mesa1.y;
    if (distanciaMesa1Y < 0) {
        distanciaMesa1Y = -distanciaMesa1Y;
    }
    var distanciaMesa1 = distanciaMesa1X + distanciaMesa1Y;

    if (this.input.keyboard.checkDown(cursors.space, tiempos[bala1]) && distanciaMesa1 <= 50 && crafteando1 === false) {
        crafteando1 = true;
        timer1 = this.time.delayedCall(tiempos[bala1], añadirMunicion1, [], this);
    }

    // Cambiar balas
    this.input.keyboard.on("keydown_ONE", () => {
        bala1 = 0;
    });
    this.input.keyboard.on("keydown_TWO", () => {
        bala1 = 1;
    });
    this.input.keyboard.on("keydown_THREE", () => {
        bala1 = 2;
    });

    // ------------------------- Jugador 2 -------------------------
    // Girar cañon 4
    var distancia4X = P2.x - cannonHead4.x;
    if (distancia4X < 0) {
        distancia4X = -distancia4X;
    }
    var distancia4Y = P2.y - cannonHead4.y;
    if (distancia4Y < 0) {
        distancia4Y = -distancia4Y;
    }
    var distancia4 = distancia4X + distancia4Y;
    if (distancia4 <= 50) {
        if (cursors.right.isDown && angle4 >= -maxAngle / 3) {
            angle4 = cannonHead4.rotation - 0.02;
            cannonHead4.rotation = angle4;
        }
        else if (cursors.left.isDown && angle4 <= maxAngle / 3) {
            angle4 = cannonHead4.rotation + 0.02;
            cannonHead4.rotation = angle4;
        }

        if (this.input.keyboard.checkDown(cursors.shift, 1000) && municion2[bala2] > 0) {
            pollos[bala2 + 3].enableBody(true, cannon4.x, cannon4.y - 25, true, true);
            pollos[bala2 + 3].play('fly' + (bala2 + 3));
            this.physics.velocityFromRotation(angle4, -800, pollos[bala2 + 3].body.velocity);
            municion2[bala2]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line4, cannonHead4.x, cannonHead4.y, 3.14159265 + angle4, 128);
    gfx4.clear().strokeLineShape(line4);

    // Girar cañon 5
    var distancia5X = P2.x - cannonHead5.x;
    if (distancia5X < 0) {
        distancia5X = -distancia5X;
    }
    var distancia5Y = P2.y - cannonHead5.y;
    if (distancia5Y < 0) {
        distancia5Y = -distancia5Y;
    }
    var distancia5 = distancia5X + distancia5Y;
    if (distancia5 <= 50) {
        if (cursors.right.isDown && angle5 >= -maxAngle) {
            angle5 = cannonHead5.rotation - 0.02;
            cannonHead5.rotation = angle5;
        }
        else if (cursors.left.isDown && angle5 <= maxAngle) {
            angle5 = cannonHead5.rotation + 0.02;
            cannonHead5.rotation = angle5;
        }

        if (this.input.keyboard.checkDown(cursors.shift, 1000) && municion2[bala2] > 0) {
            pollos[bala2 + 3].enableBody(true, cannon5.x, cannon5.y - 25, true, true);
            pollos[bala2 + 3].play('fly' + (bala2 + 3));
            this.physics.velocityFromRotation(angle5, -800, pollos[bala2 + 3].body.velocity);
            municion2[bala2]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line5, cannonHead5.x, cannonHead5.y, 3.14159265 + angle5, 128);
    gfx5.clear().strokeLineShape(line5);

    // Girar cañon 6
    var distancia6X = P2.x - cannonHead6.x;
    if (distancia6X < 0) {
        distancia6X = -distancia6X;
    }
    var distancia6Y = P2.y - cannonHead6.y;
    if (distancia6Y < 0) {
        distancia6Y = -distancia6Y;
    }
    var distancia6 = distancia6X + distancia6Y;
    if (distancia6 <= 50) {
        if (cursors.right.isDown && angle6 >= -maxAngle) {
            angle6 = cannonHead6.rotation - 0.02;
            cannonHead6.rotation = angle6;
        }
        else if (cursors.left.isDown && angle6 <= maxAngle) {
            angle6 = cannonHead6.rotation + 0.02;
            cannonHead6.rotation = angle6;
        }

        if (this.input.keyboard.checkDown(cursors.shift, 1000) && municion2[bala2] > 0) {
            pollos[bala2 + 3].enableBody(true, cannon6.x, cannon6.y - 25, true, true);
            pollos[bala2 + 3].play('fly' + (bala2 + 3));
            this.physics.velocityFromRotation(angle6, -800, pollos[bala2 + 3].body.velocity);
            municion2[bala2]--;
        }
    }

    Phaser.Geom.Line.SetToAngle(line6, cannonHead6.x, cannonHead6.y, 3.14159265 + angle6, 128);
    gfx6.clear().strokeLineShape(line6);

    // Mover personaje
    this.input.keyboard.on("keydown_J", () => {
        if (crafteando2 === false) {
            P2.setVelocityX(-200);

            P2.anims.play('left', true);
        }
    });
    this.input.keyboard.on("keydown_L", () => {
        if (crafteando2 === false) {
            P2.setVelocityX(200);

            P2.anims.play('right', true);
        }
    });
    this.input.keyboard.on("keyup_J", () => {
        if (crafteando2 === false) {
            P2.setVelocityX(0);

            P2.anims.play('turn');
        }
    });
    this.input.keyboard.on("keyup_L", () => {
        if (crafteando2 === false) {
            P2.setVelocityX(0);

            P2.anims.play('turn');
        }
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

    // Craftear
    var distanciaMesa2X = P2.x - mesa2.x;
    if (distanciaMesa2X < 0) {
        distanciaMesa2X = -distanciaMesa2X;
    }
    var distanciaMesa2Y = P2.y - mesa2.y;
    if (distanciaMesa2Y < 0) {
        distanciaMesa2Y = -distanciaMesa2Y;
    }
    var distanciaMesa2 = distanciaMesa2X + distanciaMesa2Y;

    if (this.input.keyboard.checkDown(cursors.shift, tiempos[bala2]) && distanciaMesa2 <= 50 && crafteando2 === false) {
        crafteando2 = true;
        timer2 = this.time.delayedCall(tiempos[bala2], añadirMunicion2, [], this);
    }

    /*
    // Otra forma de girar los cañones pero que a la larga se bugea
    var incremento = 0.0002;
    this.input.keyboard.on("keydown_S", () => {
        if (angle4 >= -1) {
            angle4 = cannonHead4.rotation - incremento;
            cannonHead4.rotation = angle4;
        }
    });
    this.input.keyboard.on("keydown_W", () => {
        if (angle4 <= 1) {
            angle4 = cannonHead4.rotation + incremento;
            cannonHead4.rotation = angle4;
        }
    });*/

    // Cambiar balas
    this.input.keyboard.on("keydown_SEVEN", () => {
        bala2 = 0;
    });
    this.input.keyboard.on("keydown_EIGHT", () => {
        bala2 = 1;
    });
    this.input.keyboard.on("keydown_NINE", () => {
        bala2 = 2;
    });

    // ------------------------- Barras de vida -------------------------
    if (vida2P1 < 0) {
        vida2P1 = 0;
    }
    if (vida2P2 < 0) {
        vida2P2 = 0;
    }
    if (vida2P3 < 0) {
        vida2P3 = 0;
    }
    if (vida1P1 < 0) {
        vida1P1 = 0;
    }
    if (vida1P2 < 0) {
        vida1P2 = 0;
    }
    if (vida1P3 < 0) {
        vida1P3 = 0;
    }

    Phaser.Geom.Line.SetToAngle(barra1, 400, 50, 0, 100 * (vida2P1 / vidaMax));
    Phaser.Geom.Line.SetToAngle(barra2, 400, 100, 0, 100 * (vida2P2 / vidaMax));
    Phaser.Geom.Line.SetToAngle(barra3, 400, 150, 0, 100 * (vida2P3 / vidaMax));
    Phaser.Geom.Line.SetToAngle(barra4, 800, 50, 0, 100 * (vida1P1 / vidaMax));
    Phaser.Geom.Line.SetToAngle(barra5, 800, 100, 0, 100 * (vida1P2 / vidaMax));
    Phaser.Geom.Line.SetToAngle(barra6, 800, 150, 0, 100 * (vida1P3 / vidaMax));
    configBarra1.clear().strokeLineShape(barra1);
    configBarra2.clear().strokeLineShape(barra2);
    configBarra3.clear().strokeLineShape(barra3);
    configBarra4.clear().strokeLineShape(barra4);
    configBarra5.clear().strokeLineShape(barra5);
    configBarra6.clear().strokeLineShape(barra6);
}

// Colisiones de los disparos del jugador 1
var polloAux1 = pollos[bala1];
function hit11(polloAux1) {
    this.add.image(polloAux1.x + 25, polloAux1.y, 'efecto_roto_1').setScale(0.05);

    polloAux1.disableBody(true, true);

    vida1P1 -= daños[bala1];
    console.log("11: " + vida1P1);

    if (vida1P1 <= 60) {
        edificio1P1.anims.play('v2');
    }
    if (vida1P1 <= 30) {
        edificio1P1.anims.play('v3');
    }
    if (vida1P1 <= 0) {
        edificio1P1.setVelocity(0, 200);
    }
}
function hit12(polloAux1) {
    this.add.image(polloAux1.x + 25, polloAux1.y, 'efecto_roto_1').setScale(0.05);

    polloAux1.disableBody(true, true);

    if (vida1P1 > 0 && vida1P2 > 50) {
        vida1P2 -= daños[bala1];
        if(vida1P2 < 50){
            vida1P2 = 50;
        }
    } else if (vida1P1 <= 0) {
        vida1P2 -= daños[bala1];
    }

    console.log("12: " + vida1P2);

    if (vida1P2 <= 60) {
        edificio1P2.anims.play('v5');
    }
    if (vida1P2 <= 30) {
        edificio1P2.anims.play('v6');
    }
    if (vida1P2 <= 0) {
        edificio1P2.setVelocity(0, 200);
    }
}
function hit13(polloAux1) {
    this.add.image(polloAux1.x + 25, polloAux1.y, 'efecto_roto_1').setScale(0.05);

    polloAux1.disableBody(true, true);

    if (vida1P1 <= 0 && vida1P2 > 0 && vida1P3 > 50) {
        vida1P3 -= daños[bala1];
        if(vida1P3 < 50){
            vida1P3 = 50;
        }
    } else if (vida1P2 <= 0) {
        vida1P3 -= daños[bala1];
    }

    console.log("13: " + vida1P3);

    if (vida1P3 <= 60) {
        edificio1P3.anims.play('v8');
    }
    if (vida1P3 <= 30) {
        edificio1P3.anims.play('v9');
    }
    if (vida1P3 <= 0) {
        edificio1P3.setVelocity(0, 200);
    }
}
// Colisiones de los disparos del jugador 2
var polloaux = pollos[bala2 + 3];
function hit21(polloaux) {
    this.add.image(polloaux.x - 35, polloaux.y, 'efecto_roto_2').setScale(0.05);

    polloaux.disableBody(true, true);

    vida2P1 -= daños[bala2];
    console.log("21: " + vida2P1);

    if (vida2P1 <= 60) {
        edificio2P1.anims.play('v2');
    }
    if (vida2P1 <= 30) {
        edificio2P1.anims.play('v3');
    }
    if (vida2P1 <= 0) {
        edificio2P1.setVelocity(0, 200);
    }
}
function hit22(polloaux) {
    this.add.image(polloaux.x - 35, polloaux.y, 'efecto_roto_2').setScale(0.05);

    polloaux.disableBody(true, true);

    if (vida2P1 > 0 && vida2P2 > 50) {
        vida2P2 -= daños[bala2];
        if(vida2P2 < 50){
            vida2P2 = 50;
        }
    } else if (vida2P1 <= 0) {
        vida2P2 -= daños[bala2];
    }

    console.log("12: " + vida2P2);

    if (vida2P2 <= 60) {
        edificio2P2.anims.play('v5');
    }
    if (vida2P2 <= 30) {
        edificio2P2.anims.play('v6');
    }
    if (vida2P2 <= 0) {
        edificio2P2.setVelocity(0, 200);
    }
}
function hit23(polloaux) {
    this.add.image(polloaux.x - 35, polloaux.y, 'efecto_roto_2').setScale(0.05);

    polloaux.disableBody(true, true);

    if (vida2P1 <= 0 && vida2P2 > 0 && vida2P3 > 50) {
        vida2P3 -= daños[bala2];
        if(vida2P3 < 50){
            vida2P3 = 50;
        }
    } else if (vida2P2 <= 0) {
        vida2P3 -= daños[bala2];
    }

    console.log("13: " + vida2P3);

    if (vida2P3 <= 60) {
        edificio2P3.anims.play('v8');
    }
    if (vida2P3 <= 30) {
        edificio2P3.anims.play('v9');
    }
    if (vida2P3 <= 0) {
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
// Añadimos la municion que ha crafteado el jugador 1
function añadirMunicion1() {
    municion1[bala1]++;
    console.log(municion1[bala1]);
    crafteando1 = false;
}
// Añadimos la municion que ha crafteado el jugador 2
function añadirMunicion2() {
    municion2[bala2]++;
    console.log(municion2[bala2]);
    crafteando2 = false;
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

