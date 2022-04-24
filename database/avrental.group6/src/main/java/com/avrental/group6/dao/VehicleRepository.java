package com.avrental.group6.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.avrental.group6.model.Vehicle;

public interface VehicleRepository extends CrudRepository<Vehicle, String>, JpaRepository<Vehicle, String> {

}
