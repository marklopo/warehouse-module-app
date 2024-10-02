package example.magasyst.main.equipment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(value = "/", method = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class EquipmentController {
	@Autowired
	private EquipmentService equipService;

	@GetMapping("/single-equipment/{id}")
	
	public Equipment getSingleEq(@PathVariable(value = "id") int id) {
		return equipService.getSingleEq(id);

	}

	@GetMapping("/equipment")

	public List<Equipment> getAllEq() {
		return equipService.getAllEq();
	}

	@PostMapping("/add-equipment")
	public Equipment addEq(@RequestBody Equipment equipment) {
		equipService.addEq(equipment);
		return equipment;

	}

	@DeleteMapping("/delete-equipment/{id}")
	
	public List<Equipment> deleteEq(@PathVariable("id") int id) {
		equipService.deleteEq(id);
		return equipService.getAllEq();

	}

	@PutMapping("/update-equipment/{id}")
	public Equipment editEq(@RequestBody Equipment equipment, @PathVariable("id") int id) {
		return equipService.editEq(equipment, id);

	}
}
