package pfa.oussama.employeeManager.api.controller;

import javax.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pfa.oussama.employeeManager.api.model.Tache;
import pfa.oussama.employeeManager.api.service.TacheService;

import java.util.List;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/tache")
public class TacheController {
    private final TacheService tacheService;

    public TacheController(TacheService tacheService) {
        this.tacheService = tacheService;
    }
    @GetMapping("/all")
    @PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<Tache>> getTache(){
        List<Tache> taches= tacheService.findAllTache();
        return new ResponseEntity<>(taches, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")

    public ResponseEntity<Tache> getTacheById(@PathVariable Long id){
        Tache tache= tacheService.findOneTache(id);
        return new ResponseEntity<>(tache, HttpStatus.OK);
    }
    @PostMapping("/add")
    @PreAuthorize("hasRole('ROLE_ADMIN')")

    public ResponseEntity<Tache> addOneTache(@RequestBody Tache tache){
        Tache tache1= tacheService.addTache(tache);
        return new ResponseEntity<>(tache1, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
    public ResponseEntity<Tache> updateTache(@RequestBody Tache tache) {
        Tache updateTache = tacheService.updateTache(tache);
        return new ResponseEntity<>(updateTache, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @Transactional
    public void deleteTache(@PathVariable Long id) {
        tacheService.deleteTache(id);
    }
}
