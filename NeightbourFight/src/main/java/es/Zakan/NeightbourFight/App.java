package es.Zakan.NeightbourFight;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class App implements WebSocketConfigurer
{
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(zakanHandler(), "/zakan").setAllowedOrigins("*");
	}
	
	@Bean
	public WebsocketZakanHandler zakanHandler() {
		return new WebsocketZakanHandler();
	}
	
    public static void main( String[] args ) {
        SpringApplication.run(App.class, args);
    }

}
