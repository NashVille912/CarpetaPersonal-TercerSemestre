import psycopg2

conexion = psycopg2.connect(
    user = 'postgres',
    password  = 'admin',
    host= '127.0.0.1',
    port = '5432',
    database = 'test_db'

)

cursor =conexion.cursor()
sentencia = 'SELECT * FROM persona'
cursor.execute(sentencia)
registros = cursor.fetchall()

print(registros)

cursor.close()
conexion.close()