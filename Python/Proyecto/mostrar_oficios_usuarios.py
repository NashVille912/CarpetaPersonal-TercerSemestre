import psycopg2

def mostrar_usuarios_por_oficio():
    try:
        # Conexión a la base de datos
        conexion = psycopg2.connect(
            user = 'Aqui va el usuario de tu base de datos',
            password  = 'Aqui va la contraseña de tu base de datos',
            host= 'Aqui va el host que estableciste en tu base de datos',
            port = 'Aqui va el puerto que estableciste en tu base de datos',
            database = 'Aqui va el nombre de tu base de datos'
        )
        cursor = conexion.cursor()

        # Paso 1: Mostrar lista de oficios
        oficio_id = input("\n👉 Ingresá el ID del oficio para ver los usuarios que lo ofrecen: ")

        # Validar que el ID sea un número entero
        if not oficio_id.isdigit():
            print("❌ Error: El ID debe ser un número.")
            return

        oficio_id = int(oficio_id)

        # Paso 2: Mostrar usuarios que ofrecen ese oficio
        query = """
            SELECT u.nombre, u.apellido, u.userName
            FROM usuario_oficio uo
            JOIN usuarios u ON u.id = uo.usuario_id
            WHERE uo.oficio_id = %s;
        """
        cursor.execute(query, (oficio_id,))
        usuarios = cursor.fetchall()

        print("\n👷 Usuarios que ofrecen este servicio:")
        if usuarios:
            for u in usuarios:
                print(f"- {u[0]} {u[1]} (Usuario: {u[2]})")
        else:
            print("⚠️ No hay usuarios registrados para este oficio.")

        # Cerrar conexión
        cursor.close()
        conexion.close()

    except Exception as e:
        print("❌ Ocurrió un error:", e)

# Ejecutar la función
# mostrar_usuarios_por_oficio()
