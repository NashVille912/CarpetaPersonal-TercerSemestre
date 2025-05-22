import psycopg2
import mostrar_oficios_usuarios 

# Configura tu conexión con los datos de tu base de datos
conexion = psycopg2.connect(
    user = 'Aqui va el usuario de tu base de datos',
    password  = 'Aqui va la contraseña de tu base de datos',
    host= 'Aqui va el host que estableciste en tu base de datos',
    port = 'Aqui va el puerto que estableciste en tu base de datos',
    database = 'Aqui va el nombre de tu base de datos'
)

def mostrar_menu():
    print("Bienvenido a la aplicación de servicios")
    print("1. Ver lista de oficios")
    print("2. Salir")

# Mostrar el menú de opciones
mostrar_menu()

# Esperar la entrada del usuario
opcion = input("Selecciona una opción: ")
# Validar la opción seleccionada
if opcion != '1':
    print("Opción no válida. Saliendo de la aplicación.")
    exit()
# Conectar a la base de datos

# Crear funcion para mostrar oficios
def mostrar_oficios():
    print("Lista de oficios disponibles:")
    # Crear un cursor para ejecutar consultas
    cursor = conexion.cursor()

    # Consulta para obtener todos los oficios
    cursor.execute("SELECT id, nombre FROM oficios ORDER BY nombre;")

    # Obtener todos los resultados
    oficios = cursor.fetchall()

    # Mostrar los resultados
    print("📋 Lista de oficios disponibles:")
    for oficio in oficios:
        print(f"\t{oficio[0]}. {oficio[1]}")

    # Cerrar cursor y conexión
    cursor.close()
    conexion.close()

# Llamar a la función para mostrar oficios
mostrar_oficios()

# Llamar a la función para mostrar usuarios por oficio
mostrar_oficios_usuarios.mostrar_usuarios_por_oficio()