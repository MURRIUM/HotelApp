package api.services;

import api.DAO.EmployeesDAOimpl;
import api.DAO.DAO;
import api.DAO.DAOimpl;
import api.Entity.EmployeesEntity;

import java.util.List;

public class EmployeesService {
    private EmployeesDAOimpl EmplDao = new EmployeesDAOimpl();
    private DAO<EmployeesEntity> dao = new DAOimpl<EmployeesEntity>();

    public EmployeesService() {}

    public int lastId() { return this.EmplDao.lastId(); }

    public EmployeesEntity findById(int id) {
        return EmplDao.findById(id);
    }

    public EmployeesEntity findEmployeeByLogin(String login) {
        return EmplDao.findByLogin(login);
    }

    public List getAll() {
        return EmplDao.getAll();
    }

    public void saveUser(EmployeesEntity employee) { dao.save(employee); }

    public void deleteUser(EmployeesEntity employee) {
        dao.delete(employee);
    }

    public void updateUser(EmployeesEntity employee) {
        dao.update(employee);
    }
}
