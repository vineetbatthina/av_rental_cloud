package com.avrental.group6.service;

import java.util.List;
import java.util.Map;

import javax.persistence.TypedQuery;

import com.avrental.group6.model.User;
import com.avrental.group6.model.Vehicle;
import com.avrental.group6.model.VehicleStatus;

public interface VehicleServices {
	
	  List<Vehicle> listAll();
	    
	    Iterable<Vehicle> getById(String id);

	    void delete(String id);

	    void saveVehicle(Vehicle vehicle);
	    
	    TypedQuery<Vehicle> constructQuery(Map<String, String> customQuery);
	    
	    int numberOfAVs();
	    
	    List<VehicleStatus> getVehicleStatus();

}
