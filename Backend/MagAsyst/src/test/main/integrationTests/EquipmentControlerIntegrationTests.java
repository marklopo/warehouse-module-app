package com.example.magasyst.main.integrationTests;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.assertj.core.api.Assertions;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import example.magasyst.main.MagAsystApplication;
import example.magasyst.main.equipment.Equipment;
import example.magasyst.main.equipment.EquipmentController;
import example.magasyst.main.equipment.EquipmentRepository;
import example.magasyst.main.equipment.EquipmentService;
import jakarta.transaction.Transactional;

@AutoConfigureMockMvc
@Transactional
@WithMockUser
@SpringBootTest(classes = { MagAsystApplication.class, EquipmentController.class, Equipment.class,
		EquipmentService.class, EquipmentRepository.class })
public class EquipmentControlerIntegrationTests {
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private EquipmentRepository equipmentRepository;
	@Autowired
	private ObjectMapper objectMapper;

	@Test

	void shouldSaveEquipmentAndGetById() throws Exception {
		Equipment equipment = getEquipment();
		equipmentRepository.save(equipment);
		Equipment found = equipmentRepository.findById(equipment.getId()).get();
		MvcResult res = mockMvc
				.perform(get("/single-equipment/" + equipment.getId())
						.with(user("a").password("a").roles("USER", "ADMIN")))
				.andDo(print()).andExpect(status().isOk()).andExpect(jsonPath("$.id", Matchers.is(found.getId())))
				.andExpect(jsonPath("$.ename", Matchers.is("testEname"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String equipmentJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(equipmentJPath).isNotEmpty();
		Assertions.assertThat(equipmentJPath).isEqualToIgnoringCase(objectMapper.writeValueAsString(equipment));
	}

	@Test

	void shouldSaveEquipmentAndGetAll() throws Exception {
		Equipment equipment = getEquipment();
		equipmentRepository.save(equipment);

		MvcResult res = mockMvc.perform(get("/equipment")).andDo(print()).andExpect(status().is(200))
				.andExpect(jsonPath("$[5].ename", Matchers.is("testEname"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String equipmentJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(equipmentJPath).isNotEmpty();

	}

	@Test

	void shouldAddEquipment() throws Exception {
		Equipment equipment = getEquipment();

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.post("/add-equipment").contentType(MediaType.APPLICATION_JSON)
						.content(objectMapper.writeValueAsString(equipment)).accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.ename", Matchers.is("testEname")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String equipmentJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(equipmentJPath).isNotEmpty();

	}

	@Test

	void shouldUpdateEquipment() throws Exception {
		Equipment equipment = getEquipment();

		equipment.setId(1);
		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.put("/update-equipment/{id}", 1).contentType(MediaType.APPLICATION_JSON)
						.content(objectMapper.writeValueAsString(equipment)).accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.ename", Matchers.is("testEname")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String equipmentJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(equipmentJPath).isNotEmpty();

	}

	@Test

	void shouldDeleteEquipment() throws Exception {
		Equipment equipment = getEquipment();
		equipmentRepository.save(equipment);

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.delete("/delete-equipment/{id}", equipment.getId())
						.contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(equipment))
						.accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(status().is2xxSuccessful()).andReturn();
		Assertions.assertThat(res).isNotNull();
		String equipmentJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(equipmentJPath).isNotEmpty();

	}

	@Test
	public void shouldDeleteEquipmentById() {
		Equipment equipment = getEquipment();
		equipmentRepository.save(equipment);

		
		Equipment found = equipmentRepository.findById(equipment.getId()).get();
		equipmentRepository.deleteById(equipment.getId());
		try {
			mockMvc.perform(get("/single/" + found)).andDo(print()).andExpect(status().is(400))
					.andExpect(status().is4xxClientError());

		} catch (Exception e) {

			e.printStackTrace();
		}

	}

	private Equipment getEquipment() {
		Equipment equipment = new Equipment();

		equipment.setEname("testEname");
		equipment.setModel("testModel");
		equipment.setRegistration("testReg");
		equipment.setSnumber("testSnumber");

		return equipment;
	}

}