package api.Entity;

import javax.persistence.*;

@Entity
@Table(name = "characteristics", schema = "hotel")
public class CharacteristicsEntity {
    private int idCharacteristic;
    private String nameCharacteristic;
    private String description;

    @Id
    @Column(name = "id_characteristic", nullable = false)
    public int getIdCharacteristic() {
        return idCharacteristic;
    }

    public void setIdCharacteristic(int idCharacteristic) {
        this.idCharacteristic = idCharacteristic;
    }

    @Basic
    @Column(name = "Name_characteristic", nullable = true, length = 255)
    public String getNameCharacteristic() {
        return nameCharacteristic;
    }

    public void setNameCharacteristic(String nameCharacteristic) {
        this.nameCharacteristic = nameCharacteristic;
    }

    @Basic
    @Column(name = "Description", nullable = true, length = 255)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CharacteristicsEntity that = (CharacteristicsEntity) o;

        if (idCharacteristic != that.idCharacteristic) return false;
        if (nameCharacteristic != null ? !nameCharacteristic.equals(that.nameCharacteristic) : that.nameCharacteristic != null)
            return false;
        if (description != null ? !description.equals(that.description) : that.description != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idCharacteristic;
        result = 31 * result + (nameCharacteristic != null ? nameCharacteristic.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        return result;
    }
}
