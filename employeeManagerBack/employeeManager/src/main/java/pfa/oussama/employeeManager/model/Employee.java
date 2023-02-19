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
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false , updatable = false)
    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String imageUrl;
    @Column(nullable = false , updatable = false)
    private String employeeCode;

    @Override
    public String toString() {
        return "Employee{" + + '\n'+
                "id=" + id + '\n'+
                ", name='" + name + '\'' + '\n'+
                ", email='" + email + '\'' +'\n'+
                ", jobTitle='" + jobTitle + '\'' +'\n'+
                ", phoneNumber='" + phoneNumber + '\'' +'\n'+
                ", imageUrl='" + imageUrl + '\'' +'\n'+
                '}' + '\n';
    }
}
