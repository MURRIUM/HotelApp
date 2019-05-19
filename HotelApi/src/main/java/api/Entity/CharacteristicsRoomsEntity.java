package api.Entity;

import javax.persistence.*;

@Entity
@Table(name = "characteristics_rooms", schema = "hotel")
@IdClass(CharacteristicsRoomsEntityPK.class)
public class CharacteristicsRoomsEntity {
    private int room;
    private int idCharacteristic;

    @Id
    @Column(name = "Room", nullable = false)
    public int getRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    @Id
    @Column(name = "id_characteristic", nullable = false)
    public int getIdCharacteristic() {
        return idCharacteristic;
    }

    public void setIdCharacteristic(int idCharacteristic) {
        this.idCharacteristic = idCharacteristic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CharacteristicsRoomsEntity that = (CharacteristicsRoomsEntity) o;

        if (room != that.room) return false;
        if (idCharacteristic != that.idCharacteristic) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = room;
        result = 31 * result + idCharacteristic;
        return result;
    }
}
