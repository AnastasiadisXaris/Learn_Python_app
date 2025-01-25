// Αποθήκευση βαθμίδας και ανακατεύθυνση
function selectGrade(level) {
  // Αποθήκευση της επιλεγμένης βαθμίδας στο localStorage
  localStorage.setItem("selectedGrade", level);

  // Χάρτης με τις διαδρομές για κάθε βαθμίδα
  const pageMap = {
      gymnasio: "data/gymnasio/gymnasio_index.html",
      lykeio: "data/lykeio/lykeio_index.html",
      panepistimio: "data/panepistimio/panepistimio_index.html",
  };

  // Εύρεση της αντίστοιχης σελίδας
  const targetPage = pageMap[level];
  if (targetPage) {
      // Ανακατεύθυνση στη σελίδα
      window.location.href = targetPage;
  } else {
      console.error("Invalid grade level selected:", level);
  }
}

// Ανακατεύθυνση σε συγκεκριμένη σελίδα
function navigateTo(page) {
  window.location.href = page;
}

// Επιστροφή στην αρχική σελίδα
function goBack() {
  window.location.href = "../../index.html"; // Διαδρομή προς το αρχείο index.html
}

// Προαιρετικά: Καταγραφή επιλεγμένης βαθμίδας στην κονσόλα (για debugging)
function logSelectedGrade() {
  const selectedGrade = localStorage.getItem("selectedGrade");
  if (selectedGrade) {
      console.log(`Η επιλεγμένη βαθμίδα είναι: ${selectedGrade}`);
  } else {
      console.log("Δεν έχει επιλεγεί βαθμίδα.");
  }
}

// Εκτέλεση λειτουργιών κατά την εκκίνηση της σελίδας
document.addEventListener("DOMContentLoaded", () => {
  logSelectedGrade(); // Καταγραφή της επιλεγμένης βαθμίδας
});