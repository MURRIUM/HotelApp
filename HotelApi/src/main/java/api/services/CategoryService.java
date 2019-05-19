package api.services;

import api.DAO.DAOimpl;
import api.DAO.CategoryDAOimpl;
import api.Entity.CategoryEntity;

import java.util.List;

public class CategoryService {
    private CategoryDAOimpl CategDao = new CategoryDAOimpl();
    private DAOimpl<CategoryEntity> dao = new DAOimpl<CategoryEntity>();

    public CategoryService() {}

    public int lastId() {
        return this.CategDao.lastId();
    }

    public CategoryEntity findById(int id) {
        return CategDao.findById(id);
    }

    public List getAll() {
        return CategDao.getAll();
    }

    public void saveUser(CategoryEntity catg) { dao.save(catg); }

    public void deleteUser(CategoryEntity catg) {
        dao.delete(catg);
    }

    public void updateUser(CategoryEntity catg) {
        dao.update(catg);
    }
}
