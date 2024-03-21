#!/usr/bin/env python3
"""definition of the review class"""
from sqlalchemy import Column, Integer, String, DateTime
from base_model import BaseModel, Base


class Review(BaseModel, Base):
    """definition of the table reviews"""
    __tablename__ = 'reviews'
    rating = Column(Integer)
    review = Column(String(400))
    date_time = Column(DateTime)

    def __init__(self):
        super().__init__()