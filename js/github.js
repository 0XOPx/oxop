async function fetchGitHubData() {
    const user = "0XOPx";
    const repo = "oxop";
    let success = null;

    try {
        const userResponse = await fetch(`https://api.github.com/users/${user}`);
        const userData = await userResponse.json();
        document.getElementById("profile-repos").textContent = userData.public_repos;

        const repoResponse = await fetch(`https://api.github.com/repos/${user}/${repo}`);
        const repoData = await repoResponse.json();
        
        document.getElementById("repo-stars").textContent = repoData.stargazers_count;
        
        const date = new Date(repoData.updated_at);
        document.getElementById("repo-update").textContent = date.toLocaleDateString();
        
        success = true;
    } catch (error) {
        success = false;
        console.error("Error fetching GitHub data");
    } finally {
        if (success === false) {
            console.log("GitHub data fetch failed.");
            document.querySelector(".github-info").style.boxShadow = "0 0 15px #ae2727ff";
        }
        else if (success === true) {
            console.log("GitHub data fetched successfully.");
            document.querySelector(".github-info").style.boxShadow = "0 0 15px #27ae60";
        }
    }
}

fetchGitHubData();