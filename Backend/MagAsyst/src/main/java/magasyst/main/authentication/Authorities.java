package example.magasyst.main.authentication;

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

public class Authorities {
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	@Id
	private String username;
	private String authority;

}
