# Neighbor-s-fight

<h4>Game Desing Document</h4>

<br>
<p>INDEX</p>
<ul>
  <li><a href="">Introducción</a></li>
  <ul>
     <li>Concepto de juego</li>
     <li>Género</li>
     <li>Características principales</li>
     <li>Propósito y público objetivo</li>
     <li>Alcance</li>
  </ul>
  <li>Mecánicas</li>
   <ul>
     <li>Condiciones de victoria</li>
     <li>Acciones posibles</li>
     <li>Jugabilidad</li>
     <li>Flujo de juego</li>
     <li>Dinámica de juego</li>
     <li>Personajes</li>
     <li>Movimientos y físicas</li>
  </ul>
  <li>Interfaz</li>
  <ul>
     <li>Pantalla durante la partida</li>
     <li>Elementos en pantalla</li>
  </ul>
  <li>Arte</li>
  <ul>
     <li>Herramientas de diseño</li>
     <li>Paleta de colores</li>
     <li>Estilo visual</li>
  </ul>
  <li>Música</li>
  <ul>
     <li>Música durante la partida</li>
     <li>Música fuera de la partida</li>
  </ul>
</ul>

<br>
<h2>Introducción</h2>
<h3>Concepto de juego</h3>
<p>Tras la vigésima ola de la pandemia del coronavirus, la lucha por los recursos es más importante que nunca. ¡Comienza una guerra con tus vecinos para ser los únicos en el barrio con acceso al papel higiénico del supermercado!</p>
<p>Neighbor's fight es un juego multijugador de 1 vs 1 donde cada jugador controla a un miembro de una comunidad de vecinos y deberá combatir contra el otro, en una batalla basada en lanzarse objetos de distintos tipos desde sus casas para así conseguir dominar el barrio.</<p>
<h3>Género</h3>
<p>Tower Defense y juego de estrategia en tiempo real para 2 jugadores (1 vs 1)</p>
<h3>Características principales</h3>
<p>El juego se basa en una pelea de vecinos. Cada jugador puede crear distintos tipos de balas, dispararlas al vecino oponente, reparar los daños que te haga el vecino oponente sobre tu edificio y moverte entre pisos para disparar desde diferentes puntos. El objetivo es destruir el edificio vecino (el oponente) o causar el mayor daño posible antes de que se acabe el juego.</p>
<h3>Propósito y público objetivo</h3>
<p>El propósito general de este juego es el entretenimiento y diversión de nuestros jugadores, creando un juego en el que te enfrentes a tu amigo en una batalla divertida y absurda en cuanto a la estética. </p>
<p>El público objetivo es el <strong>público general</strong>, puesto que es un juego <em>“family-friendly”</em>. Será un <strong>juego casual<strong>.</p>
<h3>Alcance</h3>
  <p>El <strong>objetivo principal</strong> es conseguir una versión funcional con 2 personajes manejados por dos jugadores diferentes en dos dispositivos distintos a través de una red de ordenadores.</p>
<p>En un futuro se planea introducir más personajes, mecánicas, mapas, objetos y recompensas aleatorias en el mapa...</p>
<br>




<h2>Mecánicas</h2>
<h3>Condiciones de victoria</h3>
<p>El primer jugador que derribe el edificio del contrario (destruir los 3 pisos que forman el edificio del oponente) gana.</p>
<p>En caso de no llegar a este punto el jugador que tenga el edificio menos dañado al acabar la cuenta atrás ganará.</p>
<h3>Acciones posibles</h3>
<ul>
  <li>Craftear munición (la mesa de crafteo en el primer piso)</li>
  <li>Cagar balas y disparar (siempre al último piso y el disparo nunca falla, esto está abierto a cambios) *</li>
  <li>Reparar</li>
  <li>Moverse de piso </li>
  <li>Moverse por el piso, de lado a lado</li>
  <li>A la hora de disparar se podrá disparar únicamente al piso de más arriba que esté “vivo” (esto puede estar sujeto a cambios, de manera que puede avanzar a que se pueda disparar a cualquier piso.)
