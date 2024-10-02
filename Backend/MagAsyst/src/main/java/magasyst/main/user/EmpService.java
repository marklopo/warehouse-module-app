package example.magasyst.main.user;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import example.magasyst.abstractClass.Person;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class EmpService extends Person {
	private final EmpRepository2 empRepository2;

	private final PasswordEncoder passwordEncoder;

	private final EmpRepository empRepository;
	Employees employee;

	@Override
	@Cacheable(cacheNames = "getAllUnitsEmp")
	public List<Employees> getAllEmp() {

		return empRepository.findAll();

	}

	@Override

	public Employees addEmp(Employees employee) {
		return empRepository.save(employee);

	}

	@Override
	// @Cacheable(cacheNames = "getSingleUnitIdEmp")
	public Employees getSingleEmp(int id) {
		Optional<Employees> empl = empRepository.findById(id);
		if (empl.isPresent()) {
			return empl.get();
		}

		throw new RuntimeErrorException(null, "Number id: " + id + " don't exist.");

	}

	@Override
	// @Cacheable(cacheNames = "getSingleUnitStringEmp")
	public Employees getSingleEmp2(String username) {
		return empRepository2.findByUsername(username);

	}

	@Override
	@Transactional
	// @org.springframework.cache.annotation.CachePut(cacheNames = "editUnit",key =
	// "#result.id")
	public Employees editEmp(Employees employee, int id) {

		Employees emp = empRepository.findById(id).get();

		try {
			emp.setName(employee.getName());
			emp.setFname(employee.getFname());
			emp.setDivision(employee.getDivision());
			emp.setPosition(employee.getPosition());
			emp.setUsername(employee.getUsername());
			emp.setPassword(employee.getPassword());
			emp.setPassword(passwordEncoder.encode(employee.getPassword()));
			emp.setAuthority(employee.getAuthority());
			emp.setEnabled(employee.isEnabled());
			empRepository.save(emp);
		} catch (Exception e) {
			System.out.println("Error. Object not edited.");
		}
		return emp;

	}

	@Override
	@CacheEvict(cacheNames = "deleteUnit")
	public Employees deleteEmp(int id) {
		empRepository.deleteById(id);
		return employee;

	}

}
