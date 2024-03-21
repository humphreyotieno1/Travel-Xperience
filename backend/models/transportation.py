#!/usr/bin/env python3
"""definition of class transport"""
from sqlalchemy import Column, String, DateTime, Integer
from base_model import BaseModel, Base


class Transportation(BaseModel, Base):
    """defines the transportions table"""
    __tablename__ = 'transportions'
    transporttion_mode = Column(String(132))
    departure_location = Column(String(132))
    arrival_date_time = Column(DateTime)
    cost = Column(Integer)

    def __init__(self):
        super().__init__()
        