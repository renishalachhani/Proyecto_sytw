# EventFinder [![Build Status](https://travis-ci.com/SyTW2019/E03.svg?branch=master)](https://travis-ci.com/SyTW2019/E03) [![codecov](https://codecov.io/gh/SyTW2019/E03/branch/master/graph/badge.svg)](https://codecov.io/gh/SyTW2019/E03) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=SyTW2019_E03&metric=code_smells)](https://sonarcloud.io/dashboard?id=SyTW2019_E03)


Esta aplicación está desarrollada para la asignatura de Sistemas y Tecnologías Web.

## Tecnologías

### Travis

Esta página incluye el servicio de Travis de manera que con cada modificación que se realize y se suba al repositorio lanzará el servicio de manera que se ejecuten los test y se cree la aplciación.

Además se ha integrado travis con de Slack de manera que una vez se realize el lanzamiento en travis se comunique el resultado al equipo de trabajo. Esto se realiza al añadir la linea de notificaciones en el fichero de travis y añadir la clave de las comunicaciones al slack.

### Prettier

Para facilitar la lectura y la legibilidad del código se impondrá una guía de estilo que será forzada por el prettier para asegurar que todo el código siga unos estilos y formato comunes. La herramienta elegida es el Prettier cuya configuración se recoge en el '.prettierrc.js' donde se recogen las reglas a seguir en este proyecto.

### Eslint

La herramienta de EsLint es un 'linter', herramienta que permite un análisis de código en busca de errores o defectos en la calidad del código. El fichero de configuración de esta herramienta está disponible en la raíz del proyecto '.eslintrc.js', en dicho fichero se configuran las herramientas a usar en el proyecto para su integración y el correcto análisis del código. Además para extender la configuración por defecto se pueden configurar las reglas. Además para la integración con el prettier se añade el pluguin de prettier y las configuraciones iniciales de prettier y eslint.

### LintStaged

Con la herramienta de LintStaged permite la ejecución del eslint sobre los fichero que se unen al commit, de manera que revisa todos los ficheros en stag. En el 'package.json' del proyecto se encuentra la configuración que realiza una revisión de eslint que corrige los defectos encontrados. En el caso de que los fallos no se puedan corregir no se permitirá el commit.

### SonarCloud

La herramienta de sonarcloud nos permite analizar la calidad del código que se crea de manera continua e integrada con el resto de servicios. Gracias a esta herramienta podremos analizar la duclicación del código así como las malas prácticas a la hora de escribirlo. Para el uso de ésta herramienta se realizan los siguientes pasos:

1. Se genera un token usando los recursos ofrecidos por la documentación de SonarCloud. Se genera usando la semilla "sytwe03" en la plataforma que te habilita para ello el SonarCloud.
2. A continuación se ha de encriptar el token usando el comando `travis encrypt token --com`
3. Se añade en el fichero de travis la información de dirección de la organización a la que se carga el proyecto, para ello se cargan las siguientes líneas


    addons:
      sonarCloud:
        organization: OrganizationKey
        token:
          secure: "token"
      script:
        -sonar-scanner

4. Se añade dentro del directorio de frontend el fichero de configuración del sonarCloud que se llama `sonar-project.properties`. Dentro de este fichero se ha de completado con los campos necesarios para la inicialización del servicio.

La cantidad de problemas en el código se puede visualizar en la propia banda que está disponible en el README del proyecto.

### Codecov

La herramienta permite el análisis de la cantidad del código que está recogido y comprobado por las pruebas de manera que se tiene un control de la cantidad de código comprobado. Además te permite tener un porcentaje. Para la integración de dicha herramienta se ha de realizar los siguientes pasos:

1. Instalar la herramienta de codecov y guardarla como dependencia de desarrollo para lo que se ha de ejecutar `npm install codecov --save-dev`
2. Se ha de añadir en los scripts del fichero de configuración de travis a continuación de la ejecución de los test la orden de `codecov`
3. Se ha de modificar el fichero package.json para que en la ejecución del script de test se ejecute `jest && codecov`
4. Se modificará el fichero de configuración de las pruebas de jest para que se almacenen los resultados del análisis de la herramienta. Para ello dentro de la configuración se añaden las siguientes líneas:


    coverageDirectory: "./coverage",
    collectCoverage: true,

El resultado de la prueba se puede comprobar desde la propia banda de codecov visible en el README del proyecto.

### Heroku

## Estilos

### Git

Para la realización de los commits y seguir un estilo común se seguirá el estilo 'conventional commits'. Cuya guía se puede encontar en [convetional commits](https://www.conventionalcommits.org/en/v1.0.0/).

### Código

La elección de estilos se ha decidido que no se van a usar ';' excepto en los puntos donde sean necesarios, además de los espacios antes de los '{' y con la utilización de dos espacios para el indentado.
