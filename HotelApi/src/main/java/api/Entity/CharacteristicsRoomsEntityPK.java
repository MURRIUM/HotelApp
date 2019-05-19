package api.Entity;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class CharacteristicsRoomsEntityPK implements Serializable {
    private int room;
    private int idCharacteristic;

    @Column(name = "Room", nullable = false)
    @Id
    public int getRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    @Column(name = "id_characteristic", nullable = false)
    @Id
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

        CharacteristicsRoomsEntityPK that = (CharacteristicsRoomsEntityPK) o;

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
