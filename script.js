let mistakeCounter = 0;

function showTechnique(type) {
    const output = document.getElementById("techniqueOutput");

    if(type === "active") {
        output.textContent = "Active recall forces your brain to remember instead of rereading."
    } else if (type === "teaching") {
        output.textContent = "Teaching others exposes gaps in your understanding"
    } else if (type === "spaced") {
        output.textContent = "Spaced revision improves long-term memory retention."
    }
}

function checkStudyTime() {
    const hours = document.getElementById("hours").value;
    const feedback = document.getElementById("studyFeedback");

    if (hours < 2) {
        feedback.textContent = "You may need more focused study time."
    } else {
        feedback.textContent = "Good effort. Consistency matters more than hours."
    }
}

function changeBackground() {
    document.body.classList.toggle("focus-mode");
}

function revealMistake(type) {
    const ouput = document.getElementById("mistakeOutput")

    if(type === "cramming") {
        output.textContent = "Cramming overloads memory and leads to quick forgetting."
    } else if (type === "passive") {
        output.textContent = "Passive reading feels productive but builds weak recall."
    } else if ( type === "multitasking") {
        output.textContent = "Multitasking reduces concentration and accuracy."
    }
}

function countMistakes() {
    mistakeCounter++;
    document.getElementById("mistakeCount").textContent = "Mistakes acknowledged: " +mistakeCounter;
}

function resetView() {
    mistakeCounter = 0;
    document.getElementById("mistakeOutput").textContent = "Click a mistake to see why is it harmful";
    document.getElementById("mistakeCount").textContent = "";
}

function setGoal() {
    const goal = document.getElementById("goalInput").value;
    document.getElementById("goalOutput").textContent = "Today's goal: " +goal;
}

function highlightImage() {
    document.querySelector(".study-image").classList.toggle("active");
}

function previewNotes() {
    const notes = document.getElementById("notesInput").value;
    document.getElementById("notesOutput").textContent = notes;
}

function checkSeverity() {
    const value = document.getElementById("severity").value;
    const ouput = document.getElementById("severityOutput");

    if(value === "low"){
        output.textContent = "This mistake is manageable with small changes"
    } else if (value === "medium") {
        output.textContent = "This mistake needs consistent effort to fix"
    } else if( value === "high") {
        output.textContent = "This mistake seriously affects performance";
    }
}

document.addEventListener("keydown", function(event) {
    if(event.key === "h" || event.key === "H") {
        document.getElementById("hiddenTip").style.display = "block";
    }
})



