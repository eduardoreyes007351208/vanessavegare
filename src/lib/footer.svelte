<script>
  const capreLogo = new URL("$lib/assets/CapreLogo.webp", import.meta.url).href;

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<section id="footer" class="footer">
  <div id="footer">
    <div id="footerContent">
      <div id="copyright">
        <img src={capreLogo} alt="CaproLogo" id="footerLogo" />
        <p>© 2023 Capre</p>
      </div>
      <div id="footerLinks">
        <ul id="linkList">
          <li id="linkItem">
            <a href="/#mainHeader" on:click={handleAnchorClick}>
              <p>Home</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#aboutSec" on:click={handleAnchorClick}>
              <p>About</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#listings" on:click={handleAnchorClick}>
              <p>Listings</p>
            </a>
          </li>
          <li id="linkItem">
            <a href="/#contact" on:click={handleAnchorClick}>
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
