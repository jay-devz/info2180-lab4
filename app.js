const superheroes = [
    { alias: "Captain America" },
    { alias: "Ironman" },
    { alias: "Spiderman" },
    { alias: "Captain Marvel" },
    { alias: "Black Widow" },
    { alias: "Hulk" },
    { alias: "Hawkeye" },
    { alias: "Black Panther" },
    { alias: "Thor" },
    { alias: "Scarlett Witch" }
];

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
    let heroList = '<ul>\n';
    
    superheroes.forEach(function(hero) {
        heroList += '  <li>' + hero.alias + '</li>\n';
    });
    
    heroList += '</ul>';
    
    alert(heroList);
});