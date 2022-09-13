// +++++++++++++++++++++++++++++++++++++++ VARIABLES +++++++++++++++++++++++++++++++++++++++
// ------------------------- Recursos generales -------------------------
const keyCodes = Phaser.Input.Keyboard.KeyCodes;
var cursors;

// ------------------------- Zonas de movimiento -------------------------
// Suelos
var suelo;
var tierra;
var tierra2;
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
var velocidad1 = 200;
var tiempoCrafteo1 = [1500, 2000, 3000];
var daños1 = [10, 20, 35];
var energia1 = 0;
var municion;
var viejas;
var reparando1 = false;
var explosion1;

var P2;
var municion2 = [10, 10, 10];
var bala2 = 0;
var velocidad2 = 300;
var tiempoCrafteo2 = [1000, 1500, 2500];
var daños2 = [5, 15, 30];
var energia2 = 0;
var bateria;
var reparando2 = false;
var explosion2;

// ------------------------- Edificios -------------------------
var vidaMax = 100;
var tiempoReparar = 2500;

// Edificio 1 (izquierda)
var vida1P1 = 100;
var vida1P2 = 100;
var vida1P3 = 100;

var edificio1P1;
var edificio1P2;
var edificio1P3;
var taller1;

var fondoEdificio1P1;
var fondoEdificio1P2;
var fondoEdificio1P3;
var fondoEdificio1Taller;

var subirEscaleras1 = false;

var boton1;

// Edificio 2 (derecha)
var vida2P1 = 100;
var vida2P2 = 100;
var vida2P3 = 100;

var edificio2P1;
var edificio2P2;
var edificio2P3;
var taller2;

var fondoEdificio2P1;
var fondoEdificio2P2;
var fondoEdificio2P3;
var fondoEdificio2Taller;

var subirEscaleras2 = false;

var boton2;

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
var pollos = [];
var maxAngle = 0.4;
var incremento = 0.002;

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

var municionDentadura;
var municionGato;
var municionTacaTaca;

var municionBaquetas;
var municionGuitarra;
var municionAltavoz;

// ------------------------- Crafteo -------------------------
var mesa;

var timer1;
var timer2;

var crafteando1 = false;
var crafteando2 = false;

var habilidadEspecial1 = false;
var habilidadEspecial2 = false;

// ------------------------- Temporizador -------------------------
var textoTiempo;
var tiempoPartida;

var tiempoAux1 = 0;
var tiempoAux2 = 1;

// ------------------------- Power-Ups -------------------------
var martillo;
var bloqueo;

var velMartillo = 100;
var velBloqueo = 500;

// ------------------------- Barras de enegia -------------------------
var configBarraEnergia1;
var configBarraEnergia2;
var barraEnergia1;
var barraEnergia2;

// ------------------------- Reparar -------------------------
var Eabajo;
var Oabajo;
var reparar21aux;
var reparar22aux;
var reparar23aux;
var reparar11aux;
var reparar12aux;
var reparar13aux;

// Sonidos
var musica_fondo;

var cañonazo;
var reparar;
var craftear;
var boton;

// Fase 3
var chat;
var textoChat;
var enviar = true;

// Prueba de detectar la duracion de la pulsacion (no funciona)
//var key;

// +++++++++++++++++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++++++++++
// Colisiones de los disparos del jugador 1
var polloAux1 = pollos[bala1];
function hit11(polloAux1) {
    polloAux1.disableBody(true, true);

    vida1P1 -= daños1[bala1];
    console.log("11: " + vida1P1);

    energia1 += 5;
}
function hit12(polloAux1) {
    polloAux1.disableBody(true, true);

    if (vida1P1 > 0 && vida1P2 > 50) {
        vida1P2 -= daños1[bala1];
        if (vida1P2 < 50) {
            vida1P2 = 50;
        }
        energia1 += 5;
    } else if (vida1P1 <= 0) {
        vida1P2 -= daños1[bala1];
        energia1 += 5;
    }

    console.log("12: " + vida1P2);
}
function hit13(polloAux1) {
    polloAux1.disableBody(true, true);

    if (vida1P1 <= 0 && vida1P2 > 0 && vida1P3 > 50) {
        vida1P3 -= daños1[bala1];
        if (vida1P3 < 50) {
            vida1P3 = 50;
        }
        energia1 += 5;
    } else if (vida1P2 <= 0) {
        vida1P3 -= daños1[bala1];
        energia1 += 5;
    }

    console.log("13: " + vida1P3);
}
function hitPU1(polloAux1) {
    martillo.disableBody(true, true);
    polloAux1.disableBody(true, true);

    if (vida2P1 > 0) {
        vida2P1 += 50;
        if (vida2P1 > 100) {
            vida2P1 = 100;
        }
    } else if (vida2P2 > 0) {
        vida2P2 += 50;
        if (vida2P2 > 100) {
            vida2P2 = 100;
        }
    }
    else if (vida2P3 > 0) {
        vida2P3 += 50;
        if (vida2P3 > 100) {
            vida2P3 = 100;
        }
    }

    energia1 += 10;
}
function hitSTOP1(polloAux1) {
    bloqueo.disableBody(true, true);
    polloAux1.disableBody(true, true);

    habilidadEspecial2 = false;

    energia1 += 10;
}

// Colisiones de los disparos del jugador 2
var polloaux = pollos[bala2 + 3];
function hit21(polloaux) {
    polloaux.disableBody(true, true);

    vida2P1 -= daños2[bala2];
    console.log("21: " + vida2P1);

    energia2 += 5;
}
function hit22(polloaux) {
    polloaux.disableBody(true, true);

    if (vida2P1 > 0 && vida2P2 > 50) {
        vida2P2 -= daños2[bala2];
        if (vida2P2 < 50) {
            vida2P2 = 50;
        }
        energia2 += 5;
    } else if (vida2P1 <= 0) {
        vida2P2 -= daños2[bala2];
        energia2 += 5;
    }

    console.log("12: " + vida2P2);
}
function hit23(polloaux) {
    polloaux.disableBody(true, true);

    if (vida2P1 <= 0 && vida2P2 > 0 && vida2P3 > 50) {
        vida2P3 -= daños2[bala2];
        if (vida2P3 < 50) {
            vida2P3 = 50;
        }
        energia2 += 5;
    } else if (vida2P2 <= 0) {
        vida2P3 -= daños2[bala2];
        energia2 += 5;
    }

    console.log("13: " + vida2P3);
}
function hitPU2(polloAux1) {
    martillo.disableBody(true, true);
    polloAux1.disableBody(true, true);

    if (vida1P1 > 0) {
        vida1P1 += 50;
        if (vida1P1 > 100) {
            vida1P1 = 100;
        }
    } else if (vida1P2 > 0) {
        vida1P2 += 50;
        if (vida1P2 > 100) {
            vida1P2 = 100;
        }
    }
    else if (vida1P3 > 0) {
        vida1P3 += 50;
        if (vida1P3 > 100) {
            vida1P3 = 100;
        }
    }

    energia2 += 10;
}
function hitSTOP2(polloAux1) {
    bloqueo.disableBody(true, true);
    polloAux1.disableBody(true, true);

    habilidadEspecial1 = false;

    energia2 += 10;
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
    P1.anims.play('turn', true);
    craftear.stop();

    energia1++;
}
// Añadimos la municion que ha crafteado el jugador 2
function añadirMunicion2() {
    municion2[bala2]++;
    console.log(municion2[bala2]);
    crafteando2 = false;
    P2.anims.play('turn2', true);
    craftear.stop();

    energia2++;
}
// Añadimos la municion especial 1
function municionEspecial1() {
    habilidadEspecial1 = true;
    energia1 = 0;
    crafteando1 = false;
    P1.anims.play('turn', true);
    craftear.stop();

    bloqueo.enableBody(true, 640, -20, true, true);
    bloqueo.setVelocity(0, velBloqueo).setCollideWorldBounds(false).setGravityY(-300);
    timer1 = this.time.delayedCall(5000, StopEspecial1, [], this);
}
// Añadimos la municion especial 2
function municionEspecial2() {
    habilidadEspecial2 = true;
    energia2 = 0;
    crafteando2 = false;
    P2.anims.play('turn2', true);
    craftear.stop();

    bloqueo.enableBody(true, 640, -20, true, true);
    bloqueo.setVelocity(0, velBloqueo).setCollideWorldBounds(false).setGravityY(-300);
    timer2 = this.time.delayedCall(5000, StopEspecial2, [], this);
}
// Parar bala especial 1
function StopEspecial1() {
    bloqueo.disableBody(true, true);
}
// Parar bala especial 2
function StopEspecial2() {
    bloqueo.disableBody(true, true);
}

