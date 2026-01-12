function showSection(id){
    document.querySelectorAll("section").forEach(section=>{
        section.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function checkSymptom(){
    let symptom = document.getElementById("symptom").value;
    let message = "";

    if(symptom === "fever"){
        message = "Stay hydrated and monitor your temperature.";
    }
    else if(symptom === "cough"){
        message = "Rest well and avoid cold exposure.";
    }
    else if(symptom === "headache"){
        message = "Take adequate rest and drink plenty of water.";
    }
    else if(symptom === "chest pain"){
        message = "Seek emergency medical help immediately.";
    }
    else{
        message = "Please select a symptom.";
    }

    document.getElementById("symptomResult").innerText = message;
}

function setReminder(){
    let medicine = document.getElementById("medicine").value;
    let time = document.getElementById("time").value;

    if(medicine && time){
        document.getElementById("reminderResult").innerText =
            `Reminder set for ${medicine} at ${time}`;
    }else{
        document.getElementById("reminderResult").innerText =
            "Please enter both medicine name and time.";
    }
}