</li>
</ul>
<p>*Disclaimer: Se ha planteado la opción de que cargar y disparar sean dos opciones diferentes (el jugador puede dejar el cañón cargado y disparar más tarde). Se tomará una decisión definitiva al conocer el motor de juego y al ir implementando.En esta opción, al dejar el cañón cargado, cambiaría de color.</p>
<h3>Jugabilidad</h3>
<p><strong>Estrategias de juego</strong>: Cada jugador tendrá su propio inventario donde acumulará las distintas municiones (hasta un máximo de tres), por lo que el jugador deberá pensar cómo gastar su tiempo en generar mucha munición de golpe para un gran ataque o emplear menos tiempo y hacer ataques más seguidos.</p>
<p>Cuando un jugador recibe un disparo del rival puede emplear su tiempo en reparar su piso (es decir sumarle vida a dicho piso). Mientras el jugador <strong>repara un agujero</strong>, no puede hacer más acciones.</p>
<p>Aquí se generan dos estrategias diferentes: los jugadores al recibir daño deberán pensar en sí protegerse para aumentar su vida o en emplear su tiempo en realizar un ataque más potente al recibido (la mejor defensa es un buen ataque).
</p>
<h3>Flujo de juego</h3>
<h3>Dinámica de juego</h3>
 <p><strong>Cámara</strong>: Vista lateral fija </p>
 <p><strong>Periféricos</strong>: Ratón y teclado</p>
  <p><strong>Controles</strong>: El movimiento del jugador se hará mediante clicks con el ratón de forma que a donde cliques es a donde el jugador se moverá. </p>
<p>Para realizar las acciones de recargar y reparar el jugador emplea las teclas 1,2,3 y 4 del teclado, siendo la tecla 1 para cargar y disparar el dispara de poco daño, la tecla 2 para el disparo de daño medio y la tecla 3 para el de mucho daño y la tecla 4 para reparar.</p>
<h3><strong>Personajes</strong></h3>
<p>Personaje 1:</p>
<p>Nombre: Anciana Concha </p>
<p>Descripción: Doña Concha es una anciana de 97 años cuyo objetivo es deshacerse de sus vecinos para así tener el control del papel higiénico. A pesar de no necesitar el papel higiénico en exceso, se hará con el control de este solo por incordiar a sus vecinos, ya que estos mataron a su anterior gato.</p>
<p>Imagen:</p>
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





<h2>Interfaz</h2>
<h3>Pantalla durante la partida</h3>
<p>La pantalla del juego consta de dos edificios iguales situados cada uno a un lado de la pantalla. Cada edificio estará formado por tres pisos por los que los jugadores irán moviéndose para cargar y disparar los respectivos cañones que hay situados en cada piso. </p>
<h3>Elementos en pantalla</h3>
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





<h2>Arte</h2>
<h3>Herramientas de diseño</h3>
<ul>
  <li>Sprites con photoshop</li>
  <li>Animación 2D con Sprites</li>
  <li>Sonidos de banco de sonidos gratuito (Sonidos y dibujos estilo cartoon.)</li>
</ul>
<h3>Paleta de colores</h3>
<p>Se elegirá una paleta de colores de tonos brillantes y coloridos, acompañando el tono naif del juego.</p>
<p>Para elegir la paleta se tomarán de referencia los colores de juegos como los de King</p>
<h3>Estilo visual</h3>
<p>Neighbor's fight tendrá un estilo visual basado en cartoon en 2D. </p>
<p>Algunos juegos de referencia: </p>
<ul>
  <li>Fireboy and Watergirl</li>
  <li>Risk para móviles</li>
  <li>Casual games para móviles como los de SuperCell.</li>
</ul>
<br>





<h2>Música</h2>
<h3>Música durante la partida</h3>
<p>Música estilo combate pokémon</p>
<p>Música estilo Piratas del Caribe</p>
<h3>Música fuera de la partida</h3>
<p>Música animada estilo juegos para niños</p>
<br>
