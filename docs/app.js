function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
//document.querySelector('.nav-link').addEventListener('click', classToggle);