package example.magasyst.main.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import example.magasyst.main.authentication.Users;
import example.magasyst.main.authentication.UsersRepository;

@Service
public class UsersDetailsService implements UserDetailsService {
	@Autowired
	private UsersRepository usersRepository;

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = usersRepository.findByUsername(username);

		if (user == null) {
			throw new UsernameNotFoundException("User '" + user + "' not found.");
		}

		return new UsersDetails(user);

	}

}
