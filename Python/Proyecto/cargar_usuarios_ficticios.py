import psycopg2

def cargar_datos():
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

        # Crear tabla oficios
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS oficios (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(50) NOT NULL UNIQUE
            );
        """)

        # Crear tabla usuarios
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(50) NOT NULL,
                apellido VARCHAR(50) NOT NULL,
                documento VARCHAR(20) NOT NULL UNIQUE,
                userName VARCHAR(30) NOT NULL UNIQUE,
                contrasena VARCHAR(100) NOT NULL,
                ofreceServicio BOOLEAN DEFAULT FALSE
            );
        """)

        # Lista de oficios
        oficios = [
            'Aire Acondicionado', 'Albañil', 'Autos', 'Belleza', 'Bienestar',
            'Carpintero', 'Cerrajero', 'Control de plagas', 'Decorador', 'Electricista',
            'Gasista', 'Herrero', 'Jardinero', 'Limpieza', 'Mascotas',
            'Mudancero', 'Piletas', 'Pintor', 'Plomero', 'Reformas',
            'Seguridad', 'Tapicero', 'Técnico'
        ]

        # Insertar oficios
        for oficio in oficios:
            cursor.execute("INSERT INTO oficios (nombre) VALUES (%s) ON CONFLICT (nombre) DO NOTHING;", (oficio,))

        # Insertar usuarios ficticios (2 por oficio = 46 usuarios)
        nombres = [
            "Juan", "María", "Luis", "Ana", "Carlos", "Laura", "Diego", "Sofía",
            "Pedro", "Martina", "Jorge", "Camila", "Ricardo", "Valentina", "Gustavo",
            "Florencia", "Emilio", "Lucía", "Nicolás", "Rocío", "Hugo", "Brenda",
            "Federico", "Carolina", "Esteban", "Daniela", "Matías", "Agustina", "Andrés",
            "Paula", "Leandro", "Milagros", "Rodrigo", "Julieta", "Ezequiel", "Josefina",
            "Iván", "Noelia", "Tomás", "Melina", "Bruno", "Natalia", "Franco", "Cintia",
            "Alan", "Micaela"
        ]
        apellidos = [
            "Pérez", "Gómez", "Rodríguez", "Martínez", "López", "Fernández", "García", "Ramírez",
            "Silva", "Torres", "Ruiz", "Sánchez", "Molina", "Vega", "Castro",
            "Ríos", "Navarro", "Paredes", "Domínguez", "Aguirre", "Peralta", "Ortiz",
            "Medina", "Sosa", "Acosta", "Vargas", "Carrizo", "Moreno", "Nieto",
            "Ojeda", "Benítez", "Ibarra", "Reyes", "Romero", "Luna", "Bravo",
            "Campos", "Varela", "Méndez", "Suárez", "Delgado", "Figueroa", "Quiroga", "Correa",
            "Ferrari", "Guzmán"
        ]

        for i in range(46):
            nombre = nombres[i]
            apellido = apellidos[i]
            documento = f"100000{i+1:02d}"
            username = (nombre[0] + apellido).lower()
            contrasena = "1234"
            cursor.execute("""
                INSERT INTO usuarios (nombre, apellido, documento, userName, contrasena, ofreceServicio)
                VALUES (%s, %s, %s, %s, %s, TRUE)
                ON CONFLICT (documento, userName) DO NOTHING;
            """, (nombre, apellido, documento, username, contrasena))

        # Guardar cambios
        conexion.commit()
        print("✅ Tablas creadas e información cargada correctamente.")

        # Cerrar conexión
        cursor.close()
        conexion.close()

    except Exception as e:
        print("❌ Error al cargar datos:", e)


cargar_datos()
