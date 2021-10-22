package hu.titok.junctionx.services;

import hu.titok.junctionx.repositories.GenericRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenericServiceImpl<T> implements GenericService<T>{

    @Autowired
    private GenericRepository<T> repository;

    @Override
    public T getById(Long id) {
        return repository.getById(id);
    }

    @Override
    public List<T> getAll() {
        return repository.findAll();
    }

    @Override
    public void save(T entity) {
        repository.save(entity);
    }

    @Override
    public void delete(T entity) {
        repository.delete(entity);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
