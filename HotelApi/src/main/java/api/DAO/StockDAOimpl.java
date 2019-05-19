package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.StockEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class StockDAOimpl implements EntityDAO {
    public StockEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(StockEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from StockEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from StockEntity order by idStock desc");
        query.setMaxResults(1);
        StockEntity entity = (StockEntity) query.uniqueResult();
        return entity.getIdStock();
    }
}
