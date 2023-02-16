package pfa.oussama.employeeManager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pfa.oussama.employeeManager.employee.Employee;

import java.util.Optional;

public interface EmployeRepo extends JpaRepository<Employee,Long> {
    Optional<Employee> findEmployeeById(Long id);
    void deleteEmployeeById(Long id);
}
