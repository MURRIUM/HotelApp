package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.CharacteristicsRoomsEntity;
import api.Entity.CharacteristicsRoomsEntityPK;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class CharacteristicsRoomsDAOimpl {
    public CharacteristicsRoomsEntity findById(int id, int room) {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from CharacteristicsRoomsEntity where idCharacteristic = :id and room = :room");
        query.setParameter("id", id);
        query.setParameter("room", room);
        return (CharacteristicsRoomsEntity) query.uniqueResult();
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from CharacteristicsRoomsEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from CharacteristicsRoomsEntity order by idCharacteristic desc");
        query.setMaxResults(1);
        CharacteristicsRoomsEntity entity = (CharacteristicsRoomsEntity) query.uniqueResult();
        return entity.getIdCharacteristic();
    }
}
