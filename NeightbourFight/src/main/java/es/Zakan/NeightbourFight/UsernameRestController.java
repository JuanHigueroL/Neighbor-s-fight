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
@RequestMapping("/users")
public class UsernameRestController {
	
	@Autowired
	private Username usernames;
	
	@PostMapping
	public ResponseEntity<Boolean> crearHistorialUsuario() {
		
		try {
			String ruta = "users/usernamesHistory.txt";
		    File file = new File(ruta);
			
            file.createNewFile();
        } catch (Exception e) {
            e.printStackTrace();
        }
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<String> getUsernames() {
		try {
            Path path = Paths.get("users/", "usernamesHistory.txt");
            usernames.setUsuarios(Files.readAllLines(path, Charset.defaultCharset()));
        } catch (Exception e) {
            e.printStackTrace();
        }
		
		return usernames.getUsuarios();
	}
	
	@PutMapping
	public ResponseEntity<Boolean> newUsers(@RequestBody String newUser) {
		File archivo;
		FileWriter escribir;
		PrintWriter linea;

		archivo = new File("users/usernamesHistory.txt");
		if(!archivo.exists()){
			try{
				archivo.createNewFile();
				escribir = new FileWriter (archivo,true);
				linea= new PrintWriter(escribir);
				linea.println(newUser);
				linea.close();
				escribir.close();
			}catch (IOException e){
				e.printStackTrace();
			}
		}else {
			try{
			    escribir = new FileWriter (archivo,true);
			    linea= new PrintWriter(escribir);
			    linea.println(newUser);
			    linea.close();
			    escribir.close();
			}catch (IOException e){
			    e.printStackTrace();
			}
		}
		
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	
	@DeleteMapping
	public ResponseEntity<Boolean> borrarUsers() {
		try {
            String ruta = "users/usernamesHistory.txt";
            File file = new File(ruta);
            
            file.delete();
        } catch (Exception e) {
            e.printStackTrace();
        }
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
