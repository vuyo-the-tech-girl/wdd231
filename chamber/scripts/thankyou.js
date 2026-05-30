const params = new URLSearchParams(window.location.search);

const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || '';
};

setText('displayFirstName', params.get('firstName'));
setText('displayLastName', params.get('lastName'));
setText('displayEmail', params.get('email'));
setText('displayPhone', params.get('phone'));
setText('displayOrg', params.get('organization'));
setText('displayTime', params.get('timestamp'));

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();