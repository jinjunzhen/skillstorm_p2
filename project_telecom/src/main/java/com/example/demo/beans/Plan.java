package com.example.demo.beans;

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
	private int device_1_num;
	@Column
	private int device_2_num;
	
	@Column
	private int device_3_num;
	
	@Column
	private int device_4_num;
	
	@Column
	private float total_cost;
	
	
	// bi-directional association : plan assigned to 1 account
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ACCOUNT_ID") // name the foreign key
	private Account account;
	
	
	public Plan() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Plan(String plan_type, int device_1_num, Account account) {
		super();
		this.plan_type = plan_type;
		this.device_1_num = device_1_num;
		this.account = account;
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


	public int getDevice_1_num() {
		return device_1_num;
	}


	public void setDevice_1_num(int device_1_num) {
		this.device_1_num = device_1_num;
	}


	public int getDevice_2_num() {
		return device_2_num;
	}


	public void setDevice_2_num(int device_2_num) {
		this.device_2_num = device_2_num;
	}


	public int getDevice_3_num() {
		return device_3_num;
	}


	public void setDevice_3_num(int device_3_num) {
		this.device_3_num = device_3_num;
	}


	public int getDevice_4_num() {
		return device_4_num;
	}


	public void setDevice_4_num(int device_4_num) {
		this.device_4_num = device_4_num;
	}


	public float getTotal_cost() {
		return total_cost;
	}


	public void setTotal_cost(float total_cost) {
		this.total_cost = total_cost;
	}


	public Account getAccount() {
		return account;
	}


	public void setAccount(Account account) {
		this.account = account;
	}


	@Override
	public String toString() {
		return "Plan [plan_id=" + plan_id  +  ", plan_type=" + plan_type + ", device_1_num="
				+ device_1_num + ", device_2_num=" + device_2_num + ", device_3_num=" + device_3_num + ", device_4_num="
				+ device_4_num + ", total_cost=" + total_cost + "]";
	}
}
