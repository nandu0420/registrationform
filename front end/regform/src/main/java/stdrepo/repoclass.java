package stdrepo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import regstd.stud;

@Repository
public interface repoclass extends MongoRepository<stud,String> {

}
