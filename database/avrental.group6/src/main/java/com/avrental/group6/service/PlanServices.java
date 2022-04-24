package com.avrental.group6.service;

import java.util.List;
import java.util.Map;

import javax.persistence.TypedQuery;

import com.avrental.group6.model.Plan;
import com.avrental.group6.model.User;

public interface PlanServices {
	
	   List<Plan> listAll();
	    
	    Iterable<Plan> getById(Long id);

	    void delete(Long id);

	    void savePlan(Plan plan);
	    
	    TypedQuery<Plan> constructQuery(Map<String, String> customQuery);

}
