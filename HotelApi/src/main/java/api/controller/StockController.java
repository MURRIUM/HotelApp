package api.controller;

import api.Entity.StockEntity;
import api.services.OrdersService;
import api.services.StockService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class StockController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/stock/{id}")
    public String find(@PathVariable String id) {
        StockService Service = new StockService();
        StockEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/stock")
    public String findAll() {
        StockService Service = new StockService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/stock/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        StockService Service = new StockService();
        StockEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/stock")
    public Boolean post(@RequestBody Map<String, String> body) {
        StockService Service = new StockService();
        StockEntity entity = new StockEntity();
        entity.setIdStock(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/stock/{id}")
    public Boolean delete(@PathVariable String id) {
        StockService Service = new StockService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private StockEntity setEntity(Map<String, String> body, StockEntity entity) {
        entity.setName(body.get("name"));
        entity.setDiscount(Integer.parseInt(body.get("discount")));
        return entity;
    }
}
