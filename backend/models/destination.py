#!/usr/bin/env python3
"""definition of the destination class"""
from base_model import Base, BaseModel
from sqlalchemy import Column, String


class Destination(BaseModel, Base):
    """definition of the destination class"""
    __tablename__ = 'destinations'
    destination = Column(String(132))
    description = Column(String(132))
    attractions = Column(String(132))
    weather_info = Column(String(132))

    def __init__(self):
        super().__init__()