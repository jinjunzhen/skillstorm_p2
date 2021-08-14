package com.example.demo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.beans.Phone;

public interface PhoneRepository extends JpaRepository<Phone, Integer>{

}
