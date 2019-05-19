package api.services;

import api.DAO.CharacteristicsDAOimpl;
import api.DAO.CharacteristicsRoomsDAOimpl;
import api.DAO.DAOimpl;
import api.Entity.CharacteristicsEntity;
import api.Entity.CharacteristicsRoomsEntity;

import java.util.List;

public class CharacteristicsService {
    private CharacteristicsDAOimpl EntityDao = new CharacteristicsDAOimpl();
    private DAOimpl<CharacteristicsEntity> dao = new DAOimpl<CharacteristicsEntity>();

    public CharacteristicsService() {}

    public int lastId() {
        return this.EntityDao.lastId();
    }

    public CharacteristicsEntity findById(int id) {
        return EntityDao.findById(id);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(CharacteristicsEntity catg) { dao.save(catg); }

    public void deleteUser(CharacteristicsEntity catg) {
        dao.delete(catg);
    }

    public void updateUser(CharacteristicsEntity catg) {
        dao.update(catg);
    }
}
