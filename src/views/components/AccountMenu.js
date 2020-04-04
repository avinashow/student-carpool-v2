const AccountMenu = (loggedUser = {}) => {
  const { username = undefined }= loggedUser;
  if (username) {
    return `
      <div class="navbar-item">
        ${username}
      </div>
    `;
  }
  return `
    <div class="navbar-item">
      <div class="buttons">
        <a class="button is-primary" href="/#/register">
          <strong>Sign up</strong>
        </a>
        <a class="button is-light" href="/#/login">
          Log in
        </a>
      </div>
    </div>`;
}

export default AccountMenu;