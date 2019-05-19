package api.services;

import api.DAO.CharacteristicsRoomsDAOimpl;
import api.DAO.DAOimpl;
import api.Entity.CharacteristicsRoomsEntity;

import java.util.List;

public class CharacteristicsRoomsService {
    private CharacteristicsRoomsDAOimpl EntityDao = new CharacteristicsRoomsDAOimpl();
    private DAOimpl<CharacteristicsRoomsEntity> dao = new DAOimpl<CharacteristicsRoomsEntity>();

    public CharacteristicsRoomsService() {}

    public int lastId() { return this.EntityDao.lastId(); }

    public CharacteristicsRoomsEntity findById(int id, int room) {
        return EntityDao.findById(id, room);
    }

    public List getAll() {
        return EntityDao.getAll();
    }

    public void saveUser(CharacteristicsRoomsEntity entt) { dao.save(entt); }

    public void deleteUser(CharacteristicsRoomsEntity entt) {
        dao.delete(entt);
    }

    public void updateUser(CharacteristicsRoomsEntity entt) {
        dao.update(entt);
    }
}
