# Neighbor-s-fight
#### Game Desing Document

<img src="https://user-images.githubusercontent.com/92206944/138704803-acc1d546-92ed-4d5b-acc4-c2e16c3847d5.png" alt="urjc logo" width="10%">

<br>

*** 

<p>INDEX</p>

  * Introducción 
    * Concepto de juego
    * Género
    * Características principales
    * Propósito y público objetivo
    * Alcance
  
  * Mecánicas
   
     * Condiciones de victoria
     * Acciones posibles
     * Jugabilidad
     * Flujo de juego
     * Dinámica de juego
     * Interacción en Red
     * Personajes
     * Movimientos y físicas
  
  * Interfaz
  
     * Pantalla durante la partida
     * Elementos en pantalla
  
  * Arte
  
     * Herramientas de diseño
     * Paleta de colores
     * Estilo visual
  
  * Música
  
     * Música durante la partida
     * Música fuera de la partida
  
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
  <li>Craftear munición (la mesa de crafteo en el primer piso)</li>
  <li>Cagar balas y disparar (siempre al último piso y el disparo nunca falla, esto está abierto a cambios) *</li>
  <li>Reparar</li>
  <li>Moverse de piso </li>
  <li>Moverse por el piso, de lado a lado</li>
  <li>A la hora de disparar se podrá disparar únicamente al piso de más arriba que esté “vivo” (esto puede estar sujeto a cambios, de manera que puede avanzar a que se pueda disparar a cualquier piso.)
</li>
</ul>

>*Disclaimer: Se ha planteado la opción de que cargar y disparar sean dos opciones diferentes (el jugador puede dejar el cañón cargado y disparar más tarde). Se tomará una decisión definitiva al conocer el motor de juego y al ir implementando.En esta opción, al dejar el cañón cargado, cambiaría de color.

### Jugabilidad
<strong>Estrategias de juego</strong>: Cada jugador tendrá su propio inventario donde acumulará las distintas municiones (hasta un máximo de tres), por lo que el jugador deberá pensar cómo gastar su tiempo en generar mucha munición de golpe para un gran ataque o emplear menos tiempo y hacer ataques más seguidos.
<br><br>
Cuando un jugador recibe un disparo del rival puede emplear su tiempo en reparar su piso (es decir sumarle vida a dicho piso). Mientras el jugador <strong>repara un agujero </strong>, no puede hacer más acciones.
<br><br>
Aquí se generan dos estrategias diferentes: los jugadores al recibir daño deberán pensar en sí protegerse para aumentar su vida o en emplear su tiempo en realizar un ataque más potente al recibido (la mejor defensa es un buen ataque).

### Flujo de juego
<img src="https://user-images.githubusercontent.com/92206944/138701652-bb52fcb4-d3c0-4356-8879-9e7b1ceb4f92.png" alt="Flujo de juego" width="50%">
<br>

### Dinámica de juego
<strong>Cámara</strong>: Vista lateral fija
<br>
<strong>Periféricos</strong>: Ratón y teclado
<br>
<strong>Controles</strong>: El movimiento del jugador se hará mediante clicks con el ratón de forma que a donde cliques es a donde el jugador se moverá. 
Para realizar las acciones de recargar y reparar el jugador emplea las teclas 1,2,3 y 4 del teclado, siendo la tecla 1 para cargar y disparar el dispara de poco daño, la tecla 2 para el disparo de daño medio y la tecla 3 para el de mucho daño y la tecla 4 para reparar.
### Interacción en Red
<p> En la interacción en red podemos ver el movimiento del jugador subiendo y bajando de piso, la creación de la distinta munición,  la recarga de los cañones, su disparo y la barra de vida del edificio rival junto al desgaste del edificio tras la pérdida de vida.</p>
<h3>Personajes</h3>
<p>Personaje 1:</p>
<p>Nombre: Anciana Concha </p>
<p>Descripción: Doña Concha es una anciana de 97 años cuyo objetivo es deshacerse de sus vecinos para así tener el control del papel higiénico. A pesar de no necesitar el papel higiénico en exceso, se hará con el control de este solo por incordiar a sus vecinos, ya que estos mataron a su anterior gato.</p>
<p>Imagen:</p>
<img src="https://user-images.githubusercontent.com/92206944/138705573-2e9b2c28-c2dc-4f9c-a53b-065bbb291f62.png" alt="urjc logo" width="20%">
<p>Munición:</p>
<ul>
  <li>poco daño: dentadura </li>
  <li>daño medio: gato</li>
  <li>mucho daño: taka-taka</li>
