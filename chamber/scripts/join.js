const timestampField = document.getElementById('timestamp');
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

const modalTriggers = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close-modal');

modalTriggers.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById(link.dataset.modal);
        if (modal) modal.showModal();
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});

document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
    });
});

const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;