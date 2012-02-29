package com.selexsi.yckmf.database;

import org.apache.log4j.Logger;
import org.hibernate.Session;

public abstract class Database {

    private static final Logger logger = Logger.getLogger(Database.class);

    public abstract Session getCurrentSession();

    public boolean action(DatabaseAction databaseAction) {
	boolean status = false;

	// get the current session and begin the transaction.
	Session session = getCurrentSession();
	session.beginTransaction();

	// Invoke the database action.
	status = databaseAction.action(this);

	// The session should already be closed (via commit or rollback), but
	// include this as a back-stop.
	if (session.isOpen()) {
	    logger.warn("Unexpected open session after execution of action "
		    + databaseAction.getClass().getSimpleName());
	    session.close();
	}
	
	return status;
    }

}
