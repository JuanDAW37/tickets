# **TICKETS 1.0**
<div id="#tickets"></div>
# **Índice** 📑

1. [Descripción](#id1)
2. [Estado](#id2)
3. [Funcionalidades](#id3)
   * [Nuevo Ticket](#id4)     
   * [Imprimir Tickets](#id5)     
   * [Borrar Tickets](#id6)     
4. [Despliegue local](#id7)
5. [Acceso a la aplicación](#id8)      
6. [Tecnologías usadas](#id9)
   * [Backend](#id10)
   * [Frontend](#id11)<span id="v17"></span>
   * [Persistencia de los datos](#id12)
   * [IDE'S](#id13)
   * [Control de código](#id14)   
7. [Autoría](#id15)

---

## <div id="id1">1. Descripción&nbsp;👀</div>

Esta mini aplicación está construida para permitir crear, borrar e imprimir tickets de venta para cualquier negocio.

---

## <div id="id2">2. Estado&nbsp;🏁</div>

La aplicación está finalizada, a no ser por alguna implementación que se pueda incorporar a mayores.
Es un proyecto con licencia OpenSource.

---

## <div id="id3">3. Funcionalidades&nbsp;🛠</div>

### ***<div id="id4">Nuevo Ticket</div>***
Desde un formulario, se introducen la diversa información para generar un *ticket*, la *fecha* viene dada por defecto, la *cuota* y el *total* se calculan automáticamente a partir de la *base* y el *iva* indicados.
Al pulsar en **Nuevo**, se graba en el **tickets.json** un nuevo ticket.

#### ***<div id="id5">Imprimir Tickets</div>***
Al pulsar sobre el botón **Imprimir**, se lanza, en una nueva pestaña, el listado de todos los tickets existentes en **tickets.json**.

### ***<div id="id6">Borrar Tickets</div>***
Cuando realizamos esta acción, se eliminan automáticamente todos los datos existentes en **tickets.json**.

---

## <div id="id7">4. Despliegue local&nbsp;🏠</div>

 - Se necesita tener instalado node, express y nodemon, de forma global.
 - Clona este repositorio
   
---

## <div id="id8">5. Acceso a la aplicación&nbsp;🚀</div>

- Ejecuta setup.bat
- La aplicación está corriendo en http://localhost:5173
   
---

## <div id="id9">6. Tecnologías usadas&nbsp;💾</div>

La aplicación ha sido desarrollada usando las tecnologías y dependencias que se describen a continuación.

### <div id="id10">Backend</div>
![ENodeJs](https://img.shields.io/badge/NodeJs-NodeJs?style=plastic&logo=nodedotjs&logoColor=white&color=%235FA04E) Entorno de ejecución de JavaScript multiplataforma, de código abierto y gratuito que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comando y scripts.

![Express](https://img.shields.io/badge/Express-NodeJs?style=plastic&logo=express&logoColor=white&color=%23000000) Es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles..

![Nodemon](https://img.shields.io/badge/Nodemon-NodeJs?style=plastic&logo=nodemon&logoColor=black&labelColor=white)) Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando automáticamente la aplicación de nodo cuando se detectan cambios de archivos en el directorio.  

### <div id="id11">Frontend</div>
![React](https://img.shields.io/badge/ReactJs-ReactJs?style=plastic&logo=react&logoColor=%2361DAFB&labelColor=white&color=%2361DAFB) React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

![JavaScript](https://img.shields.io/badge/JavaScript-JavaScript?style=plastic&logo=javascript&logoColor=white&labelColor=%23F7DF1E&color=%23F7DF1E) Lenguaje de programación que se usa para crear páginas web interactivas y para programación del lado del Backend.

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) Lenguaje de marcado estándar para la estructura de la interfaz.

![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white) Hojas de estilo para el diseño y la presentación.

### <div id="id12">Persistencia</div>

![JSON](https://img.shields.io/badge/JSON-JSON?style=plastic&logo=json&logoColor=white&labelColor=%23000000&color=%23000000&cacheSeconds=https%3A%2F%2Fwww.json.org%2Fjson-es.html) JSON (JavaScript Object Notation) es un formato de texto que permite almacenar y compartir datos entre sistemas. Es un estándar de facto en la industria y se utiliza ampliamente en el desarrollo de software.

### <div id="id13">IDE</div>

![VS Code](https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=flat&logo=visualstudiocode&logoColor=white) [Visual Studio Code](https://code.visualstudio.com/): Editor de código fuente utilizado para el desarrollo frontend y backend.

### <div id="id14">Control de código</div>

![GitHub](https://img.shields.io/badge/GitHub-black?logo=github) [GitHub](https://github.com/): Plataforma online para almacenamiento y gestión de control de versiones utilizado para gestionar el código fuente del proyecto.

## <div id="id15">9. Autoría</div>

- Realizada por Juan Jesús Tenreiro Rodríguez - 2025.

<span>[🔝](#tickets)</span>
