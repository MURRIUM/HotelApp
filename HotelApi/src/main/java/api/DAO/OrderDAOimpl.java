package api.DAO;

import api.Entity.OrdersEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class OrderDAOimpl implements EntityDAO {
    public OrdersEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(OrdersEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from OrdersEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from OrdersEntity order by idOrder desc");
        query.setMaxResults(1);
        OrdersEntity entity = (OrdersEntity) query.uniqueResult();
        return entity.getIdOrder();
    }

    public boolean isResident(int id) {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from OrdersEntity where ResidentsEntity = :resident");
        query.setMaxResults(1);
        query.setParameter("resident", id);
        try {
            OrdersEntity entity = (OrdersEntity) query.uniqueResult();
        } catch (NullPointerException e) {
            return false;
        }
        return true;
    }

    public boolean isRoom(int id) {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from OrdersEntity where RoomsEntity = :room");
        query.setMaxResults(1);
        query.setParameter("room", id);
        try {
            OrdersEntity entity = (OrdersEntity) query.uniqueResult();
        } catch (NullPointerException e) {
            return false;
        }
        return true;
    }

    public boolean isStock(int id) {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from OrdersEntity where StockEntity = :stock");
        query.setMaxResults(1);
        query.setParameter("stock", id);
        try {
            OrdersEntity entity = (OrdersEntity) query.uniqueResult();
        } catch (NullPointerException e) {
            return false;
        }
        return true;
    }
}
