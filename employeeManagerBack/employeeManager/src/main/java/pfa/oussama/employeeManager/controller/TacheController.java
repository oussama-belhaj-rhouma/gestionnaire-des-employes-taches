package pfa.oussama.employeeManager.controller;

import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pfa.oussama.employeeManager.model.Employee;
import pfa.oussama.employeeManager.model.Tache;
import pfa.oussama.employeeManager.service.TacheService;

import java.util.List;

@RestController
@RequestMapping("/tache")
public class TacheController {
    private final TacheService tacheService;

    public TacheController(TacheService tacheService) {
        this.tacheService = tacheService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Tache>> getTache(){
        List<Tache> taches= tacheService.findAllTache();
        return new ResponseEntity<>(taches, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Tache> getTacheById(@PathVariable Long id){
        Tache tache= tacheService.findOneTache(id);
        return new ResponseEntity<>(tache, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Tache> addOneTache(@RequestBody Tache tache){
        Tache tache1= tacheService.addTache(tache);
        return new ResponseEntity<>(tache1, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Tache> updateTache(@RequestBody Tache tache) {
        Tache updateTache = tacheService.updateTache(tache);
        return new ResponseEntity<>(updateTache, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @Transactional
    public void deleteTache(@PathVariable Long id) {
        tacheService.deleteTache(id);
    }
}
