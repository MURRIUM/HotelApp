package api.controller;

import api.Entity.CategoryEntity;
import api.Entity.ServicesEntity;
import api.services.CategoryService;
import api.services.ServicesService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ServicesController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/services/{id}")
    public String find(@PathVariable String id) {
        ServicesService Service = new ServicesService();
        ServicesEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/services")
    public String findAll() {
        ServicesService Service = new ServicesService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/services/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        ServicesService Service = new ServicesService();
        ServicesEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/services")
    public Boolean post(@RequestBody Map<String, String> body) {
        ServicesService Service = new ServicesService();
        ServicesEntity entity = new ServicesEntity();
        entity.setIdService(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/services/{id}")
    public Boolean delete(@PathVariable String id) {
        ServicesService Service = new ServicesService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private ServicesEntity setEntity(Map<String, String> body, ServicesEntity entity) {
        entity.setName(body.get("name"));
        entity.setPrice(Integer.parseInt(body.get("price")));
        return entity;
    }
}
