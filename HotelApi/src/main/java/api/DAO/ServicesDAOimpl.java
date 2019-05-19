package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.ServicesEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class ServicesDAOimpl implements EntityDAO {
    public ServicesEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(ServicesEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from ServicesEntity").list();
    }
    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from ServicesEntity order by idService desc");
        query.setMaxResults(1);
        ServicesEntity entity = (ServicesEntity) query.uniqueResult();
        return entity.getIdService();
    }
}
