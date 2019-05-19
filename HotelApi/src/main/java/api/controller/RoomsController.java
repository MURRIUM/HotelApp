package api.controller;

import api.Entity.CategoryEntity;
import api.Entity.RoomsEntity;
import api.services.CategoryService;
import api.services.OrdersService;
import api.services.RoomsService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class RoomsController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/rooms/{id}")
    public String find(@PathVariable String id) {
        RoomsService Service = new RoomsService();
        RoomsEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/rooms")
    public String findAll() {
        RoomsService Service = new RoomsService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/rooms/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        RoomsService Service = new RoomsService();
        RoomsEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/rooms")
    public Boolean post(@RequestBody Map<String, String> body) {
        RoomsService Service = new RoomsService();
        RoomsEntity entity = new RoomsEntity();
        entity.setRoom(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/rooms/{id}")
    public Boolean delete(@PathVariable String id) {
        RoomsService Service = new RoomsService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private RoomsEntity setEntity(Map<String, String> body, RoomsEntity entity) {
        entity.setCapacity(body.get("capacity"));
        entity.setCategory(Integer.parseInt(body.get("category")));
            entity.setCost(Integer.parseInt(body.get("cost")));
        return entity;
    }
}
