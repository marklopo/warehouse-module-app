package example.magasyst.main.authentication;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Entity
@Setter
@Getter
@AllArgsConstructor

@NamedEntityGraph(name = "find user", attributeNodes = { @NamedAttributeNode(value = "authority") })
public class Users {

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "username")

	// @PrimaryKeyJoinColumn
	private Authorities authority;
	@Id

	private String username;
	private String password;
	boolean enabled;

}
