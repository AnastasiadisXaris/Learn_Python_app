function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
  const exerciseFile = "exercises_gymnasio.json"; // Ενημερωμένη διαδρομή

  async function loadExercises() {
    try {
      const response = await fetch(exerciseFile);
      if (!response.ok) {
        throw new Error("Error fetching exercises JSON file");
      }

      const data = await response.json();
      console.log("Loaded data:", data);
      const selector = document.getElementById('exercise-selector');
      const desc = document.getElementById('exercise-desc');
      const editor = document.getElementById('editor');

      // Φόρτωση επιλογών dropdown
      selector.innerHTML = '<option value="" selected>Επιλέξτε άσκηση</option>'; // Προεπιλεγμένο μήνυμα
      data.exercises.forEach((exercise, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = exercise.question;
        selector.appendChild(option);
      });

      // Καθαρισμός περιβάλλοντος αρχικά
      desc.textContent = ''; // Καμία περιγραφή
      editor.value = ''; // Κενός editor
      editor.style.height = '100px';
      editor.style.width = '600px' // Αυξημένο ύψος για το κουτί κώδικα

      // Διαχείριση αλλαγής άσκησης
      selector.addEventListener('change', () => {
        const selectedIndex = selector.value;
        if (selectedIndex !== '') {
          const selectedExercise = data.exercises[selectedIndex];
          desc.textContent = selectedExercise.hint || ''; // Προτροπή της άσκησης
          editor.value = selectedExercise.starterCode || ''; // Κενός κώδικας ή starter code
        } else {
          // Αν δεν έχει επιλεγεί καμία άσκηση
          desc.textContent = '';
          editor.value = '';
        }
      });
    } catch (error) {
      console.error('Error loading exercises:', error);
      const container = document.getElementById('exercise-selector-container');
      container.innerHTML = `
        <p style="color: red;">Η φόρτωση των ασκήσεων απέτυχε. Ελέγξτε τη σύνδεση ή επικοινωνήστε με τον διαχειριστή.</p>
        <p style="color: gray;">Προσπαθήστε ξανά αργότερα.</p>`;
    }
  }

  // Διαχείριση του κουμπιού "Ξεκινήστε την εξάσκηση"
  const startButton = document.getElementById('start-button');
  const modal = document.getElementById('interactive-modal');

  startButton.addEventListener('click', () => {
    modal.style.display = 'block';
    loadExercises(); // Φόρτωση ασκήσεων
  });

  const closeButton = modal.querySelector('#close-modal');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
});

async function executeExercise() {
  const inputCode = document.getElementById('editor').value; // Κώδικας από τον χρήστη
  const outputElement = document.getElementById('output'); // Στοιχείο εξόδου
  if (!outputElement) {
    console.error("Output element not found");
    return;
  }

  try {
    console.log("Executing Python code:", inputCode);

    // Ανακατεύθυνση της εξόδου της Python
    pyodide.runPython(`
import sys
from io import StringIO

sys.stdout = StringIO()  # Ανακατεύθυνση stdout
sys.stderr = StringIO()  # Ανακατεύθυνση stderr για σφάλματα
    `);

    // Εκτέλεση του κώδικα
    await pyodide.runPythonAsync(inputCode);

    // Ανάκτηση της εξόδου
    const capturedOutput = pyodide.runPython(`sys.stdout.getvalue()`);
    console.log("Execution result:", capturedOutput);

    if (capturedOutput.trim() === '') {
      outputElement.innerHTML = `<span style="color: gray;">Δεν επιστράφηκε αποτέλεσμα από τον κώδικα.</span>`;
    } else {
      outputElement.innerHTML = `<pre>${capturedOutput}</pre>`;
    }
  } catch (err) {
    console.error("Error executing Python code:", err);

    // Ανάκτηση του μηνύματος λάθους
    const errorOutput = pyodide.runPython(`sys.stderr.getvalue()`);
    outputElement.innerHTML = `<span style="color: red;">Σφάλμα: ${errorOutput.trim()}</span>`;
  }
}


let pyodide;
async function loadPyodideAndRun() {
  try {
    pyodide = await loadPyodide();
    console.log("Pyodide loaded successfully!");
  } catch (err) {
    console.error("Error loading Pyodide:", err);
  }
}

const runButton = document.getElementById('run-btn');
if (runButton) {
  runButton.addEventListener('click', executeExercise);
} else {
  console.error("Το κουμπί 'Εκτέλεση' δεν βρέθηκε.");
}

loadPyodideAndRun();
