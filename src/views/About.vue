<template>
  <div class="about-page">
    <div class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Hello! <span class="wave">👋</span></h1>
          <p class="intro">
            I'm <strong>Salman Javed</strong>—a gameplay programmer with 8 years of experience crafting engaging games and interactive experiences.
          </p>
          <p class="sub-intro">
            As both a developer and an avid gamer, I love dissecting game design, mechanics, and systems. Always eager to brainstorm innovative ideas or discuss what makes games truly compelling.
          </p>
          <p class="sub-intro">
            My expertise spans <strong>Roblox</strong> and <strong>Unity3D</strong>, where I've built games that balance creativity with technical execution. Let's talk games, design and player experiences!
          </p>
        </div>
        <div class="hero-avatar">
          <div class="avatar-frame">
            <img src="img/avatar.png" alt="Salman" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  margin-bottom: 80px;
}

.hero {
  position: relative;
  padding: 20px 0 40px;
}

.hero-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 40px;
}

.hero-text {
  max-width: 700px;
}

.intro {
  font-size: 1.2em;
  line-height: 1.7em;
  margin-bottom: 16px;
}

.sub-intro {
  color: var(--text-muted);
  line-height: 1.7em;
  margin-bottom: 12px;
}

.hero-avatar {
  flex-shrink: 0;
}

.avatar-frame {
  position: relative;
  display: inline-block;
}

.avatar-frame img {
  position: relative;
  z-index: 1;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}

.wave {
  display: inline-block;
  animation: wave-hand 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-hand {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
}

@media only screen and (min-width: 620px){
  .hero {
    padding: 40px 0 60px;
  }

  .hero-content {
    flex-direction: row;
    align-items: center;
  }

  .avatar-frame img {
    width: 260px;
    height: 260px;
  }

  .intro {
    font-size: 1.3em;
  }
}
</style>
