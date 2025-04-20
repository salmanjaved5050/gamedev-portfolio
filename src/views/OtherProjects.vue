<template>
  <div>
    <h1>Unity3d Projects</h1>

    <div style="margin-bottom: 30px;">
      Below are some of the highlihted projects I've developed on Unity3d, each with its own unique challenge.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
