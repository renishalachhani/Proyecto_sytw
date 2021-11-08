# node-mongo-registration-login-api

Api rest para el uso de EventsFinder.

## Pruebas

Para lanzar el servicio npm start en local, teniendo en cuenta la necesidad de tener en segundo plano mongod service.

## Despliegue

El despliegue del Backend se encuentra en los servidores heroku en la dirección:
https://eventfinder-sytw.herokuapp.com/

## Events

Las rutas para acceder al endpoint de Event son las siguientes:

- GET: /events - Accede a todos los eventos en un array
- GET: /events/:id -Accede a los datos de un evento en concreto
- GET: /events/:id/join -Añade el usuario a la lista de asistentes al evento
- DELETE: /events/:id/unjoin -Elimina a un usuario de la lista de asistentes
- POST: /events/new -Crea un elemento, para ello se le tiene que pasar en el cuerpo un objeto:

  { "eventName":"",
  "beginDate":"Formato Date",
  "endDate":"Formato Date", "description":"", "imageUrl":"",
  }
  //Los campos son obligatorios menos el de imagen y el de fecha de finalización. En el caso de que se omita la fecha de fin se debería sobreentender que es todo el día.

* UPDATE: /events/:id -Actualiza el evento, lo actualiza con los campos anteriores y solo el dueño del evento
* DELETE: /events/:id -Elimina el evento, solo el creador
