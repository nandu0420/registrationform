package services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import stdrepo.repoclass;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
@Service
public class Stdop implements Stdserv {
	@Autowired
	private repoclass repository;
	@Override
	public List<stud>findAllOrderByNameAsc(){
		var sort=new Sort(Sort.Direction.ASC,"name");
		return repository.findAllOrderByNameAsc(sort);
	}

}
