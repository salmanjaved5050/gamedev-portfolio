<template>
  <div class="error-page">
    <div class="error-code">404</div>
    <div class="error-emoji">🙈</div>
    <p class="error-message">Oops! This page doesn't exist.</p>
    <router-link to="/" class="error-home">Go Home</router-link>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
  padding: 60px 20px;
}

.error-code {
  font-size: 8em;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent), var(--warm));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.error-emoji {
  font-size: 4em;
  margin: 20px 0;
}

.error-message {
  font-size: 1.3em;
  color: var(--text-muted);
  margin-bottom: 30px;
}

.error-home {
  display: inline-block;
  padding: 12px 32px;
  background: linear-gradient(135deg, var(--accent), var(--warm));
  color: white;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.error-home:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(124, 111, 255, 0.3);
}
</style>
