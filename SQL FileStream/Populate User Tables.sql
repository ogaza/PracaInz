USE PracaInz
GO

/*
INSERT INTO 
	[User]
VALUES 
	('admin', '')
 GO
*/

SELECT 
	*
FROM 
	[User]
GO

SELECT 
	*
FROM
	[UserProfile]
GO

/*
INSERT INTO 
	[UserProfile] (User_Id, Picture)
(
	select 
		1, [file_stream] 
	from 
		[Pictures] 
	where name = 'Koala.jpg'
)
GO
*/

/*
UPDATE 
	[UserProfile]
SET
	[Picture] = (SELECT [file_stream] FROM [Pictures] where name = 'Koala.jpg')
WHERE
	[User_Id] = 1
GO
*/

SELECT 
	Picture.PathName()
	,GET_FILESTREAM_TRANSACTION_CONTEXT()
	-- ,fName 
FROM 
	[UserProfile]
WHERE
	[User_Id] = 1