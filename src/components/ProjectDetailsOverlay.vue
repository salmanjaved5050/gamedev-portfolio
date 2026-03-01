<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay" @click="$emit('close')">
      </div>
      <div class="dialog" :style="{ 'background-color': project.accentColor }">
        <h1 class="dialog-title">{{ project.name }}</h1>
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-times fa-lg fa-fw"></i></div>
        <div class="dialog-content">
          <div class="paragraph">{{ project.description }}</div>

          <div v-if="project.videoUrl" class="paragraph center">
            <iframe class="youtube" :src="project.videoUrl" frameborder="0" allowfullscreen></iframe>
          </div>

          <div v-if="project.storeUrl" class="paragraph center">
            <a :href="project.storeUrl" target="_blank" class="store-button">
              <i :class="storeIcon"></i>
              {{ project.storeLabel }}
              <i class="fa-solid fa-arrow-up-right-from-square store-external"></i>
            </a>
          </div>

          <div v-if="project.features.length" class="paragraph">
            Main features :
            <ul>
              <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
            </ul>
          </div>

          <div v-if="project.contributions.length" class="paragraph contributions-section">
            <div class="contributions-header">
              Contributions
            </div>
            <ul>
              <li v-for="(item, index) in project.contributions" :key="'c-' + index">{{ item }}</li>
            </ul>
          </div>

          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectData from "@/data/ProjectData";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    project: {
      type: Object as () => ProjectData,
      default: () => new ProjectData({
        id: "", name: "", description: "", iconUrl: ""
      })
    },
  },
  watch: {
    visible(isVisible: boolean) {
      document.body.style.overflow = isVisible ? 'hidden' : '';
    }
  },
  computed: {
    storeIcon(): string {
      const url = this.project.storeUrl || '';
      if (url.includes('roblox.com')) return 'fa-solid fa-gamepad';
      if (url.includes('play.google.com')) return 'fa-brands fa-google-play';
      if (url.includes('apps.apple.com')) return 'fa-brands fa-apple';
      return 'fa-solid fa-store';
    }
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 11;
  margin: 12px;
  padding-bottom: 10px;
  color: white;
  border-radius: 16px;
  overflow-y: auto;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
}

iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin: 0px;
  padding: 22px;
  background: inherit;
}

.dialog-content {
  padding: 20px;
  background-color: var(--bg-content);
  color: var(--text-color);
}

.dialog-close {
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.2s ease;
}

.dialog-close:hover {
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
}

.dialog-bottom {
  text-align: center;
  margin-top: 24px;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  display: inline-block;
  padding: 10px 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--accent), var(--warm));
  color: white;
  opacity: 1;
  transition: all 0.3s ease;
}

a.dialog-close-button:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(124, 111, 255, 0.3);
}

.store-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 10px;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  color: var(--text-color);
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.05em;
  opacity: 1;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.store-button:hover {
  border-color: var(--accent);
  background: linear-gradient(135deg, rgba(124, 111, 255, 0.12), rgba(255, 107, 107, 0.08));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 111, 255, 0.2);
  opacity: 1;
  color: var(--accent);
}

.store-button i:first-child {
  font-size: 1.2em;
  color: var(--accent);
}

.store-external {
  font-size: 0.75em;
  opacity: 0.4;
  margin-left: 2px;
}

.contributions-section {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
}

.contributions-header {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  color: var(--accent);
  margin-bottom: 8px;
}

.contributions-header i {
  margin-right: 6px;
}

.contributions-section ul {
  margin: 8px 0 0 0;
  padding-left: 20px;
}

.contributions-section li {
  margin-bottom: 6px;
  line-height: 1.6;
}

@media only screen and (min-width: 620px) {
  .dialog {
    position: fixed;
    top: 40px;
    bottom: 40px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1000px;
    margin: 0;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}
</style>
