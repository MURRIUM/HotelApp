package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.CharacteristicsEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class CharacteristicsDAOimpl implements EntityDAO {
    public CharacteristicsEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(CharacteristicsEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from CharacteristicsEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from CharacteristicsEntity order by idCharacteristic desc");
        query.setMaxResults(1);
        CharacteristicsEntity entity = (CharacteristicsEntity) query.uniqueResult();
        return entity.getIdCharacteristic();
    }
}
