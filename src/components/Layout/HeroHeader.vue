<template>
    <div id="hero">
        <div id="hero-content">
          <h1>{{ title }}</h1>
          <h4></h4>
          <div id="watermark">
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroHeader",
    props: {
      title: String,
      image: String
    },
    computed: {
        cssVars () {
            return {
              "background": "linear-gradient(to bottom, rgba(102, 251, 233, 0.47), rgba(102, 251, 233, 0.47))," + `url(${this.image})`,
              "height": "100vh",
              "background-repeat": "no-repeat",
              "background-size": "cover",
              "background-position": "center",
              "transition": "1s"
            } 
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
#hero {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 1s;
}
#hero-content {
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 35em;
  padding: 20em 5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 1s;
}
#watermark {
    position: absolute;
    width: 100vw;
    height: 60vh;
    max-width: 1040px;
    left: -100px;
    bottom: 0em;
    z-index: 0;

    background: url('images/Watermark_white.png');
    background-size: cover;
    background-repeat: no-repeat;
    filter: opacity(0.2);
}
h1 {
    font-family: 'Source Serif Pro', serif;
    font-weight: bold;
    font-size: 4.5em;
    transition: 1s;
    color: white;
}
h2,h3,h4,p {font-family: 'PT Sans', sans-serif;}
h2 {
    color: #A3FFF9;
    padding: 1em 0;
    font-size: 2.5em;
    margin-bottom: 1em;
}
h4 {
  margin-top: 2em;
  padding-left: 0.5em;
  border-left: 200px solid white;
  height: 1em;
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 3em;
  }
  h4 {
    height: 0.5em;
    border-left: 80px solid white;
  }
}

@media screen and (max-width: 500px) {
  #hero, #hero-content {
    height: 100vh;
    max-width: 100vw;
  }
  #hero-content{
    padding: 15em 2em;
  }
  #watermark {
    position: absolute;
    width: 110vw;
    height: 70vw;
    left: -50px;
    bottom: 0em;
  }
  h1 {
    font-size: 3em;
  }
  h4 {
    margin-top: 1em;
    border-left: 80px solid white;
  }
}

@media screen and (max-width: 400px) {
  #hero-content{
    padding: 15em 2em;
  }
  h1 {
    font-size: 2em;
  }
}
</style>