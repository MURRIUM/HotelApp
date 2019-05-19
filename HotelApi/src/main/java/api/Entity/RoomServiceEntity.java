package api.Entity;

import javax.persistence.*;

@Entity
@Table(name = "room_service", schema = "hotel")
public class RoomServiceEntity {
    private int idService;
    private Integer room;
    private Integer service;
    private Integer employee;

    @Id
    @Column(name = "id_service", nullable = false)
    public int getIdService() {
        return idService;
    }

    public void setIdService(int idService) {
        this.idService = idService;
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
    @Column(name = "Service", nullable = true)
    public Integer getService() {
        return service;
    }

    public void setService(Integer service) {
        this.service = service;
    }

    @Basic
    @Column(name = "Employee", nullable = true)
    public Integer getEmployee() {
        return employee;
    }

    public void setEmployee(Integer employee) {
        this.employee = employee;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RoomServiceEntity that = (RoomServiceEntity) o;

        if (idService != that.idService) return false;
        if (room != null ? !room.equals(that.room) : that.room != null) return false;
        if (service != null ? !service.equals(that.service) : that.service != null) return false;
        if (employee != null ? !employee.equals(that.employee) : that.employee != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idService;
        result = 31 * result + (room != null ? room.hashCode() : 0);
        result = 31 * result + (service != null ? service.hashCode() : 0);
        result = 31 * result + (employee != null ? employee.hashCode() : 0);
        return result;
    }
}
