const RidesMenu = (loggedInUser = {}) => {
  const { username } = loggedInUser;
  if (username) {
    return `
      <a class="navbar-item" href="/#/ridesOffered">
        Available rides
      </a>
      <a class="navbar-item" href="/#/">
        Request a ride
      </a>
    `;
  }
  return '';
}

export default RidesMenu;