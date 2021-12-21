package es.Zakan.NeightbourFight;

import java.util.*;
import org.springframework.stereotype.*;

@Component
public class Chat {
	List<String> mensajes = new ArrayList<String>();
	
	public Chat() {
		//mensajes.add("---------- CHAT ----------");
	}
	
	public List<String> getMensajes() {
		return mensajes;
	}

	public void setMensajes(List<String> mensajes) {
		this.mensajes = mensajes;
	}
}
