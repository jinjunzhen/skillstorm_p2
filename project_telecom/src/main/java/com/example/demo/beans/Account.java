package com.example.demo.beans;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
//JPA annotations
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Hibernate annotations (JPA)
 * ORM framework - object relational mapping
 * 
 * JPA - standard for ORM frameworks
 * Hibernate implements that standard
 * 
 */
@Entity // this is an object to be managed by Hibernate
@Table(name = "TELECOM_ACCOUNT_TABLE")
public class Account {
	
	@Id //Primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int account_id;
	
	@JsonIgnore
    @OneToMany(mappedBy = "account")
    private Set<Plan> plans = new HashSet<>();
	
	@NotNull
	@Column
	private String log_in_email;
	
	public Account() {
		super();
	}
	

	public int getAccount_id() {
		return account_id;
	}

	public Set<Plan> getPlans() {
		return plans;
	}

	public void setPlans(Set<Plan> plans) {
		this.plans = plans;
	}

	public String getLog_in_email() {
		return log_in_email;
	}

	public void setLog_in_email(String log_in_email) {
		this.log_in_email = log_in_email;
	}
	
	public Set<Plan> getPlan(){
		return plans;
	}

}
