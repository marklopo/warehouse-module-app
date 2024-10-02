package com.example.magasyst.main.unitTests;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import example.magasyst.main.MagAsystApplication;
import example.magasyst.main.user.EmpController;
import example.magasyst.main.user.EmpRepository;
import example.magasyst.main.user.EmpRepository2;
import example.magasyst.main.user.EmpService;
import example.magasyst.main.user.Employees;
import jakarta.transaction.Transactional;


@Transactional
@SpringBootTest(classes = {MagAsystApplication.class,
		EmpController.class, Employees.class, EmpService.class, EmpRepository.class,EmpRepository2.class})
public class EmployeeRepositoryUnitTests {
   @Autowired
   private EmpRepository empRepository;
   @Autowired
   private EmpRepository2 empRepository2;


   @Test
   public void shouldFindEmployeeById() {
     //Arrange
	   Employees employee = getEmployee();	     
     //Act
	   empRepository.save(employee);
      Employees res = empRepository.findById(employee.getId()).get();
     //Assert
      assertEquals(employee.getId(), res.getId());	     
   }
   @Test
   public void shouldFindEmployeeByUserName() {
      Employees employee = getEmployee();	    
      empRepository.save(employee);
      Employees res = empRepository2.findByUsername(employee.getUsername());
      assertEquals(employee.getUsername(), res.getUsername());	     
   }
   @Test
   public void shouldFindAllEmployees() {
      Employees employee = getEmployee();
      empRepository.save(employee);
      List<Employees> res = new ArrayList<>();
      empRepository.findAll().forEach(e -> res.add(e));
      assertEquals(res.size(), 6);	     
   }
   @Test
   public void shouldSaveEmployee() {
      Employees employee = getEmployee();
      empRepository.save(employee);
      Employees found = empRepository.findById(employee.getId()).get();
      assertEquals(employee.getId(), found.getId());	     
   }
   @Test
   public void shouldDeleteEmployeeById() {
      Employees employee = getEmployee();
      empRepository.save(employee);
      empRepository.deleteById(employee.getId());
      List<Employees> res = new ArrayList<>();
      empRepository.findAll().forEach(empl -> res.add(empl));
      assertEquals(res.size(), 5);
   }
   private Employees getEmployee() {
      Employees employee = new Employees();
      
      employee.setName("testName");
      employee.setFname("testFname");
      employee.setUsername("testUser");
      employee.setPassword("testPassword");
      employee.setAuthority("testROLE_USER");
      employee.setEnabled(true);
      employee.setPosition("Leader");
      employee.setDivision("Warehouse");
      return employee;
   }
}