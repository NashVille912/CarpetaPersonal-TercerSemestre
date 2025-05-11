#Manejo de Excepciones

from NumerosIgualesExcepciones import NumerosIgualesExcepcion

resultado = None

# Intentamos ejecutar el bloque de código
try:
    a = int(input('Introduce un número: '))
    b = int(input('Introduce otro número: '))
    if a == b:
        raise NumerosIgualesExcepcion('Los números son iguales')
    resultado = a/b
except TypeError as e: # Capturamos el error y lo guardamos en la variable e
    # Se ejecuta si hay un error
    print(f'TypeError - Se ha encontrado un Error: {type(e)}')
except ZeroDivisionError as e: 
    print(f'ZeroDivisionError - Se ha encontrado un Error: {type(e)}')
except Exception as e: 
    print(f'Exception - Se ha encontrado un Error: {type(e)}')
else: 
    print('No se arrojo ninguna excepción')
finally:
    print('Ejecutando el bloque finally')

print(f'El resultado es: {resultado}')
# Se ejecuta siempre, haya o no error
print('Seguimos...')