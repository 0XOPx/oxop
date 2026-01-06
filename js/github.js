async function fetchGitHubData() {
    const user = "0XOPx";
    const repo = "oxop";

    try {
        const userResponse = await fetch(`https://api.github.com/users/${user}`);
        const userData = await userResponse.json();
        document.getElementById("profile-repos").textContent = userData.public_repos;

        const repoResponse = await fetch(`https://api.github.com/repos/${user}/${repo}`);
        const repoData = await repoResponse.json();
        
        document.getElementById("repo-stars").textContent = repoData.stargazers_count;
        
        const date = new Date(repoData.updated_at);
        document.getElementById("repo-update").textContent = date.toLocaleDateString();
    } catch (error) {
        console.error("Error fetching GitHub data");
    }
}

fetchGitHubData();