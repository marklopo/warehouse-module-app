package example.magasyst.main.authentication;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository


public interface UsersRepository extends JpaRepository<Users, java.lang.String> {
	@EntityGraph("find user")

	Users findByUsername(String username);
	


	
	


}