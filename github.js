class Github {
  constructor() {
    this.client_id = '3c37018600db101cbd25';
    this.client_secret = '73bce742f0e5138bea84029b5aae1970020b6f69';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}
    ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profileData,
      repos
    }
  }
}