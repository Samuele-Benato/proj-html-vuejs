<script>
import { footerAccountLinks } from "../dataArrays";
import { footerQuickLinks } from "../dataArrays";

export default {
  data() {
    return {
      footerLogo: "src/assets/PNG/logo-footer-autocar11.png",
      footerAccountLinks,
      footerQuickLinks,
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="image-container mb-2">
            <img :src="footerLogo" alt="footer logo" />
          </div>
          <div class="contact pt-4">
            <font-awesome-icon
              icon="location-dot"
              class="icon"
            ></font-awesome-icon>
            <a href="#">New Jersey, USA</a>
          </div>
          <div class="contact">
            <font-awesome-icon
              icon="phone-volume"
              class="icon"
            ></font-awesome-icon>
            <a href="#">+1 (234) 567 89 10</a>
          </div>
          <div class="contact mb-3">
            <font-awesome-icon icon="envelope" class="icon"></font-awesome-icon>
            <a href="#">exemple@exemple.com</a>
          </div>
          <img src="src/assets/JPG/Cattura.JPG" alt="" />
        </div>
        <div class="col-4">
          <h3 class="text-white">Join Our Newsletter</h3>
          <p class="text-white">
            Subscribe to be informed about our services and products.
          </p>
          <div class="input-group flex-nowrap">
            <input
              type="text"
              class="form-control py-3 px-4"
              placeholder="Your Email Address"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              required
            />
          </div>
          <button type="button" class="btn py-3 px-4 w-100 my-2">
            Subscribe
          </button>
        </div>
        <div class="col-2 links-footer">
          <h3 class="text-white">My Account</h3>
          <ul class="p-0">
            <li
              style="list-style-type: none"
              v-for="(footerAccountLink, index) in footerAccountLinks"
              :key="index"
            >
              <a
                style="text-decoration: none; color: white; font-weight: 700"
                href="#"
                >{{ footerAccountLink }}</a
              >
            </li>
          </ul>
        </div>
        <div class="col-2 links-footer">
          <h3 class="text-white">Quick links</h3>
          <ul class="p-0">
            <li
              style="list-style-type: none"
              v-for="(footerQuickLink, index) in footerQuickLinks"
              :key="index"
            >
              <a
                style="text-decoration: none; color: white; font-weight: 700"
                href="#"
                >{{ footerQuickLink }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center text-white my-3">
      <p>ç 2022 Autocar - All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #000;
  padding: 4rem 0 2rem 0;
  .row {
    align-items: center;
    align-items: flex-start;
    justify-content: space-between;

    img {
      max-width: 100%;
    }
    .contact {
      display: flex;
      align-items: center;
      justify-content: start;
      color: #6b6b6b;
      .icon {
        margin: 0.5rem 0.5rem 0.5rem 0;
        width: 25px;
        height: 25px;
      }
      a {
        text-decoration: none;
        color: #6b6b6b;
      }
    }
    .col-4 {
      button {
        background: white;
        &:hover {
          transform: scale(1.05);
          color: white;
          background-color: #6b6b6b;
        }
      }
    }
    .col-2 {
      .links-footer {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
