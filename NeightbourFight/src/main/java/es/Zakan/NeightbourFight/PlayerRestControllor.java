package es.Zakan.NeightbourFight;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/players")
public class PlayerRestControllor {
	
	@Autowired
	private Player player1;
	@Autowired
	private Player player2;
	
	@GetMapping("/nick")
	public String getNick(@PathVariable int ID) {
		
		return "Nick";
	}
	
	@RequestMapping(value="/{PlayerID}/x", method=RequestMethod.GET)
	public float getPosX(@PathVariable int PlayerID) {
		if(PlayerID == 0) {
			return player1.getPositionX();
		}else {
			return player2.getPositionX();
		}
	}
	@RequestMapping(value="/{PlayerID}/y", method=RequestMethod.GET)
	public float getPosY(@PathVariable int PlayerID) {
		if(PlayerID == 0) {
			return player1.getPositionY();
		}else {
			return player2.getPositionY();
		}
	}
	
	@RequestMapping(value="/{PlayerID}/x", method=RequestMethod.PUT)
	public ResponseEntity<Boolean> setPosX(@RequestBody float newPosX, @PathVariable int PlayerID) {
		if(PlayerID == 0) {
			player1.setPositionX(newPosX);
		}else {
			player2.setPositionX(newPosX);
		}
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
	@RequestMapping(value="/{PlayerID}/y", method=RequestMethod.PUT)
	public ResponseEntity<Boolean> setPosY(@RequestBody float newPosY, @PathVariable int PlayerID) {
		if(PlayerID == 0) {
			player1.setPositionY(newPosY);
		}else {
			player2.setPositionY(newPosY);
		}
		return new ResponseEntity<>(true, HttpStatus.CREATED);
	}
}
