package api.DAO;

import api.Entity.EmployeesEntity;

public interface EmployeesDAO extends EntityDAO<EmployeesEntity> {
    public EmployeesEntity findByLogin(String login);
}
