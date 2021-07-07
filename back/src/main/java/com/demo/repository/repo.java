package com.demo.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.demo.model.Smodel;


@Repository
public interface repo extends MongoRepository <Smodel,String> {

}
