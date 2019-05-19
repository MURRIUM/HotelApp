package api.controller;

import api.Entity.CategoryEntity;
import api.Entity.EmployeesEntity;
import api.Entity.OrdersEntity;
import api.services.CategoryService;
import api.services.EmployeesService;
import api.services.OrdersService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

@RestController
public class EmployeesController {
    /*@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee/{id}")
    public String employee(@PathVariable String id) {
        EmployeesService EmplServ = new EmployeesService();
        EmployeesEntity empl = EmplServ.findEmployee(Integer.parseInt(id));
        return new Gson().toJson(empl);
    }*/

    @CrossOrigin(origins = "http://localhost:4200")
    @PatchMapping("/login")
    public String login(@RequestBody Map<String, String> body) {
        EmployeesService EmplServ = new EmployeesService();
        EmployeesEntity empl = EmplServ.findEmployeeByLogin(body.get("login"));
        if(empl.getPassword().equals(body.get("password")) ) {
            empl.setPassword("***");
            return new Gson().toJson(empl);
        }
        return null;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee/{id}")
    public String find(@PathVariable String id) {
        EmployeesService Service = new EmployeesService();
        EmployeesEntity item = Service.findById(Integer.parseInt(id));
        item.setPassword("***");
        return new Gson().toJson(item);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/employee")
    public String findAll() {
        EmployeesService Service = new EmployeesService();
        List<EmployeesEntity> res = (List<EmployeesEntity>) Service.getAll();
        for (EmployeesEntity item: res) {
            item.setPassword("***");
            res.set(item.getIdEmployee() - 1, item);
        }
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/employee/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        EmployeesService Service = new EmployeesService();
        EmployeesEntity entity = Service.findById(Integer.parseInt(id));
        this.setEntity(body, entity);
        Service.updateUser(entity);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/employee")
    public Boolean post(@RequestBody Map<String, String> body) throws ParseException {
        EmployeesService Service = new EmployeesService();
        EmployeesEntity entity = new EmployeesEntity();
        entity.setIdEmployee(Service.lastId() + 1);
        this.setEntity(body, entity);
        Service.saveUser(entity);
        return true;
    }
/*
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/employee/{id}")
    public Boolean delete(@PathVariable String id) {
        EmployeesService Service = new EmployeesService();
        Service.deleteUser(Service.findById(Integer.parseInt(id)));
        return true;
    }
*/

    private EmployeesEntity setEntity(Map<String, String> body, EmployeesEntity entity) {
        entity.setFirstName(body.get("firstName"));
        entity.setSecondName(body.get("secondName"));
        entity.setSurname(body.get("surname"));
        entity.setSex(body.get("sex"));
        entity.setSalary(Integer.parseInt(body.get("salary")));
        entity.setPosition(body.get("position"));
        return entity;
    }
}
