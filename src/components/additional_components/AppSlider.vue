<script>
const slides = [
  {
    image: "src/assets/JPG/slider-autocar-5.jpg",
    title: "Buy And Sell Your Car At Its Value",
    text: "Find the right price and dealer",
  },
  {
    image: "src/assets/JPG/slider-autocar-6.jpg",
    title: "Your Trusted Source For Quality Cars And Service",
    text: "Driving Dreams: Where Cars Meet Perfection",
  },
];

export default {
  data() {
    return {
      slides,
      activeSlide: 0,
      autoplayInterval: null,
    };
  },
  methods: {
    nextSlide() {
      if (this.activeSlide < this.slides.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },

    goToSlide(index) {
      this.activeSlide = index;
    },

    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length;
      }, 3000);
    },

    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
  },

  mounted() {
    this.startAutoplay();
  },
};
</script>

<template>
  <div class="slider-wrapper" tabindex="0">
    <div class="item">
      <div
        @mouseenter="stopAutoplay()"
        @mouseleave="startAutoplay()"
        class="item"
      >
        <img
          :src="slides[activeSlide].image"
          :alt="slides[activeSlide].title"
        />
        <div @click="prevSlide" class="prev"></div>
        <div @click="nextSlide" class="next"></div>
        <div
          v-for="index in slides"
          :class="index == activeSlide ? 'active' : ''"
          @click="goToSlide(index)"
        ></div>
      </div>

      <div class="text">
        <h3 class="fs-2 fw-bold">{{ slides[activeSlide].title }}</h3>
        <p class="fw-semibold">{{ slides[activeSlide].text }}</p>
        <button class="bg-black text-white py-1 px-4 fw-semibold">
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
</style>
