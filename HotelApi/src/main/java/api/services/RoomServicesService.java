package api.services;

import api.DAO.DAOimpl;
import api.DAO.RoomServicesDAOimpl;
import api.Entity.RoomServiceEntity;

import java.util.List;

public class RoomServicesService {
    private RoomServicesDAOimpl EntityDao = new RoomServicesDAOimpl();
    private DAOimpl<RoomServiceEntity> dao = new DAOimpl<RoomServiceEntity>();

    public RoomServicesService() {}

    public int lastId() { return this.EntityDao.lastId(); }

    public RoomServiceEntity findById(int id) {
        return EntityDao.findById(id);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(RoomServiceEntity entt) { dao.save(entt); }

    public void deleteUser(RoomServiceEntity entt) {
        dao.delete(entt);
    }

    public void updateUser(RoomServiceEntity entt) {
        dao.update(entt);
    }
}
