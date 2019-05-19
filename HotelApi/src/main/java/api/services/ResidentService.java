package api.services;

import api.DAO.DAO;
import api.DAO.DAOimpl;
import api.DAO.ResidentDAOimpl;
import api.Entity.ResidentsEntity;

import java.util.List;

public class ResidentService {
    private ResidentDAOimpl ResDAO = new ResidentDAOimpl();
    private DAO<ResidentsEntity> dao = new DAOimpl<ResidentsEntity>();

    public ResidentService() {}

    public int lastId() {
        return this.ResDAO.lastId();
    }

    public ResidentsEntity findResident(int id) {
        return ResDAO.findById(id);
    }

    public List getAll() {
        return ResDAO.getAll();
    }

    public void saveUser(ResidentsEntity res) { dao.save(res); }

    public void deleteUser(ResidentsEntity res) {
        dao.delete(res);
    }

    public void updateUser(ResidentsEntity res) {
        dao.update(res);
    }
}
