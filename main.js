$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('nav a[href*="#]').on('click', function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
});

function toggleLightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var tr = document.getElementById("skills-table");
    tr.classList.toggle("light-mode");
    var ul = document.getElementById("timeline");
    ul.classList.toggle("light-mode");
    var copyright = document.getElementById("copyright");
    copyright.classList.toggle("light-copyright");
    var lightbult = document.getElementById('lightbulb');
    lightbult.classList.toggle('light-bulb');
 }


let skills = [
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap 5.1",
    "JavaScript",
    "jQuery",
    "TypeScript",
    "Angular 13",
    'NGXS',
    "React",
    "Redux",
    "NodeJS",
    "MongoDB",
    "SQL",
    "Git",
    "Mobile First Design",
    "Single Page Application",
]
skills = skills.reverse();
var table = document.getElementById('skills-table');
function AddSkills() {
    i = 0;
    for (let skill of skills) {
        var row = table.children[0].children[0];
        var cell = row.insertCell(i)
        cell.innerHTML = skill;
        setColor(cell);
    }
}
AddSkills();

function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setColor(child) {
    child.style.setProperty('--shadowColor', getColor());
  }
  
  