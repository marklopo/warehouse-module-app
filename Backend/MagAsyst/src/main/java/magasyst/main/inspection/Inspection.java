package example.magasyst.main.inspection;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Entity
@Setter
@Getter

public class Inspection {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	@Id
	private int id;
	private String date;
	private String name;
	private String fname;
	private String division;
	private String position;
	private String ename;
	private String model;
	private String snumber;
	private String registration;
	private String body;
	private String wheel;
	private String light;
	private String horn;
	private String brake;
	private String belt;
	private String leak;
	private String battery;
	private String status;
	private String comments;

}
