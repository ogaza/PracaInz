using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.IO;

namespace API.Repositories
{
    public class PictureRepository
    {
        private readonly string _connectionString =
            ConfigurationManager.ConnectionStrings["PracaInzDb"].ConnectionString;

        private CommandType CommandType
        {
            get { return CommandType.Text; }
        }

        private static IEnumerable<IDataParameter> GetParameters(byte[] fileData, int userId)
        {
            yield return new SqlParameter
            {
                ParameterName = "@fileData",
                SqlDbType = SqlDbType.VarBinary,
                Value = fileData
                //Size = fileData.Length
            };

            yield return new SqlParameter
            {
                ParameterName = "@userId",
                SqlDbType = SqlDbType.Int,
                Value = userId
            };

            //return new Collection<SqlParameter>
            //{
            //    new SqlParameter
            //    {
            //        ParameterName = "@fileData",
            //        SqlDbType = SqlDbType.VarBinary,
            //        Value = fileData.ToArray(),
            //        Size = (int) fileData.Length
            //    },
            //    new SqlParameter
            //    {
            //        ParameterName = "@userId",
            //        SqlDbType = SqlDbType.Int,
            //        Value = userId
            //    }
            //};
        }

        public string InsertCommandText
        {
            get
            {
                return @"
                UPDATE 
	                [UserProfile]
                SET
	                [Picture] = @fileData
                WHERE
	                [User_Id] = @userId";
            }
        }

        public string SelectCommandText
        {
            get
            {
                return @"
                    SELECT 
	                    Picture.PathName()
	                    ,GET_FILESTREAM_TRANSACTION_CONTEXT()  
                    FROM 
	                    [UserProfile]
                    WHERE
	                    [User_Id] = @userId";
            }
        }

        public void Save(byte[] fileData, int userId)
        {
            var connection = new SqlConnection(_connectionString);

            IDbCommand command = connection.CreateCommand();

            command.CommandType = CommandType;

            command.CommandText = InsertCommandText;            

            var collection = GetParameters(fileData, userId);

            foreach (IDataParameter parameter in collection)
            {
                command.Parameters.Add(parameter);
            }

            try
            {
                connection.Open();

                command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                // throw;
            }
            finally
            {
                connection.Close();
            }
        }

        public byte[] Get(int userId)
        {
            byte[] result = { };

            var connection = new SqlConnection(_connectionString);

            IDbCommand command = connection.CreateCommand();

            command.CommandType = CommandType;

            command.CommandText = SelectCommandText;

            command.Parameters.Add(new SqlParameter
            {
                ParameterName = "@userId",
                SqlDbType = SqlDbType.Int,
                Value = userId
            });

            //var collection = GetParameters(null, userId);

            //foreach (IDataParameter parameter in collection)
            //{
            //    command.Parameters.Add(parameter);
            //}

            try
            {
                connection.Open();

                //using (SqlTransaction transaction = connection.BeginTransaction())
                //{
                SqlTransaction transaction = connection.BeginTransaction();

                command.Transaction = transaction;

                using (IDataReader reader = command.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        string filePath = reader[0].ToString();

                        var objContext = (byte[]) reader[1];

                        using (var sqlFileStream = new SqlFileStream(filePath, objContext, FileAccess.Read))
                        {
                            result = new byte[(int) sqlFileStream.Length];

                            sqlFileStream.Read(result, 0, result.Length);
                        }
                    }
                }

                transaction.Commit();
            }
            catch (Exception)
            {
                // throw;
            }
            finally
            {
                connection.Close();
            }

            return result;
        }
    }
}