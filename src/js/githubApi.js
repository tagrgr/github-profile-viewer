export async function fetchGithubUser(username) {
    const baseURL = 'https://api.github.com';

    const response = await fetch(`${baseURL}/users/${username}`);
    if(!response.ok) {
        throw new Error("Usuario nao encontrado. Por favor, verifique o nome de usuario e tente novamente");
    }    
    return await response.json();
        
}