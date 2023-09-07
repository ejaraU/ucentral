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

![image](https://github.com/ejaraU/ucentral/assets/143906202/a93f3a35-bbce-4220-be93-f8784ae705a2)


## Pasos de instalación

- Clonar el proyecto desde https://github.com/ejaraU/ucentral.git
- Agregar la clave privada de tu wallet de Metamask en el archivo '.env'
- Ejecutar:

```javascript

 npm i -y -f

```

- Ejecutar:

```javascript 

npx http-server
```

El proceso indicará la dirección y puerto de tu servidor local, para abrir el navegador que tenga instalado Metamask

## Video demostrativo

https://github.com/ejaraU/ucentral/assets/143906202/a1b9596d-9fb2-4d02-bedd-992c54032ce6





