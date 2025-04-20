<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I’m <strong>Salman Javed</strong>—a gameplay programmer with 8 years of experience crafting engaging games and interactive experiences.<br/><br/>
        As both a developer and an avid gamer, I thrive on dissecting game design, mechanics, and systems—always eager to brainstorm innovative ideas or discuss what makes games truly compelling.<br/><br/>
        My expertise spans Roblox and Unity3D, where I’ve built games that balance creativity with technical execution. Let’s talk games, design and player experiences!
      </div>

<!-- <div style="margin-top: 20px;">Some of the <router-link to="/game-projects">roblox game projects</router-link> I've worked on, along with <router-link to="/other-projects">other stuff</router-link>.</div> -->
      
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Salman" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>