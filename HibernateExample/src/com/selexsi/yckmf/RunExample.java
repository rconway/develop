package com.selexsi.yckmf;

import org.apache.log4j.Logger;

public class RunExample {

    @SuppressWarnings("unused")
    private static Logger logger = Logger.getLogger(RunExample.class);

    /**
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
	System.out.println("starting example...");

	ExampleDatabase.getInstance();
	if (true) {
	    // return;
	}

	// Populate the database
	{
	    PopulateTheDatabaseAction dbAction = new PopulateTheDatabaseAction();
	    ExampleDatabase.getInstance().action(dbAction);
	}

	// Let's try an object lookup
	{
	    ListPersonsAction dbAction = new ListPersonsAction();
	    ExampleDatabase.getInstance().action(dbAction);
	}

	System.out.println("...example completed");
	System.exit(0);
    }

}
