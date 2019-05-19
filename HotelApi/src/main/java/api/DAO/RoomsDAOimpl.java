package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.RoomsEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class RoomsDAOimpl implements EntityDAO {
    public RoomsEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(RoomsEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from RoomsEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from RoomsEntity order by room desc");
        query.setMaxResults(1);
        RoomsEntity entity = (RoomsEntity) query.uniqueResult();
        return entity.getRoom();
    }
}
