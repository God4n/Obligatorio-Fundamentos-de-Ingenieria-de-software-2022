# Informe académico entrega 2 (md)

Fecha de entrega: 28-nov-2022

Link al repositorio de GitHub: [https://github.com/ORTFIS2022/obligatorio-goday-fernandez-morandi.git](https://github.com/ORTFIS2022/obligatorio-goday-fernandez-morandi.git)

## **Construcción**

Implementación de funciones principales (sin la necesidad de persistencia de datos)

La segunda entrega de este trabajo consta de una implementación parcial del proyecto. Se considerarán algunos de los casos de usos especificados anteriormente y se codificaran para su funcionamiento en la aplicación. 

Los casos de uso en cuestión serán el UC#3, que presenta la posibilidad de crear grupos de usuarios para competir por pencas, y el UC#4, que consta de poder ingresar la predicción del resultado de un partido dado.

Se adjuntan a continuación los casos de uso en cuestión con mayor detalle:

**UC #3**

Título: Crear un grupo

Requerimientos: RF12

Actor: Usuario

Precondición: -

Curso:

Poscondición: Se muestra el grupo en la lista de grupos. Además, se muestra entre los grupos a los que pertenece el usuario.

Cursos alternativos: 

5.1: En caso de que el nombre del grupo ya existe, le pide al usuario ingresar un nombre distinto.

<img src="../docs/bocetosiu/Prototipo_Grupos.png" width="300"> <img src="../docs/bocetosiu/Prototipo_CrearGrupo.png" width="300"><br>

**UC #4**

Título: Ingresar una predicción

Requerimientos: RF3

Actor: Usuario

Precondición: Debe existir algún partido pendiente

Curso:

Poscondición: La predicción queda registrada en el sistema y se muestra para el usuario que la hizo.

Cursos alternativos:

3.1: Si no hay partidos por jugar, no puede predecir ninguno. Fin del caso de uso.

5.1: Si el resultado no es válido (tiene valores negativos o letras), se pide reingresar.

<img src="../docs/bocetosiu/Prototipo_PartidosParaPredecir.png" width="300"> <img src="../docs/bocetosiu/Prototipo_HacerPrediccion.png" width="300"><br>

Configuración de plataforma tecnológica para desarrollo y producción

La tecnología utilizada para programar la penca será Node.js. Se trata de un entorno para el servidor en tiempo de ejeccución. Se usará HTML, con CSS inclinado al diseño y JavaScript para programar el back-end.

Documentación del uso de librerías externas (package.json)

Como se explicará más adelante, se trabajará con material design web components. Cada componente constituye su propia librería, por lo que es conveniente detallar los componentes usados en esta sección:

- Tab bar (para el menú inferior)
- Cards (para partidos y noticias)
- Data tables (para grupos)
- Banners (para header)
- Buttons

## **Interfaz de usuario**

Interfaz de usuario web / mobile (responsive)

Es necesario que la pagina web tenga una interfaz que se adapte según la pantalla en la que se esté mostrando. Al usar NodeJS, el proyecto ya de por si se adapta a distintos tamaños de display, por lo que no deberemos invertir mayor esfuerzo en eso. Adicionalmente, utilizar componentes de material design hace que esto sea posible, ya que los componentes también son responsivos.

Página única con navegación entre secciones

Para facilitar la navegación y dejar mejor organizado el código, la web deberá de consistir de solo una página. Se dividirá todos los elementos de la aplicación en secciones y se mostrarán en pantalla únicamente los que formen parte de la sección seleccionada. El resto de componentes permanecerán ocultos. A través de un tab bar ubicado en la zona inferior de la pantalla podemos cambiar de una sección a otra. Esto se consigue ocultando todos los elementos de la sección para poder mostrar los de la seleccionada. De esta manera logramos navegar entre distintas áreas de la aplicación, cada una con sus propios elementos y funcionalidades, todo desde una única página.

Implementación: Material Design Web Components

Como ya se mencionó anteriormente, se utilizaran material design web components de Google para formar la aplicación. Se tratan de librerías para web que brindan elementos y componentes para la interfaz desarrollados por ingenieros y diseñadores de Google. De esta manera, nos garantizamos seguir estándares visuales (ya que los usuarios tienden a estar acostumbrados a usarlos). 

Estos componentes también son altamente personalizables, por lo que podemos modificarlos tanto como sea necesario para conseguir que se adecuen a nuestras necesidades. Podemos cambiar tamaño, color, imágenes e iconos, funcionalidad, posición, etc. haciendo que puedan utilizarse para solventar virtualmente cualquiera de nuestras necesidades de manera sencilla, ya que su implementación es sencilla (solo hay que seguir los pasos detallados en la pagina de material design para cada componente que queremos usar).

Aplicar un sistema de diseño y principios de usabilidad

Para el diseño de esta aplicación, se tomó como referencia otras disponibles que cumplen funciones similares, tales como OneFootball o ForzaFootball. Se tomaron sus interfaces como referencia, asegurándonos de esta manera de que el resultado final tenga una interfaz estética, fácil de usar y comprensible para los usuarios, ya que el público objetivo está acostumbrado a su estructura. Adicionalmente, usar Material Design Web Components nos permite formar la interfaz con elementos ideados por Google, por lo que el usuario estará acostumbrados a ellos y conocerá su funcionamiento, siendo cómodo su uso.

En cuanto respecta a la usabilidad y accesibilidad, se buscó cumplir las heurísticas de Nielsen:

- Visibilidad del estatus del sistema: Todas las acciones generan una reacción, por lo que es fácil encontrar botones, tabs, etc., así como saber cuando ocurre un cambio (se guarda predicción, por ejemplo).
- Vínculo entre el sistema y el mundo real: Los elementos del sistema se presentan de manera tal que el usuario promedio pueda entenderlo. No se usan notaciones ni términos complejos, específicos del entorno, se usan palabras e ideas que el usuario conoce y entiende.
- Libertad y control del usuario.
- Consistencia y estándares: como ya se mencionó, la IU está diseñada de manera que el usuario conozca todos los elementos y sepa interactuar con ellos.
- Prevención de errores: las acciones que llevan a problemas en el sistema (poner que un equipo va a meter una cantidad negativa de goles, por ejemplo) se evitan a través de alertas.
- Reconocimiento en vez de memorización: se usan iconos y botones que el usuario puede relacionar sencillamente con su función.
- Flexibilidad y eficiencia de uso: el sistema puede ser usado por gente experimentada en estas aplicaciones, así como novatos en las pencas. Es flexible y se adapta a todos los usuarios.
- Diseño minimalista.
- Ayuda al usuario a reconocer, diagnosticar y recuperarse de errores: se alertan los posibles errores y se puede regresar a pasos anteriores.
- Ayuda y documentación: existen informes con información del funcionamiento del sistema para guiar al usuario.

Cumplimiento de estándar de accesibilidad WCAG

Nuestra intención es hacer que la mayor cantidad de personas puedan utilizar nuestra aplicación, por esta razón no solo hicimos que la aplicación fuera adaptable a diferentes dispositivos, sino que también buscamos implementar reglas WCAG para permitirnos llegar a más usuarios.

Web Content Accessibility Guidelines (WCAG), son pautas que indican cómo hacer el contenido de la web accesible para personas con discapacidad.

Reglas con las que cumplimos y buscamos cumplir para dar mayor accesibilidad:

- Alternativas a texto
    - El sistema busca ser una aplicación intuitiva utilizando mayormente imágenes, sobre todo en las funciones principales.
- Distinguible
    - El sistema posee colores muy diferentes que permiten a casi cualquier usuario (hasta aquellos con visión reducida) diferenciar los componentes.
    - Se espera implementar la posibilidad de cambiar el tamaño del texto para versiones futuras.
- Accesible con diferentes interfaces
    - Queremos que el sistema sea completamente funcional ya sea solo con teclado o solo con un mouse. También (ya implementado) el utilizarla por medio del touch.
- Legible
    - Cuando el sistema usa texto, a excepción de las noticias, el texto mostrado en pantalla es simple y descriptivo.
    - Existirá la posibilidad de cambiar el idioma.

Realizando un análisis con la herramienta “WAVE” (extensión del navegador), esta retorna que la aplicación posee muchos errores de contraste y de texto alternativo en el caso de las imágenes. Si bien en algunos casos el contraste puede ser poco visible para algunas personas, en otros casos la extensión no tiene un correcto funcionamiento. Por otro lado, los errores de falta de texto alternativo, en este caso las imágenes ya poseen texto o son noticias, las cuales tocando la imagen abrirá un pop up con la información de esta.

<table>

<tr>

<td><img src="/src/fotos_informe/wcag1.png" width="300"><td>

<td><img src="/src/fotos_informe/wcag2.png" width="300"><td>

</tr>

<tr>

<td><img src="/src/fotos_informe/wcag3.png" width="300"><td>

<td><img src="/src/fotos_informe/wcag4.png" width="300"><td>

</tr>

</table>

Seguir especificación de estilo

En cuanto al estilo, intentamos establecer un modelo que se mantenga constante a través de todas las pestañas y funciones de la aplicación. De esta manera, usamos la tipografía Roboto de Google como fuente para todos los textos de nuestro proyecto. Además, usamos como color principal el verde (específicamente el identificado por el hexadecimal #1b5e20), tomando el celeste y otros tonos de verde como colores secundarios.

## **Codificación**

IDE Visual Studio Code: configuración común del equipo

El IDE utilizado durante todo el proyecto será Visual Studio Code de Microsoft. No se realizaron grandes cambios de configuración para la realización del trabajo. No obstante, cabe destacar el uso de LiveShare, una extensión muy útil que fue muy relevante a lo largo de todo el proceso de desarrollo. Esta nos permite trabajar todos sobre el mismo código al mismo tiempo, conectándonos con un link al repositorio local de uno de los miembros

Estándares de codificación Google (HTML, CSS, JavaScript)

Buscamos desarrollar un código claro, prolijo y comprensible. Para esto seguiremos los estándares de codificación de Google, ya que son de los más aceptados y populares. Usaremos esLint (se explica a continuación) para poder verificar que nuestros códigos cumplen el estándar, y arreglarlo de manera automática en caso de que no sea así. Esta herramienta también nos permite establecer reglas personalizadas que nosotros consideramos convenientes.

Buenas prácticas de OOP: separación de lógica e interfaz

Buscando prolijidad y claridad, se separa la lógica de la interfaz. De esta manera, todo el código relacionado con la interfaz de usuario se colocará en un directorio separado. Así mismo, las clases están separadas de el código que las relaciona con la interfaz. Por ejemplo, la clase partido no se encuentra junto con el código que crea una carta en la pantalla de inicio para mostrar en ella los datos del partido.

Análisis estático de código: mostrar reducción de problemas

El análisis estático de código se trata en realizar comprobaciones de manera automática sobre el código fuente para encontrar errores e incongruencias. A través de él, podemos hallar problemas en el código y resaltarlos, facilitando encontrarlos y, posteriormente, arreglarlos.

Para esto, usaremos esLint, herramienta de linting que además de resaltar los problemas, nos permite solucionarlos automáticamente. Además, nos permite personalizar todo, seleccionando los estándares que buscamos seguir, las reglas adicionales que implementamos nosotros, entre otros.

Para instalarlo corremos npm install eslint. Para inicializarlo, desde nuestro directorio de NodeJS, corremos `npx eslint --init`. Ahora seleccionamos todos los estándares que queremos para nuestro proyecto. Finalmente, para analizar un archivo corremos `npx eslint <DireccionDelArchivo>`. 

En muchos casos, los errores pueden solucionarse automáticamente. Para esto debemos usar `npx eslint <DireccionDelArchivo> --fix`.

## **Test unitario**

Test unitarios en Jest
En la tecnología, testear el código significa verificar que el mismo cumple con las expectativas. Es decir, por ejemplo, que habiendo creado una función A, la misma de la salida esperada con una entrada especifica.

Para verificar la funcionalidad del código de la pagina web hicimos uso de Jest, una librería de JavaScript que tiene como objetivo crear, correr y estructurar tests. Jest es uno de los programas de testeo mas populares actualmente y tiene uso en proyectos de web.

Para utilizar Jest es necesario instalarlo, para ello hay que correr `npm install --save-dev jest`. 

El código que debíamos de testear, son las clases del dominio (nombradas ejemplo.mjs). Para ello se debe de crear un archivo ejemplo.test.js de cada una de ellas con el objetivo de cubrir en el testeo todas las funciones y el constructor de las clases. 

Finalmente, luego de poner todas las expectativas de las salidas de nuestro código (a través de matchers) según la entrada, para correr el test hay que escribir el siguiente comando en la terminal `npm run test`, y los resultados aparecerán en la terminal misma.

Jest pondrá en rojo las pruebas que no han cumplido con las expectativas y en verde las pruebas correctas. También nos dirá si nos faltó cubrir alguna linea en alguna clase. Cuando todas las pruebas estén correctas y todas las lineas estén testeadas, se podría decir que el testeo finalizó.

Con respecto a las pruebas que realizamos, cada clase de nuestro dominio cuenta con un archivo .test que cubren todas las lineas de las mismas. El archivo .test con mas pruebas es el sistema.test.js ya que la clase sistema cuenta con muchas funciones.  

Foto de sistema.test.js:

<img src="/src/fotos_informe/test_sistema.png" width="300"> <br>

Foto de sistema.mjs:

<img src="/src/fotos_informe/code_sistema.png" width="300"> <br>

Lo primero es importar las demás clases, ya que serán necesarias para el uso de las funciones de la clase sistema. Se crea un objeto de cada clase y se comienza a probar. Se comienza probando las funciones get y agregar de equipo y grupos. Se prueba tanto que corran correctamente agregando un objeto que no exista y obteniendo un objeto que ya exista, como que den error cuando se le pasa un resultado incorrecto, tal como agregar un objeto ya existente y tratar de obtener uno que no exista.

<img src="/src/fotos_informe/test_sistema2.png" width="300"> <br>

Se prueban las funciones restantes y posibles resultados. Get y agregar de partido y equipo, y por último la función partido por participantes. La cual retorna un partido según sus participantes, por lo cual se trata de obtener un partido agregado anteriormente al sistema esperando un resultado correcto, y se trata de obtener un partido que no esta agregado al sistema, el cual debería de dar error.

Esto mismo se hace con cada una de las clases, además de probar el correcto funcionamiento del constructor.(Ejemplo de prueba de constructor con grupo.test.js)

<img src="/src/fotos_informe/test_grupo.png" width="300"> <br>

100% cobertura en clases de dominio:

<img src="/src/fotos_informe/clases.png" width="300"> <img src="/src/fotos_informe/tests.png" width="300"> <br>

## **Test de sistema**

Realizar test de sistema en un entorno separado del desarrollo

La segunda parte de este trabajo consta en tomar el proyecto de otro grupo de la clase y realizar el testing de su sistema. Para probar la aplicación, no tendremos contacto con el código, si no que realizaremos todo el proceso de pruebas utilizando la técnica de testing exploratorio. Sin tener conocimiento de como se programó la aplicación, nosotros probaremos sus funcionalidades para encontrar defectos y errores. 

Para hacer esto, realizaremos sesiones de aproximadamente media hora, cada una con una idea principal de que es lo que queremos probar, llamada misión. Se tomarán notas de todo lo relevante surgido en la sesión, sean estas relacionadas directamente a la misión o no. Luego, estas notas son redactadas y reportadas.

Generar casos de prueba aplicando técnica partición equivalente

Para probar el sistema con criterio, dividimos todos los valores de entrada a clases de equivalencia. En otras palabras, separamos los valores que podemos ingresar en grupos según a como debería reaccionar el sistema. Por ejemplo, tomamos los valores negativos como inválidos y los naturales positivos como válidos. Posteriormente, probamos valores pertenecientes a cada clase, verificando que el sistema se comporta como debería.

Detallar sesiones de prueba exploratoria

**Sesión #1:**

Misión: Entrar en contacto con la app y probar sistema de predicciones.

Entorno: Windows 11 y Google Chrome 107.0.5304.107

Duración: Inicio: 25/11/2022 14:37

           Final: 25/11/2022 15:09

Notas:

- Al presionar el botón de agregar predicción sin insertar resultados, imprime “ingrese resultados en los casilleros”, todo en minúscula y en una alerta muy pequeña. Sería mejor usar una alerta más visible y comenzar la oración con mayúscula para cuidar la prolijidad.
- Al introducir valores no válidos (negativos o mayores a 20) muestra una alerta que lee “ingrese un valor válido”. En esta alerta aplica lo discutido en el punto anterior, pero también se considera que es muy vaga la explicación que da. El usuario no sabe si el valor es inválido porque es muy alto, muy bajo, porque hizo algo mal, entre otras circunstancias. De hecho, en ningún lugar se especifica cual es el rango de valores válidos.
- El campo de texto para anotar los goles no tiene limites, por lo que con las flechas podemos marcar valores fuera del rango permitido. Esto complica aún más el punto anterior, ya que el propio sistema nos facilita ingresar valores que luego no procesa.
- La casilla de resultados es de un color muy similar al fondo, por lo que pasa desapercibida y puede ser poco visible.
- El sistema acepta -0 como un valor válido.
- Tiene ciertas fallas ortográficas relacionadas con los tildes, ya que varios países, como Irán o Túnez, fueron escritos sin acento.
- La aplicación no es responsiva.

Defectos:

BUG-01: 

La tab superior muestra mal en que sección de la pagina nos encontramos. Al iniciar el sistema aparecen todas las pestañas seleccionadas. Al ir seleccionándolas se van desmarcando hasta que funciona correctamente.

BUG-02:

La fecha de la predicción es tomada erróneamente, ya que figura un mes antes. Por ejemplo, al realizar una predicción el 25/11, el sistema muestra la predicción como realizada el 25/10.

BUG-03:

Al agregar un resultado en una hora en punto, la hora de la predicción se muestra mal. Por ejemplo, si se predice un partido a las 15:00, el sistema muestra 15:0.

BUG-04:

Permite poner valores no enteros como valor posible a la hora de predecir. De esta manera, considera aceptable que un equipo meta 5.7 goles.

**Sesión #2:**

Misión: Probar todas las funcionalidades de la aplicación.

Entorno: Windows 10 y Google Chrome 107.0.5304.121

Duración: Inicio: 26/11/2022 15:03

           Final: 26/11/2022 15:27

Notas:

- Al navegar entre las distintas pestañas de la aplicación nos encontramos con que solo una de estas es 100% funcional, ya que las otras dos no poseen contenido alguno que permita interactuar de otras maneras con la aplicación.

Defectos:

BUG-01: 

Dos de las pestañas implementadas en el sistema no cargan su contenido. Estas pestañas son las de “EQUIPOS” y “SOCIAL”.

**Sesión #3:**

Misión: Buscar posibles vulnerabilidades.

Entorno: Windows 10 y Google Chrome 107.0.5304.121

Duración: Inicio: 26/11/2022 15:30

           Final: 26/11/2022 16:00

Notas:

- Es posible realizar una enumeración de directorios y archivos, ya que estos poseen nombres muy simples y comunes: “/scripts”, “/styles”, “/img”, “package.json”, etc.
- Es posible ver los archivos que existen dentro de cada directorio.

Defectos:

VULN-01: Nombres de directorios y archivos comunes (severidad: Media)

Si los nombres de directorios y archivos son muy comunes esto permite a un atacante enumerar fácilmente los recursos existentes del sistema, lo que podría causar una potencial divulgación de información.

VULN-02: Listado de directorios (severidad: Alta)

El tener habilitado el listado de directorios permite a un atacante ver los recursos de una manera mucho más fácil que la vulnerabilidad anterior. Al igual que el anterior, podría causar una potencial divulgación de información.

VULN-03: Divulgación de tecnologías (severidad: Alta)

El archivo “package.json” nos revela información de las tecnologías utilizadas por la aplicación y sus versiones, sabiendo esto podríamos buscar vulnerabilidades asociadas a estas tecnologías.

## **Reporte de issues**

Reportar issues (bugs, improvements, missing features) en GitHub

Los bugs, defectos, incongruencias, mejoras, etc. detectadas en el ciclo de testing serán reportadas en GitHub, para que los autores puedan verlas y eventualmente solucionarlas. Para hacer esto, entramos al repositorio y en la pestaña de Issues seleccionamos para insertar un nuevo issue.

Aplicar buenas prácticas de reporte de issues

Al redactar el reporte de los issues, se deben seguir ciertas prácticas para que el problema sea entendible por todo aquel que lo lea. El reporte debe tener la suficiente información para que el dev logre comprender el issue, para poder recrearlo y solucionarlo.

Dicho esto, es conveniente que, a la hora de redactar un reporte, en este se incluyan un titulo descriptivo, un resumen que explique brevemente la situación, el entorno en el que se dio (detallar sistema operativo, navegador, etc.), el nivel de severidad y prioridad, posibles maneras de solucionarlo, fotos y, lo más importante, los pasos que se deben seguir para poder recrear esa situación.

Definir labels para tipos de issue y niveles de severidad

Una vez reportado el issue se puede etiquetar. Estas labels nos permiten categorizar el issue y así conseguir tenerlos todos bien ordenados. Las etiquetas pueden explicar que tipo de problema es, que tan relevante es, con que urgencia debe ser solucionado, que tanto afecta el problema, entre otros datos útiles. Las labels brindan a los desarrolladores una guía de en que orden solucionar los issues, ya que sabrán cuales son los más prioritarios, riesgosos o evidentes.

Dejar issues abiertos para correcciones o mejoras futuras

Al reportar un issue este queda abierto, para que todo aquel con acceso al repositorio pueda visualizarlo, comentar sobre él, recrearlo, opinar o hasta implementar una solución o mejora. Esto permite interacción entre el tester y el dev, ya que se le brinda a ambas partes un entorno para compartir preocupaciones e ideas. Una vez solucionado el bug o implementada la mejora, el issue se da por terminado y se cierra. No obstante, puede volver a abrirse en caso de que el problema persista o surjan nuevas ideas.

Sumarizar número de issues reportados por tipo

La aplicación a testear fue la realizada por el equipo formado por Matías Praderi, Matías Presa y Lúcio Santín. Tras nuestras sesiones de testing, reportamos 10 issues. De estos, encontramos 2 catalogados como “invalid”. Esto se debe a que no llegan a ser errores como tal, sino que son incoherencias o cosas que no tienen sentido (en este caso, pestañas que no llevan a nada y errores en el formato de fecha y hora). Se reportaron tambien 3 “bugs”, o errores, que refieren al mal funcionamiento de la tab superior y en un par de errores al introducir resultados inválidos en las predicciones. También se incluyeron 3 bajo la etiqueta de “help wanted”, ya que son vulnerabilidades que requieren atención especial. Refieren a problemas de seguridad que podrían llevar a leaks de información. Finalmente, se hicieron 2 “enhancements”, o sea, posibles mejoras.

Realizar una evaluación global de la calidad

En términos generales, la aplicación funciona correctamente. Los errores encontrados en las sesiones de testing son poco trascendentales y de fácil solución. No obstante, la aplicación se siente vacía, con pocos elementos implementados. Se podría decir que la mayoría de errores son por falta de atención al detalle. El error mas grave de la aplicación es sin lugar a dudas el poder ingresar fracciones como predicción. 

## **Presentación en clase**

Práctica o tecnología de ingeniería de software aplicada en el proyecto 

Se debió hacer una presentación en clase sobre un tema relevante que aporte algo para el curso. En nuestro caso, esta presentación se trató de testing exploratorio. Esta técnica se aplicó en este trabajo, por lo que ya se explicó brevemente qué es, cómo se aplica y se pueden ver ejemplos.

Adjuntar material usado para la presentación

Link de acceso a las diapositivas presentadas:

[https://docs.google.com/presentation/d/11s5kkx2EVlKdL-_eLdFNNxTkMFZvOuwa/edit?usp=sharing&ouid=115303789446073093171&rtpof=true&sd=true](https://docs.google.com/presentation/d/11s5kkx2EVlKdL-_eLdFNNxTkMFZvOuwa/edit?usp=sharing&ouid=115303789446073093171&rtpof=true&sd=true)

## **Reflexión**

Detalle del trabajo individual

Alfredo Fernández

En general estoy muy satisfecho con el resultado de la entrega y creo que logramos nuestros objetivos con respecto a la misma. Toda la documentación de la primera entrega llevo su tiempo, pero luego en la segunda entrega nos hizo el trabajo mas fácil teniendo algo en lo que basarnos para realizar el funcionamiento de la aplicación.

Este trabajo me hizo darme cuenta de lo importante que es planificar con antelación ya que antes del mismo no seria posible crear algo así, pero viendo el resultado, en mi opinión esta en buen nivel.

Por último también tengo que agradecer a mis compañeros de equipo que trabajaron con gran esfuerzo y dedicación para llevar este proyecto adelante.

Tadeo Goday

El resultado final fue muy gratificante, estoy más que contento con la aplicación que logramos obtener casi al nivel de una aplicación comercial de verdad. Logramos mantener un orden y una buena división de tareas que nos llevo al trabajo que estamos presentando. 

Sin embargo como todo proyecto, tuvo sus complicaciones, y si pudiera volver hacia atrás haría las cosas de otra manera, con el fin de tener un desarrollo con la menor cantidad de obstáculos posibles.

Por último, para destacar, fuimos capaces mantener una aplicación muy similar a la planificada inicialmente, la aplicación quedo muy similar a los bocetos hechos para la primera entrega. Y también conseguimos hacer que gran parte de la aplicación fuera funcional.

Manuel Morandi

Considero que este trabajo fue muy productivo e interesante. Nos acercó a un proyecto más profesional, algo similar a lo que nos podríamos encontrar en el plano laboral. Fue desafiante en un inicio comprender las tecnologías a utilizar y comenzar a dar forma a la aplicación, pero una vez establecidas las bases, fue una experiencia disfrutable con mucho aprendizaje e incorporación de nuevas prácticas. 

Al realizar la primer entrega, no creía que la aplicación iba a quedar tan similar a los bocetos, ni que podríamos implementar tanto con el tiempo disponible. No obstante, el resultado final es muy bueno, coherente con lo especificado y con funcionalidad. Estoy muy contento con nuestro trabajo y nuestros resultados.

Técnicas aplicadas y aprendizajes

A lo largo del trabajo se trabajaron con distintas técnicas de testing, análisis estático, clean code, entre otros. Consideramos que estas técnicas fueron bien aplicadas, llegando a un resultado final prolijo y funcional. Esto también se logró gracias a todo lo aplicado en la entrega anterior, debido a que, por las técnicas (de análisis de requerimientos, principalmente) aplicadas anteriormente  comenzamos con una idea clara de que era lo que teníamos que hacer.

En cuanto a aprendizajes, pensamos que logramos comprender todas las áreas que involucraba el proyecto, sintiéndonos cómodos en todos los aspectos del desarrollo. No obstante, creemos que sería conveniente para la siguiente ocasión comenzar con los elementos más claros y organizados. Antes de empezar a codificar, deberíamos ver y entender las tecnologías a utilizar, los componentes que necesitaremos, etc.; en vez de ir viéndolo sobre la marcha.

No obstante, creemos que nos tomamos el trabajo con la seriedad y responsabilidad pertinentes y se llegó a un resultado profesional y prolijo, al nivel del que nos habíamos planteado en un inicio. Las tecnologías y técnicas se aplicaron correctamente y la aplicación resultó ser correcta.