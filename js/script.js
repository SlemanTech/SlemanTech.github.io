$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

/// skills

document.addEventListener('DOMContentLoaded', () => {
  // Define the skills data categorized
  const skillsData = {
    programmingLanguages: [
      { img: '/images/icons/icons8-javascript-48.png', name: 'JavaScript' },
      { img: '/images/icons/icons8-csharp-48.png', name: 'C#' },
      { img: '/images/icons/icons8-python-48.png', name: 'Python' },
      { img: '/images/icons/icons8-java-48.png', name: 'Java' },
      { img: '/images/icons/icons8-c-48.png', name: 'C' },
      { img: '/images/icons/icons8-assembly-48.png', name: 'Assembly' },
      { img: '/images/icons/icons8-microsoft-sql-server-48.png', name: 'SQL' }
    ],
    frameworks: [
      { img: '/images/icons/icons8-react-native-48.png', name: 'React' },
      { img: '/images/icons/icons8-react-native-48.png', name: 'React Native' },
      { img: '/images/icons/icons8-html-48.png', name: 'HTML' },
      { img: '/images/icons/icons8-css-48.png', name: 'CSS' },
      { img: '/images/icons/icons8-bootstrap-48.png', name: 'Bootstrap' },
      { img: '/images/icons/icons8-nodejs-48.png', name: 'Node.js' },
      { img: '/images/icons/icons8-express-js-48.png', name: 'Express.js' },
      { img: '/images/icons/jquery.png', name: 'jquery' },
      { img: '/images/icons/git.png', name: 'Git' }
    ],
    databases: [
      { img: '/images/icons/icons8-mongo-db-48.png', name: 'MongoDB' },
      { img: '/images/icons/icons8-firebase-48.png', name: 'Firebase' }
    ],
    concepts: [
      { img: '/images/icons/oop.png', name: 'OOP' },
      { img: '/images/icons/algorithm.png', name: 'Algorithms' },
      { img: '/images/icons/data structures.png', name: 'Data Structures' },
      { img: '/images/icons/problem solving.png', name: 'Problem Solving' }
    ]
  };

  // Function to create skill boxes
  function createSkillBox(skill) {
    const box = document.createElement('div');
    box.className = 'box';

    const img = document.createElement('img');
    img.src = skill.img;
    img.alt = skill.name;

    const title = document.createElement('h3');
    title.textContent = skill.name;

    box.appendChild(img);
    box.appendChild(title);
    return box;
  }

  // Populate each category with skills
  Object.keys(skillsData).forEach(category => {
    const container = document.getElementById(`${category}`);
    skillsData[category].forEach(skill => {
      const skillBox = createSkillBox(skill);
      container.appendChild(skillBox);
    });
  });
});


// css animation