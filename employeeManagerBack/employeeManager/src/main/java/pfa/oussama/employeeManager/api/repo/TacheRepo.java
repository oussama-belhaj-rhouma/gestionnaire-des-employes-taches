package pfa.oussama.employeeManager.api.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pfa.oussama.employeeManager.api.model.Tache;

import java.util.Optional;

public interface TacheRepo extends JpaRepository<Tache,Long> {
    Optional<Tache> findTacheById(Long id);
    void deleteTacheById(Long id);
}
