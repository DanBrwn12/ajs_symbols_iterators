import Character from "./Character";
import Team from "./Team";

const char1 = new Character('Bob', 'Magician');
const char2 = new Character('Stieve', 'Warrior');

const team = new Team(char1, char2);

for(const member of team) {
    console.log(member)
}