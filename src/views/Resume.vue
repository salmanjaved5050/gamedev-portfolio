<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Salman Javed</strong>, an experienced gameplay programmer based in Lahore, Pakistan.
      <br /> My experience includes working on various projects including full blown experiences, mobile games and
      educational titles.
      <br />
      <br /> I have a strong background in lua and C# programming language and I am proficient with both game
      engines Roblox and Unity.
      My work primarily focused on delivering high-quality gameplay experiences while working at multiple game studios.

      <br />
      <br /> Currently I'm working as a senior gameplay programmer at <strong>Super League</strong>. Besides
      development, I'm passionate about games (obviously) and love exploring locations,
      <br /> reading horror novels and hiking.
    </div>
    <div class="photo">
      <img src="img/resume-photo.jpg" alt="Photo of Salman" style="width:100%; height:100%" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Senior Gameplay Programmer - Super League
      </h3>
      <h4>April 2024 - Present</h4>
      <div>
        <li> Developed mini games on Google Be Internet Awesome.</li>
        <li> Implemented front-end and progression system.</li>
        <li> Designed and implemented player lobbies. </li>
        <li> Developed building system and challenges for Avid Creator Planet.</li>
        <li> Worked on player endorsements, shop, first time user experiences and player back-end.</li>
      </div>

      <h3>Senior Gameplay Programmer - Suit Up Games
      </h3>
      <h4>March 2023 - November 2023</h4>
      <div>
        <li> Developed core game mechanics for Littlest Pet Shop game.</li>
        <li> Implemented user interfaces using Fusion as a front-end framework.</li>
        <li> Worked on player achievements and daily rewards. </li>
        <li> Developed pet shop and pet hatching experience along with customization</li>
        <li> Used Knit framework for client and server communication using services and controllers.</li>
      </div>

      <h3>Gameplay Programmer - Dubit
      </h3>
      <h4>October 2022 - February 2023</h4>
      <div>
        <li> Worked on metaverse projects related to fashion industry and K-Pop band NCT-127 and Nickverse.</li>
        <li> Designed and implemented interfaces using roact as front-end framework.</li>
        <li> Worked on in-game economy and obby systems.</li>
        <li> Implemented in-game shop and accessories customization system for enhanced player experience.</li>
      </div>

      <h3>Gameplay Programmer - Tintash
      </h3>
      <h4>October 2020 - October 2022</h4>
      <div>
        <li>Worked on NFT based projects and developed NFT minting features, procedural NFT generation and
          multiplayer mechanics.</li>
        <li> Setup rendering pipeline on cloud machine instances to generate marketplace video, gif and png of NFT's
          through Unity CLI on each mint.</li>
        <li> Laid down multiplayer architecture using <strong>Photon/Mirror Networking SDK's</strong>.</li>
        <li> Development of educational 2D games in Unity game engine.</li>
      </div>

      <h3>Gameplay Programmer - Gamefam (Part Time)
      </h3>
      <h4>September 2019 - July 2022</h4>
      <div>
        <li> Developed roleplay, shooting and AI features for multiple titles.</li>
        <li> Implemented seamless multiplayer experience and lobbies for obbies, racing simulators and fps shooters.
        </li>
        <li> Designed and created interfaces along with storage and backend logic.</li>
        <li> Implemented game passes, economy system and overall game progression mechanics.</li>
      </div>

      <h3>Gameplay Programmer - Tintash
      </h3>
      <h4>August 2018 - October 2020</h4>
      <div>
        <li>Worked on hyper-casual projects and
          implemented core architecture, gameplay mechanics, AI, Character
          Controllers and Level Editor Utilities in <strong>Unity3d</strong> game engine.</li>
        <li> Setup CI/CD pipelines for projects which lead to the application being pushed to production fast and
          improved overall workflow.</li>
        <li> Collaborated with designers and product owners for rolling out game mechanics and features while working
          on hyper-casual prototypes.</li>
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div class="skill" style="border:solid">C#</div>
        <div class="skill" style="border:solid">Lua</div>
        <div class="skill" style="border:solid">C++</div>
      </div>

      <div class="skill-set">
        <h3>Game Dev</h3>
        <div class="skill" style="border:solid">Roblox</div>
        <div class="skill" style="border:solid">Unity3d</div>
        <div class="skill" style="border:solid">Blender</div>
      </div>

        <div class="skill-set">
        <h3>Tools & Frameworks</h3>
        <div class="skill" style="border:solid">Git</div>
        <div class="skill" style="border:solid">Jira/Trello</div>
        <div class="skill" style="border:solid">Visual Studio</div>
        <div class="skill" style="border:solid">Fusion</div>
        <div class="skill" style="border:solid">Rojo</div>
        <div class="skill" style="border:solid">React</div>
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>LUMS - 2018</h3>
      <h4>Masters in Computer Science</h4>
      <div>Specialty in human computer interaction, games and their role in education.</div>

      <h3>PUCIT - 2016</h3>
      <h4>Bachelors in Software Engineering</h4>
      <div>Specialty in software design and principles.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent and progressional level.</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>One of the most amazing games I've played are Baldurs Gate, Max Payne, Elder Scrolls, WOW, Souls Games &
          many more over which I gladly ruined my childhood and teenage.</div>

        <h3>I 🧡 Travelling</h3>
        <div>I used to stay at home a lot but then got hooked to travelling once I visited Thailand and Malaysia,
          amazing places and hoping to travel way more :)
        </div>

        <h3>I 💛 Horror</h3>
        <div>A huge fan of horror movies and novels to the bone. Read R.L. Stien all my teenage and always show up at
          cinema when there's a spooky movie around.</div>

        <h3>I 💚 Sports</h3>
        <div>Primarily enjoy hiking but also take part in indoor games in my social circle over weekends.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
  components: {
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}

h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}

h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 30px;
    max-width: 230px !important;
  }

  .skill {
    float: left;
    border: 1px solid hsla(0, 0%, 86.3%, .44);
    padding: 2px 10px;
    margin: 5px;
  }
}
</style>