// Colicion bateria
function hitBateria1() {
    bateria.disableBody(true, true);

    vida2P1 = 0;
}
function hitBateria2() {
    bateria.disableBody(true, true);

    vida2P2 = 0;
}
function hitBateria3() {
    bateria.disableBody(true, true);

    vida2P3 = 0;
}

// Temporizador de la partida
function temporizador() {
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8080/chat",
        dataType: "json",
    }).done(function (data) {
        console.log("DELETE CHAT");
    });

    musica_fondo.stop();

    var vidaTotalAnciana = vida2P1 + vida2P2 + vida2P3;
    var vidaTotalRockero = vida1P1 + vida1P2 + vida1P3;

    if (vidaTotalAnciana > vidaTotalRockero) {
        this.scene.start('VictoriaAnciana');
    } else {
        this.scene.start('VictoriaRockero');
    }
}

// Reparar
function reparar21() {
    if (Eabajo === true && reparando1 === false && vida2P1 < 100) {
        reparar21aux = true;
    } else {
        reparar21aux = false;
    }
}
function reparar21v2() {
    reparando1 = false;
    P1.anims.play('turn', true);
    reparar.stop();

    vida2P1 += 10;
    if (vida2P1 > 100) {
        vida2P1 = 100;
    }
    console.log("Reparado 21: " + vida2P1);
}

function reparar22() {
    if (Eabajo === true && reparando1 === false && vida2P2 < 100) {
        reparar22aux = true;
    } else {
        reparar22aux = false;
    }
}
function reparar22v2() {
    reparando1 = false;
    P1.anims.play('turn', true);
    reparar.stop();

    vida2P2 += 10;
    if (vida2P2 > 100) {
        vida2P2 = 100;
    }
    console.log("Reparado 22: " + vida2P2);
}

function reparar23() {
    if (Eabajo === true && reparando1 === false && vida2P3 < 100) {
        reparar23aux = true;
    } else {
        reparar23aux = false;
    }
}
function reparar23v2() {
    reparando1 = false;
    P1.anims.play('turn', true);
    reparar.stop();

    vida2P3 += 10;
    if (vida2P3 > 100) {
        vida2P3 = 100;
    }
    console.log("Reparado 23: " + vida2P3);
}



function reparar11() {
    if (Oabajo === true && reparando2 === false && vida1P1 < 100) {
        reparar11aux = true;
    } else {
        reparar11aux = false;
    }
}
function reparar11v2() {
    reparando2 = false;
    P2.anims.play('turn2', true);
    reparar.stop();

    vida1P1 += 10;
    if (vida1P1 > 100) {
        vida1P1 = 100;
    }
    console.log("Reparado 11: " + vida1P1);
}

function reparar12() {
    if (Oabajo === true && reparando2 === false && vida1P2 < 100) {
        reparar12aux = true;
    } else {
        reparar12aux = false;
    }
}
function reparar12v2() {
    reparando2 = false;
    P2.anims.play('turn2', true);
    reparar.stop();

    vida1P2 += 10;
    if (vida1P2 > 100) {
        vida1P2 = 100;
    }
    console.log("Reparado 12: " + vida1P2);
}

function reparar13() {
    if (Oabajo === true && reparando2 === false && vida1P3 < 100) {
        reparar13aux = true;
    } else {
        reparar13aux = false;
    }
}
function reparar13v2() {
    reparando2 = false;
    P2.anims.play('turn2', true);
    reparar.stop();

    vida1P3 += 10;
    if (vida1P3 > 100) {
        vida1P3 = 100;
    }
    console.log("Reparado 13: " + vida1P3);
}

class EscenaLogin extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaLogin' });
    }

    preload() {
        this.load.image('fondo_juego', 'assets/images/definitivas/general/fondo_inicio.png');
        this.load.image('fondo_negro', 'assets/images/definitivas/general/fondo_negro.png');
        this.load.image('logo_juego', 'assets/images/definitivas/general/logo_juego.png');
        this.load.image('logo_grupo', 'assets/images/definitivas/general/logo_grupo.png');
        this.load.image('boton_jugar', 'assets/images/definitivas/general/boton_jugar.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_juego');
        this.add.image(640, 360, 'fondo_negro');
        this.add.image(640, 360, 'logo_juego');
        this.add.image(640, 360, 'logo_grupo');
        this.add.image(640, 450, 'boton_jugar');

        
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(jugar);

        this.add.text(10, 10, 'Enter your name:', { font: '32px Courier', fill: '#ffffff' });

        var textEntry = this.add.text(10, 50, '', { font: '32px Courier', fill: '#ffff00' });

        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === 8 && textEntry.text.length > 0) {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90)) {
                textEntry.text += event.key;
            }
            console.log(textEntry.text);
        });

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/users",
            dataType: "json",
        }).done(function (data) {
            console.log("DELETE USUARIO");
        });
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/users",
            data: JSON.stringify("--------- USUARIO ---------"),
            dataType: "json",
            processData: false
        }).done(function (data) {
            console.log("POST USUARIO");
        });

        


        var jugar = this.add.zone(480, 380, 320, 140);
        jugar.setOrigin(0);
        jugar.setInteractive();
        jugar.once('pointerdown', () => {
            $.ajax({
                type: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/users",
                data: JSON.stringify(textEntry.text),
                dataType: "json",
                processData: false
            }).done(function (data) {
                console.log("PUT USUARIO");
            });

            this.scene.start('EscenaInicio')
        });
    }
}

