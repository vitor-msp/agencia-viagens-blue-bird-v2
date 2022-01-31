package models;

public class Destination {
	private int id;
	private String city;
	private String uf;
	private String landingPlace;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public String getLandingPlace() {
		return landingPlace;
	}
	public void setLandingPlace(String landingPlace) {
		this.landingPlace = landingPlace;
	}
}
