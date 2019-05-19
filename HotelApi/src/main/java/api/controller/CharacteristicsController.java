package api.controller;

import api.Entity.CharacteristicsEntity;
import api.services.CharacteristicsService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CharacteristicsController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/characteristics/{id}")
    public String find(@PathVariable String id) {
        CharacteristicsService Service = new CharacteristicsService();
        CharacteristicsEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/characteristics")
    public String findAll() {
        CharacteristicsService Service = new CharacteristicsService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/characteristics/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        CharacteristicsService Service = new CharacteristicsService();
        CharacteristicsEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/characteristics")
    public Boolean post(@RequestBody Map<String, String> body) {
        CharacteristicsService Service = new CharacteristicsService();
        CharacteristicsEntity entity = new CharacteristicsEntity();
        entity.setIdCharacteristic(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/characteristics/{id}")
    public Boolean delete(@PathVariable String id) {
        CharacteristicsService Service = new CharacteristicsService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private CharacteristicsEntity setEntity(Map<String, String> body, CharacteristicsEntity entity) {
        entity.setNameCharacteristic(body.get("nameCharacteristic"));
        entity.setDescription(body.get("description"));
        return entity;
    }
}
