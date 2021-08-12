package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.beans.Account;
import com.example.demo.beans.Plan;
import com.example.demo.data.AccountRepository;
import com.example.demo.data.PlanRepository;



@Service
public class TeleService {
	
	@Autowired
	private PlanRepository planRepo;
	
	@Autowired
	private AccountRepository acctRepo;
	
	//--------------------------------------------------------------------->   Account part 
	public Account saveAccount(Account account) {
		return acctRepo.save(account);
	}
	
	public List<Account> findAllAccounts() {

		return acctRepo.findAll();
	}
	
	public void updateAccount(Account account, Integer id) {
		if ((account.getAccount_id() == id) && acctRepo.findById(account.getAccount_id()).isPresent()) {
			acctRepo.save(account);
		}else {
			throw new ValidationException(); // custom validator??
		}
	}
	
	public Account findAccountById(Integer id) {
		Optional<Account> optional = acctRepo.findById(id);
		return optional.isPresent() ? optional.get() : null;
	}
	
	//--------------------------------------------------------------------->   Plan part 
	
	public Plan savePlan(Plan plan) {
		return planRepo.save(plan);
	}
	
	
	public List<Plan> findAllPlans() {

		return planRepo.findAll();
	}
	
	public void updatePlan(Plan plan, Integer id) {
		if ((plan.getPlan_id() == id) && planRepo.findById(plan.getPlan_id()).isPresent()) {
			planRepo.save(plan);
		}else {
			throw new ValidationException(); // custom validator??
		}
	}
	
	public Plan findPlanById(Integer id) {
		Optional<Plan> optional = planRepo.findById(id);
		return optional.isPresent() ? optional.get() : null;
	}

	public Plan putPlanToAccount(Plan p, Account a) {
		p.setAccount(a);
		return planRepo.save(p);
	}
}
