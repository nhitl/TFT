var teamBuild = document.getElementsByClassName("team_builds");

var element = ``;

for (let i = 1; i <= 26; i+=2) {
  if (i + 1 > 26) {
    break;
  }
  element += ` <div class="team_build">
    <img src="image/${i}.png" alt="">
    <img src="image/${i + 1}.png" alt="">
</div>`;
}
teamBuild[0].insertAdjacentHTML("afterbegin", element);
