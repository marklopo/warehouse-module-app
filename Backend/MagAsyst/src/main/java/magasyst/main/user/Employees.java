package example.magasyst.main.user;



import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@RequiredArgsConstructor
@Entity
@Setter
@Getter
@Data
@Table
@AllArgsConstructor
@ToString
@Builder
@JsonInclude(value = Include.NON_NULL)
public class Employees {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	@Id
	private int id;
	private String name;
	private String fname;
	private String division;
	private String position;
	
	private String username;
	private String password;
	private String authority;
	private boolean enabled;
	
	

}
