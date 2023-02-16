package pfa.oussama.employeeManager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pfa.oussama.employeeManager.employee.Employee;
import pfa.oussama.employeeManager.exception.UserNotFoundException;
import pfa.oussama.employeeManager.repo.EmployeRepo;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service
public class EmployeeService {
    private final EmployeRepo employeRepo;
    @Autowired
    public EmployeeService(EmployeRepo employeRepo) {
        this.employeRepo = employeRepo;
    }
    public Employee addEmployee(Employee e){
        e.setEmployeeCode(UUID.randomUUID().toString());
        return employeRepo.save(e);
    }
    public List<Employee> findAllEmployee(){
        return employeRepo.findAll();
    }
    public Employee updateEmployee(Employee employee) {
        return employeRepo.save(employee);
    }    public Employee findOneEmployee(Long id){
        return employeRepo.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
    public void deleteEmployee(Long id){
        employeRepo.deleteEmployeeById(id);
    }
}
