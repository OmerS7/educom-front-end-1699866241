function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('show-menu');
  
    const hamburgerIcon = document.querySelector('.icon-menu-svg');
    const closeIcon = document.querySelector('.icon-menu-close-svg');
    const menuItems = document.querySelector('.menu-container .text');
  
    hamburgerIcon.classList.toggle('hide-icon');
    closeIcon.classList.toggle('hide-icon');
  
    if (menuContainer.classList.contains('show-menu')) {
      // Toon menu-items en close-icon wanneer het menu wordt geopend
      menuItems.style.display = 'flex'; // Gebruik flex om de items te tonen
      closeIcon.style.display = 'block';
    } else {
      // Verberg menu-items en close-icon wanneer het menu wordt gesloten
      menuItems.style.display = 'none';
      closeIcon.style.display = 'none';
    }
  }