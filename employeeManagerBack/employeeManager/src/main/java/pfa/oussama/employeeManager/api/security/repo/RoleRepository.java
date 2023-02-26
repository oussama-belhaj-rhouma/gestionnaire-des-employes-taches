package pfa.oussama.employeeManager.api.security.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.oussama.employeeManager.api.security.models.ERole;
import pfa.oussama.employeeManager.api.security.models.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
