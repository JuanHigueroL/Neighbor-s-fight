package es.Zakan.NeightbourFight;

import java.util.*;
import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chat")
public class ChatRestController {
	
	@Autowired
	private Chat chat;
	
	@PostMapping
	public ResponseEntity<Boolean> crearChat(@RequestBody String startMessage) {
		
		try {
			String ruta = "chat/chatRegister.txt";
		    File file = new File(ruta);
			
            file.createNewFile();
            
            FileWriter fw = new FileWriter(file);
            BufferedWriter bw = new BufferedWriter(fw);
            
            bw.write(startMessage + "\n");
            bw.close();
        } catch (Exception e) {
            //e.printStackTrace();
        }
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<String> getChat() {
		try {
            Path path = Paths.get("chat/", "chatRegister.txt");
            chat.setMensajes(Files.readAllLines(path, Charset.defaultCharset()));
        } catch (Exception e) {
            //e.printStackTrace();
        }
		
		return chat.getMensajes();
	}
	
	@PutMapping
	public ResponseEntity<Boolean> newMenssage(@RequestBody String newMessage) {
		File archivo;
		FileWriter escribir;
		PrintWriter linea;

		archivo = new File("chat/chatRegister.txt");
		if(!archivo.exists()){
			try{
				archivo.createNewFile();
				escribir = new FileWriter (archivo,true);
				linea= new PrintWriter(escribir);
				linea.println(newMessage);
				linea.close();
				escribir.close();
			}catch (IOException e){
				//e.printStackTrace();
			}


		}else {
			try{
			    escribir = new FileWriter (archivo,true);
			    linea= new PrintWriter(escribir);
			    linea.println(newMessage);
			    linea.close();
			    escribir.close();
			}catch (IOException e){
			    //e.printStackTrace();
			}
		}
		
		
		File archivoCompleto;
		FileWriter escribirCompleto;
		PrintWriter lineaCompleto;

		archivoCompleto = new File("chat/ChatCompleto.txt");
		if(!archivoCompleto.exists()){
			try{
				archivoCompleto.createNewFile();
				escribirCompleto = new FileWriter (archivoCompleto,true);
				lineaCompleto= new PrintWriter(escribirCompleto);
				lineaCompleto.println(newMessage);
				lineaCompleto.close();
				escribirCompleto.close();
			}catch (IOException e){
				//e.printStackTrace();
			}


		}else {
			try{
			    escribirCompleto = new FileWriter (archivoCompleto,true);
			    lineaCompleto= new PrintWriter(escribirCompleto);
			    lineaCompleto.println(newMessage);
			    lineaCompleto.close();
			    escribirCompleto.close();
			}catch (IOException e){
			    //e.printStackTrace();
			}
		}
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@DeleteMapping
	public ResponseEntity<Boolean> borrarChat() {
		try {
            String ruta = "chat/chatRegister.txt";
            File file = new File(ruta);
            
            file.delete();
        } catch (Exception e) {
            //e.printStackTrace();
        }
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
