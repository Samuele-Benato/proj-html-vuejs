<script>
import { sliderSlides } from "../../dataArrays";
import { sliderOverlay } from "../../dataArrays";

export default {
  data() {
    return {
      sliderSlides,
      sliderOverlay,
      activeSlide: 0,
      autoplayInterval: null,
      showOverlay: false,
    };
  },
  methods: {
    nextSlide() {
      if (this.activeSlide < this.sliderSlides.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.sliderSlides.length - 1;
      }
    },

    goToSlide(index) {
      this.activeSlide = index;
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.sliderSlides.length;
      }, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },

    closeOverlay() {
      this.showOverlay = false;
    },

    displayMessage(index) {
      this.selectedMessage = index;
    },
  },

  mounted() {
    this.startAutoplay();
  },
};
</script>

<template>
  <div id="Home" class="slider-wrapper" tabindex="0">
    <div class="item">
      <!-- LAYOVER 'LEARN MORE' -->
      <div class="overlay" v-if="showOverlay">
        <div
          v-if="showOverlay"
          @closeOverlay="showOverlay = false"
          class="overlay-content p-4"
        >
          <span v-if="selectedMessage !== null">{{
            sliderOverlay[0].text
          }}</span>
          <div v-if="selectedMessage !== null">
            {{ sliderOverlay[0].slogan }}
          </div>
          <button
            class="bg-black text-white py-1 px-4 mt-3 fw-semibold"
            @click="closeOverlay"
          >
            Close
          </button>
        </div>
      </div>
      <div
        @mouseenter="stopAutoplay()"
        @mouseleave="startAutoplay()"
        class="item"
      >
        <img
          :src="sliderSlides[activeSlide].image"
          :alt="sliderSlides[activeSlide].title"
        />
        <div @click="prevSlide" class="prev"></div>
        <div @click="nextSlide" class="next"></div>
        <div
          v-for="index in sliderSlides"
          :key="index"
          :class="index == activeSlide ? 'active' : ''"
          @click="goToSlide(index)"
        ></div>
      </div>

      <div class="text">
        <h3 class="fs-2 fw-bold">{{ sliderSlides[activeSlide].title }}</h3>
        <p class="fw-semibold">{{ sliderSlides[activeSlide].text }}</p>
        <button
          @click="(showOverlay = true), displayMessage(index)"
          class="bg-black text-white py-1 px-4 fw-semibold"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  margin-top: 80px;
  width: 100%;
  position: relative;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item .text {
  min-width: 370px;
  width: 30%;
  position: absolute;
  left: 15%;
  top: 40%;
  text-align: left;
  color: white;
}
.prev,
.next {
  width: 20px;
  height: 20px;
  margin: 10px 0;

  position: absolute;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 999;
}
.next {
  bottom: 50%;
  left: 5%;
}
.prev {
  bottom: 50%;
  right: 5%;
}
.prev::after {
  content: "";
  width: 15px;
  height: 15px;
  border-top: 3px solid white;
  border-right: 3px solid white;
  display: block;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
}
.next::before {
  content: "";
  width: 15px;
  height: 15px;
  border-top: 3px solid white;
  border-right: 3px solid white;
  display: block;
  position: absolute;
  bottom: 35%;
  left: 50%;
  transform: translate(-50%) rotate(-135deg);
}

.overlay {
  display: inline-block;
  border-radius: 5px;
  background-color: rgba($color: black, $alpha: 0.8);
  color: white;
  font-weight: 600;
  text-align: center;

  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 10%;
  z-index: 99;
}
</style>
