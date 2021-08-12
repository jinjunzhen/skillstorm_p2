package com.example.demo.beans;

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
	
	@Column
	@NotBlank
	private String log_in_email;
	
	@Column
	@NotBlank
	private String pass_word;
	
	@Column
	@NotBlank
	private String first_name;
	
	@Column
	@NotBlank
	private String last_name;
	
	@Column
	private int plan_1;
	
	@Column
	private int plan_2;
	
	@Column
	private int plan_3;
	
	@Column
	private int plan_4;
	
	@OneToMany(mappedBy = "account")
	private Set<Plan> plans;

	public Account() {
		super();
	}

	public int getAccount_id() {
		return account_id;
	}

	public void setAccount_id(int account_id) {
		this.account_id = account_id;
	}

	public String getLog_in_email() {
		return log_in_email;
	}

	public void setLog_in_email(String log_in_email) {
		this.log_in_email = log_in_email;
	}

	public String getPass_word() {
		return pass_word;
	}

	public void setPass_word(String pass_word) {
		this.pass_word = pass_word;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public int getPlan_1() {
		return plan_1;
	}

	public void setPlan_1(int plan_1) {
		this.plan_1 = plan_1;
	}

	public int getPlan_2() {
		return plan_2;
	}

	public void setPlan_2(int plan_2) {
		this.plan_2 = plan_2;
	}

	public int getPlan_3() {
		return plan_3;
	}

	public void setPlan_3(int plan_3) {
		this.plan_3 = plan_3;
	}

	public int getPlan_4() {
		return plan_4;
	}

	public void setPlan_4(int plan_4) {
		this.plan_4 = plan_4;
	}

	@Override
	public String toString() {
		return "Account [account_id=" + account_id + ", log_in_email=" + log_in_email + ", pass_word=" + pass_word
				+ ", first_name=" + first_name + ", last_name=" + last_name + ", plan_1=" + plan_1 + ", plan_2="
				+ plan_2 + ", plan_3=" + plan_3 + ", plan_4=" + plan_4 + "]";
	}
	

	
	

	
	
	



}
