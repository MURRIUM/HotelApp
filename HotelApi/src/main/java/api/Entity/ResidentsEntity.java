package api.Entity;

import javax.persistence.*;

@Entity
@Table(name = "residents", schema = "hotel")
public class ResidentsEntity {
    private int idResident;
    private String surname;
    private String firstName;
    private String secondName;
    private String organization;
    private String nameOfOrganization;

    @Id
    @Column(name = "id_resident", nullable = false)
    public int getIdResident() {
        return idResident;
    }

    public void setIdResident(int idResident) {
        this.idResident = idResident;
    }

    @Basic
    @Column(name = "Surname", nullable = true, length = 255)
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Basic
    @Column(name = "First_name", nullable = true, length = 255)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "Second_name", nullable = true, length = 255)
    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    @Basic
    @Column(name = "Organization", nullable = true, length = 255)
    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    @Basic
    @Column(name = "Name_of_organization", nullable = true, length = 255)
    public String getNameOfOrganization() {
        return nameOfOrganization;
    }

    public void setNameOfOrganization(String nameOfOrganization) {
        this.nameOfOrganization = nameOfOrganization;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ResidentsEntity that = (ResidentsEntity) o;

        if (idResident != that.idResident) return false;
        if (surname != null ? !surname.equals(that.surname) : that.surname != null) return false;
        if (firstName != null ? !firstName.equals(that.firstName) : that.firstName != null) return false;
        if (secondName != null ? !secondName.equals(that.secondName) : that.secondName != null) return false;
        if (organization != null ? !organization.equals(that.organization) : that.organization != null) return false;
        if (nameOfOrganization != null ? !nameOfOrganization.equals(that.nameOfOrganization) : that.nameOfOrganization != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idResident;
        result = 31 * result + (surname != null ? surname.hashCode() : 0);
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (secondName != null ? secondName.hashCode() : 0);
        result = 31 * result + (organization != null ? organization.hashCode() : 0);
        result = 31 * result + (nameOfOrganization != null ? nameOfOrganization.hashCode() : 0);
        return result;
    }
}
