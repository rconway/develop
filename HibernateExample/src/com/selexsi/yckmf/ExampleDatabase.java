package com.selexsi.yckmf;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

import com.selexsi.yckmf.database.Database;

public class ExampleDatabase extends Database {
    
    private static ExampleDatabase instance = null;
    
    private final SessionFactory sessionFactory;
    
    public static ExampleDatabase getInstance()
    {
	if (instance == null)
	{
	    instance = new ExampleDatabase();
	}
	return instance;
    }

    protected ExampleDatabase() {
	super();
	try {
	    sessionFactory = new AnnotationConfiguration().configure()
		    .buildSessionFactory();
	} catch (Throwable ex) {
	    // Log exception!
	    throw new ExceptionInInitializerError(ex);
	}
    }

    @Override
    public Session getCurrentSession() {
	return sessionFactory.getCurrentSession();
    }

}
