package api.controller;

import api.Entity.ResidentsEntity;
import api.services.OrdersService;
import api.services.ResidentService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class ResidentsController {
    @RequestMapping("/")
    public String index() {
        return "Good day, fellas";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resident/{id}")
    public String resident(@PathVariable String id) {
        ResidentService ResServ = new ResidentService();
        ResidentsEntity res = ResServ.findResident(Integer.parseInt(id));
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/resident")
    public String resident() {
        ResidentService ResServ = new ResidentService();
        List res = ResServ.getAll();
        return new Gson().toJson(res);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/resident/{id}")
    public Boolean update(@PathVariable String id, @RequestBody Map<String, String> body) {
        ResidentService ResServ = new ResidentService();
        ResidentsEntity resident = ResServ.findResident(Integer.parseInt(id));
        this.setResident(body, resident);
        ResServ.updateUser(resident);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping ("/resident")
    public Boolean post(@RequestBody Map<String, String> body) {
        ResidentService ResServ = new ResidentService();
        ResidentsEntity resident = new ResidentsEntity();
        resident.setIdResident(ResServ.lastId() + 1);
        this.setResident(body, resident);
        ResServ.saveUser(resident);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping ("/resident/{id}")
    public Boolean delete(@PathVariable String id) {
        ResidentService ResServ = new ResidentService();
        ResServ.deleteUser(ResServ.findResident(Integer.parseInt(id)));
        return true;

    }


    private ResidentsEntity setResident(Map<String, String> body, ResidentsEntity resident) {
        resident.setFirstName(body.get("firstName"));
        resident.setSecondName(body.get("secondName"));
        resident.setSurname(body.get("surname"));
        resident.setOrganization(body.get("organization"));
        resident.setNameOfOrganization(body.get("nameOfOrganization"));
        return resident;
    }
}
