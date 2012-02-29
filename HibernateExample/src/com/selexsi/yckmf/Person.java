package com.selexsi.yckmf;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Check;

@Entity
@Table
@Check(constraints = "GENDER IN ('MALE','FEMALE')")
public class Person implements Serializable {

    private static final long serialVersionUID = -2544038173499074665L;

    public enum Gender {
	MALE, FEMALE
    };

    private long id;
    private String name;
    private int age;
    private Gender gender;
    private Address address;
    private boolean alive;

    // Main constructor
    public Person(String name, int age, Gender gender, Address address,
	    boolean alive) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.address = address;
	this.alive = alive;
    }

    // Need default constructor for Serialized objects
    public Person() {
    }

    // The @Id annotation establishes the Primary Key
    // Also, by putting the @Id annotation on the getter (rather than the field
    // definition) this tells Hibernate to perform the
    // object-to-database-mapping from the getters rather than the fields.
    @Id
    @GeneratedValue
    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    @Column(length = 50)
    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public int getAge() {
	return age;
    }

    public void setAge(int age) {
	this.age = age;
    }

    // Specifying the EnumType as STRING rather than ORDINAL for storage in DB
    @Enumerated(EnumType.STRING)
    @Column(length = 6)
    public Gender getGender() {
	return gender;
    }

    public void setGender(Gender gender) {
	this.gender = gender;
    }

    // Establish a Foreign Key relationship to the Address table
    @ManyToOne
    public Address getAddress() {
	return address;
    }

    public void setAddress(Address address) {
	this.address = address;
    }

    public boolean isAlive() {
	return alive;
    }

    public void setAlive(boolean alive) {
	this.alive = alive;
    }

}
