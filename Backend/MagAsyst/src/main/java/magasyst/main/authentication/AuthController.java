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
public class AuthController {
	@Autowired
	private AuthService aService;

	@GetMapping("/single-auth/{username}")
	public Authorities getSinglePost(@PathVariable(value = "username") String username) {
		return aService.getSingleAuth(username);

	}

	@GetMapping("/auth")

	public List<Authorities> getAllAuths() {
		return aService.getAllAuth();
	}

	@PostMapping("/add-auth")
	public Authorities addAuth(@RequestBody Authorities user) {
		aService.addAuth(user);
		return user;

	}

	@DeleteMapping("/delete-auth/{username}")
	public List<Authorities> deleteAuth(@PathVariable("username") String username) {
		aService.deleteAuth(username);
		return aService.getAllAuth();

	}

	@PutMapping("/update-auth/{username}")
	public Authorities editAuth(@RequestBody Authorities user, @PathVariable("username") String username) {
		return aService.editUser(user, username);

	}
}
