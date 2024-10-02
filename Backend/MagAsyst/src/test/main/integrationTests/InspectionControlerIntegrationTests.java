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
import example.magasyst.main.inspection.InspController;
import example.magasyst.main.inspection.InspRepository;
import example.magasyst.main.inspection.InspService;
import example.magasyst.main.inspection.Inspection;

import jakarta.transaction.Transactional;

@AutoConfigureMockMvc
@Transactional
@WithMockUser
@SpringBootTest(classes = { MagAsystApplication.class, InspController.class, Inspection.class, InspService.class,
		InspRepository.class })
public class InspectionControlerIntegrationTests {
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private InspRepository inspectionRepository;
	@Autowired
	private ObjectMapper objectMapper;

	@Test

	void shouldSaveInspectionAndGetById() throws Exception {
		Inspection inspection = getInspection();
		inspectionRepository.save(inspection);
		Inspection found = inspectionRepository.findById(inspection.getId()).get();
		MvcResult res = mockMvc
				.perform(get("/single-inspection/" + inspection.getId())
						.with(user("a").password("a").roles("USER", "ADMIN")))
				.andDo(print()).andExpect(status().isOk()).andExpect(jsonPath("$.id", Matchers.is(found.getId())))
				.andExpect(jsonPath("$.ename", Matchers.is("testEname"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String inspectionJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(inspectionJPath).isNotEmpty();
		Assertions.assertThat(inspectionJPath).isEqualToIgnoringCase(objectMapper.writeValueAsString(inspection));
	}

	@Test

	void shouldSaveInspectionAndGetAll() throws Exception {
		Inspection inspection = getInspection();
		inspectionRepository.save(inspection);

		MvcResult res = mockMvc.perform(get("/inspection")).andDo(print()).andExpect(status().is(200))
				.andExpect(jsonPath("$[3].ename", Matchers.is("testEname"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String inspectionJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(inspectionJPath).isNotEmpty();

	}

	@Test

	void shouldAddInspection() throws Exception {
		Inspection inspection = getInspection();

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.post("/add-inspection").contentType(MediaType.APPLICATION_JSON)
						.content(objectMapper.writeValueAsString(inspection)).accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.ename", Matchers.is("testEname")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String inspectionJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(inspectionJPath).isNotEmpty();

	}

	@Test

	void shouldUpdateInspection() throws Exception {
		Inspection inspection = getInspection();

		inspection.setId(1);
		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.put("/update-inspection/{id}", 1)
						.contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(inspection))
						.accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.ename", Matchers.is("testEname")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String inspectionJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(inspectionJPath).isNotEmpty();

	}

	@Test

	void shouldDeleteInspection() throws Exception {
		Inspection inspection = getInspection();
		inspectionRepository.save(inspection);

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.delete("/delete-inspection/{id}", inspection.getId())
						.contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(inspection))
						.accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(status().is2xxSuccessful()).andReturn();
		Assertions.assertThat(res).isNotNull();
		String inspectionJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(inspectionJPath).isNotEmpty();

	}

	private Inspection getInspection() {
		Inspection inspection = new Inspection();

		inspection.setEname("testEname");
		inspection.setModel("testModel");
		inspection.setRegistration("testReg");
		inspection.setSnumber("testSnumber");

		return inspection;
	}

}