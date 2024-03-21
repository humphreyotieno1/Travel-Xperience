#!/usr/bin/env python3
"""defines the storage engine of the database"""
from models.base_model import Base
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
import os


class X_storage:
    """defines the database storage unit"""
    __engine = None
    __session = None
    def __init__(self):
        """initialised method"""
        db_user = "X_dev"
        db_pwd = "X_pwd"
        db_host = "localhost"
        db_name = "X_db"

        self.__engine = create_engine(f'mysql+mysqldb://{db_user}:{db_pwd}@{db_host}/{db_name}')
        Session = sessionmaker(bind=self.__engine)
        self.__session = Session()

    def save(self):
        """saves all changes to the database"""
        self.__session.commit()

    def delete(self, obj=None):
        """deletes object from a database"""