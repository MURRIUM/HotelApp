package api.controller;

import api.Entity.CategoryEntity;
import api.Entity.CharacteristicsRoomsEntity;
import api.Entity.CharacteristicsRoomsEntityPK;
import api.services.CategoryService;
import api.services.CharacteristicsRoomsService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class CharacteristicsRoomsController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/characteristicsRooms/{room}/{id}")
    public String find(@PathVariable String id, @PathVariable String room) {
        CharacteristicsRoomsService Service = new CharacteristicsRoomsService();
        CharacteristicsRoomsEntity item = Service.findById(Integer.parseInt(id), Integer.parseInt(room));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/characteristicsRooms")
    public String findAll() {
        CharacteristicsRoomsService Service = new CharacteristicsRoomsService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/characteristicsRooms")
    public Boolean post(@RequestBody Map<String, String> body) {
        CharacteristicsRoomsService Service = new CharacteristicsRoomsService();
        CharacteristicsRoomsEntity entity = new CharacteristicsRoomsEntity();
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }
/*
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/characteristicsRooms/{room}/{id}")
    public Boolean update(@PathVariable String id, @PathVariable String room, @RequestBody Map<String, String> body) {
        CharacteristicsRoomsService Service = new CharacteristicsRoomsService();
        CharacteristicsRoomsEntity entity = Service.findById(Integer.parseInt(id), Integer.parseInt(room));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }
*/
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/characteristicsRooms/{room}/{id}")
    public Boolean delete(@PathVariable String id, @PathVariable String room) {
        CharacteristicsRoomsService Service = new CharacteristicsRoomsService();
        Service.deleteUser(Service.findById(Integer.parseInt(id), Integer.parseInt(room)));
        return true;
    }

    private CharacteristicsRoomsEntity setEntity(Map<String, String> body, CharacteristicsRoomsEntity entity) {
        entity.setIdCharacteristic(Integer.parseInt(body.get("idCharacteristic")));
        entity.setRoom(Integer.parseInt(body.get("room")));
        return entity;
    }
}
