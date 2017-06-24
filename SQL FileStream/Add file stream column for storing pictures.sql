use PracaInz;
GO

ALTER TABLE UserProfile

-- table with FILESTREAM Column must have 
-- a column of type UNIQUEIDENTIFIER as well
ADD UI UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL UNIQUE DEFAULT newid()
GO

ALTER TABLE UserProfile

ADD Picture varbinary(max) FILESTREAM NULL

GO