package api.controller;

import api.Entity.OrdersEntity;
import api.services.OrdersService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class OrdersController {
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/order/{id}")
    public String find(@PathVariable String id) {
        OrdersService Service = new OrdersService();
        OrdersEntity item = Service.findById(Integer.parseInt(id));
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/order")
    public String findAll() {
        OrdersService Service = new OrdersService();
        List res = Service.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/order/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) throws ParseException {
        OrdersService Service = new OrdersService();
        OrdersEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/order")
    public Boolean post(@RequestBody Map<String, String> body) throws ParseException {
        OrdersService Service = new OrdersService();
        OrdersEntity entity = new OrdersEntity();
        entity.setIdOrder(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/order/{id}")
    public Boolean delete(@PathVariable String id) {
        OrdersService Service = new OrdersService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }


    private OrdersEntity setEntity(Map<String, String> body, OrdersEntity entity) throws ParseException {
        entity.setResident(Integer.parseInt(body.get("resident")));
        entity.setRoom(Integer.parseInt(body.get("room")));
        entity.setStock(Integer.parseInt(body.get("stock")));

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        Date parsedDate = dateFormat.parse(body.get("checkInDate"));
        entity.setCheckInDate(new java.sql.Timestamp(parsedDate.getTime()));

        parsedDate = dateFormat.parse(body.get("dateOfEviction"));
        entity.setDateOfEviction(new java.sql.Timestamp(parsedDate.getTime()));
        return entity;
    }
}
