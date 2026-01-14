// Select DOM elements
const overlay = document.getElementById("modalOverlay");
const modalTerms = document.getElementById("modalTerms");
const modalConfirm = document.getElementById("modalConfirm");
const modalSuccess = document.getElementById("modalSuccess");
const summaryList = document.getElementById("summaryList");

export function closeModal() {
  overlay.classList.remove("active");

  // Hide all individual modal boxes after animation
  setTimeout(() => {
    modalTerms.classList.remove("active");
    modalConfirm.classList.remove("active");
    modalSuccess.classList.remove("active");
  }, 200);
}

// Open a specific modal
function openModal(modalElement) {
  // Reset all
  modalTerms.classList.remove("active");
  modalConfirm.classList.remove("active");
  modalSuccess.classList.remove("active");

  // Show Overlay
  overlay.classList.add("active");

  // Show specific box
  modalElement.classList.add("active");
}

// 1. Show Terms
export function openTermsModal() {
  openModal(modalTerms);
}

export function openConfirmModal(data) {
  summaryList.innerHTML = "";

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${key}:</strong> ${value}`;
    summaryList.appendChild(li);
  }

  openModal(modalConfirm);
}

export function openSuccessModal() {
  openModal(modalSuccess);
}

export function initModals() {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.querySelectorAll(".close-modal, .close-modal-btn").forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
}
