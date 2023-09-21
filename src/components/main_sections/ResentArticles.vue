<script>
import { resentArticles } from "../../dataArrays";
export default {
  data() {
    return {
      isFlipped: false,
      resentArticles,
      pollicione: "src/assets/JPG/pollice-cerchio.JPG",
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<template>
  <section>
    <div class="text-center">
      <img :src="pollicione" alt="icon" />
      <h2 class="fw-bold">Resent Articles</h2>
      <p>Useful information about car.</p>
    </div>
    <div class="container">
      <div
        v-for="(resentArticle, index) in resentArticles"
        :key="index"
        class="card"
      >
        <div class="card-inner" :class="{ flipped: isFlipped }">
          <div class="card-front">
            <div class="card-image">
              <img :src="resentArticle.image" alt="car image" />
            </div>
            <span>{{ resentArticle.date }}</span>
            <h2 class="fs-4">{{ resentArticle.title }}</h2>
            <p>{{ resentArticle.abbreviatedParagraph }}</p>
            <button class="btn btn-dark my-2" @click.stop="flipCard">
              More
            </button>
          </div>
          <div class="card-back">
            <h2>{{ resentArticle.title }}</h2>
            <p>{{ resentArticle.completeParagraph }}</p>
            <button class="btn btn-dark mt-auto mb-2" @click.stop="flipCard">
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding-top: 3rem;
  padding-bottom: 5rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .card {
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    height: 350px;
    width: calc(100% / 4 - 2rem);
    border-radius: 2px;
    padding: 0.5rem;
    box-shadow: 2px 2px 2px 2px #aaa;
    perspective: 1000px;
    border: 0;
    &:hover {
      transform: scale(1.05);
    }

    .card-image {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin-bottom: 0.5rem;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      position: relative;
    }

    .btn {
      border: 1px solid #fff;
      padding: 15px 30px;
      border-radius: 2px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .card-inner.flipped {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      width: 100%;
      height: 100%;

      position: absolute;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .card-back {
      padding: 1rem;
      transform: rotateY(180deg);
    }
  }
}
</style>
