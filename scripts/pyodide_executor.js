// Εκτέλεση κώδικα χρησιμοποιώντας Pyodide
async function executeExercise(index) {
  const inputCode = document.getElementById(`code-editor-${index}`).value;
  const outputElement = document.getElementById(`output-${index}`);
  if (!outputElement) {
    console.error("Output element not found");
    return;
  }
  try {
    console.log("Executing Python code:", inputCode);
    const result = await pyodide.runPythonAsync(inputCode);
    console.log("Execution result:", result);
    outputElement.innerHTML = `<pre>${result}</pre>`;
  } catch (err) {
    console.error("Error executing Python code:", err);
    outputElement.innerHTML = `<span style="color: red;">Σφάλμα: ${err.message}</span>`;
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

loadPyodideAndRun();
