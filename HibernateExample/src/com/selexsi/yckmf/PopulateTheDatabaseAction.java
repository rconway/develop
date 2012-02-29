package com.selexsi.yckmf;

import org.hibernate.Session;

import com.selexsi.yckmf.database.DatabaseAction;

public class PopulateTheDatabaseAction extends DatabaseAction {

    /**
     * Constructor.
     */
    public PopulateTheDatabaseAction() {
	super();
    }

    /**
     * Puts some test data in the database.
     * @see com.selexsi.yckmf.database.DatabaseAction#actionImpl()
     */
    @Override
    protected boolean actionImpl() {
	Session session = getDatabase().getCurrentSession();

	// Addresses
	Address address1 = new Address(10, "Downing Street", "NW1");
	Address address2 = new Address(2, "Falcon Way, Shire Park", "AL7 1TW");
	session.saveOrUpdate(address1);
	session.saveOrUpdate(address2);

	// Persons - links to Addresses by foreign-key.
	session.saveOrUpdate(new Person("fred", 10, Person.Gender.MALE,
		address1, true));
	session.saveOrUpdate(new Person("bob", 20, Person.Gender.MALE,
		address2, false));
	session.saveOrUpdate(new Person("sue", 30, Person.Gender.FEMALE,
		address1, true));

	// Return true to commit.
	//return true;
	return new ListPersonsAction().action(getDatabase(), this);
	
	// Return false to rollback.
	//return false;
    }

}
