package api.services;

import api.DAO.RoomsDAOimpl;
import api.DAO.DAO;
import api.DAO.DAOimpl;
import api.Entity.RoomsEntity;

import java.util.List;

public class RoomsService {
    private RoomsDAOimpl RoomDao = new RoomsDAOimpl();
    private DAO<RoomsEntity> dao = new DAOimpl<RoomsEntity>();

    public RoomsService() {}

    public int lastId() { return this.RoomDao.lastId(); }

    public RoomsEntity findById(int id) {
        return RoomDao.findById(id);
    }

    public List getAll() {
        return RoomDao.getAll();
    }

    public void saveUser(RoomsEntity room) { dao.save(room); }

    public void deleteUser(RoomsEntity room) {
        dao.delete(room);
    }

    public void updateUser(RoomsEntity room) {
        dao.update(room);
    }
}
