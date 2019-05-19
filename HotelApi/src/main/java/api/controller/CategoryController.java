package api.controller;

import api.Entity.CategoryEntity;
import api.services.CategoryService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CategoryController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/category/{id}")
    public String find(@PathVariable String id) {
        CategoryService Service = new CategoryService();
        CategoryEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/category")
    public String findAll() {
        CategoryService Service = new CategoryService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/category/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        CategoryService Service = new CategoryService();
        CategoryEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/category")
    public Boolean post(@RequestBody Map<String, String> body) {
        CategoryService Service = new CategoryService();
        CategoryEntity entity = new CategoryEntity();
        entity.setIdCategory(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/category/{id}")
    public Boolean delete(@PathVariable String id) {
        CategoryService Service = new CategoryService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private CategoryEntity setEntity(Map<String, String> body, CategoryEntity entity) {
        entity.setName(body.get("name"));
        return entity;
    }
}
