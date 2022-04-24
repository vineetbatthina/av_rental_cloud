package com.avrental.group6.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.avrental.group6.model.User;

public interface UserRepository extends CrudRepository<User, Long>, JpaRepository<User, Long>{

}
