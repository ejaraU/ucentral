# UCENTRAL
Proyecto curso Blockchain, creación Dapp.<br><br>
>Integrantes:<br> 
* Roberto Hernandez<br>
* Eduardo Jara<br>
* David Saballo<br>
* Esteban Jara<br>

## PROYECTO REGISTRO MEDICO
<div align='justify'>
Mediante un smart contract llamado Ficha, se registra el historial de atenciones, diagnóstico, medicamentos y patologías de las personas. Consistirá en un sistema de registros secuencial para cada usuario, el que activará el consumo de un de un contrato definido para el registro. Permitirá el acceso al historial de parte del profesional médico enrolado y al agregar información al registro del paciente.<br><br>
</div>

> La estructura del registro :
- Identificación de la persona
- Registro de atenciones médicas
- Registro de Diagnóstico y Tratamientos

## Estructura de contrato

```javascript

struct Record {
        string patientName;
        string doctorName;
        string date;
        string diagnosis;
        string problem;
        string treatment;
    }

.............................

function addRecord(
        string memory _patientName,
        string memory _doctorName,
        string memory _date,
        string memory _diagnosis,
        string memory _problem,
        string memory _treatment
    )

..............................

function getRecords() external view returns (Record[] memory) {
        return medicalRecords[msg.sender];
```

Para generar el contrato pueden revisar la siguiente url: https://github.com/ejaraU/contrato_medico

## Arquitectura de Software

![image](https://github.com/ejaraU/ucentral/assets/143906202/30cb9718-5492-48b5-82b7-81716e7d43b6)



## Pasos de instalación

- Clonar el proyecto desde https://github.com/ejaraU/ucentral.git
- Aplicar el siguiente comnando: <br>
```bash
npm i -y -f  
 ``` 
- Para ejecutar el proyecto usaremos live-server, el cual se activa en el costado izquierdo inferior de VSCODE como aparece en la imagen y presionamos sobre Go Live: <br>
  
![image](https://github.com/ejaraU/ucentral/assets/143906202/68858291-5c52-4e4a-81b0-9e468ce02d02)

Es importante que estes sobre el directorio y archivo que inicializa el proyecto, en nuestro caso index.html 

![image](https://github.com/ejaraU/ucentral/assets/143906202/c1927ab6-ef8e-4d40-b4ed-c010078b1a20)<br>


## Video demostrativo

https://github.com/ejaraU/ucentral/assets/143906202/a1b9596d-9fb2-4d02-bedd-992c54032ce6





