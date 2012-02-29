package com.selexsi.yckmf.database;

import org.apache.log4j.Logger;

public abstract class DatabaseAction {

    private static final Logger logger = Logger.getLogger(DatabaseAction.class);

    private Database database = null;
    private DatabaseAction parent = null;

    /**
     * Invoke an action at the top of the tree.
     * @param database
     * @return True indicates has been committed, False indicates has been rolled-back.
     */
    public boolean action(Database database) {
	boolean status = false;
	this.database = database;
	this.parent = null;
	status = action(this.database, this.parent);
	return status;
    }

    /**
     * Allows nesting of one action inside another.
     * @param database
     * @param parent
     * @return True indicates has been committed, False indicates has been rolled-back.
     */
    public boolean action(Database database, DatabaseAction parent) {
	boolean status = false;
	this.database = database;
	this.parent = parent;

	// Sanity check
	if (parent != null) {
	    if (this.database != this.parent.getDatabase()) {
		logger.error("Mis-match in database objects. Aborting action.");
		return false;
	    }
	}

	// Execute the underlying action.
	status = actionImpl();

	// If we are top of the tree, i.e. we have no parent, then we need to
	// commit or rollback.
	if (parent == null) {
	    if (status) {
		logger.info("Committing the transaction for "
			+ this.getClass().getSimpleName());
		database.getCurrentSession().getTransaction().commit();
	    } else {
		logger.info("Rolling-back the transaction for "
			+ this.getClass().getSimpleName());
		database.getCurrentSession().getTransaction().rollback();
	    }
	}
	return status;
    }

    /**
     * The guts of the action implementation.
     * @return True indicates commit, False indicates rollback.
     */
    protected abstract boolean actionImpl();

    /**
     * Accessor.
     * @return
     */
    protected Database getDatabase() {
	return database;
    }

    /**
     * Accessor.
     * @return
     */
    protected DatabaseAction getParent() {
	return parent;
    }

}
