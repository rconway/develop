package com.selexsi.yckmf;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Address implements Serializable {

    private static final long serialVersionUID = 7712954231708229788L;

    private long id;
    private int houseNumber;
    private String streetName;
    private String postcode;

    public Address(int houseNumber, String streetName, String postcode) {
	this.houseNumber = houseNumber;
	this.streetName = streetName;
	this.postcode = postcode;
    }

    public Address() {
    }

    @Id
    @GeneratedValue
    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    public int getHouseNumber() {
	return houseNumber;
    }

    public void setHouseNumber(int houseNumber) {
	this.houseNumber = houseNumber;
    }

    @Column(length = 50)
    public String getStreetName() {
	return streetName;
    }

    public void setStreetName(String streetName) {
	this.streetName = streetName;
    }

    @Column(length = 9)
    public String getPostcode() {
	return postcode;
    }

    public void setPostcode(String postcode) {
	this.postcode = postcode;
    }

}
