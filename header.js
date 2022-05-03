const template = document.createElement('template');
template.innerHTML = `
<div id="container">
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#">Wiki Contents</a>
        <ul>
          <li><a href="#">Main Mechanics</a>
            <ul>
             <li><a href="#">Adventuring</a>
                <ul>
                  <li><a href="Combat">Combat</a></li>
                  <li><a href="#">Events</a>
                    <ul>
                      <li><a href="EventMechanics">Event Mechanics</a></li>
                      <li><a href="Shrine">Shrine</a></li>
                      <li><a href="Clearing">Clearing</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Skills</a>
                <ul>
                  <li><a href="Stats">Stats</a></li>
                  <li><a href="Traits">Traits</a></li>
                </ul>
              </li>
              <li><a href="#">Inventory</a>
                <ul>
                <li><a href="Weapons">Weapons</a></li>
                <li><a href="Armor">Armor</a></li>
                <li><a href="Lockets">Lockets</a></li>
                <li><a href="Potions">Potions</a></li>
                <li><a href="Miscellaneous">Miscellaneous</a></li>
                </ul>
              </li>
              <li><a href="Resting">Resting</a></li>
              <li><a href="TownHall">Town Hall</a>
                <ul>
                  <li><a href="NameChange">Name Change</a></li>
                  <li><a href="Quests">Quests</a></li>
                  <li><a href="EncyclopediaOfEvents">Encyclopedia of Events</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Side Mechanics</a>
            <ul>
             <li><a href="Statistics">Statistics</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="About">About this Wiki</a></li>
    </ul>
  </nav>
</div> 
`;
document.body.appendChild(template.content);