package es.Zakan.NeightbourFight;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class WebsocketZakanHandler extends TextWebSocketHandler {
	
	private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
	private ObjectMapper mapper = new ObjectMapper();
	
	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("Nuevo jugador. ID: " + session.getId());
		
		ObjectNode host = mapper.createObjectNode();
		host.put("EsHost", "0");
		
		if(sessions.isEmpty()) {
			sessions.put(session.getId(), session);
            host.put("EsHost", "1");
		}else { 
			sessions.put(session.getId(), session); 
		}
		
		session.sendMessage(new TextMessage(host.toString()));
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Sesión cerrada. ID: " + session.getId());
		sessions.remove(session.getId());
	}
	
	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		JsonNode node = mapper.readTree(message.getPayload());
		
		enviarInfo(session, node);
	}
	
	private void enviarInfo(WebSocketSession session, JsonNode node) throws IOException {
		ObjectNode newNode = mapper.createObjectNode();
        
		// Posicion jugador
        newNode.put("x", node.get("x").asDouble());
        newNode.put("y", node.get("y").asDouble());
        
        // Angulo de los cañones
        newNode.put("cannon1", node.get("cannon1").asDouble());
        newNode.put("cannon2", node.get("cannon2").asDouble());
        newNode.put("cannon3", node.get("cannon3").asDouble());
        
        // Animacion del jugador
        newNode.put("animPJ", node.get("animPJ").asText());
        
        // Posicion de las balas
        newNode.put("pollo1X", node.get("pollo1X").asDouble());
        newNode.put("pollo1Y", node.get("pollo1Y").asDouble());
        newNode.put("pollo2X", node.get("pollo2X").asDouble());
        newNode.put("pollo2Y", node.get("pollo2Y").asDouble());
        newNode.put("pollo3X", node.get("pollo3X").asDouble());
        newNode.put("pollo3Y", node.get("pollo3Y").asDouble());
        
        // Visibilidad de las balas
        newNode.put("VerPollo1", node.get("VerPollo1").asBoolean());
        newNode.put("VerPollo2", node.get("VerPollo2").asBoolean());
        newNode.put("VerPollo3", node.get("VerPollo3").asBoolean());
        
        // Vida de los edificios
        newNode.put("vida1", node.get("vida1").asDouble());
        newNode.put("vida2", node.get("vida2").asDouble());
        newNode.put("vida3", node.get("vida3").asDouble());
        
        newNode.put("vidaExtra1", node.get("vidaExtra1").asDouble());
        newNode.put("vidaExtra2", node.get("vidaExtra2").asDouble());
        newNode.put("vidaExtra3", node.get("vidaExtra3").asDouble());
        
        // Energia de los jugadores
        newNode.put("energia", node.get("energia").asDouble());
        
        // Posicion de las ultimates
        newNode.put("UltiX", node.get("UltiX").asDouble());
        newNode.put("UltiY", node.get("UltiY").asDouble());
        
        // Tiempo de juego
        newNode.put("tiempo", node.get("tiempo").asDouble());
		
        // Mandamos la informacion al resto de jugadores
		for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(newNode.toString()));
			}
		}
	}
}
