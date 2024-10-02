package example.magasyst.main.equipment;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;

import example.magasyst.abstractClass.Tools;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Transactional
@Service
@RequiredArgsConstructor
public class EquipmentService extends Tools {

	private final EquipmentRepository equRepository;

	Equipment equipment;

	@Override
	public List<Equipment> getAllEq() {

		return equRepository.findAll();

	}

	@Override
	public Equipment addEq(Equipment equipment) {
		return equRepository.save(equipment);

	}

	@Override
	public Equipment getSingleEq(int id) {
		Optional<Equipment> equipment = equRepository.findById(id);
		if (equipment.isPresent()) {
			return equipment.get();
		}

		throw new RuntimeErrorException(null, "Number id: " + id + " don't exist.");
	}

	@Override
	@Transactional
 @org.springframework.cache.annotation.CachePut(cacheNames = "editUnitEq",key
	= "#result.id")
	public Equipment editEq(Equipment equipment, int id) {
		Equipment eq = equRepository.findById(id).get();
		try {
			eq.setEname(equipment.getEname());
			eq.setModel(equipment.getModel());
			eq.setSnumber(equipment.getSnumber());
			eq.setRegistration(equipment.getRegistration());
		} catch (Exception e) {
			System.out.println("Error. Equipment not edited.");
		}
		return eq;

	}

	@Override
	public Equipment deleteEq(int id) {
		equRepository.deleteById(id);
		return equipment;

	}
}
