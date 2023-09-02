document.addEventListener("DOMContentLoaded", async () => {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      web3.eth.defaultAccount = accounts[0];
      initApp();
    } catch (error) {
      console.error("Se denego el acceso a la cuenta.", error);
    }
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    initApp();
  } else {
    console.error("Instalar Metamask!");
  }
});

async function initApp() {
  const contractAddress = "0xa2CcaAd5e6a21961cAefE8696189A647B3Cb5bE4"; // Replace with your contract address
  const contractAbi =[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_patientName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_doctorName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_diagnosis",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_problem",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_treatment",
          "type": "string"
        }
      ],
      "name": "addRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRecords",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "patientName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "doctorName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "diagnosis",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "problem",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "treatment",
              "type": "string"
            }
          ],
          "internalType": "struct MedicalRecord2.Record[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];  
  
  const contract = new web3.eth.Contract(contractAbi, contractAddress);

  const addRecordForm = document.getElementById("addRecordForm");
  const recordsList = document.getElementById("Listado");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let userRecords = await contract.methods.getRecords().call({ from: web3.eth.defaultAccount });
  let currentRecordIndex = 0;

  function showCurrentRecord() {
    recordsList.innerHTML = ''; // Limpiar la lista de registros

    const currentRecord = userRecords[currentRecordIndex];
    if (currentRecord) {
      const recordItem = document.createElement("li");
      recordItem.innerHTML = `
        
        <strong>Paciente:</strong> ${currentRecord.patientName}<br>
        <strong>Doctor:</strong> ${currentRecord.doctorName}<br>
        <strong>Fecha:</strong> ${currentRecord.date}<br>
        <strong>Diagnostico:</strong>
        <textarea rows = "5" cols = "60" id = "treatment">${currentRecord.diagnosis}</textarea>  
        <strong>Problema:</strong>
        <textarea rows = "5" cols = "60" id = "treatment">${currentRecord.problem}</textarea> 
        <strong>Tratamiento:</strong>
        <textarea rows = "5" cols = "60" id = "treatment">${currentRecord.treatment}</textarea>  
      `;
      recordsList.appendChild(recordItem);
    }
  }

  // Mostrar el primer registro al cargar la página
  showCurrentRecord();

  // Evento para avanzar al siguiente registro
  nextBtn.addEventListener("click", () => {
    currentRecordIndex = (currentRecordIndex + 1) % userRecords.length;
    showCurrentRecord();
  });

  // Evento para retroceder al registro anterior
  prevBtn.addEventListener("click", () => {
    currentRecordIndex = (currentRecordIndex - 1 + userRecords.length) % userRecords.length;
    showCurrentRecord();
  });

  addRecordForm.addEventListener("submit", async (event) => {
    event.preventDefault();

  // Obtener otros campos del formulario
    
    
    const patientName = document.getElementById("patientName").value;
    const doctorName = document.getElementById("doctorName").value;
    const date = document.getElementById("fecha").value;
    const diagnosis = document.getElementById("diagnosis").value;
    const problem = document.getElementById("problem").value;
    const treatment = document.getElementById("treatment").value;

    try {
      await contract.methods
        .addRecord(patientName, doctorName, date, diagnosis, problem, treatment)
        .send({ from: web3.eth.defaultAccount });
      console.log("Registros agregados");
      // Actualizar la lista de registros aquí
      userRecords = await contract.methods.getRecords().call({ from: web3.eth.defaultAccount });
      showCurrentRecord(); // Mostrar el nuevo registro añadido
    } catch (error) {
      console.error("Error al cargar Registros:", error);
    }
  });
}


