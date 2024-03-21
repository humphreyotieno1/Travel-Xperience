#!/usr/bin/env python3
"""definitions of the preferences class"""
from sqlalchemy import Column, Integer, String
from base_model import BaseModel, Base


class Preference(BaseModel, Base):
    """definition of the preferences table"""
    __tablename__ = 'preferences'
    category = Column(String(300))
    level_of_interest = Column(Integer)

    def __init__(self):
        super().__init__()