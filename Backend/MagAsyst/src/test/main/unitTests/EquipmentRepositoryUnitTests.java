package com.example.magasyst.main.unitTests;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import example.magasyst.main.MagAsystApplication;
import example.magasyst.main.equipment.Equipment;
import example.magasyst.main.equipment.EquipmentController;
import example.magasyst.main.equipment.EquipmentRepository;
import example.magasyst.main.equipment.EquipmentService;
import jakarta.transaction.Transactional;


@Transactional
@SpringBootTest(classes = {MagAsystApplication.class,
		EquipmentController.class, Equipment.class, EquipmentService.class, EquipmentRepository.class})
public class EquipmentRepositoryUnitTests {
   @Autowired
   private EquipmentRepository equipmentRepository;
   


   @Test
   public void shouldFindEquipmentById() {
     //Arrange
	 Equipment eq = getEquipment();	     
     //Act
	   equipmentRepository.save(eq);
      Equipment res = equipmentRepository.findById(eq.getId()).get();
     //Assert
      assertEquals(eq.getId(), res.getId());	     
   }
  
   @Test
   public void shouldFindAllEquipments() {
      Equipment eq = getEquipment();
      equipmentRepository.save(eq);
      List<Equipment> res = new ArrayList<>();
      equipmentRepository.findAll().forEach(e -> res.add(e));
      assertEquals(res.size(), 6);	     
   }
   @Test
   public void shouldSaveEquipment() {
      Equipment eq = getEquipment();
      equipmentRepository.save(eq);
      Equipment found = equipmentRepository.findById(eq.getId()).get();
      assertEquals(eq.getId(), found.getId());	     
   }
   @Test
   public void deleteEquipmentById() {
      Equipment eq = getEquipment();
      equipmentRepository.save(eq);
      equipmentRepository.deleteById(eq.getId());
      List<Equipment> res = new ArrayList<>();
      equipmentRepository.findAll().forEach(equipment -> res.add(equipment));
      assertEquals(res.size(), 5);
   }
   private Equipment getEquipment() {
      Equipment eq = new Equipment();
      
      eq.setEname("testEName");
      eq.setSnumber("testSnumber");
      eq.setRegistration("testRegistration");
      eq.setModel("testModel");
     
      return eq;
   }
}