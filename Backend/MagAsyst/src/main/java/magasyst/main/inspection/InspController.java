package example.magasyst.main.inspection;

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
public class InspController {
	@Autowired
	private InspService inspService;

	@GetMapping("/single-inspection/{id}")
	public Inspection getSinglePost(@PathVariable(value = "id") int id) {
		return inspService.getSingleInspection(id);

	}

	@GetMapping("/inspection")

	public List<Inspection> getAllInspections() {
		return inspService.getAllInspection();
	}

	@PostMapping("/add-inspection")
	public Inspection addInspection(@RequestBody Inspection inspection) {
		inspService.addInspection(inspection);
		return inspection;

	}

	@DeleteMapping("/delete-inspection/{id}")
	public List<Inspection> deleteInspection(@PathVariable("id") int id) {
		inspService.deleteInspection(id);
		return inspService.getAllInspection();

	}

	@PutMapping("/update-inspection/{id}")
	public Inspection editInspection(@RequestBody Inspection inspection, @PathVariable("id") int id) {
		return inspService.editInspection(inspection, id);

	}
}
