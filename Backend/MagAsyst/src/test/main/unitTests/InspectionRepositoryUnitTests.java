package com.example.magasyst.main.unitTests;
import static org.junit.jupiter.api.Assertions.assertEquals;


import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import example.magasyst.main.MagAsystApplication;
import example.magasyst.main.inspection.InspController;
import example.magasyst.main.inspection.InspRepository;
import example.magasyst.main.inspection.InspService;
import example.magasyst.main.inspection.Inspection;
import jakarta.transaction.Transactional;


@Transactional
@SpringBootTest(classes = {MagAsystApplication.class,
		InspController.class, Inspection.class, InspService.class, InspRepository.class})
public class InspectionRepositoryUnitTests {
   @Autowired
   private InspRepository inspRepository;
   


   @Test
   public void shouldFindInspectionById() {
     //Arrange
	   Inspection inspection = getInspection();	     
     //Act
	   inspRepository.save(inspection);
      Inspection res = inspRepository.findById(inspection.getId()).get();
     //Assert
      assertEquals(inspection.getId(), res.getId());	     
   }
  
   @Test
   public void shouldFindAllInspection() {
      Inspection inspection = getInspection();
      inspRepository.save(inspection);
      List<Inspection> res = new ArrayList<>();
      inspRepository.findAll().forEach(e -> res.add(e));
      assertEquals(res.size(), 4);	     
   }
   @Test
   public void shouldSaveInspection() {
      Inspection inspection = getInspection();
      inspRepository.save(inspection);
      Inspection found = inspRepository.findById(inspection.getId()).get();
      assertEquals(inspection.getId(), found.getId());	     
   }
   @Test
   public void shouldDeleteInspectionById() {
      Inspection inspection = getInspection();
      inspRepository.save(inspection);
      inspRepository.deleteById(inspection.getId());
      List<Inspection> res = new ArrayList<>();
      inspRepository.findAll().forEach(empl -> res.add(empl));
      assertEquals(res.size(), 3);
   }
   private Inspection getInspection() {
      Inspection inspection = new Inspection();
      
      inspection.setName("testName");
      inspection.setFname("testFname");
      inspection.setPosition("Leader");
      inspection.setDivision("Warehouse");
      return inspection;
   }
}