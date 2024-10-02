package example.magasyst.main.inspection;

import java.util.List;
import java.util.Optional;
import javax.management.RuntimeErrorException;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import example.magasyst.abstractClass.Raport;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class InspService extends Raport {

	private final InspRepository inspRepository;
	Inspection inspection;

	@Override
@Cacheable(cacheNames = "getAllUnitsInsp")
	public List<Inspection> getAllInspection() {

		return inspRepository.findAll();

	}

	@Override
	public Inspection addInspection(Inspection inspection) {
		return inspRepository.save(inspection);

	}

	@Override
	public Inspection getSingleInspection(int id) {
		Optional<Inspection> in = inspRepository.findById(id);
		if (in.isPresent()) {
			return in.get();
		}

		throw new RuntimeErrorException(null, "Number id: " + id + " don't exist.");
	}

	@Override
	@Transactional
	@org.springframework.cache.annotation.CachePut(cacheNames = "editUnitInsp", key = "#result.id")
	public Inspection editInspection(Inspection inspection, int id) {
		Inspection insp = inspRepository.findById(id).get();
		try {

			insp.setName(inspection.getName());
			insp.setFname(inspection.getFname());
			insp.setDivision(inspection.getDivision());
			insp.setPosition(inspection.getPosition());
			insp.setEname(inspection.getEname());
			insp.setModel(inspection.getModel());
			insp.setSnumber(inspection.getSnumber());
			insp.setRegistration(inspection.getRegistration());
			insp.setDate(inspection.getDate());
			insp.setBody(inspection.getBody());
			insp.setBattery(inspection.getBattery());
			insp.setBelt(inspection.getBelt());
			insp.setBrake(inspection.getBrake());
			insp.setWheel(inspection.getWheel());
			insp.setLight(inspection.getLight());
			insp.setHorn(inspection.getHorn());
			insp.setLeak(inspection.getLeak());
			insp.setStatus(inspection.getStatus());
			insp.setComments(inspection.getComments());
			inspRepository.save(insp);
		} catch (Exception e) {
			System.out.println("Error. Values not edited.");
		}
		return insp;

	}

	@Override
	public Inspection deleteInspection(int id) {
		inspRepository.deleteById(id);
		return inspection;

	}
}
