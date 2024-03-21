#!/usr/bin/env python3
"""defines the user class"""
from base_model import Base, BaseModel
from sqlalchemy import Column, String, Integer, BINARY
import hashlib


class User(BaseModel, Base):
    """define the use table"""
    __tablename__ = 'users'
    username = Column(String(100), nullable=False)
    email = Column(String(143), nullable=False)
    _password = Column(String(400), nullable=False)
    profile_picture = Column(BINARY)

    def __init__(self):
        super().__init__()
        """initialisation of the user"""
