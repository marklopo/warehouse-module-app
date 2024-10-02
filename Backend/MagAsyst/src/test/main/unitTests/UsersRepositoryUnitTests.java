package com.example.magasyst.main.unitTests;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import example.magasyst.main.MagAsystApplication;
import example.magasyst.main.authentication.AuthController;
import example.magasyst.main.authentication.AuthRepository;
import example.magasyst.main.authentication.AuthService;
import example.magasyst.main.authentication.Authorities;
import example.magasyst.main.authentication.Users;
import example.magasyst.main.authentication.UsersController;
import example.magasyst.main.authentication.UsersRepository;
import example.magasyst.main.authentication.UsersService;
import jakarta.transaction.Transactional;

//@WithMockUser
//@Transactional
@SpringBootTest(classes = {MagAsystApplication.class,
		AuthService.class,AuthRepository.class,Authorities.class, AuthController.class,
	UsersController.class, Users.class, UsersService.class, UsersRepository.class})
public class UsersRepositoryUnitTests {
   @Autowired
   private UsersRepository usersRepository;
  
   


   @Test
   public void shouldFindUsersByUsername() {
     //Arrange
	 Users user = getUsers();	     
     //Act
	   usersRepository.save(user);
	 
      Users res = usersRepository.findByUsername(user.getUsername());
     //Assert
      assertEquals(user.getUsername(), res.getUsername());	     
   }
  
   @Test
   public void shouldFindAllUserss() {
      Users user = getUsers();
      usersRepository.save(user);
      List<Users> res = new ArrayList<>();
      usersRepository.findAll().forEach(e -> res.add(e));
      assertEquals(res.size(), 6);	     
   }
   @Test
   public void shouldSaveUsers() {
      Users user = getUsers();
     
      usersRepository.save(user);
     
      Users found = usersRepository.findByUsername(user.getUsername());
      assertEquals(user.getUsername(), found.getUsername());	     
   }
   @Test
   public void deleteUsersByUsername() {
      Users user = getUsers();
      usersRepository.save(user);
      usersRepository.deleteById(user.getUsername());
      List<Users> res = new ArrayList<>();
      usersRepository.findAll().forEach(useruipment -> res.add(user));
      assertEquals(res.size(), 5);
   }
   private Users getUsers() {
      Users user = new Users();
      
      user.setUsername("testUserame");
      user.setPassword("testPassword");
      user.setEnabled(true);
     
      
     
      return user;
   }
   
}