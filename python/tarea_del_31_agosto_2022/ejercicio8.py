# Ejercicio 8:
# Escribir un programa que muestre en pantalla la suma de todos los elementos de una lista que sean pares.
# Ejemplo: lista = [1, 2, 3, 4, 5] = 6

lista = [11, 22, 33, 44, 55]

suma = 0

for a in lista:
    if a % 2 == 0:
        suma = suma + a

print(suma)