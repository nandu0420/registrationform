package stdrepo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import regstd.stud;

@Repository
public interface repoclass extends MongoRepository<stud,String> {
	@Query("FROM stud") 
	List<stud> findByName(String name);

}



