package example.magasyst.main.authentication;

import org.springframework.beans.factory.annotation.Autowired;
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

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/", method = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class UsersController {
	@Autowired
	private UsersService uService;

	@GetMapping("/single-users/{username}/{password}")
	public Users getSinglePost(@PathVariable(value = "username") String username,
			@PathVariable(value = "password") String password) {
		return uService.getSingleUser(username, password);

	}

	@GetMapping("/users")

	public List<Users> getAllUsers() {
		return uService.getAllUsers();
	}

	@PostMapping("/add-users")
	public Users addUsers(@RequestBody Users user) {
		uService.addUser(user);
		return user;

	}

	@DeleteMapping("/delete-users/{username}")
	public List<Users> deleteUsers(@PathVariable("username") String username) {
		uService.deleteUser(username);
		return uService.getAllUsers();

	}

	@PutMapping("/update-users/{username}")
	public Users editUsers(@RequestBody Users user, @PathVariable("username") String username) {
		return uService.editUser(user, username);

	}

	@GetMapping("/single-users/{username}")
	public Users getSinglePost(@PathVariable(value = "username") String username) {
		return uService.getSingleUser(username);

	}
}
