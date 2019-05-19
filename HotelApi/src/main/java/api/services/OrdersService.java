package api.services;

import api.DAO.DAOimpl;
import api.DAO.OrderDAOimpl;
import api.Entity.OrdersEntity;

import java.util.List;

public class OrdersService {
    private OrderDAOimpl EntityDao = new OrderDAOimpl();
    private DAOimpl<OrdersEntity> dao = new DAOimpl<OrdersEntity>();

    public OrdersService() {}

    public int lastId() { return this.EntityDao.lastId(); }

    public boolean isResident(int id) {
        return this.EntityDao.isResident(id);
    }

    public boolean isRoom(int id) {
        return this.EntityDao.isRoom(id);
    }

    public boolean isStock(int id) {
        return this.EntityDao.isRoom(id);
    }

    public OrdersEntity findById(int id) {
        return EntityDao.findById(id);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(OrdersEntity entt) { dao.save(entt); }

    public void deleteUser(OrdersEntity entt) {
        dao.delete(entt);
    }

    public void updateUser(OrdersEntity entt) {
        dao.update(entt);
    }
}
