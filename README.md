# telematica1


¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?
Manejo de dispositivos de IoT a través de unos servicios web vía api rest, y su visualización en un aplicativo web.

¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?
el sistema debe registrar periódicamente datos enviados por sensores IoT en una base de datos vía api rest
el sistema debe permitir la visualización de los datos
¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?
la aplicación debe guardar los registros enviados en una base de datos no relacional para la persistencia de datos
se debe identificar a la persona que desea consultar los datos almacenados


¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?

4.1 EN EL BACKEND?
Mongose, express, nodejs, javascript

4.2 EN EL FRONTEND?
React

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?
Servicio de consulta, es un método get que se encarga de consultar en la base de datos local todos los datos existentes guardados de los sensores y retornarlos en un json
Servicio de guardado, es un método post que permite almacenar en la base de datos un nuevo registro de un sensor mediante la recepción de un json

