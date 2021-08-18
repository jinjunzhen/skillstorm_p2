package com.example.demo.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
//JPA annotations
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity // this is an object to be managed by Hibernate
@Table(name = "TELECOM_PLAN_TABLE")
public class Plan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int plan_id;
	
	@Column
	private String plan_type;
	
	@Column
	private long phone_number;
	
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "acc_id", referencedColumnName = "account_id")
    private Account account;
	
	public Plan() {
		super();
	}

	public int getPlan_id() {
		return plan_id;
	}

	public void setPlan_id(int plan_id) {
		this.plan_id = plan_id;
	}

	public String getPlan_type() {
		return plan_type;
	}

	public void setPlan_type(String plan_type) {
		this.plan_type = plan_type;
	}

	public Account getAccount() {
		return account;
	}

	public long getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(long phone_number) {
		this.phone_number = phone_number;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public void assignPlan(Account a) {
		this.account = a;
	}
	
}
