package com.selexsi.yckmf;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class TestAddress {

    private Address address = null;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
    }

    @AfterClass
    public static void tearDownAfterClass() throws Exception {
    }

    @Before
    public void setUp() throws Exception {
	address = new Address(2, "Falcon Way", "AL7 1TW");
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void testGetHouseNumber() {
	assertEquals(2, address.getHouseNumber());
    }

    @Test
    public void testSetHouseNumber() {
	address.setHouseNumber(10);
	assertEquals(10, address.getHouseNumber());
    }

}
