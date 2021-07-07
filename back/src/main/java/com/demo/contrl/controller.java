package com.demo.contrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Smodel;
import com.demo.repository.repo;

@RestController
@CrossOrigin(origins ="*")
public class controller {
	
	@Autowired
	private repo repository;
	
	
	@PostMapping("/add")
	public List<Smodel> add(@RequestBody Smodel data) {
		repository.insert(data);
		return repository.findAll();	
	}
	
	@GetMapping("/del/{data}")
	public List<Smodel> delete(@PathVariable String data) {
		repository.deleteById(data);
		return repository.findAll();
	}

	@GetMapping("/list")
	public List<Smodel> display() {
		return repository.findAll();
	}
}
