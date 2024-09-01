<script>
  import Footer from "../lib/footer.svelte";
  import Header from "../lib/header.svelte";
  const headshot = new URL("../lib/assets/portraitnormal.jpg", import.meta.url).href;
</script>

<Header />

<section id="heroSec" class="hero">
  <div id="heroDiv">
    <div id="heroText">
      <h1>Turning The Key to Your Future</h1>
      <p>Your CAPRE Real Estate Partner</p>
      <a href="/#heroSec">
        <button id="heroBttn">Meet Vanessa</button>
      </a>
    </div>
    <div id="heroImage">
      <img src={headshot} alt="headshot" id="headshot">
    </div>
  </div>
</section>

<Footer />
