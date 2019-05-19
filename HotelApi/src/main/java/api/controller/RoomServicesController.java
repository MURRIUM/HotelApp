package api.controller;

import api.Entity.CategoryEntity;
import api.Entity.RoomServiceEntity;
import api.services.CategoryService;
import api.services.RoomServicesService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class RoomServicesController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/roomServices/{id}")
    public String find(@PathVariable String id) {
        RoomServicesService Service = new RoomServicesService();
        RoomServiceEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/roomServices")
    public String findAll() {
        RoomServicesService Service = new RoomServicesService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/roomServices/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        RoomServicesService Service = new RoomServicesService();
        RoomServiceEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/roomServices")
    public Boolean post(@RequestBody Map<String, String> body) {
        RoomServicesService Service = new RoomServicesService();
        RoomServiceEntity entity = new RoomServiceEntity();
        entity.setIdService(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/roomServices/{id}")
    public Boolean delete(@PathVariable String id) {
        RoomServicesService Service = new RoomServicesService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private RoomServiceEntity setEntity(Map<String, String> body, RoomServiceEntity entity) {
        entity.setEmployee(Integer.parseInt(body.get("employee")));
        entity.setRoom(Integer.parseInt(body.get("room")));
        entity.setService(Integer.parseInt(body.get("service")));
        return entity;
    }
}
