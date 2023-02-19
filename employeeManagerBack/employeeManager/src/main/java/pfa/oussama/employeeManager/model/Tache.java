package pfa.oussama.employeeManager.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tache implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false , updatable = false)
    private Long id;
    private String name;
    private String description;
    private Long numberOfEmployees;
    private String imageUrl;
    @Column(nullable = false , updatable = false)
    private String tacheCode;

    @Override
    public String toString() {
        return "Tache{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", numberOfEmployees=" + numberOfEmployees +
                ", imageUrl='" + imageUrl + '\'' +
                ", tacheCode='" + tacheCode + '\'' +
                '}';
    }
}
