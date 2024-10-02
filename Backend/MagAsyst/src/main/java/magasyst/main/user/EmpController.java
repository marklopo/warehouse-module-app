package example.magasyst.main.user;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/", method = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class EmpController {

	private final EmpService empService;

	@GetMapping(value = "/login")

	String login() {

		return "login succesfull";
	}

	@GetMapping(value = "/single/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Employees getSingleEmp(@PathVariable(value = "id") int id) {
		return empService.getSingleEmp(id);

	}

	@GetMapping("/single2/{username}")
	public Employees getSingleEmp2(@PathVariable(value = "username") String username) {
		return empService.getSingleEmp2(username);

	}

	@GetMapping("/emp")

	public List<Employees> getAllEmp() {
		return empService.getAllEmp();
	}

	@PostMapping("/add")
	public Employees addEmp(@RequestBody Employees employee) {
		empService.addEmp(employee);
		return employee;

	}

	@DeleteMapping("/delete/{id}")
	public List<Employees> deleteEmp(@PathVariable("id") int id) {
		empService.deleteEmp(id);
		return empService.getAllEmp();

	}

	@PutMapping("/update/{id}")
	public Employees editUser(@RequestBody Employees employee, @PathVariable("id") int id) {
		return empService.editEmp(employee, id);

	}
}
