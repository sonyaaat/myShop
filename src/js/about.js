import getCurrentUser from './getCurrentUser';
const loggedIn = document.querySelector('.js-login');
const isAdmin = document.querySelector('.js-admin');
const isUser = document.querySelector('.js-user');
const logout = document.querySelector('.logout');
const about = async () => {
  const res = await getCurrentUser();
  if (res === 'no') {
    loggedIn.classList.remove('none');
    isAdmin.classList.add('none');
  
  } else {
   
    logout.classList.remove("none")
    loggedIn.classList.add('none');
    

    if (res.role === 'user') {
   
      isUser.classList.remove('none');
    } else {
      isAdmin.classList.remove('none');
    }
    logout.addEventListener("click",()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
      window.location.href = '/index.html';
    })
  }
};
about();

