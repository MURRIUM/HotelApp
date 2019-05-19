package api.services;

import api.DAO.DAOimpl;
import api.DAO.ServicesDAOimpl;
import api.Entity.ServicesEntity;

import java.util.List;

public class ServicesService {
    private ServicesDAOimpl EntityDao = new ServicesDAOimpl();
    private DAOimpl<ServicesEntity> dao = new DAOimpl<ServicesEntity>();

    public ServicesService() {}

    public int lastId() { return this.EntityDao.lastId(); }

    public ServicesEntity findById(int id) {
        return EntityDao.findById(id);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(ServicesEntity entt) { dao.save(entt); }

    public void deleteUser(ServicesEntity entt) {
        dao.delete(entt);
    }

    public void updateUser(ServicesEntity entt) {
        dao.update(entt);
    }
}
