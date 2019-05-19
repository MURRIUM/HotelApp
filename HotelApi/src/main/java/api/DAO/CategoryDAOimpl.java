package api.DAO;

import api.Entity.CategoryEntity;
import api.Entity.ResidentsEntity;
import api.utils.HibernateSessionFactoryUtil;
import org.hibernate.query.Query;

import java.util.List;

public class CategoryDAOimpl implements EntityDAO {
    public CategoryEntity findById(int id) {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().get(CategoryEntity.class, id);
    }

    public List getAll() {
        return HibernateSessionFactoryUtil.getSessionFactory().openSession().createQuery("from CategoryEntity").list();
    }

    public int lastId() {
        Query query = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("from CategoryEntity order by idCategory desc");
        query.setMaxResults(1);
        CategoryEntity entity = (CategoryEntity) query.uniqueResult();
        return entity.getIdCategory();
    }
}
