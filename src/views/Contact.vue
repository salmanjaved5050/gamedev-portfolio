<template>
  <div class="contact-page">
    
    <h1>Let's get in touch!</h1>

    <p class="contact-intro">If you'd like to collaborate, discuss game development, or just chat about games, feel free to reach out—I'd love to connect!</p>

    <div class="contact-cards">
      <a :href="'mailto:' + email" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fa-solid fa-envelope"></i></div>
        <div class="contact-label">Email</div>
        <div class="contact-value">{{ email }}</div>
      </a>
      <a :href="linkedinUrl" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-linkedin"></i></div>
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value">in/salmanjaved5050</div>
      </a>
      <a :href="steamUrl" target="_blank" class="contact-card">
        <div class="contact-icon"><i class="fa-brands fa-steam"></i></div>
        <div class="contact-label">Steam</div>
        <div class="contact-value">steam/JohnLocke</div>
      </a>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EMAIL, LINKEDIN_URL, STEAM_URL } from "@/constants";

export default Vue.extend({
  name: "Contact",
  data() {
    return {
      email: EMAIL,
      linkedinUrl: LINKEDIN_URL,
      steamUrl: STEAM_URL
    };
  }
});
</script>

<style scoped>
.contact-page {
  max-width: 700px;
  margin: 0 auto;
}

.contact-intro {
  color: var(--text-muted);
  font-size: 1.1em;
  line-height: 1.7;
  margin-bottom: 40px;
}

.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(124, 111, 255, 0.15);
}

.contact-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--accent), var(--warm));
  color: white;
  font-size: 1.2em;
  flex-shrink: 0;
}

.contact-label {
  font-size: 0.8em;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
}

.contact-value {
  font-size: 1em;
  font-weight: 500;
}

@media only screen and (min-width: 620px) {
  .contact-cards {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 24px 30px;
  }

  .contact-icon {
    width: 56px;
    height: 56px;
    font-size: 1.4em;
  }
}
</style>
