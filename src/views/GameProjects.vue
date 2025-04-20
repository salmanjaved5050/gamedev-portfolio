<template>
  <div>
    <h1>Roblox Projects</h1>

    <div style="margin-bottom: 30px;">
      Following are the major projects I heavily contributed to while working for various clients and studios like Gamefam, Suit Up Games, Super League and Dubit.
    </div>

    <ProjectsList v-bind:projects="projects" />

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
