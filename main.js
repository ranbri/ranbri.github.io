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
let skills = [
    "Angular",
    "NodeJS",
    "Redux",
    "REST API",
    "MongoDB",
    "jQuery",
    "SQL",
    "MySQL",
    "Postman",
    "Git",
    "Visual Studio Code",
    "HTML",
    "CSS",
    "JavaScript",
    "Excel",
    "React",
    "Bootstrap 4",
    "Mobile First Design",
    "Single Page Application",
    "Type Script",
    "Express.JS",
    "Web Services API"
]
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
  
  