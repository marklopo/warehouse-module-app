package example.magasyst.main.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpRepository2 extends JpaRepository<Employees, String> {

	Employees findByUsername(String username);

}
