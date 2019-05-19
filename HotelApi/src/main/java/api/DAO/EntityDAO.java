package api.DAO;

import java.util.List;

public interface EntityDAO<T> {
    public T findById(int id);

    public List getAll();

    public int lastId();
}
