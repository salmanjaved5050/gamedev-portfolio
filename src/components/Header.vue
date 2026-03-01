<template>
  <div class="header">
    <div class="nav-bar">
      <div class="nav-links">
        <router-link to="/">About me</router-link>
        <router-link to="/game-projects">Roblox</router-link>
        <router-link to="/other-projects">Unity</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <button class="theme-toggle" @click="toggleTheme" :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
        <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      isDark: true
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      document.body.classList.toggle('light-mode', !this.isDark);
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.isDark = false;
      document.body.classList.add('light-mode');
    }
  }
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  line-height: 3em;
  gap: 8px;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.85em;
  letter-spacing: 0.05em;
}

// Animated underline
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--warm));
  transition: width 0.3s ease, left 0.3s ease;
  border-radius: 1px;
}

a:hover::after,
.router-link-exact-active::after {
  width: 100%;
  left: 0%;
}

.router-link-exact-active {
  opacity: 1;
  color: var(--accent);
}

.theme-toggle {
  background: none;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-color);
  cursor: pointer;
  padding: 8px 10px;
  font-size: 1.1em;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.theme-toggle:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  transform: rotate(20deg);
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
    flex-wrap: wrap;
  }

  .nav-links {
    flex: 1;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
