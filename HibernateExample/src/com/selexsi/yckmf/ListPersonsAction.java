package com.selexsi.yckmf;

import org.apache.log4j.Logger;
import org.hibernate.Session;

import com.selexsi.yckmf.database.DatabaseAction;

public class ListPersonsAction extends DatabaseAction {

    private static final Logger logger = Logger
	    .getLogger(ListPersonsAction.class);

    public ListPersonsAction() {
	super();
    }

    @Override
    protected boolean actionImpl() {
	Long personId = new Long(0);
	try {
	    Session session = getDatabase().getCurrentSession();
	    while (true) {
		Person person = (Person) session.load(Person.class, ++personId);
		logger.info(String.format("person = [%d, %s, %d, %s, %s, %s]",
			person.getId(), person.getName(), person.getAge(),
			person.getGender(), (person.isAlive() ? "ALIVE"
				: "DEAD"), person.getAddress().getPostcode()));
	    }
	} catch (Exception e) {
	    logger.info(String.format("No more persons at %d", personId));
	}
	return true;
    }

}
