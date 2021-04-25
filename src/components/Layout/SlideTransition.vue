<template>
<div>
   <div class="intro">
      <div class="intro-text">
        <h1 class="hide">
          <span class="text">Creating innovation</span>
        </h1>
        <h1 class="hide">
          <span class="text">For Everyday</span>
        </h1>
        <h1 class="hide">
          <span class="text">people.</span>
        </h1>
      </div>
      </div>
    <div ref="slider" class="slider"></div>
</div>
</template>

<script>
import { gsap } from "gsap"

export default {
    name: "SlideTransition",
    mounted(){
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      //tl.to(".text", { y: "0%", duration: 2, stagger: 0.5 }, "=1");
      tl.to(".slider", { x: "100%", duration: 1.5, delay: 0.5 });
      tl.to(".intro", { x: "100%", duration: 1 }, "-=1");
    }
}
</script>

<style>

.intro {
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.slider {
  background: #A3FFF9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10001;
  transform: translateX(-100%);
}

.intro-text {
  color: rgb(233, 233, 233);
  font-family: "Heebo", sans-serif;
  font-size: 1rem;
}

.hide {
  background: black;
  overflow: hidden;
}

.hide span {
  transform: translateY(100%);
  display: inline-block;
}
</style>