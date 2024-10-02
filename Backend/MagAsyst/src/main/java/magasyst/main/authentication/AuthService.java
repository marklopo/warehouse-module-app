package example.magasyst.main.authentication;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.stereotype.Service;

import example.magasyst.abstractClass.Person;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class AuthService extends Person {

	private final AuthRepository authRepository;
	Authorities auth;

	@Override
	// @Cacheable(cacheNames = "getAllUnitsAu")
	public List<Authorities> getAllAuth() {

		return authRepository.findAll();

	}

	@Override
	public Authorities addAuth(Authorities auth) {
		return authRepository.save(auth);

	}

	@Override
	// @Cacheable(cacheNames = "getSingleUnitIdAu")
	public Authorities getSingleAuth(String username) {
		Optional<Authorities> a = authRepository.findById(username);
		if (a.isPresent()) {
			return a.get();
		}

		throw new RuntimeErrorException(null, "User: " + username + " don't exist.");
	}

	@Override
	@Transactional
	public Authorities editUser(Authorities auth, String username) {

		Authorities a = authRepository.findById(username).get();
		a.setUsername(auth.getUsername());
		a.setAuthority(auth.getAuthority());
		return authRepository.save(a);

	}

	@Override
	public Authorities deleteAuth(String username) {
		authRepository.deleteById(username);
		return auth;

	}
}
