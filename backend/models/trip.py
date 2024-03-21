#!/usr/bin/env python3
"""defines the trip table"""
from sqlalchemy import Column, String, DateTime
from base_model import Base, BaseModel

class Trip(BaseModel, Base):
    """definition of table trips"""
    __tablename__ = 'trips'
    itinerary = Column(String(200))
    start_date = Column(DateTime)
    end_date = Column(DateTime)

    def __init__(self):
        super().__init__()
