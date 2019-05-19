package api.DAO;

import api.Entity.ResidentsEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class ResidentDAOimpl implements EntityDAO {

    public ResidentsEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(ResidentsEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from ResidentsEntity").list();
    }
    public int lastId() {
        Query query = HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from ResidentsEntity order by idResident desc");
        query.setMaxResults(1);
        ResidentsEntity res = (ResidentsEntity) query.uniqueResult();
        return res.getIdResident();
    }
}
