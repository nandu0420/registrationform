package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import regstd.stud;
import stdrepo.repoclass;

@RestController
@CrossOrigin(origins="*")
public class controlclass {
	@Autowired
	private repoclass frm;
	@PostMapping("/create")
	public void createstudent(@RequestBody stud data){
		frm.insert(data);
	}
	@GetMapping("/listst")
	public List<stud> liststud() {
		return frm.findAll();
	}
}
