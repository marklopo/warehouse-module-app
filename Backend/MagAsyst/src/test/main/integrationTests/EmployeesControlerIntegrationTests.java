package com.example.magasyst.main.integrationTests;

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
import example.magasyst.main.user.EmpController;
import example.magasyst.main.user.EmpRepository;
import example.magasyst.main.user.EmpRepository2;
import example.magasyst.main.user.EmpService;
import example.magasyst.main.user.Employees;
import jakarta.transaction.Transactional;

@AutoConfigureMockMvc
@Transactional
@WithMockUser
@SpringBootTest(classes = { MagAsystApplication.class, EmpController.class, Employees.class, EmpService.class,
		EmpRepository.class, EmpRepository2.class })
public class EmployeesControlerIntegrationTests {
	@Autowired
	private MockMvc mockMvc;
	@Autowired
	private EmpRepository empRepository;
	@Autowired
	private EmpRepository2 empRepository2;
	@Autowired
	private ObjectMapper objectMapper;

	@Test

	void shouldSaveEmployeeAndGetById() throws Exception {
		Employees employee = getEmployee();
		empRepository.save(employee);
		Employees found = empRepository.findById(employee.getId()).get();
		MvcResult res = mockMvc.perform(get("/single/" + employee.getId())).andDo(print()).andExpect(status().is(200))
				.andExpect(jsonPath("$.id", Matchers.is(found.getId())))
				.andExpect(jsonPath("$.name", Matchers.is("testName"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String employeeJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(employeeJPath).isNotEmpty();
		Assertions.assertThat(employeeJPath).isEqualToIgnoringCase(objectMapper.writeValueAsString(employee));

	}

	@Test

	void shouldSaveEmployeeAndGetByUsername() throws Exception {
		Employees employee = getEmployee();
		empRepository2.save(employee);
		Employees found = empRepository2.findByUsername(employee.getUsername());
		MvcResult res = mockMvc.perform(get("/single2/" + employee.getUsername())).andDo(print())
				.andExpect(status().is(200)).andExpect(jsonPath("$.username", Matchers.is(found.getUsername())))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String employeeJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(employeeJPath).isNotEmpty();
		Assertions.assertThat(employeeJPath).isEqualToIgnoringCase(objectMapper.writeValueAsString(employee));
	}

	@Test

	void shouldSaveEmployeeAndGetAll() throws Exception {
		Employees employee = getEmployee();
		empRepository.save(employee);

		MvcResult res = mockMvc.perform(get("/customers")).andDo(print()).andExpect(status().is(200))
				.andExpect(jsonPath("$[5].name", Matchers.is("testName"))).andReturn();
		Assertions.assertThat(res).isNotNull();
		String empJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(empJPath).isNotEmpty();

	}

	@Test

	void shouldAddEmployee() throws Exception {
		Employees employee = getEmployee();

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.post("/add").contentType(MediaType.APPLICATION_JSON)
						.content(objectMapper.writeValueAsString(employee)).accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.name", Matchers.is("testName")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String empJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(empJPath).isNotEmpty();

	}

	@Test

	void shouldUpdateEmployee() throws Exception {
		Employees employee = getEmployee();

		employee.setId(1);
		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.put("/update/{id}", 1).contentType(MediaType.APPLICATION_JSON)
						.content(objectMapper.writeValueAsString(employee)).accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(jsonPath("$.name", Matchers.is("testName")))
				.andReturn();
		Assertions.assertThat(res).isNotNull();
		String empJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(empJPath).isNotEmpty();

	}

	@Test

	void shouldDeleteEmployee() throws Exception {
		Employees employee = getEmployee();
		empRepository.save(employee);

		MvcResult res = mockMvc
				.perform(MockMvcRequestBuilders.delete("/delete/{id}", employee.getId())
						.contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(employee))
						.accept(MediaType.APPLICATION_JSON))

				.andDo(print()).andExpect(status().is(200)).andExpect(status().is2xxSuccessful()).andReturn();
		Assertions.assertThat(res).isNotNull();
		String empJPath = res.getResponse().getContentAsString();
		Assertions.assertThat(empJPath).isNotEmpty();

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