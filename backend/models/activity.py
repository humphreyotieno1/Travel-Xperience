#!/usr/bin/env python3
"""definition of ativity class"""
from base_model import BaseModel, Base
from sqlalchemy import Column, String, Integer

class Activity(BaseModel, Base):
    """defines the activities table"""
    activity_name = Column(String(132))
    description = Column(String(300))
    location = Column(String(200))
    duration = Column(String(100))
    cost = Column(Integer)

    def __init__(self):
        super().__init__()