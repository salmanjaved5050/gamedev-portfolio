<template>
  <div>
    <div class="projects-list">
      <template v-for="project in projects">
        <div :key="project.id" @click="showDetails(project)" class="project-item"
          :class="{ 'wide': project.isWide, 'high': project.isHigh }">
          <div class="project-item-image" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
          </div>

          <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
            <div class="title-text">
              {{ project.name }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <ProjectDetailsOverlay v-on:close="closePopup" :visible="showPopup" :project="selectedProject" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      selectedProject: null as ProjectData | null,
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      this.selectedProject = item;
      this.showPopup = true;
      window.scrollTo(0, 0);
    },
    closePopup: function () {
      this.showPopup = false;
    },
  },
});
</script>

<style scoped>
.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(124, 111, 255, 0.2);
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: transform 0.4s ease;
}

.project-item:hover .project-item-image {
  transform: scale(1.08);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
  backdrop-filter: blur(8px);
  border-radius: 0 0 12px 12px;
}

.title-text {
  padding: 10px 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.95em;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }

  .high {
    grid-row-end: span 2;
  }
}
</style>