#!/usr/bin/env python3
"""definition of payment class"""
from sqlalchemy import Column, Integer, DateTime, String
from base_model import BaseModel, Base


class Payments(BaseModel, Base):
    """defines the payments table"""
    __tablename__ = 'payments'
    payment_date_time = Column(DateTime)
    amount = Column(Integer)
    payment_method = Column(Integer)
    status = Column(String(132))

    def __init__(self):
        super().__init__()