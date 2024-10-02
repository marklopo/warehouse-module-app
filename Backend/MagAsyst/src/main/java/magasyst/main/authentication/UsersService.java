package example.magasyst.main.authentication;

import java.util.List;
import java.util.Optional;
import javax.management.RuntimeErrorException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import example.magasyst.abstractClass.Person;
import example.magasyst.main.security.HttpSec;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class UsersService extends Person   {

	@Autowired
	private HttpSec httpSec;
	private final UsersRepository usersRepository;
	 
	
	 Users user;
	 @Override
	 //@Cacheable(cacheNames = "getAllUnitsUs")
	 public List<Users> getAllUsers() {

		return usersRepository.findAll();

	}
	 @Override
	public Users addUser(Users user) {
		return usersRepository.save(user);

	}
	 @Override
	//@Cacheable(cacheNames = "getSingleUnitIdUs")

	public Users getSingleUser(String username, String password) {
		
		Users user = usersRepository.findById(username).get();
		
		BCryptPasswordEncoder pe = new BCryptPasswordEncoder();  
		 
		
		Optional<Users> u = usersRepository.findById(username);

		if ((u.isPresent()) && pe.matches(password, user.getPassword())) {


			return u.get();
		}
		throw new RuntimeErrorException(null, "User: " + username + " don't exist.");

	}

	@Transactional
	@Override
	public Users editUser(Users user, String username) {

		Users ur = usersRepository.findById(username).get();
		ur.setUsername(user.getUsername());
	ur.setPassword(httpSec.passwordEncoder().encode(user.getPassword()));
		ur.setPassword(user.getPassword());
		ur.setEnabled(user.isEnabled());
		return usersRepository.save(ur);

	}
	@Override
	@CacheEvict(cacheNames = "deleteUnitUs")
	public Users deleteUser(String username) {
		usersRepository.deleteById(username);
		return user;

	}
	@Override
	//@Cacheable(cacheNames = "getSingleUnitIdUs")
	public Users getSingleUser(String username) {
		Optional<Users> u= usersRepository.findById(username);
		if(u.isPresent()){
			return u.get();
		}
		
		
		throw new RuntimeErrorException(null, "Username: " + username+" don't exist.");
	}
	
	
}
