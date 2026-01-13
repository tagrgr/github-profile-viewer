import { fetchGithubUser } from "./githubApi.js";
import { renderProfile } from "./profileView.js";

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;
    
    if (!username) {
        alert("Enter a GitHub username.");
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Loading...</p>`;
        
    try {
        const userData = await fetchGithubUser(username);
        renderProfile(userData, profileResults);
    } catch(error) {
        console.log("Erro ao buscar o perfil do usuario: ", error);
        alert("Usuario nao encontrado, por favor verifique o nome de usuario e tente novamente.");
        profileResults.innerHTML = "";
    }
});