class EscenaInicio extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaInicio' });
    }

    preload() {
        this.load.image('fondo_juego', 'assets/images/definitivas/general/fondo_inicio.png');
        this.load.image('fondo_negro', 'assets/images/definitivas/general/fondo_negro.png');
        this.load.image('logo_juego', 'assets/images/definitivas/general/logo_juego.png');
        this.load.image('logo_grupo', 'assets/images/definitivas/general/logo_grupo.png');
        this.load.image('boton_jugar', 'assets/images/definitivas/general/boton_jugar.png');
        this.load.image('boton_tutorial', 'assets/images/definitivas/general/boton_tutorial.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_juego');
        this.add.image(640, 360, 'fondo_negro');
        this.add.image(640, 360, 'logo_juego');
        this.add.image(640, 360, 'logo_grupo');
        this.add.image(640, 450, 'boton_jugar');
        this.add.image(640, 600, 'boton_tutorial');

        var jugar = this.add.zone(480, 380, 320, 140);
        jugar.setOrigin(0);
        jugar.setInteractive();
        jugar.once('pointerdown', () => {
            this.scene.start('EscenaJuego')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(jugar);

        var controles = this.add.zone(490, 550, 300, 100);
        controles.setOrigin(0);
        controles.setInteractive();
        controles.once('pointerdown', () => {
            this.scene.start('EscenaTutorial1')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(controles);
    }
}

class EscenaTutorial1 extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaTutorial1' });
    }

    preload() {
        this.load.image('fondo_tuto1', 'assets/images/definitivas/general/tutorial_guia.png');
        this.load.image('atras1', 'assets/images/definitivas/general/volver.png');
        this.load.image('flecha_derecha', 'assets/images/definitivas/general/flecha_derecha.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_tuto1');
        this.add.image(1050, 100, 'atras1');
        this.add.image(1050, 300, 'flecha_derecha');

        var volver1 = this.add.zone(1000, 50, 100, 100);
        volver1.setOrigin(0);
        volver1.setInteractive();
        volver1.once('pointerdown', () => {
            this.scene.start('EscenaInicio')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(volver1);

        var pasarDerecha = this.add.zone(1000, 245, 110, 110);
        pasarDerecha.setOrigin(0);
        pasarDerecha.setInteractive();
        pasarDerecha.once('pointerdown', () => {
            this.scene.start('EscenaTutorial2')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(pasarDerecha);
    }
}

class EscenaTutorial2 extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaTutorial2' });
    }

    preload() {
        this.load.image('fondo_tuto2', 'assets/images/definitivas/general/tutorial_controles.png');
        this.load.image('atras2', 'assets/images/definitivas/general/volver.png');
        this.load.image('flecha_izquierda', 'assets/images/definitivas/general/flecha_izquierda.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_tuto2');
        this.add.image(1050, 100, 'atras2');
        this.add.image(200, 300, 'flecha_izquierda');

        var volver2 = this.add.zone(1000, 50, 100, 100);
        volver2.setOrigin(0);
        volver2.setInteractive();
        volver2.once('pointerdown', () => {
            this.scene.start('EscenaInicio')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(volver2);

        var pasarIzquierda = this.add.zone(150, 245, 110, 110);
        pasarIzquierda.setOrigin(0);
        pasarIzquierda.setInteractive();
        pasarIzquierda.once('pointerdown', () => {
            this.scene.start('EscenaTutorial1')
        });
        //this.add.graphics().lineStyle(2,0xff0000).strokeRectShape(pasarIzquierda);
    }
}

class EscenaJuego extends Phaser.Scene {
    constructor() {
        super({ key: 'EscenaJuego' });
    }

    preload() {
        // Prueba de detectar la duracion de la pulsacion (no funciona): 
        // http://labs.phaser.io/edit.html?src=src\input\keyboard\key%20down%20duration.js
        // KeyCodes
        console.log(Phaser.Input.Keyboard.KeyCodes);

        // Cargamos la imagen del fondo
        this.load.image('backdrop', 'assets/images/definitivas/general/fondo_juego_v1.jpeg');

        // Cargamos las imagenes del cañon
        this.load.spritesheet('cannon_head1', 'assets/images/definitivas/otros/cañon1.png', { frameWidth: 126, frameHeight: 59 });
        this.load.spritesheet('cannon_head2', 'assets/images/definitivas/otros/cañon2.png', { frameWidth: 126, frameHeight: 59 });
        this.load.spritesheet('cannon_body', 'assets/images/definitivas/otros/soporte_cañon.png', { frameWidth: 39, frameHeight: 68 });

        this.load.spritesheet('chick1', 'assets/images/definitivas/proyectiles/dentadura.png', { frameWidth: 1200, frameHeight: 1000 });
        this.load.spritesheet('chick2', 'assets/images/definitivas/proyectiles/gato_peque.png', { frameWidth: 1300, frameHeight: 1100 });
        this.load.spritesheet('chick3', 'assets/images/definitivas/proyectiles/TacaTaca.png', { frameWidth: 2000, frameHeight: 2000 });
        this.load.spritesheet('chick4', 'assets/images/definitivas/proyectiles/baquetas.png', { frameWidth: 1500, frameHeight: 1500 });
        this.load.spritesheet('chick5', 'assets/images/definitivas/proyectiles/guitarra.png', { frameWidth: 1600, frameHeight: 1600 });
        this.load.spritesheet('chick6', 'assets/images/definitivas/proyectiles/altavoz.png', { frameWidth: 1000, frameHeight: 1000 });

        this.load.spritesheet('disparo', 'assets/images/definitivas/otros/explosion.png', { frameWidth: 250, frameHeight: 154 });

        // Cargamos las imagenes de los edificios 1
        this.load.spritesheet('edificio1_parte1', 'assets/images/definitivas/edificios/edificio1/planta_arriba.png', { frameWidth: 390, frameHeight: 152 });
        this.load.spritesheet('edificio1_parte2', 'assets/images/definitivas/edificios/edificio1/planta_medio.png', { frameWidth: 390, frameHeight: 152 });
        this.load.spritesheet('edificio1_parte3', 'assets/images/definitivas/edificios/edificio1/planta_abajo.png', { frameWidth: 390, frameHeight: 152 });
        this.load.image('taller1', 'assets/images/definitivas/edificios/edificio1/taller.png');

        this.load.spritesheet('fondo_edificio1_parte1', 'assets/images/definitivas/edificios/edificio1/fondo_planta_arriba.png', { frameWidth: 241, frameHeight: 150 });
        this.load.spritesheet('fondo_edificio1_parte2', 'assets/images/definitivas/edificios/edificio1/fondo_planta_medio.png', { frameWidth: 241, frameHeight: 147 });
        this.load.spritesheet('fondo_edificio1_parte3', 'assets/images/definitivas/edificios/edificio1/fondo_planta_abajo.png', { frameWidth: 253, frameHeight: 154 });
        this.load.image('fondo_taller1', 'assets/images/definitivas/edificios/edificio1/fondo_taller.png');

        // Cargamos las imagenes de los edificios 1
        this.load.spritesheet('edificio2_parte1', 'assets/images/definitivas/edificios/edificio2/planta_arriba.png', { frameWidth: 390, frameHeight: 152 });
        this.load.spritesheet('edificio2_parte2', 'assets/images/definitivas/edificios/edificio2/planta_medio.png', { frameWidth: 390, frameHeight: 152 });
        this.load.spritesheet('edificio2_parte3', 'assets/images/definitivas/edificios/edificio2/planta_abajo.png', { frameWidth: 390, frameHeight: 152 });
        this.load.image('taller2', 'assets/images/definitivas/edificios/edificio2/taller.png');

        this.load.spritesheet('fondo_edificio2_parte1', 'assets/images/definitivas/edificios/edificio2/fondo_planta_arriba.png', { frameWidth: 241, frameHeight: 150 });
        this.load.spritesheet('fondo_edificio2_parte2', 'assets/images/definitivas/edificios/edificio2/fondo_planta_medio.png', { frameWidth: 241, frameHeight: 147 });
        this.load.spritesheet('fondo_edificio2_parte3', 'assets/images/definitivas/edificios/edificio2/fondo_planta_abajo.png', { frameWidth: 253, frameHeight: 154 });
        this.load.image('fondo_taller2', 'assets/images/definitivas/edificios/edificio2/fondo_taller.png');

        // Cargamos la imagen del boton
        this.load.image('boton', 'assets/images/definitivas/otros/boton.png');

        // Cargamos las imagenes de las zonas de movimiento
        this.load.image('suelo_principal', 'assets/images/pruebas/suelo_v2.png');
        this.load.image('tierra', 'assets/images/pruebas/tierra.png');
        this.load.image('tierra2', 'assets/images/pruebas/tierra2.png');
        this.load.image('suelo', 'assets/images/pruebas/suelo_pruebas2.png');
        this.load.image('escaleras', 'assets/images/pruebas/escaleras_pruebas.png');
        this.load.image('detector_escaleras1', 'assets/images/pruebas/detector_escaleras_pruebas1.png');
        this.load.image('detector_escaleras2', 'assets/images/pruebas/detector_escaleras_pruebas2.png');

        // Cargamos las imagenes de los personajes
        this.load.spritesheet('anciana', 'assets/images/definitivas/personajes/anciana_peque.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('anciana_reparar', 'assets/images/definitivas/personajes/anciana_reparar_peque.png', { frameWidth: 500, frameHeight: 500 });

        this.load.spritesheet('rockero', 'assets/images/definitivas/personajes/rockero_peque.png', { frameWidth: 500, frameHeight: 698 });
        this.load.spritesheet('rockero_reparar', 'assets/images/definitivas/personajes/rockero_reparar_peque.png', { frameWidth: 500, frameHeight: 697 });

        // Cargamos la imagen de la mesa de crafteo
        this.load.image('mesa', 'assets/images/definitivas/otros/mesa_crafteo.png');

        // Cargamos las imagenes de los power ups
        this.load.spritesheet('martillo', 'assets/images/definitivas/otros/martillo.png', { frameWidth: 117, frameHeight: 109 });
        this.load.spritesheet('stop', 'assets/images/pruebas/stop.png', { frameWidth: 578, frameHeight: 578 });

        // Ultimates
        this.load.spritesheet('municion', 'assets/images/definitivas/otros/municion.png', { frameWidth: 844, frameHeight: 329 });
        this.load.spritesheet('viejas', 'assets/images/definitivas/otros/ancianas_municion.png', { frameWidth: 1000, frameHeight: 1300 });
        this.load.spritesheet('bateria', 'assets/images/pruebas/bateria.png', { frameWidth: 500, frameHeight: 318 });

        // Sonidos
        this.load.audio('musica_fondo', 'assets/sounds/musica_fondo.mp3');

        this.load.audio('disparo', 'assets/sounds/cañonazo.mp3');
        this.load.audio('reparar', 'assets/sounds/reparar.ogg');
        this.load.audio('craftear', 'assets/sounds/craftear.mp3');
        this.load.audio('pulsar_boton', 'assets/sounds/boton.ogg');
    }

    create() {
        // Input del cursor
        cursors = this.input.keyboard.createCursorKeys();

        // ------------------------- Animaciones -------------------------
        // Animacion disparo
        this.anims.create({
            key: 'disparar',
            frames: this.anims.generateFrameNumbers('disparo', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: 0
        });

        // Animaciones del personaje 1
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('anciana', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'anciana', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('anciana', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'reparar',
            frames: this.anims.generateFrameNumbers('anciana_reparar', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'ulti_anciana',
            frames: this.anims.generateFrameNumbers('viejas', { start: 0, end: 1 }),
            frameRate: 10,
            repeat: -1
        });

        // Animaciones del personaje 2
        this.anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers('rockero', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn2',
            frames: [{ key: 'rockero', frame: 4 }],
            frameRate: 20
        });
        this.anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers('rockero', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'reparar2',
            frames: this.anims.generateFrameNumbers('rockero_reparar', { start: 0, end: 4 }),
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

        // Frames del edificio 1
        this.anims.create({
            key: 'edificio1_v1',
            frames: [{ key: 'edificio1_parte1', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio1_v2',
            frames: [{ key: 'edificio1_parte1', frame: 1 }]
        });
        this.anims.create({
            key: 'v3',
            frames: [{ key: 'edificio1_parte1', frame: 2 }]
        });

        this.anims.create({
            key: 'edificio1_v4',
            frames: [{ key: 'edificio1_parte2', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio1_v5',
            frames: [{ key: 'edificio1_parte2', frame: 1 }]
        });
        this.anims.create({
            key: 'edificio1_v6',
            frames: [{ key: 'edificio1_parte2', frame: 2 }]
        });

        this.anims.create({
            key: 'edificio1_v7',
            frames: [{ key: 'edificio1_parte3', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio1_v8',
            frames: [{ key: 'edificio1_parte3', frame: 1 }]
        });
        this.anims.create({
            key: 'edificio1_v9',
            frames: [{ key: 'edificio1_parte3', frame: 2 }]
        });

        // Frames del edificio 2
        this.anims.create({
            key: 'edificio2_v1',
            frames: [{ key: 'edificio2_parte1', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio2_v2',
            frames: [{ key: 'edificio2_parte1', frame: 1 }]
        });
        this.anims.create({
            key: 'edificio2_v3',
            frames: [{ key: 'edificio2_parte1', frame: 2 }]
        })

        this.anims.create({
            key: 'edificio2_v4',
            frames: [{ key: 'edificio2_parte2', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio2_v5',
            frames: [{ key: 'edificio2_parte2', frame: 1 }]
        });
        this.anims.create({
            key: 'edificio2_v6',
            frames: [{ key: 'edificio2_parte2', frame: 2 }]
        });

        this.anims.create({
            key: 'edificio2_v7',
            frames: [{ key: 'edificio2_parte3', frame: 0 }]
        });
        this.anims.create({
            key: 'edificio2_v8',
            frames: [{ key: 'edificio2_parte3', frame: 1 }]
        });
        this.anims.create({
            key: 'edificio2_v9',
            frames: [{ key: 'edificio2_parte3', frame: 2 }]
        });

        // ------------------------- Escaleras -------------------------
        // Escalera izquierda
        escalerasI = this.physics.add.staticGroup();
        escalerasI.create(30, 450, 'escaleras').refreshBody();

        // Detectores de la escalera izquierda
        detectorI = this.physics.add.staticGroup();
        detectorI.create(75, 360, 'detector_escaleras1').refreshBody();
        detectorI.create(30, 80, 'detector_escaleras2').refreshBody();

        // Escalera derecha
        escalerasD = this.physics.add.staticGroup();
        escalerasD.create(1250, 450, 'escaleras').refreshBody();

        // Detectores de la escalera derecha
        detectorD = this.physics.add.staticGroup();
        detectorD.create(1205, 360, 'detector_escaleras1').refreshBody();
        detectorD.create(1250, 80, 'detector_escaleras2').refreshBody();

        // ------------------------- Suelos  1 -------------------------
        // Suelo edificio derecha
        sueloD1 = this.physics.add.staticGroup();
        sueloD1.create(1045, 390, 'suelo').refreshBody();
        sueloD2 = this.physics.add.staticGroup();
        sueloD2.create(1045, 240, 'suelo').refreshBody();

        // Suelo edificio izquierda
        sueloI1 = this.physics.add.staticGroup();
        sueloI1.create(235, 390, 'suelo').refreshBody();
        sueloI2 = this.physics.add.staticGroup();
        sueloI2.create(235, 240, 'suelo').refreshBody();

        // ------------------------- Fondo -------------------------
        this.add.image(640, 360, 'backdrop');

        // ------------------------- Edificios - parte 1 -------------------------
        // Fondo edificio 1
        fondoEdificio1P1 = this.physics.add.sprite(181, 170, 'fondo_edificio1_parte1');
        fondoEdificio1P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio1P2 = this.physics.add.sprite(181, 315, 'fondo_edificio1_parte2');
        fondoEdificio1P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio1P3 = this.physics.add.sprite(181, 465, 'fondo_edificio1_parte3');
        fondoEdificio1P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio1Taller = this.add.image(181, 610, 'fondo_taller1').setDepth(0);

        // Fondo edificio 2
        fondoEdificio2P1 = this.physics.add.sprite(1097, 170, 'fondo_edificio2_parte1');
        fondoEdificio2P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio2P2 = this.physics.add.sprite(1097, 315, 'fondo_edificio2_parte2');
        fondoEdificio2P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio2P3 = this.physics.add.sprite(1097, 465, 'fondo_edificio2_parte3');
        fondoEdificio2P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        fondoEdificio1Taller = this.add.image(1097, 610, 'fondo_taller2').setDepth(0);

        // ------------------------- Botones -------------------------
        boton1 = this.add.image(500, 500, 'boton').setDepth(0).setScale(0.5);
        boton2 = this.add.image(780, 500, 'boton').setDepth(0).setScale(0.5);

        // ------------------------- Crafteo -------------------------
        mesa = this.add.image(640, 515, 'mesa').setDepth(0).setScale(1.5);

        // ------------------------- Jugador 1 -------------------------
        P1 = this.physics.add.sprite(440, 400, 'anciana').setScale(0.15);
        P1.setCollideWorldBounds(true);

        // ------------------------- Jugador 2 -------------------------
        P2 = this.physics.add.sprite(840, 400, 'rockero').setScale(0.15);
        P2.setCollideWorldBounds(true);

        // ------------------------- Edificios - parte 2 -------------------------
        // Creamos el edificio 1
        edificio1P1 = this.physics.add.sprite(1080, 165, 'edificio1_parte1');
        edificio1P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        edificio1P2 = this.physics.add.sprite(1080, 315, 'edificio1_parte2');
        edificio1P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        edificio1P3 = this.physics.add.sprite(1080, 465, 'edificio1_parte3');
        edificio1P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        taller1 = this.physics.add.sprite(1125, 610, 'taller1');
        taller1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);

        // Creamos el edificio 2
        edificio2P1 = this.physics.add.sprite(200, 165, 'edificio2_parte1');
        edificio2P1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        edificio2P2 = this.physics.add.sprite(200, 315, 'edificio2_parte2');
        edificio2P2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        edificio2P3 = this.physics.add.sprite(200, 465, 'edificio2_parte3');
        edificio2P3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        taller2 = this.physics.add.sprite(150, 610, 'taller2');
        taller2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);

        // ------------------------- Cañones derecha -------------------------
        // Creamos el cañon 1 (arriba)
        cannonHead1 = this.physics.add.sprite(350, 190, 'cannon_head1').setScale(0.75).setDepth(2);
        cannonHead1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300)
        cannon1 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y + 20, 'cannon_body').setScale(0.8).setDepth(2);
        cannon1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line1 = new Phaser.Geom.Line();
        angle1 = 0;

        // Creamos el cañon 2 (medio)
        cannonHead2 = this.physics.add.sprite(350, 340, 'cannon_head1').setScale(0.75).setDepth(1);
        cannonHead2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        cannon2 = this.physics.add.sprite(cannonHead2.x, cannonHead2.y + 20, 'cannon_body').setScale(0.8).setDepth(1);
        cannon2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line2 = new Phaser.Geom.Line();
        angle2 = 0;

        // Creamos el cañon 3 (abajo)
        cannonHead3 = this.physics.add.sprite(350, 490, 'cannon_head1').setScale(0.75).setDepth(1);
        cannonHead3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        cannon3 = this.physics.add.sprite(cannonHead3.x, cannonHead3.y + 20, 'cannon_body').setScale(0.8).setDepth(1);
        cannon3.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx3 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line3 = new Phaser.Geom.Line();
        angle3 = 0;

        // ------------------------- Cañones izquierda -------------------------
        // Creamos el cañon 4 (arriba)
        cannonHead4 = this.physics.add.sprite(930, 190, 'cannon_head2').setScale(0.75).setDepth(1);
        cannonHead4.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        cannon4 = this.physics.add.sprite(cannonHead4.x, cannonHead4.y + 20, 'cannon_body').setScale(0.8).setDepth(1);
        cannon4.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx4 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line4 = new Phaser.Geom.Line();
        angle4 = 0;

        // Creamos el cañon 5 (medio)
        cannonHead5 = this.physics.add.sprite(930, 340, 'cannon_head2').setScale(0.75).setDepth(1);
        cannonHead5.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        cannon5 = this.physics.add.sprite(cannonHead5.x, cannonHead5.y + 20, 'cannon_body').setScale(0.8).setDepth(1);
        cannon5.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx5 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line5 = new Phaser.Geom.Line();
        angle5 = 0;

        // Creamos el cañon 6 (abajo)
        cannonHead6 = this.physics.add.sprite(930, 490, 'cannon_head2').setScale(0.75).setDepth(1);
        cannonHead6.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        cannon6 = this.physics.add.sprite(cannonHead6.x, cannonHead6.y + 20, 'cannon_body').setScale(0.8).setDepth(1);
        cannon6.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        gfx6 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 } });
        line6 = new Phaser.Geom.Line();
        angle6 = 0;

        // ------------------------- Suelos  2 -------------------------
        // Suelo principal
        tierra = this.physics.add.staticGroup();
        tierra.create(640, 630, 'tierra').refreshBody();
        tierra2 = this.physics.add.staticGroup();
        tierra2.create(640, 700, 'tierra2').refreshBody();
        suelo = this.physics.add.staticGroup();
        suelo.create(640, 540, 'suelo_principal').refreshBody();

        // ------------------------- Proyectiles -------------------------
        chick1 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick1').setScale(0.04);
        chick2 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick2').setScale(0.06);
        chick3 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick3').setScale(0.04);
        chick4 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick4').setScale(0.04);
        chick5 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick5').setScale(0.05);
        chick6 = this.physics.add.sprite(cannonHead1.x, cannonHead1.y, 'chick6').setScale(0.08);

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

        // ------------------------- Barras de enegia -------------------------
        configBarraEnergia1 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFFFF00, alpha: 1 } });
        configBarraEnergia2 = this.add.graphics().setDefaultStyles({ lineStyle: { width: 15, color: 0xFFFF00, alpha: 1 } });
        barraEnergia1 = new Phaser.Geom.Line();
        barraEnergia2 = new Phaser.Geom.Line();

        // ------------------------- Temporizador -------------------------
        textoTiempo = this.add.text(620, 50, '', { fontSize: '32px', aling: 'center' });
        tiempoPartida = this.time.delayedCall(180000, temporizador, [], this);

        // ------------------------- Power ups -------------------------
        // Martillo
        martillo = this.physics.add.sprite(640, 150, 'martillo').setScale(0.4);
        martillo.setVelocity(0, velMartillo).setCollideWorldBounds(false).setGravityY(-300);
        martillo.disableBody(true, true);

        // Stop
        bloqueo = this.physics.add.sprite(640, 150, 'stop').setScale(0.1);
        bloqueo.setVelocity(0, velBloqueo).setCollideWorldBounds(false).setGravityY(-300);
        bloqueo.disableBody(true, true);

        // ------------------------- Ultimates -------------------------
        // Municion
        viejas = this.physics.add.sprite(-400, 475, 'viejas').setScale(0.1);
        viejas.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        viejas.disableBody(true, true);

        municion = this.physics.add.sprite(200, 510, 'municion').setScale(0.2);
        municion.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
        municion.disableBody(true, true);

        // Bateria
        bateria = this.physics.add.sprite(180, -50, 'bateria').setScale(0.5);
        bateria.setVelocity(0, 100).setCollideWorldBounds(false).setGravityY(-300);
        bateria.disableBody(true, true);

        // ------------------------- Textos municion -------------------------
        municionDentadura = this.add.text(90, 630, municion1[0].toString(), { fontSize: '32px', aling: 'center' });
        municionGato = this.add.text(160, 630, municion1[1].toString(), { fontSize: '32px', aling: 'center' });
        municionTacaTaca = this.add.text(230, 630, municion1[2].toString(), { fontSize: '32px', aling: 'center' });

        municionBaquetas = this.add.text(1010, 630, municion2[0].toString(), { fontSize: '32px', aling: 'center' });
        municionGuitarra = this.add.text(1080, 630, municion2[1].toString(), { fontSize: '32px', aling: 'center' });
        municionAltavoz = this.add.text(1150, 630, municion2[2].toString(), { fontSize: '32px', aling: 'center' });

        // ------------------------- Fisicas -------------------------
        // ********** Personajes - suelos **********
        // P1
        this.physics.add.collider(P1, suelo);
        this.physics.add.collider(P1, tierra);
        this.physics.add.collider(P1, tierra2);
        this.physics.add.collider(P1, sueloD1);
        this.physics.add.collider(P1, sueloD2);
        this.physics.add.collider(P1, sueloI1);
        this.physics.add.collider(P1, sueloI2);

        // P2
        this.physics.add.collider(P2, suelo);
        this.physics.add.collider(P2, tierra);
        this.physics.add.collider(P2, tierra2);
        this.physics.add.collider(P2, sueloD1);
        this.physics.add.collider(P2, sueloD2);
        this.physics.add.collider(P2, sueloI1);
        this.physics.add.collider(P2, sueloI2);

        // ********** Personajes - casa **********
        // P1
        this.physics.add.overlap(P1, edificio2P1, reparar21.bind());
        this.physics.add.overlap(P1, edificio2P2, reparar22.bind());
        this.physics.add.overlap(P1, edificio2P3, reparar23.bind());

        // P2
        this.physics.add.overlap(P2, edificio1P1, reparar11.bind());
        this.physics.add.overlap(P2, edificio1P2, reparar12.bind());
        this.physics.add.overlap(P2, edificio1P3, reparar13.bind());

        // ********** Personajes - escaleras **********
        // P1
        this.physics.add.overlap(P1, detectorD, noEscalera1.bind());
        this.physics.add.overlap(P1, detectorI, noEscalera1.bind());
        this.physics.add.overlap(P1, escalerasD, escalera1.bind());
        this.physics.add.overlap(P1, escalerasI, escalera1.bind());

        // P2
        this.physics.add.overlap(P2, detectorD, noEscalera2.bind());
        this.physics.add.overlap(P2, detectorI, noEscalera2.bind());
        this.physics.add.overlap(P2, escalerasD, escalera2.bind());
        this.physics.add.overlap(P2, escalerasI, escalera2.bind());

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

        // ********** Proyectil - Power up **********
        // P1
        this.physics.add.overlap(chick1, martillo, hitPU1, null, this);
        this.physics.add.overlap(chick2, martillo, hitPU1, null, this);
        this.physics.add.overlap(chick3, martillo, hitPU1, null, this);

        this.physics.add.overlap(chick1, bloqueo, hitSTOP1, null, this);
        this.physics.add.overlap(chick2, bloqueo, hitSTOP1, null, this);
        this.physics.add.overlap(chick3, bloqueo, hitSTOP1, null, this);

        // P2
        this.physics.add.overlap(chick4, martillo, hitPU2, null, this);
        this.physics.add.overlap(chick5, martillo, hitPU2, null, this);
        this.physics.add.overlap(chick6, martillo, hitPU2, null, this);

        this.physics.add.overlap(chick4, bloqueo, hitSTOP2, null, this);
        this.physics.add.overlap(chick5, bloqueo, hitSTOP2, null, this);
        this.physics.add.overlap(chick6, bloqueo, hitSTOP2, null, this);

        // ********** Ultimate - Casa **********
        this.physics.add.overlap(bateria, edificio2P1, hitBateria1, null, this);
        this.physics.add.overlap(bateria, edificio2P2, hitBateria2, null, this);
        this.physics.add.overlap(bateria, edificio2P3, hitBateria3, null, this);

        // Prueba de detectar la duracion de la pulsacion (no funciona)
        //key = this.input.keyboard.addKey('A');

        // Sonidos
        musica_fondo = this.sound.add('musica_fondo', { loop: false });
        musica_fondo.play();

        cañonazo = this.sound.add('disparo', { loop: false });
        reparar = this.sound.add('reparar', { loop: true });
        craftear = this.sound.add('craftear', { loop: true });
        boton = this.sound.add('pulsar_boton', { loop: false });

        // Fase 3
        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/chat",
            dataType: "json",
        }).done(function (data) {
            console.log("DELETE CHAT");
        });
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/chat",
            data: JSON.stringify("--------- CHAT ---------"),
            dataType: "json",
            processData: false
        }).done(function (data) {
            console.log("POST CHAT");
        });
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/chat",
            dataType: "json",
        }).done(function (data) {
            chat = data;
            console.log(chat);
            console.log("GET CHAT");
        });

        $('#value-input').val('');

        textoChat = this.add.text(500, 550, chat, { fontSize: '20px', aling: 'center' });

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/users",
            dataType: "json",
        }).done(function (data) {
            console.log(data[0]);
            console.log(data[1]);
            //console.log(data[1]);
            console.log("GET USUARIOS");
        });
    }

    update() {
        // Prueba de detectar la duracion de la pulsacion (no funciona)
        //key.getDuration();

        // ------------------------- Textos municion -------------------------
        municionDentadura.setText(municion1[0].toString());
        municionGato.setText(municion1[1].toString());
        municionTacaTaca.setText(municion1[2].toString());

        municionBaquetas.setText(municion2[0].toString());
        municionGuitarra.setText(municion2[1].toString());
        municionAltavoz.setText(municion2[2].toString());

        // ------------------------- Jugador 1 -------------------------
        var keyW = this.input.keyboard.addKey('W');
        var keyS = this.input.keyboard.addKey('S');
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
            if (keyW.isDown && angle1 >= -maxAngle) {
                angle1 = cannonHead1.rotation - 0.02;
                cannonHead1.rotation = angle1;
            }
            else if (keyS.isDown && angle1 <= maxAngle) {
                angle1 = cannonHead1.rotation + 0.02;
                cannonHead1.rotation = angle1;
            }

            if (this.input.keyboard.checkDown(cursors.shift, 1000) && municion1[bala1] > 0) {
                pollos[bala1].enableBody(true, cannon1.x, cannon1.y - 25, true, true);
                pollos[bala1].play('fly' + bala1);
                cañonazo.play();
                this.physics.velocityFromRotation(angle1, 800, pollos[bala1].body.velocity);
                municion1[bala1]--;

                explosion1 = this.physics.add.sprite(cannonHead1.x + 50, cannonHead1.y, 'disparo').setDepth(0);
                explosion1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion1.anims.play('disparar', true);
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
            if (keyW.isDown && angle2 >= -maxAngle) {
                angle2 = cannonHead2.rotation - 0.02;
                cannonHead2.rotation = angle2;
            }
            else if (keyS.isDown && angle2 <= maxAngle) {
                angle2 = cannonHead2.rotation + 0.02;
                cannonHead2.rotation = angle2;
            }

            if (this.input.keyboard.checkDown(cursors.shift, 1000) && municion1[bala1] > 0) {
                pollos[bala1].enableBody(true, cannon2.x, cannon2.y - 25, true, true);
                pollos[bala1].play('fly' + bala1);
                cañonazo.play();
                this.physics.velocityFromRotation(angle2, 800, pollos[bala1].body.velocity);
                municion1[bala1]--;

                explosion1 = this.physics.add.sprite(cannonHead2.x + 50, cannonHead2.y, 'disparo').setDepth(0);
                explosion1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion1.anims.play('disparar', true);
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
            if (keyW.isDown && angle3 >= -maxAngle) {
                angle3 = cannonHead3.rotation - 0.02;
                cannonHead3.rotation = angle3;
            }
            else if (keyS.isDown && angle3 <= maxAngle) {
                angle3 = cannonHead3.rotation + 0.02;
                cannonHead3.rotation = angle3;
            }

            if (this.input.keyboard.checkDown(cursors.shift, 5000) && municion1[bala1] > 0) {
                pollos[bala1].enableBody(true, cannon3.x, cannon3.y - 25, true, true);
                pollos[bala1].play('fly' + bala1);
                cañonazo.play();
                this.physics.velocityFromRotation(angle3, 800, pollos[bala1].body.velocity);
                municion1[bala1]--;

                explosion1 = this.physics.add.sprite(cannonHead3.x + 50, cannonHead3.y, 'disparo').setDepth(0);
                explosion1.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion1.anims.play('disparar', true);
            }
        }

        Phaser.Geom.Line.SetToAngle(line3, cannonHead3.x, cannonHead3.y, angle3, 128);
        gfx3.clear().strokeLineShape(line3);

        // Mover personaje
        this.input.keyboard.on("keydown_A", () => {
            if (crafteando1 === false && reparando1 === false) {
                P1.setVelocityX(-velocidad1);

                P1.anims.play('left', true);
            }
        });
        this.input.keyboard.on("keydown_D", () => {
            if (crafteando1 === false && reparando1 === false) {
                P1.setVelocityX(velocidad1);

                P1.anims.play('right', true);
            }
        });
        this.input.keyboard.on("keyup_A", () => {
            if (crafteando1 === false && reparando1 === false) {
                P1.setVelocityX(0);

                P1.anims.play('turn');
            }
        });
        this.input.keyboard.on("keyup_D", () => {
            if (crafteando1 === false && reparando1 === false) {
                P1.setVelocityX(0);

                P1.anims.play('turn');
            }
        });

        // Escaleras
        if (keyW.isDown && subirEscaleras1 === true) {
            P1.setVelocityY(-velocidad1);
        }
        if (keyS.isDown && subirEscaleras1 === true) {
            P1.setVelocityY(velocidad1);
        }

        // JQuery (fase 3)
        /*
        $.ajax({
            type:"PUT",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url:"http://localhost:8080/players/0/x",
            data: JSON.stringify(P1.x),
            dataType: "json",
            processData: false
        }).done(function(data){console.log("PUT1")});

        $.ajax({
            type:"PUT",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url:"http://localhost:8080/players/1/x",
            data: JSON.stringify(P2.x),
            dataType: "json",
            processData: false
        }).done(function(data){console.log("PUT2")});
        
        $.ajax({
            type:"GET",
            url:"http://localhost:8080/players/0/x",
            dataType: "json",
        }).done(function(data){console.log("GET1")});
        $.ajax({
            type:"GET",
            url:"http://localhost:8080/players/1/x",
            dataType: "json",
        }).done(function(data){console.log("GET2")});
        */

        var keyC = this.input.keyboard.addKey('C');
        var keyV = this.input.keyboard.addKey('V');
        var keyB = this.input.keyboard.addKey('B');
        var keyN = this.input.keyboard.addKey('N');

        if (this.input.keyboard.checkDown(keyC, 1000)) {

        }
        if (this.input.keyboard.checkDown(keyV, 1000)) {

        }
        if (this.input.keyboard.checkDown(keyB, 1000)) {

        }
        if (this.input.keyboard.checkDown(keyN, 1000)) {

        }


        // Fase 3 bien
        $("#value-input").click(function () {
            //this.scene.pause(EscenaJuego);
            console.log("pausa");

            enviar = true;
        })

        $("#add-button").click(function () {
            if (enviar === true) {
                enviar = false;

                //this.scene.resume(EscenaJuego);
                console.log("no pausa");
                var value = $('#value-input').val();

                $.ajax({
                    type: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    url: "http://localhost:8080/chat",
                    data: JSON.stringify(value),
                    dataType: "json",
                    processData: false
                }).done(function (data) {
                    console.log("PUT CHAT");
                });
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8080/chat",
                    dataType: "json",
                }).done(function (data) {
                    chat = data;
                    console.log(chat);
                    console.log("GET CHAT");
                });

                $('#value-input').val('');
            }
        })





        // Craftear
        var distanciaMesa1X = P1.x - mesa.x;
        if (distanciaMesa1X < 0) {
            distanciaMesa1X = -distanciaMesa1X;
        }
        var distanciaMesa1Y = P1.y - mesa.y;
        if (distanciaMesa1Y < 0) {
            distanciaMesa1Y = -distanciaMesa1Y;
        }
        var distanciaMesa1 = distanciaMesa1X + distanciaMesa1Y;

        if (this.input.keyboard.checkDown(cursors.shift, tiempoCrafteo1[bala1]) && distanciaMesa1 <= 50 && crafteando1 === false && crafteando2 === false) {
            crafteando1 = true;
            P1.anims.play('reparar', true);
            craftear.play();
            P1.setVelocityX(0);
            P1.setVelocityY(0);
            timer1 = this.time.delayedCall(tiempoCrafteo1[bala1], añadirMunicion1, [], this);
        }

        this.input.keyboard.once("keydown_Q", () => {
            if (distanciaMesa1 <= 50 && crafteando1 === false && crafteando2 === false && energia1 === 100) {
                crafteando1 = true;
                P1.anims.play('reparar', true);
                craftear.play();
                P1.setVelocityX(0);
                P1.setVelocityY(0);
                timer1 = this.time.delayedCall(5000, municionEspecial1, [], this);
            }
        });

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
        var keyI = this.input.keyboard.addKey('I');
        var keyK = this.input.keyboard.addKey('K');
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
            if (keyK.isDown && angle4 >= -maxAngle / 4) {
                angle4 = cannonHead4.rotation - 0.02;
                cannonHead4.rotation = angle4;
            }
            else if (keyI.isDown && angle4 <= maxAngle / 4) {
                angle4 = cannonHead4.rotation + 0.02;
                cannonHead4.rotation = angle4;
            }

            if (this.input.keyboard.checkDown(cursors.space, 1000) && municion2[bala2] > 0) {
                pollos[bala2 + 3].enableBody(true, cannon4.x, cannon4.y - 25, true, true);
                pollos[bala2 + 3].play('fly' + (bala2 + 3));
                cañonazo.play();
                this.physics.velocityFromRotation(angle4, -800, pollos[bala2 + 3].body.velocity);
                municion2[bala2]--;

                explosion2 = this.physics.add.sprite(cannonHead4.x - 50, cannonHead4.y, 'disparo').setDepth(0);
                explosion2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion2.anims.play('disparar', true);
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
            if (keyK.isDown && angle5 >= -maxAngle) {
                angle5 = cannonHead5.rotation - 0.02;
                cannonHead5.rotation = angle5;
            }
            else if (keyI.isDown && angle5 <= maxAngle) {
                angle5 = cannonHead5.rotation + 0.02;
                cannonHead5.rotation = angle5;
            }

            if (this.input.keyboard.checkDown(cursors.space, 1000) && municion2[bala2] > 0) {
                pollos[bala2 + 3].enableBody(true, cannon5.x, cannon5.y - 25, true, true);
                pollos[bala2 + 3].play('fly' + (bala2 + 3));
                cañonazo.play();
                this.physics.velocityFromRotation(angle5, -800, pollos[bala2 + 3].body.velocity);
                municion2[bala2]--;

                explosion2 = this.physics.add.sprite(cannonHead5.x - 50, cannonHead5.y, 'disparo').setDepth(0);
                explosion2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion2.anims.play('disparar', true);
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
            if (keyK.isDown && angle6 >= -maxAngle) {
                angle6 = cannonHead6.rotation - 0.02;
                cannonHead6.rotation = angle6;
            }
            else if (keyI.isDown && angle6 <= maxAngle) {
                angle6 = cannonHead6.rotation + 0.02;
                cannonHead6.rotation = angle6;
            }

            if (this.input.keyboard.checkDown(cursors.space, 1000) && municion2[bala2] > 0) {
                pollos[bala2 + 3].enableBody(true, cannon6.x, cannon6.y - 25, true, true);
                pollos[bala2 + 3].play('fly' + (bala2 + 3));
                cañonazo.play();
                this.physics.velocityFromRotation(angle6, -800, pollos[bala2 + 3].body.velocity);
                municion2[bala2]--;

                explosion2 = this.physics.add.sprite(cannonHead6.x - 50, cannonHead6.y, 'disparo').setDepth(0);
                explosion2.setVelocity(0, 0).setCollideWorldBounds(false).setGravityY(-300);
                explosion2.anims.play('disparar', true);
            }
        }

        Phaser.Geom.Line.SetToAngle(line6, cannonHead6.x, cannonHead6.y, 3.14159265 + angle6, 128);
        gfx6.clear().strokeLineShape(line6);

        // Mover personaje
        this.input.keyboard.on("keydown_J", () => {
            if (crafteando2 === false && reparando2 === false) {
                P2.setVelocityX(-velocidad2);

                P2.anims.play('left2', true);
            }
        });
        this.input.keyboard.on("keydown_L", () => {
            if (crafteando2 === false && reparando2 === false) {
                P2.setVelocityX(velocidad2);

                P2.anims.play('right2', true);
            }
        });
        this.input.keyboard.on("keyup_J", () => {
            if (crafteando2 === false && reparando2 === false) {
                P2.setVelocityX(0);

                P2.anims.play('turn2');
            }
        });
        this.input.keyboard.on("keyup_L", () => {
            if (crafteando2 === false && reparando2 === false) {
                P2.setVelocityX(0);

                P2.anims.play('turn2');
            }
        });

        // Escaleras
        if (keyI.isDown && subirEscaleras2 === true) {
            P2.setVelocityY(-velocidad1);
        }
        if (keyS.isDown && subirEscaleras2 === true) {
            P2.setVelocityY(velocidad1);
        }


        // Craftear
        var distanciaMesa2X = P2.x - mesa.x;
        if (distanciaMesa2X < 0) {
            distanciaMesa2X = -distanciaMesa2X;
        }
        var distanciaMesa2Y = P2.y - mesa.y;
        if (distanciaMesa2Y < 0) {
            distanciaMesa2Y = -distanciaMesa2Y;
        }
        var distanciaMesa2 = distanciaMesa2X + distanciaMesa2Y;

        if (this.input.keyboard.checkDown(cursors.space, tiempoCrafteo2[bala2]) && distanciaMesa2 <= 50 && crafteando2 === false && crafteando1 === false) {
            P2.anims.play('reparar2', true);
            crafteando2 = true;
            craftear.play();
            P2.setVelocityX(0);
            P2.setVelocityY(0);
            timer2 = this.time.delayedCall(tiempoCrafteo2[bala2], añadirMunicion2, [], this);
        }

        this.input.keyboard.once("keydown_U", () => {
            if (distanciaMesa2 <= 50 && crafteando1 === false && crafteando2 === false && energia2 === 100) {
                P2.anims.play('reparar2', true);
                crafteando2 = true;
                craftear.play();
                P2.setVelocityX(0);
                P2.setVelocityY(0);
                timer2 = this.time.delayedCall(5000, municionEspecial2, [], this);
            }
        });

        // Cambiar balas
        this.input.keyboard.on("keydown_EIGHT", () => {
            bala2 = 0;
        });
        this.input.keyboard.on("keydown_NINE", () => {
            bala2 = 1;
        });
        this.input.keyboard.on("keydown_ZERO", () => {
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

        Phaser.Geom.Line.SetToAngle(barra1, 400, 575, 0, 100 * (vida2P1 / vidaMax));
        Phaser.Geom.Line.SetToAngle(barra2, 400, 625, 0, 100 * (vida2P2 / vidaMax));
        Phaser.Geom.Line.SetToAngle(barra3, 400, 675, 0, 100 * (vida2P3 / vidaMax));
        Phaser.Geom.Line.SetToAngle(barra4, 800, 575, 0, 100 * (vida1P1 / vidaMax));
        Phaser.Geom.Line.SetToAngle(barra5, 800, 625, 0, 100 * (vida1P2 / vidaMax));
        Phaser.Geom.Line.SetToAngle(barra6, 800, 675, 0, 100 * (vida1P3 / vidaMax));
        configBarra1.clear().strokeLineShape(barra1);
        configBarra2.clear().strokeLineShape(barra2);
        configBarra3.clear().strokeLineShape(barra3);
        configBarra4.clear().strokeLineShape(barra4);
        configBarra5.clear().strokeLineShape(barra5);
        configBarra6.clear().strokeLineShape(barra6);

        // ------------------------- Barras de energia -------------------------
        if (energia1 > 100) {
            energia1 = 100;
        }
        if (energia2 > 100) {
            energia2 = 100;
        }
        Phaser.Geom.Line.SetToAngle(barraEnergia1, 375, 675, -1.57, 100 * (energia1 / 100));
        Phaser.Geom.Line.SetToAngle(barraEnergia2, 925, 675, -1.57, 100 * (energia2 / 100));
        configBarraEnergia1.clear().strokeLineShape(barraEnergia1);
        configBarraEnergia2.clear().strokeLineShape(barraEnergia2);

        // ------------------------- Sprites edificios -------------------------
        if (vida1P1 >= 60) {
            edificio1P1.anims.play('edificio2_v1');
        }
        if (vida1P1 <= 60) {
            edificio1P1.anims.play('edificio2_v2');
        }
        if (vida1P1 <= 30) {
            edificio1P1.anims.play('edificio2_v3');
        }
        if (vida1P1 <= 0) {
            edificio1P1.setVelocity(5, 200);
            fondoEdificio2P1.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line4, cannonHead4.x, cannonHead4.y, angle4, 0);
            gfx4.clear().strokeLineShape(line4);
            cannonHead4.setVelocity(5, 200);
            cannon4.setVelocity(5, 200);
        }

        if (vida1P2 >= 60) {
            edificio1P2.anims.play('edificio2_v4');
        }
        if (vida1P2 <= 60) {
            edificio1P2.anims.play('edificio2_v5');
        }
        if (vida1P2 <= 30) {
            edificio1P2.anims.play('edificio2_v6');
        }
        if (vida1P2 <= 0) {
            edificio1P2.setVelocity(5, 200);
            fondoEdificio2P2.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line5, cannonHead5.x, cannonHead5.y, angle5, 0);
            gfx5.clear().strokeLineShape(line5);
            cannonHead5.setVelocity(5, 200);
            cannon5.setVelocity(5, 200);
        }

        if (vida1P3 >= 60) {
            edificio1P3.anims.play('edificio2_v7');
        }
        if (vida1P3 <= 60) {
            edificio1P3.anims.play('edificio2_v8');
        }
        if (vida1P3 <= 30) {
            edificio1P3.anims.play('edificio2_v9');
        }
        if (vida1P3 <= 0) {
            edificio1P3.setVelocity(5, 200);
            fondoEdificio2P3.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line6, cannonHead6.x, cannonHead6.y, angle6, 0);
            gfx6.clear().strokeLineShape(line6);
            cannonHead6.setVelocity(5, 200);
            cannon6.setVelocity(5, 200);
        }

        if (vida2P1 >= 60) {
            edificio2P1.anims.play('edificio1_v1');
        }
        if (vida2P1 <= 60) {
            edificio2P1.anims.play('edificio1_v2');
        }
        if (vida2P1 <= 30) {
            edificio2P1.anims.play('edificio1_v3');
        }
        if (vida2P1 <= 0) {
            edificio2P1.setVelocity(-5, 200);
            fondoEdificio1P1.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line1, cannonHead1.x, cannonHead1.y, angle1, 0);
            gfx1.clear().strokeLineShape(line1);
            cannonHead1.setVelocity(5, 200);
            cannon1.setVelocity(5, 200);
        }

        if (vida2P2 >= 60) {
            edificio2P2.anims.play('edificio1_v4');
        }
        if (vida2P2 <= 60) {
            edificio2P2.anims.play('edificio1_v5');
        }
        if (vida2P2 <= 30) {
            edificio2P2.anims.play('edificio1_v6');
        }
        if (vida2P2 <= 0) {
            edificio2P2.setVelocity(-5, 200);
            fondoEdificio1P2.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line2, cannonHead2.x, cannonHead2.y, angle2, 0);
            gfx2.clear().strokeLineShape(line2);
            cannonHead2.setVelocity(5, 200);
            cannon2.setVelocity(5, 200);
        }

        if (vida2P3 >= 60) {
            edificio2P3.anims.play('edificio1_v7');
        }
        if (vida2P3 <= 60) {
            edificio2P3.anims.play('edificio1_v8');
        }
        if (vida2P3 <= 30) {
            edificio2P3.anims.play('edificio1_v9');
        }
        if (vida2P3 <= 0) {
            edificio2P3.setVelocity(-5, 200);
            fondoEdificio1P3.setVelocity(5, 200);
            Phaser.Geom.Line.SetToAngle(line3, cannonHead3.x, cannonHead3.y, angle3, 0);
            gfx3.clear().strokeLineShape(line3);
            cannonHead3.setVelocity(5, 200);
            cannon3.setVelocity(5, 200);
        }

        // ------------------------- Temporizador -------------------------
        textoTiempo.setText(180 - (tiempoPartida.getProgress() * 180).toString().substr(0, 3));

        // ------------------------- Chat -------------------------
        // fase 3
        textoChat.setText(chat);

        // ------------------------- Power ups -------------------------
        // Martillo
        if ((180 - (tiempoPartida.getProgress() * 180).toString().substr(0, 2)) === 90) {
            martillo.enableBody(true, 640, -20, true, true);
            martillo.setVelocity(0, velMartillo).setCollideWorldBounds(false).setGravityY(-300);
        }
        if ((180 - (tiempoPartida.getProgress() * 180).toString().substr(0, 2)) === 20) {
            martillo.enableBody(true, 640, -20, true, true);
            martillo.setVelocity(0, velMartillo).setCollideWorldBounds(false).setGravityY(-300);
        }

        if (martillo.y < 100) {
            martillo.setVelocity(0, velMartillo);
        } else if (martillo.y > 450) {
            martillo.setVelocity(0, -velMartillo);
        }

        // Stop
        if (bloqueo.y < 100) {
            bloqueo.setVelocity(0, velBloqueo);
        } else if (bloqueo.y > 450) {
            bloqueo.setVelocity(0, -velBloqueo);
        }

        // ------------------------- Ultimates -------------------------
        // Lanzar habilidad especial 1
        var distanciaBoton1X = P1.x - boton1.x;
        if (distanciaBoton1X < 0) {
            distanciaBoton1X = -distanciaBoton1X;
        }
        var distanciaBoton1Y = P1.y - boton1.y;
        if (distanciaBoton1Y < 0) {
            distanciaBoton1Y = -distanciaBoton1Y;
        }
        var distanciaBoton1 = distanciaBoton1X + distanciaBoton1Y;

        if (cursors.shift.isDown && distanciaBoton1 <= 50 && crafteando2 === false && crafteando1 === false && habilidadEspecial1 === true) {
            habilidadEspecial1 = false;
            boton.play();

            viejas.enableBody(true, -100, 475, true, true);
            viejas.anims.play('ulti_anciana');
            viejas.setVelocity(50, 0).setCollideWorldBounds(false).setGravityY(-300);
        }
        if (viejas.x > 200) {
            municion1[0] += 10;
            municion1[1] += 5;
            municion1[2] += 2;

            municion.enableBody(true, 200, 510, true, true);

            viejas.setVelocity(-50, 0).setCollideWorldBounds(false).setGravityY(-300);
        }
        if (viejas.x < -500) {
            viejas.disableBody(true, true);
        }

        // Lanzar habilidad especial 2
        var distanciaBoton2X = P2.x - boton2.x;
        if (distanciaBoton2X < 0) {
            distanciaBoton2X = -distanciaBoton2X;
        }
        var distanciaBoton2Y = P2.y - boton2.y;
        if (distanciaBoton2Y < 0) {
            distanciaBoton2Y = -distanciaBoton2Y;
        }
        var distanciaBoton2 = distanciaBoton2X + distanciaBoton2Y;

        if (cursors.space.isDown && distanciaBoton2 <= 50 && crafteando2 === false && crafteando1 === false && habilidadEspecial2 === true) {
            habilidadEspecial2 = false;
            boton.play();

            bateria.enableBody(true, 180, -50, true, true);
            bateria.setVelocity(0, 100).setCollideWorldBounds(false).setGravityY(-300);
        }

        // ------------------------- Energia -------------------------
        tiempoAux1 = (tiempoPartida.getProgress() * 180).toString().substr(0, 2);
        if (tiempoAux1 > tiempoAux2) {
            energia1++;
            energia2++;

            tiempoAux2++;
        }

        // ------------------------- Reparar -------------------------
        var keyE = this.input.keyboard.addKey('E');

        if (keyE.isDown) {
            Eabajo = true;
        } else {
            Eabajo = false;
        }

        if (reparar21aux === true) {
            reparando1 = true;
            P1.anims.play('reparar', true);
            reparar.play();
            timer1 = this.time.delayedCall(tiempoReparar, reparar21v2, [], this);
        }
        if (reparar22aux === true) {
            reparando1 = true;
            P1.anims.play('reparar', true);
            reparar.play();
            timer1 = this.time.delayedCall(tiempoReparar, reparar22v2, [], this);
        }
        if (reparar23aux === true) {
            reparando1 = true;
            P1.anims.play('reparar', true);
            reparar.play();
            timer1 = this.time.delayedCall(tiempoReparar, reparar23v2, [], this);
        }


        var keyO = this.input.keyboard.addKey('O');

        if (keyO.isDown) {
            Oabajo = true;
        } else {
            Oabajo = false;
        }

        if (reparar11aux === true) {
            reparando2 = true;
            P2.anims.play('reparar2', true);
            reparar.play();
            timer2 = this.time.delayedCall(tiempoReparar, reparar11v2, [], this);
        }
        if (reparar12aux === true) {
            reparando2 = true;
            P2.anims.play('reparar2', true);
            reparar.play();
            timer2 = this.time.delayedCall(tiempoReparar, reparar12v2, [], this);
        }
        if (reparar13aux === true) {
            reparando2 = true;
            P2.anims.play('reparar2', true);
            reparar.play();
            timer2 = this.time.delayedCall(tiempoReparar, reparar13v2, [], this);
        }

        // ------------------------- Fin del juego -------------------------
        if (vida1P1 <= 0 && vida1P2 <= 0 && vida1P3 <= 0) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:8080/chat",
                dataType: "json",
            }).done(function (data) {
                console.log("DELETE CHAT");
            });

            this.scene.start('VictoriaAnciana');
            musica_fondo.stop();
        }
        if (vida2P1 <= 0 && vida2P2 <= 0 && vida2P3 <= 0) {
            $.ajax({
                type: "DELETE",
                url: "http://localhost:8080/chat",
                dataType: "json",
            }).done(function (data) {
                console.log("DELETE CHAT");
            });

            this.scene.start('VictoriaRockero');
            musica_fondo.stop();
        }
    }
}

class VictoriaAnciana extends Phaser.Scene {
    constructor() {
        super({ key: 'VictoriaAnciana' });
    }

    preload() {
        this.load.image('fondo_victoria_anciana', 'assets/images/definitivas/general/victoria_vieja.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_victoria_anciana');
    }
}

class VictoriaRockero extends Phaser.Scene {
    constructor() {
        super({ key: 'VictoriaRockero' });
    }

    preload() {
        this.load.image('fondo_victoria_rockero', 'assets/images/definitivas/general/victoria_rockero.png');
    }

    create() {
        this.add.image(640, 360, 'fondo_victoria_rockero');
    }
}

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
    scene: [EscenaLogin, EscenaInicio, EscenaTutorial1, EscenaTutorial2, EscenaJuego, VictoriaAnciana, VictoriaRockero]
};

let game = new Phaser.Game(config);