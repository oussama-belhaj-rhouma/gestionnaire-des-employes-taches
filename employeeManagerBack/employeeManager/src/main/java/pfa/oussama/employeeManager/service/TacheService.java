package pfa.oussama.employeeManager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pfa.oussama.employeeManager.model.Employee;
import pfa.oussama.employeeManager.exception.UserNotFoundException;
import pfa.oussama.employeeManager.model.Tache;
import pfa.oussama.employeeManager.repo.EmployeRepo;
import pfa.oussama.employeeManager.repo.TacheRepo;

import java.util.List;
import java.util.UUID;
@Service
public class TacheService {
    private final TacheRepo tacheRepo ;
    @Autowired
    public TacheService(TacheRepo tacheRepo) {
        this.tacheRepo = tacheRepo;
    }
    public Tache addTache(Tache T){
        T.setTacheCode(UUID.randomUUID().toString());
        return tacheRepo.save(T);
    }
    public List<Tache> findAllTache(){
        return tacheRepo.findAll();
    }
    public Tache updateTache(Tache tache) {
        return tacheRepo.save(tache);
    }
    public Tache findOneTache(Long id){
        return tacheRepo.findTacheById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
    public void deleteTache(Long id){
        tacheRepo.deleteTacheById(id);
    }
}
