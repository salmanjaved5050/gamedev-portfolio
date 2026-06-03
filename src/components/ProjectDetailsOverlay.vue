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

          <div v-if="project.screenshots.length && activeScreenshot" class="paragraph gallery-section">
            <div class="slideshow">
              <button
                v-if="hasMultipleScreenshots"
                class="slideshow-nav previous"
                type="button"
                aria-label="Previous screenshot"
                @click="showPreviousScreenshot"
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <img
                class="slideshow-image"
                :src="activeScreenshot.url"
                :alt="activeScreenshot.alt"
              />
              <button
                v-if="hasMultipleScreenshots"
                class="slideshow-nav next"
                type="button"
                aria-label="Next screenshot"
                @click="showNextScreenshot"
              >
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div v-if="hasMultipleScreenshots" class="slideshow-footer">
              <div class="slideshow-count">
                {{ currentScreenshotIndex + 1 }} / {{ project.screenshots.length }}
              </div>
              <div class="slideshow-thumbnails">
                <button
                  v-for="(screenshot, index) in project.screenshots"
                  :key="'thumb-' + index"
                  class="slideshow-thumbnail"
                  :class="{ active: index === currentScreenshotIndex }"
                  type="button"
                  :aria-label="'Show screenshot ' + (index + 1)"
                  @click="selectScreenshot(index)"
                >
                  <img :src="screenshot.url" :alt="screenshot.alt" />
                </button>
              </div>
            </div>
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
import ProjectData, { Screenshot } from "@/data/ProjectData";

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
  data: function () {
    return {
      currentScreenshotIndex: 0,
    };
  },
  watch: {
    visible(isVisible: boolean) {
      document.body.style.overflow = isVisible ? 'hidden' : '';
      if (isVisible) {
        this.currentScreenshotIndex = 0;
      }
    },
    project() {
      this.currentScreenshotIndex = 0;
    }
  },
  computed: {
    activeScreenshot(): Screenshot | null {
      return this.project.screenshots[this.currentScreenshotIndex] || null;
    },
    hasMultipleScreenshots(): boolean {
      return this.project.screenshots.length > 1;
    },
    storeIcon(): string {
      const url = this.project.storeUrl || '';
      if (url.includes('roblox.com')) return 'fa-solid fa-gamepad';
      if (url.includes('play.google.com')) return 'fa-brands fa-google-play';
      if (url.includes('apps.apple.com')) return 'fa-brands fa-apple';
      return 'fa-solid fa-store';
    }
  },
  methods: {
    selectScreenshot(index: number) {
      this.currentScreenshotIndex = index;
    },
    showPreviousScreenshot() {
      const screenshotCount = this.project.screenshots.length;
      this.currentScreenshotIndex = (this.currentScreenshotIndex + screenshotCount - 1) % screenshotCount;
    },
    showNextScreenshot() {
      const screenshotCount = this.project.screenshots.length;
      this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % screenshotCount;
    },
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

.gallery-section {
  margin-top: 24px;
}

.slideshow {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.slideshow-image {
  display: block;
  width: 100%;
  height: auto;
}

.slideshow-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.slideshow-nav:hover {
  background: rgba(0, 0, 0, 0.65);
  transform: translateY(-50%) scale(1.05);
}

.slideshow-nav.previous {
  left: 12px;
}

.slideshow-nav.next {
  right: 12px;
}

.slideshow-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 12px;
}

.slideshow-count {
  flex: 0 0 auto;
  color: var(--text-muted);
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  font-weight: 600;
}

.slideshow-thumbnails {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  overflow-x: auto;
}

.slideshow-thumbnail {
  flex: 0 0 auto;
  width: 72px;
  height: 46px;
  padding: 0;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  opacity: 0.55;
  transition: border-color 0.2s ease, opacity 0.2s ease;
}

.slideshow-thumbnail.active,
.slideshow-thumbnail:hover {
  border-color: var(--accent);
  opacity: 1;
}

.slideshow-thumbnail img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
