// Init Github

const github = new Github;
const newUI = new UI;

//Search Input
const searchUser= document.getElementById('searchUser');

// Search input event listener

searchUser.addEventListener('keyup', (e) => {
  // Get input text

  const userText = e.target.value;

  if(userText !== '') {
    github.getUser(userText).then(data => {
      if(data.profileData.message === 'Not Found') {
        //Show alert
        newUI.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        newUI.showProfile(data.profileData);
        newUI.showRepos(data.repos);
      }
    })
  } else {
    // Clear profile
    newUI.clearProfile();
  }

});