package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.EmployeesEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class EmployeesDAOimpl implements EmployeesDAO {
    public EmployeesEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(EmployeesEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from EmployeesEntity").list();
    }

    public EmployeesEntity findByLogin(String login) {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from EmployeesEntity where login = :login1");
        query.setParameter("login1", login);
        query.setMaxResults(1);
        EmployeesEntity entity = (EmployeesEntity) query.uniqueResult();
        return entity;
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from EmployeesEntity order by idEmployee desc");
        query.setMaxResults(1);
        EmployeesEntity entity = (EmployeesEntity) query.uniqueResult();
        return entity.getIdEmployee();
    }
}
