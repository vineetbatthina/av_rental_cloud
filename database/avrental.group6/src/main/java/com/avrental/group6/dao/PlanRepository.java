package com.avrental.group6.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.avrental.group6.model.Plan;

public interface PlanRepository extends CrudRepository<Plan, Long>, JpaRepository<Plan, Long> {

}
