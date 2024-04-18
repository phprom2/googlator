function toggleAlertOK(){
    $('#alertContainer').html('<div class="alert alert-success fade show" role="alert">Votre requête à été crée avec <strong>succès</strong> !</div>');
      
    // Disparition automatique après 3 secondes
    setTimeout(function(){
      $('.alert').alert('close'); // Ferme l'alerte
    }, 5000);
}

function toggleAlertPasOK(){
    $('#alertContainer').html('<div class="alert alert-danger fade show" role="alert">Votre requête est <strong>vide</strong> !</div>');
      
    // Disparition automatique après 3 secondes
    setTimeout(function(){
      $('.alert').alert('close'); // Ferme l'alerte
    }, 5000);
}

function toggleInputVisibility(inputId) {
    let input = document.getElementById(inputId);
    input.style.display = input.style.display === "none" ? "inline-block" : "none";
}

function hideInput(inputId) {
    let input = document.getElementById(inputId);
    input.style.display = "none";
}

function copyToClipboard() {
    let queryResult = document.getElementById("queryResult");
    queryResult.select();
    navigator.clipboard.writeText(queryResult.value)
        .then(() => {
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert("Failed to copy text to clipboard");
        });
}

function openInNewTab() {
    let queryResult = document.getElementById("queryResult");
    let content = queryResult.value;

    // Ouvrir le contenu dans un nouvel onglet
    window.open("https://www.google.com/search?q=" + encodeURIComponent(content), "_blank");
}


var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
})

function resetForm() {
    document.getElementById("searchValue").value = "";
    document.getElementById("beforeOperator").checked = false;
    hideInput('beforeValue');
    document.getElementById("beforeValue").value = "";
    document.getElementById("afterOperator").checked = false;
    hideInput('afterValue');
    document.getElementById("afterValue").value = "";
    document.getElementById("filetypeOperator").checked = false;
    hideInput('filetypeValue');
    document.getElementById("filetypeValue").value = "";
    document.getElementById("allintextOperator").checked = false;
    hideInput('allintextValue');
    document.getElementById("allintextValue").value = "";
    document.getElementById("intextOperator").checked = false;
    hideInput('intextValue');
    document.getElementById("intextValue").value = "";
    document.getElementById("allintitleOperator").checked = false;
    hideInput('allintitleValue');
    document.getElementById("allintitleValue").value = "";
    document.getElementById("intitleOperator").checked = false;
    hideInput('intitleValue');
    document.getElementById("intitleValue").value = "";
    document.getElementById("allinurlOperator").checked = false;
    hideInput('allinurlValue');
    document.getElementById("allinurlValue").value = "";
    document.getElementById("inurlOperator").checked = false;
    hideInput('inurlValue');
    document.getElementById("inurlValue").value = "";
}


function generateQuery() {
    let query = "";

    // Before operator
    if (document.getElementById("beforeOperator").checked) {
        let beforeValue = document.getElementById("beforeValue").value.trim();
        if (beforeValue !== "") {
            query += "before:" + beforeValue + " ";
        }
    }

    // After operator
    if (document.getElementById("afterOperator").checked) {
        let afterValue = document.getElementById("afterValue").value.trim();
        if (afterValue !== "") {
            query += "after:" + afterValue + " ";
        }
    }

    // Filetype operator
    if (document.getElementById("filetypeOperator").checked) {
        let filetypeValue = document.getElementById("filetypeValue").value.trim();
        if (filetypeValue !== "") {
            query += "filetype:" + filetypeValue + " ";
        }
    }

    // Allintext operator
    if (document.getElementById("allintextOperator").checked) {
        let allintextValue = document.getElementById("allintextValue").value.trim();
        if (allintextValue !== "") {
            query += "allintext:" + allintextValue + " ";
        }
    }

    // Intext operator
    if (document.getElementById("intextOperator").checked) {
        let intextValue = document.getElementById("intextValue").value.trim();
        if (intextValue !== "") {
            query += "intext:" + intextValue + " ";
        }
    }

    // Allintitle operator
    if (document.getElementById("allintitleOperator").checked) {
        let allintitleValue = document.getElementById("allintitleValue").value.trim();
        if (allintitleValue !== "") {
            query += "allintitle:" + allintitleValue + " ";
        }
    }

    // Intitle operator
    if (document.getElementById("intitleOperator").checked) {
        let intitleValue = document.getElementById("intitleValue").value.trim();
        if (intitleValue !== "") {
            query += "intitle:" + intitleValue + " ";
        }
    }

    // Allinurl operator
    if (document.getElementById("allinurlOperator").checked) {
        let allinurlValue = document.getElementById("allinurlValue").value.trim();
        if (allinurlValue !== "") {
            query += "allinurl:" + allinurlValue + " ";
        }
    }

    // Inurl operator
    if (document.getElementById("inurlOperator").checked) {
        let inurlValue = document.getElementById("inurlValue").value.trim();
        if (inurlValue !== "") {
            query += "inurl:" + inurlValue + " ";
        }
    }
    // Display the generated query
    document.getElementById("queryResult").value = document.getElementById("searchValue").value.trim() + " " + query;
    //document.getElementById("result").innerText = "Generated Query: " + document.getElementById("searchValue").value.trim() + " " + query;
    if (document.getElementById("searchValue").value.trim() == "" && query == ""){
        toggleAlertPasOK();
    } else {
        toggleAlertOK();
    }
}
