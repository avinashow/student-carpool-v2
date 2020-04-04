import AccountMenu from './AccountMenu.js';

let Navbar = {
    render: async (loggedInUser) => {
      const accountMenu = AccountMenu(loggedInUser);
        let view =  /*html*/`
             <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img class="logo" src="https://www.freelogodesign.org/file/app/client/thumb/a80be70d-b48c-471d-9c29-ff5ac5d6ab3d_200x200.png">
                        </a>
                        <a role="button" id="nav-toggle" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
                        <div class="navbar-start">
                          <a class="navbar-item" href="/#/">
                            Home
                          </a>
                          <a class="navbar-item" href="/#/about">
                            About
                          </a>
                          <a class="navbar-item" href="/#/secret">
                            Secret
                          </a>
                        </div>
                        <div class="navbar-end">
                          ${accountMenu}
                        </div>
                    </div>
                </div>
            </nav>
        `
        return view
    },
    after_render: async () => { }

}

export default Navbar;