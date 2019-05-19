package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.RoomServiceEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class RoomServicesDAOimpl implements EntityDAO {
        public RoomServiceEntity findById(int id) {
            return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(RoomServiceEntity.class, id);
        }

        public List getAll() {
            return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from RoomServiceEntity").list();
        }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from RoomServiceEntity order by idService desc");
        query.setMaxResults(1);
        RoomServiceEntity entity = (RoomServiceEntity) query.uniqueResult();
        return entity.getIdService();
    }
}