</ul>
<p>Imagenes de su munición:</p>

<p>Personaje 2:</p>
<p>Nombre: Rockero Javi </p>
<p>Descripción: Tras varias llamadas a la policía por parte de sus vecinos, ahora ve la oportunidad perfecta de venganza gracias a la locura causada por el COVID-19.</p>
<p>Imagen:</p>
<p>Munición:</p>
<ul>
  <li>poco daño: baquetas </li>
  <li>daño medio: guitarra</li>
  <li>mucho daño: amplificador</li>
</ul>
<p>Imagenes de su munición:</p>
<p>Estos son los personajes iniciales del juego pero se tiene en mente añadir más personajes que sean distintos estereotipos de vecinos, como por ejemplo el moroso/okupa, el manitas, el friki que lo sabe todo, presidente de la comunidad… Cada uno de estos al igual que los iniciales tendrán distintos tipos de disparo (con diferente cantidad de daño), de manera que los objetos que lanzan están relacionados con lo que representan.</p>
<h3>Movimientos y físicas</h3>
<p>Las balas tienen un movimiento parabólico. </p>
<p>La bala siempre se dispara al piso de arriba del todo.</p>
<p>El personaje se puede mover entre pisos y de izquierda a derecha.</p>
<p>La interacción es mediante clicks y la pulsación de teclas.
</p>
<br>





<h1>Interfaz</h1>
<h3>Pantalla durante la partida</h3>


<img src="https://user-images.githubusercontent.com/92206944/138705881-9bac1c44-625d-4602-b4a3-569cd56b605a.jpg" alt="pantalla" width="80%">
<img src="https://user-images.githubusercontent.com/92206944/138705986-89f81a7b-17d2-4b6d-9d02-0051d18e0834.jpg" width="80%">

<p>La pantalla del juego consta de dos edificios iguales situados cada uno a un lado de la pantalla. Cada edificio estará formado por tres pisos por los que los jugadores irán moviéndose para cargar y disparar los respectivos cañones que hay situados en cada piso. </p>
<h3>Elementos en pantalla</h3>
<img src="" alt="urjc logo" width="70%">
<ul>
  <li>Dos edificios iguales situados cada uno a un lado de la pantalla</li>
  <li>Cada edificio estará formado por tres pisos por los que los jugadores irán moviéndose para cargar y disparar los respectivos cañones que hay situados en cada piso.</li>
  <li>Un cañón por piso</li>
  <li>Cuenta atrás en el borde superior</li>
  <li>“Barras de vida” por cada piso de los edificios</li>
  <li>Mesa de crafteo en el piso inferior</li>
  <li>Botón de pausa en la esquina derecha superior</li>
  <li>Inventario (con la munición del jugador) en la esquina superior izquierda.</li>

</ul>
<br>





<h1>Arte</h1>
<h3>Herramientas de diseño</h3>
<ul>
  <li>Sprites con photoshop</li>
  <li>Animación 2D con Sprites</li>
  <li>Sonidos de banco de sonidos gratuito (Sonidos y dibujos estilo cartoon.)</li>
</ul>
<h3>Paleta de colores</h3>
<p>Se elegirá una paleta de colores de tonos brillantes y coloridos, acompañando el tono naif del juego.</p>
<p>Para elegir la paleta se tomarán de referencia los colores de juegos como los de King</p>
<img src="https://user-images.githubusercontent.com/92206944/138707018-7bafdd6e-b534-4f4b-894b-a1b61652ee7e.jpg" alt="crash on the run" width="100%">
<h3>Estilo visual</h3>
<p>Neighbor's fight tendrá un estilo visual basado en cartoon en 2D. </p>
<p>Algunos juegos de referencia: </p>
<ul>
  <li>Fireboy and Watergirl</li>
  <li>Risk para móviles</li>
  <li>Casual games para móviles como los de SuperCell.</li>
</ul>
<p>Algunas imágenes de referencia:</p>



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





<h1>Música</h1>
<h3>Música durante la partida</h3>
<p><a href="https://www.youtube.com/watch?v=YTEADhN5_WM&ab_channel=JuanSanchez">Música estilo combate pokémon</a></p>
<p><a href="https://youtu.be/EI9iI-RC5XI">Música estilo Piratas del Caribe</a></p>
<h3>Música fuera de la partida</h3>
<p>Música animada estilo juegos para niños</p>
<br>
