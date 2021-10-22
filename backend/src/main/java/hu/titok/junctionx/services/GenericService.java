package hu.titok.junctionx.services;

import java.util.List;

public interface GenericService<T> {

  T getById(Long id);
  List<T> getAll();
  void save(T entity);
  void delete(T entity);
  void deleteById(Long id);

}
