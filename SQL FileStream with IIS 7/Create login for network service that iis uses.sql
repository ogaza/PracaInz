USE [master]
GO
CREATE LOGIN [ZARZĄDZANIE NT\USŁUGA SIECIOWA] FROM WINDOWS WITH DEFAULT_DATABASE=[master]
GO

-- sp_grantlogin 'ZARZĄDZANIE NT\USŁUGA SIECIOWA'
