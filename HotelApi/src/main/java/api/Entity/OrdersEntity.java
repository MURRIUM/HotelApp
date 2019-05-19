package api.Entity;

import javax.persistence.*;
import java.sql.Timestamp;

import java.io.Serializable;

@Entity
@Table(name = "orders", schema = "hotel")
public class OrdersEntity implements Serializable {
    private int idOrder;
    private Integer resident;
    private Integer room;
    private Integer stock;
    private Timestamp checkInDate;
    private Timestamp dateOfEviction;

    @Id
    @Column(name = "id_order", nullable = false)
    public int getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(int idOrder) {
        this.idOrder = idOrder;
    }

    @Basic
    @Column(name = "Resident", nullable = true)
    public Integer getResident() {
        return resident;
    }

    public void setResident(Integer resident) {
        this.resident = resident;
    }

    @Basic
    @Column(name = "Room", nullable = true)
    public Integer getRoom() {
        return room;
    }

    public void setRoom(Integer room) {
        this.room = room;
    }

    @Basic
    @Column(name = "Stock", nullable = true)
    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    @Basic
    @Column(name = "Check_in_date", nullable = true)
    public Timestamp getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(Timestamp checkInDate) {
        this.checkInDate = checkInDate;
    }

    @Basic
    @Column(name = "Date_of_eviction", nullable = true)
    public Timestamp getDateOfEviction() {
        return dateOfEviction;
    }

    public void setDateOfEviction(Timestamp dateOfEviction) {
        this.dateOfEviction = dateOfEviction;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrdersEntity that = (OrdersEntity) o;

        if (idOrder != that.idOrder) return false;
        if (resident != null ? !resident.equals(that.resident) : that.resident != null) return false;
        if (room != null ? !room.equals(that.room) : that.room != null) return false;
        if (stock != null ? !stock.equals(that.stock) : that.stock != null) return false;
        if (checkInDate != null ? !checkInDate.equals(that.checkInDate) : that.checkInDate != null) return false;
        if (dateOfEviction != null ? !dateOfEviction.equals(that.dateOfEviction) : that.dateOfEviction != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idOrder;
        result = 31 * result + (resident != null ? resident.hashCode() : 0);
        result = 31 * result + (room != null ? room.hashCode() : 0);
        result = 31 * result + (stock != null ? stock.hashCode() : 0);
        result = 31 * result + (checkInDate != null ? checkInDate.hashCode() : 0);
        result = 31 * result + (dateOfEviction != null ? dateOfEviction.hashCode() : 0);
        return result;
    }
}
