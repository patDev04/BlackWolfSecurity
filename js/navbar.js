"strict-mode";

document.body.insertAdjacentHTML(
  "afterbegin",
  `
    <nav>
        <main>
            <div class='nav'>
                <a href='./index.html'><img src="../images/lOGO.svg" alt="logo" class="nav-logo"/></a>
                <div class="nav-item">
                    <button><a href="./index.html">Home</a></button>
                    <button class="nav-link"><a href="./about.html">About</a></button>
                </div>
            </div>
        </main>
    </nav>
`
);
