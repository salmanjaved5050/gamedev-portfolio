<template>
  <div id="app">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/google.png",
  "img/projects/lps.png",
  "img/projects/avid.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

// --- CSS Custom Properties for theming ---
:root {
  --bg-body: @bodyBgColor;
  --bg-content: @contentBgColor;
  --bg-card: @cardBgColor;
  --text-color: @textColor;
  --text-muted: @textMuted;
  --border-color: @borderColor;
  --accent: @primaryAccent;
  --accent-light: @primaryAccentLight;
  --warm: @warmAccent;
  --warm-light: @warmAccentLight;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
}

body.light-mode {
  --bg-body: @lightBodyBg;
  --bg-content: @lightContentBg;
  --bg-card: @lightCardBg;
  --text-color: @lightText;
  --text-muted: @lightTextMuted;
  --border-color: @lightBorder;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
}

html {
  scroll-behavior: smooth;
}

html, body {
  margin: 0px;
  background-color: var(--bg-body);
  transition: background-color 0.3s ease;
}

#app {
  background-color: var(--bg-content);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
  font-family: 'Inter', 'Karla', Helvetica, Arial, sans-serif;
}

h1 {
  font-size: 2.8em;
  font-weight: 700;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px;
  line-height: 1.15em;
  background: linear-gradient(135deg, var(--accent), var(--warm));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  color: var(--accent);
}

a {
  color: var(--text-color);
  text-decoration: none;
  opacity: 0.5;
  transition: opacity 0.2s ease, color 0.2s ease;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

.main {
  padding: 12px;
}

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 60px;
    line-height: 1.1em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

// --- Page Transitions ---
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter {
  opacity: 0;
  transform: translateY(16px);
}

.fade-leave-active {
  opacity: 0;
  transform: translateY(-8px);
}

// --- Utility classes ---
.accent-text {
  color: var(--accent);
}

.page-intro {
  color: var(--text-muted);
  font-size: 1.05em;
  line-height: 1.7;
  margin-bottom: 30px;
}

.card {
  background-color: var(--bg-card);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

// --- Scrollbar styling ---
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--bg-body);
}
::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--accent-light);
}

</style>
