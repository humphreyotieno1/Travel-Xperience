#!/usr/bin/env python3
"""defines the base class for all the ather models"""
from sqlalchemy import Column, Interger, String, DateTime
import uuid
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class BaseModel(Base):
    """defines the base class"""
    __abstract__ = True
    id = Column(String(143), primary_key=True, default=uuid.uuid1())
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    updated_at = Column(DateTime, default=datetime.now(), nullable=False)
