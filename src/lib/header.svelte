<script>
  import capreLogo from "$lib/assets/CapreLogo.webp"

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

  function hamburgerFunc() {
    var x = document.getElementById("navlist");
    var v = document.getElementById("mainHeader")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      v.style.display = "block";
      x.style.display = "block";
    }
  }
  
</script>

<section id="mainHeader" class="header">
  <div class="mainHeader">
    <a href="/">
      <img id="capreHeader" src={capreLogo} alt="capreLogo" />
    </a>
    <div class="headerWords">
      <h2 class="headerText">Vanessa Vega</h2>
      <p class="headerText">DRE 02227468</p>
      <p class="headerText">(909)746-972</p>
    </div>

    <a href="#0;" id="hamDiv" on:click={hamburgerFunc}>
      <div id="hamburger1"></div>
      <div id="hamburger2"></div>
      <div id="hamburger3"></div>
    </a>
  </div>

  <ul id="navlist" class="navlist">
    <li class="navitems">
      <a class="navText" href="/#aboutSec" on:click={handleAnchorClick}>About</a
      >
    </li>
    <li class="navitems">
      <a class="navText" href="/#listings" on:click={handleAnchorClick}
        >Listings</a
      >
    </li>
    <li class="navitems">
      <a class="navText" href="/#contact" on:click={handleAnchorClick}
        >Contact</a
      >
    </li>
  </ul>
</section>
