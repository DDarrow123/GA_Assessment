

//TYPEWRITER FUNCTION
var timer
var i = 0;
var speed = 60;

function typeWriter(txt, textId) {
  if (i < txt.length) {

    document.getElementById(textId).innerHTML += txt.charAt(i);
    i++;
    timer = setTimeout(function(){ typeWriter(txt, textId) }, speed);

  }
}

function clearTypewriter(textId){
  clearTimeout(timer);
  document.getElementById(textId).innerHTML = '';
  i = 0;
}


$('#first').mouseover(function(){ typeWriter('I am an aspiring web developer who loves front-end web development especially!', 'aspire') });
$('#first').mouseout(function(){ clearTypewriter('aspire') })

$('#second').mouseover(function(){ typeWriter('I currently work in the fashion industry', 'current') });
$('#second').mouseout(function(){ clearTypewriter('current') })

$('#third').mouseover(function(){ typeWriter('I aim to be a leader for women & girls in both tech & fashion', 'goal') });
$('#third').mouseout(function(){ clearTypewriter('goal') })

$('#fourth').mouseover(function(){ typeWriter('I can\'t wait to build more incredible websites!', 'build') });
$('#fourth').mouseout(function(){ clearTypewriter('build') })
