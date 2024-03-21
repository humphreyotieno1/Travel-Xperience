#!/usr/bin/env python3
"""defines the accomodation table"""
from sqlalchemy import Column, String
from base_model import Base, BaseModel


class Accomodation(BaseModel, Base):
    """definition of the accomodation table"""
    accomodation_name = Column(String(123))
    location = Column(String(200))

    def __init__(self):
        super().__init__()