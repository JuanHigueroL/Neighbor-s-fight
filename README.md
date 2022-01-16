# Neighbor-s-fight
#### Game Desing Document

Universidad Rey Juan Carlos
<br>
*Juegos en Red*
<br>
<img src="https://user-images.githubusercontent.com/92206944/138704803-acc1d546-92ed-4d5b-acc4-c2e16c3847d5.png" alt="urjc logo" width="10%">

<br>

# El equipo


<img src="https://user-images.githubusercontent.com/92206944/138921876-892e3b0a-37f9-431c-882d-fdc786773fe5.png" alt="zacan logo" width="30%">


<br>

#### Roberto Algegre Marcos 
r.alegre.2019@alumnos.urjc.es - roberalegre(github)
#### Juan Higuero López
j.higuero.2019@alumnos.urjc.es - JuanHigueroL (github)
#### David Pozo Sánchez
d.pozo.2019@alumnos.urjc.es - DavidPS17 (github)
#### Lucía Tallero Fernández 
l.tallero.2018@alumnos.urjc.es - tallerofdez (github)


*** 

#### INDEX
<br>

  * [Introducción](#Introducción)
    * [Concepto de juego](#Concepto-de-juego)
    * [Género](#Género)
    * [Características principales](#Características-principales)
    * [Propósito y público objetivo](#Propósito-y-público-objetivo)
    * [Alcance](#Alcance)
  
  * [Mecánicas](#Mecánicas)
   
     * [Condiciones de victoria](#Condiciones-de-victoria)
     * [Acciones posibles](#Acciones-posibles)
     * [Jugabilidad](#Jugabilidad)
     * [Flujo de juego](#Flujo-de-juego)
     * [Dinámica de juego](#Dinámica-de-juego)
     * [Interacción en Red](#Interacción-en-Red)
     * [Personajes](#Personajes)
     * [Movimientos y físicas](#Movimientos-y-físicas)
  
  * [Interfaz](#Interfaz)
  
     * [Pantalla durante la partida](#Pantalla-durante-la-partida)
     * [Elementos en pantalla](#Elementos-en-pantalla)
  
  * [Arte](#Arte)

  
     * [Herramientas de diseño](#Herramientas-de-diseño)
     * [Paleta de colores](#Paleta-de-colores)
     * [Estilo visual](#Estilo-visual)


  * [Música](#Música)
  * [Ejecución del programa](#Ejecución-del-programa)
  
     *  [API REST](#API-REST)
     *  [Comunicación por WebSockets](#Comunicación-por-WebSockets)
     *  [Pasos para ejecutar el juego](#Pasos-para-ejecutar-el-juego)

  * [Vídeo: Explicación y Gameplay](#Vídeo:-Explicación-y-Gameplay)
  

  
<br>


# Introducción 
### Concepto de juego
Tras la vigésima ola de la pandemia del coronavirus, la lucha por los recursos es más importante que nunca. ¡Comienza una guerra con tus vecinos para ser los únicos en el barrio con acceso al papel higiénico del supermercado!
Neighbor's fight es un juego multijugador de 1 vs 1 donde cada jugador controla a un miembro de una comunidad de vecinos y deberá combatir contra el otro, en una batalla basada en lanzarse objetos de distintos tipos desde sus casas para así conseguir dominar el barrio.
### Género
Tower Defense y juego de estrategia en tiempo real para 2 jugadores (1 vs 1)
### Características principales
El juego se basa en una pelea de vecinos. Cada jugador puede crear distintos tipos de balas, dispararlas al vecino oponente, reparar los daños que te haga el vecino oponente sobre tu edificio y moverte entre pisos para disparar desde diferentes puntos. El objetivo es destruir el edificio vecino (el oponente) o causar el mayor daño posible antes de que se acabe el juego.
### Propósito y público objetivo
El propósito general de este juego es el entretenimiento y diversión de nuestros jugadores, creando un juego en el que te enfrentes a tu amigo en una batalla divertida y absurda en cuanto a la estética. 
El público objetivo es el <strong>público general</strong>, puesto que es un juego <em>“family-friendly”</em>. Será un <strong>juego casual</strong>.
### Alcance
El <strong>objetivo principal</strong> es conseguir una versión funcional con 2 personajes manejados por dos jugadores diferentes en dos dispositivos distintos a través de una red de ordenadores.
En un futuro se planea introducir más personajes, mecánicas, mapas, objetos y recompensas aleatorias en el mapa...
<br>




# Mecánicas
### Condiciones de victoria
El primer jugador que derribe el edificio del contrario (destruir los 3 pisos que forman el edificio del oponente) gana.
En caso de no llegar a este punto el jugador que tenga el edificio menos dañado al acabar la cuenta atrás ganará.
### Acciones posibles
<ul>
 <li>Craftear munición (la mesa de crafteo entre los dos pisos) y munición 'ultimate'</li>
  <li>Cagar balas y disparar (siempre al último piso y el disparo nunca falla, esto está abierto a cambios) *</li>
  <li>Reparar</li>
  <li>Moverse de piso </li>
  <li>Moverse por el piso, de lado a lado</li>
</ul>

### Jugabilidad
<strong>Estrategias de juego</strong>: Cada jugador tendrá su propio inventario donde acumulará las distintas municiones (hasta un máximo de tres), por lo que el jugador deberá pensar cómo gastar su tiempo en generar mucha munición de golpe para un gran ataque o emplear menos tiempo y hacer ataques más seguidos.
<br><br>
Cuando un jugador recibe un disparo del rival puede emplear su tiempo en reparar su piso (es decir sumarle vida a dicho piso). Mientras el jugador <strong>repara un agujero </strong>, no puede hacer más acciones.
<br><br>
Aquí se generan dos estrategias diferentes: los jugadores al recibir daño deberán pensar en sí protegerse para aumentar su vida o en emplear su tiempo en realizar un ataque más potente al recibido (la mejor defensa es un buen ataque).

### Flujo de juego
<img src="https://user-images.githubusercontent.com/92206944/138764126-7f04618d-f9e5-4b42-aa9a-5674c7f55acb.png" alt="Flujo de juego" width="100%">
<br>

Flujo de pantallas : 
<img src="https://user-images.githubusercontent.com/92206944/148688958-d81d0c99-5f1b-48b8-8db5-f86fcbf4a470.png" alt="Flujo de juego" width="100%">

Las pantallas con más detalle en [interfaz](#Interfaz).

<br>

### Dinámica de juego
<strong>Cámara</strong>: Vista lateral fija
<br>
<strong>Periféricos</strong>: Ratón y teclado
<br>
<strong>Controles</strong>: 
Para realizar las acciones de seleccionar munición el jugador emplea las teclas 1,2,3 y 8,9 y 0 del teclado, según sea el jugador 1 o el 2.
Para moverse, se emplean las teclas wasd o ijkl según sea el jugador 1 o el 2.
Para disparar/craftear munición, la las teclas barra espaciadora o shift respectivamente.
Para utilizar la ultimate Q (jugador 1) o U (jugador 2). 
Para utilizar la reparar E (jugador 1) o O (jugador 2). 

### Interacción en Red
 En la interacción en red podemos ver el movimiento del jugador subiendo y bajando de piso, la creación de la distinta munición,  la recarga de los cañones, su disparo y la barra de vida del edificio rival junto al desgaste del edificio tras la pérdida de vida.
 
 También hay un chat y un sistema de nombres de usuario que se gestionan con una API REST (ver más en [API REST](#API-REST)).
 
### Personajes
#### Personaje 1:
<br>

**Nombre**: Anciana Concha 
<br>
**Descripción**: Doña Concha es una anciana de 97 años cuyo objetivo es deshacerse de sus vecinos para así tener el control del papel higiénico. A pesar de no necesitar el papel higiénico en exceso, se hará con el control de este solo por incordiar a sus vecinos, ya que estos mataron a su anterior gato.
<br>
**Imagen:**
<br>
<img src="https://user-images.githubusercontent.com/92206944/145450654-3e22e2ff-14a4-4624-a33f-825dc040afc4.png" alt="Concha" width="20%">
<br>
**Munición:**
<ul>
  <li>poco daño: dentadura </li>
  <li>daño medio: gato</li>
  <li>mucho daño: taka-taka</li>
</ul>

**Imagenes de su munición:**
<br>
<img src="https://user-images.githubusercontent.com/92206944/145609868-9f588f6a-b43b-4353-8c8a-b8b497d016b7.png" alt="Concha" width="15%">
<img src="https://user-images.githubusercontent.com/92206944/145610094-2762c30a-3731-45b9-9b16-8ae578b2c4c0.png" alt="Concha" width="15%">
<img src="https://user-images.githubusercontent.com/92206944/145610121-ac21fd70-d79b-4a15-bbe8-41eb1bd3be55.png" alt="Concha" width="15%">
<br>

#### Personaje 2:
**Nombre**: Rockero Javi 
<br>
**Descripción**: Tras varias llamadas a la policía por parte de sus vecinos, ahora ve la oportunidad perfecta de venganza gracias a la locura causada por el COVID-19.
<br>
**Imagen**:
<br>
<img src="https://user-images.githubusercontent.com/92206944/145451148-8fa21800-0a5b-4dfe-8f3d-ac2469771d75.png" alt="Rockero" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/145451234-e8fac4cf-9f86-4faf-ae02-1c63c7306900.png" alt="Rockero" width="50%">
<br>
**Munición**:
<ul>
  <li>poco daño: baquetas </li>
  <li>daño medio: guitarra</li>
  <li>mucho daño: amplificador</li>
</ul>

**Imagenes de su munición**:
<img src="https://user-images.githubusercontent.com/92206944/138765683-d5340cff-c58c-47c6-9a9a-4d7f8a06ee78.png" alt="Rockero" width="50%">
<br>
Estos son los personajes iniciales del juego pero se tiene en mente añadir más personajes que sean distintos estereotipos de vecinos, como por ejemplo el moroso/okupa, el manitas, el friki que lo sabe todo, presidente de la comunidad… Cada uno de estos al igual que los iniciales tendrán distintos tipos de disparo (con diferente cantidad de daño), de manera que los objetos que lanzan están relacionados con lo que representan.

### Movimientos y físicas
Las balas tienen un movimiento parabólico. 
<br>
El personaje se puede mover entre pisos y de izquierda a derecha.
<br>
La interacción es mediante la pulsación de teclas.

<br>





# Interfaz
### Pantalla durante la partida


<img src="https://user-images.githubusercontent.com/92206944/146971613-5e737032-9b9f-4a44-8f4d-686c5544e4f1.png" width="80%">

La pantalla del juego consta de dos edificios iguales situados cada uno a un lado de la pantalla. Cada edificio estará formado por tres pisos por los que los jugadores irán moviéndose para cargar y disparar los respectivos cañones que hay situados en cada piso.

### Elementos en pantalla

<ul>
  <li>Dos edificios iguales situados cada uno a un lado de la pantalla</li>
  <li>Cada edificio estará formado por tres pisos por los que los jugadores irán moviéndose para cargar y disparar los respectivos cañones que hay situados en cada piso.</li>
  <li>Un cañón por piso</li>
  <li>Cuenta atrás en el borde superior</li>
  <li>“Barras de vida” por cada piso de los edificios</li>
  <li>Mesa de crafteo en el piso inferior</li>
  <li>Botón de pausa en la esquina derecha superior</li>
  <li>Inventario (con la munición del jugador) en la esquina superior izquierda.</li>
  <li>Un chat para comunicarse con los jugadores en la misma red</li>

</ul>
<br>

### Pantalla de inicio

<img src="https://user-images.githubusercontent.com/92206944/145611073-8e063a00-3a80-4280-9d6f-697a09b0a4f1.png" width="80%">

<br>
Tiene la opción de empezar a jugar y la opción de ver el tutorial.


### Pantalla de tutorial

<img src="https://user-images.githubusercontent.com/92206944/145613050-b68a828e-7361-4cc9-9d54-f808576c923d.png" width="80%">
<img src="https://user-images.githubusercontent.com/92206944/145613067-54968cb0-183c-46e3-bd77-856a92f54713.png" width="80%">

<br>
Las flechas te dan la opción de pasar a la siguiente página del tutorial o a la anterior


### Pantalla selección de modo

<img src="https://user-images.githubusercontent.com/92206944/148689496-87999604-6f63-40f9-a2bb-c3f31f67eef8.png" width="80%">

<br>
Esta pantalla se mostrará después de elegir la opción 'jugar' en la pantallá de menú.


### Pantalla de elección de nombre del jugador

<img src="https://user-images.githubusercontent.com/92206944/146972096-806285e1-db3a-4275-b4b5-d91570e075a8.png" width="80%">
<img src="https://user-images.githubusercontent.com/92206944/146972340-d4e45c38-9036-4862-8e7a-f685bbaf55c0.png" width="80%">

<br>
Aquí se escogerá el nombre del jugador que más tarde se mostrará en lapantalla durante el juego


### Pantalla de espera

<img src="https://user-images.githubusercontent.com/92206944/148689403-684c68ab-eb0a-4bb9-b1e2-4b5c77af5900.png" width="80%">

<br>
Está pantantalla se mostrará mientras se espera a un segundo jugador, en caso de haber seleccionado la opción jugar en multijugador

### Pantalla final de juego


<img src="https://user-images.githubusercontent.com/92206944/145611239-eeaf78eb-7f5c-40e0-9a79-62dd34bfbef5.png" width="80%">
<img src="https://user-images.githubusercontent.com/92206944/145611334-13e41167-dd80-48dd-ba5b-a0effdfe54bd.png" width="80%">

<br>
Se muestra según el jugador que haya ganado


# Arte
### Herramientas de diseño
<ul>
  <li>Sprites con photoshop</li>
  <li>Animación 2D con Sprites</li>
  <li>Sonidos de banco de sonidos gratuito (Sonidos y dibujos estilo cartoon.)</li>
</ul>

### Paleta de colores

Se elegirá una paleta de colores de tonos brillantes y coloridos, acompañando el tono naif del juego.
<img src="https://user-images.githubusercontent.com/92206944/145610670-d05cc2d9-300d-447f-a6ba-eeda6709da13.jpg" alt="paleta" width="100%">

<br>
Para elegir la paleta se tomarán de referencia los colores de juegos como los de King
<br>
<br>
<img src="https://user-images.githubusercontent.com/92206944/138707018-7bafdd6e-b534-4f4b-894b-a1b61652ee7e.jpg" alt="crash on the run" width="100%">

### Estilo visual
Neighbor's fight tendrá un estilo visual basado en cartoon en 2D. 
<br>
Algunos juegos de referencia: 
<ul>
  <li>Fireboy and Watergirl</li>
  <li>Risk para móviles</li>
  <li>Casual games para móviles como los de SuperCell.</li>
</ul>
Algunas imágenes de referencia:
<br>



<img src="https://user-images.githubusercontent.com/92206944/138707638-25d0de1d-86e2-4f27-b4ec-823f9e087fa6.png" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138707798-3d66cd83-7957-4231-b92c-db14c7a8c6b3.gif" alt="referencias" width="50%">

<img src="https://user-images.githubusercontent.com/92206944/138707896-b3e06d17-460e-4ab8-94ce-4cfd75a22164.jpg" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708002-beb5fbb8-ce44-4554-83bd-a8235ecd7704.png" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708079-a246ffe8-5592-47e2-a8e0-b19a7386f14f.jpg" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708156-6cadc71c-2042-4944-a61a-51abcec26769.jpg" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708216-3265ef64-d794-4b97-9c1a-4e2e7647b7e1.jpg" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708309-79406148-071a-4504-ada8-67631f7dd795.jpg" alt="referencias" width="50%">
<img src="https://user-images.githubusercontent.com/92206944/138708395-503fe4b3-3c85-4399-9d60-6576b7280000.jpg" alt="referencias" width="50%">

<br>


# Música

<br>
Sonido al disparar:
<br>

https://user-images.githubusercontent.com/92206944/145613292-1c7ab156-0a61-453a-ac93-52d42e4e83b1.mp4

<br>
Sonido al pulsar el botón del ulti:
<br>

https://user-images.githubusercontent.com/92206944/145613609-69a1af98-a436-4d38-af67-b7d241224923.mp4


<br>
Sonido al reparar :
<br>

https://user-images.githubusercontent.com/92206944/145613659-85c7cc41-5bb1-4717-9afe-a222a43e01e2.mp4


<br>
Música de fondo:
<br>

https://user-images.githubusercontent.com/92206944/145613645-732e9137-d4fd-4b56-b597-27a59bbae28b.mp4



<br>
Sonido al craftear:
<br>

https://user-images.githubusercontent.com/92206944/145613630-e60eb9ab-7443-4867-bdf5-f8dc5a8f8bb7.mp4

<br><br>

# Ejecución del programa
### API REST

Se ha creado una API REST en Java usando el IDE Eclipse y el framework Spring. En la siguiente imagen esta el diagrama UML de clases de la API REST:

<img src="https://user-images.githubusercontent.com/92206944/146981543-a1368e1f-cc70-4994-8328-ee44e18d1241.png" >

La API tiene :
- Clases controladores Chat y Username con sus constructores, getters y setters.
- Clases RestController ChatRestController y UsernameRestController. Definen diferentes métodos GET, PUT, DELETE y POST para acceder a sus datos desde el cliente.
- Clase App. Desde aquí se inicia la ejecución.



La API REST se usa para levantar un servidor y ofecer comunicación cliente-servidor. Esta API permite:
- El chat del juego
- Guardar los nombres de usuario de los jugadores


### Comunicación por WebSockets

EL Diagrama de clases teniendo en cuenta la clase Manejador para los WebSockets:
<img src="https://user-images.githubusercontent.com/92206944/148689752-99f85739-006a-4013-9d09-38eb49402c20.png" width="80%">
<br>

El cliente comunica al servidor:
 * Que está esperando para entrar a jugar
* La posición de su jugador
* La posición a la que apuntan sus cañones
* Su barra de energía 
* Al disparar con que bala dispara y desde donde 
* Acción de reparar o craftear
* La vida de los edificios enemigos

*Clase Manejador: WebsocketZakanHandlet:*

La clase manejador implementada tiene una tabla Hash en la que se guardan todas las sesiones que se unen al servidor.

La clase tiene las siguientes funciones:

- afterConnectionEstablished(): Asigna un orden a los usuarios cuando se conectan. Se le asigna un 1 al primer usuario y un 0 al segundo.
- afterConnectionClosed(): Se invoca cuando un usuario se desconecta. Se imprime por pantalla y se borra de la lista de sesiones.
- handleTextMessage(): Recibe un mensaje JSON (que contiene los cambios en el juego) y lo mapea. Despues llama al método enviarInfo()
- enviarInfo(): Manda a todas las sesiones de la lista la información que recibe.

 


### Pasos para ejecutar el juego

Primero es necesario levantar el servidor:
- Descargar el proyecto 
- Importarlo con Eclipse o con Spring Tool Suite (opción Existing Maven Project)
- Ejecutarlo como SpringApplication (desde el fichero App.java)

Acceder al servidor desde un cliente:
- El cliente será un navegador de la misma máquina que ha levantado el servidor o de otra.
- El navegador preferiblemente será Google Chrome.
- Buscar la dirección IP de la máquina que ha levantado el servidor en el puerto 8080.

¡Jugar!




<br><br>
<a name="Vídeo:-Explicación-y-Gameplay"></a>
# Vídeo: Explicación y Gameplay


<a href="https://youtu.be/Nj-qqBWYyz4">Enlace al video</a>


