package api.services;

import api.DAO.DAOimpl;
import api.DAO.StockDAOimpl;
import api.Entity.StockEntity;

import java.util.List;

public class StockService {
    private StockDAOimpl EntityDao = new StockDAOimpl();
    private DAOimpl<StockEntity> dao = new DAOimpl<StockEntity>();

    public StockService() {}

    public int lastId() { return this.EntityDao.lastId(); }

    public StockEntity findById(int id) {
        return EntityDao.findById(id);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(StockEntity entt) { dao.save(entt); }

    public void deleteUser(StockEntity entt) {
        dao.delete(entt);
    }

    public void updateUser(StockEntity entt) {
        dao.update(entt);
    }
}
