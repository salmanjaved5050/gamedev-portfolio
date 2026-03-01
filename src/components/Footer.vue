<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-socials">
        <a :href="'mailto:' + email" title="Email"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/salmanjaved5050/" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://steamcommunity.com/profiles/76561198340811237/" target="_blank" title="Steam"><i class="fa-brands fa-steam"></i></a>
        <a href="https://github.com/salmanjaved5050" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
      </div>
      <div class="footer-text">
        Reach me at <a :href="'mailto:' + email" class="footer-link">{{ email }}</a> or <router-link to="/contact" class="footer-link">through here</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EMAIL } from "@/constants";

export default Vue.extend({
  name: "Footer",
  data() {
    return {
      email: EMAIL
    };
  }
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: var(--bg-body);
  width: 100%;
  font-size: 0.85em;
  border-top: 1px solid var(--border-color);
  transition: background-color 0.3s ease;
}

.footer-content {
  padding: 24px 20px;
  text-align: center;
}

.footer-socials {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
}

.footer-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  font-size: 1.1em;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.footer-socials a:hover {
  opacity: 1;
  background: var(--accent);
  border-color: var(--accent);
  color: white;
  transform: translateY(-2px);
}

.footer-text {
  color: var(--text-muted);
}

.footer-link {
  color: var(--accent) !important;
  opacity: 0.8 !important;
}

.footer-link:hover {
  opacity: 1 !important;
}

@media only screen and (min-width: 620px) {
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 40px;
  }
}
</style>