package com.avrental.group6.service;

import java.util.List;
import java.util.Map;

import javax.persistence.TypedQuery;

import com.avrental.group6.model.Vehicleride;

public interface VehiclerideServices {

	 	List<Vehicleride> listAll();
	    
	    Iterable<Vehicleride> getById(String id);

	    void delete(String id);

	    void saveVehicleride(Vehicleride vehicleride);
	    
	    TypedQuery<Vehicleride> constructQuery(Map<String, String> customQuery);
}
