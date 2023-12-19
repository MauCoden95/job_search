const btnLoginCandidate = document.querySelector('#btnCandidate');
const btnLoginCompany = document.querySelector('#btnCompany');
const loginCompany = document.querySelector('#login-company');
const loginCandidate = document.querySelector('#login-candidate');


if (btnLoginCandidate) {
    btnLoginCandidate.addEventListener('click', () => {

        loginCandidate.classList.remove('hidden');
        loginCandidate.classList.add('block');
        loginCompany.classList.add('hidden');
        btnLoginCompany.classList.remove('bg-gray-500');
        btnLoginCandidate.classList.add('bg-gray-500');
    })
}

if (btnLoginCompany) {
    btnLoginCompany.addEventListener('click', () => {

        loginCompany.classList.remove('hidden');
        loginCompany.classList.add('block');
        loginCandidate.classList.add('hidden');
        btnLoginCandidate.classList.remove('bg-gray-500');
        btnLoginCompany.classList.add('bg-gray-500');
    })
}