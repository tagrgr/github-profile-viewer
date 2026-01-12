const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseURL = 'https://api.github.com';


btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;
    
    if(username) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
        
        try {
            const response = await fetch(`${baseURL}/users/${username}`);
            if(!response.ok) {
                alert("Usuario nao encontrado. Por favor, verifique o nome de usuario e tente novamente");
                profileResults.innerHTML = "";
                return;
            }

            const userData = await response.json();
            // console.log(userData);  // apenas para verificar se os dados foram obtidos corretamente

            profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar"> 
                <div class="profile-info">
                    <h2>${userData.name}</h2>
                    <p>${userData.bio || "nao possui bio cadastrada 😒"}</p>
                </div>
            </div>
            `;
        
        } catch(error) {
            console.log("Erro ao buscar o perfil do usuario: ", error);
            alert("Ocorreu um erro ao buscar o perfil do usuario. Por favor, tente novamente.");
            alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
            profileResults.innerHTML = "";
        } 
        
    } else {
        alert("Por favor, digite um nome de usuario do Github.");
        profileResults.innerHTML = "";
    }
});