package es.Zakan.NeightbourFight;

import org.springframework.stereotype.*;

@Component
public class Player {
	float positionX = 0;
	float positionY = 0;
	
	public Player() {
		
	}
	
	public Player(float posX, float posY) {
		positionX = posX;
		positionY = posY;
	}
	
	public float getPositionX() {
		return positionX;
	}
	public void setPositionX(float posicionX) {
		this.positionX = posicionX;
	}
	public float getPositionY() {
		return positionY;
	}
	public void setPositionY(float posicionY) {
		this.positionY = posicionY;
	}
}
