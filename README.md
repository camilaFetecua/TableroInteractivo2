# TableroInteractivo2 

## Taller ARSW 2021-i / 29 Junio del 2021

  El objetivo de este taller es construir una aplicación interactiva en tiempo real usando una buena
  estrategia de diseño. Para esto vamos a construir una aplicación que permite dibujar de
  manera colaborativa en tiempo real.

# Prerrequisitos 
  + Git version 2.25.1
  + Apavhe Maven version 4.0.0
  + Java version 11.0.11
  
  Para verificar que esten instalados los programas puede usar los suguientes comandos
  
   + mvn --version
    
   + git --version
    
   + java --version
       
# Ejecucion del proyecto

  Para empezar debemos clonar el repositorio con el siguiente comando:

    git clone https://github.com/camilaFetecua/TableroInteractivo2.git
  
  Para ejecutar el proyecto debemos ejecutar el siguiente comando 
   
     mvn package
    
   Despues de ejecutar el anterior comando se debe ejecutar el siguiente comando para ejecutar el programa 
    
    java -cp "target/classes;target/dependency/*" edu.escuelaing.arsw.wbinteractiverealtimeline.WBAppController
    
         
# Diagrama de clases  

![Imagen](https://github.com/camilaFetecua/TableroInteractivo2/blob/master/Imagenes/DiagramadeClases.PNG)

  Para este proyecto utilizamos:
  + **React.Component:** Para dubujar el tablero.
  + **Editor:** Para el nombre del dibujante.
  + **Canvas:** Permite al usuario dibujar y verel dibujo de otro usuario.
  + **WSBBChannel:** Es el canal que realiza la comunicacion con el back y envia los dibujado por el 
  usuario para poder verlo en el otro tablero.
  + **WBAppController:** Es la clase que principal donde se corre la aplicacion y todas las demas dependencias.
  + **BBEndpoint:** Clase encargada de recibir los mensajes y enviarlos para que sean dibujados.
  + **BBConfiguration:** Clase que exporta datos. 
  
 # Pruebas 
 
 Para pruebas utilizamos el despliegue en Heroku ingresando al siguiente link 
    https://tablerointeractivo2.herokuapp.com/
  
 En la pagina principal encontramos el tablero en blanco como podemos observar en la siguiente imagen
 
 ![Imagen](https://github.com/camilaFetecua/TableroInteractivo2/blob/master/Imagenes/Prueba1.PNG)

Realizamos el primer dibujo en el tablero 
 
 ![Imagen](https://github.com/camilaFetecua/TableroInteractivo2/blob/master/Imagenes/Prueba2.PNG)
 

Despues abrimos la pagina en una pestaña incognita y realizamos un dibujo.Podemos observar que
en el tablero inicial se muestra el dubujo del otro usuario en un color diferente.

![Imagen](https://github.com/camilaFetecua/TableroInteractivo2/blob/master/Imagenes/Prueba3.PNG)

# Tecnologias Utilizadas

+ Heroku
+ Springboot
+ React
+ P5.js
+ Maven
+ Java

# Licencia

  Para consultar la Licencia del proyecto haga [click aqui](https://github.com/camilaFetecua/TableroInteractivo2/blob/master/LICENSE.md)
  
  
# Autor 
  **Maria Camila Fetecua Garcia** 
