let question = {
  title: 'Question 1',
  alternatives: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
  correctAnswer: 0
};

function quiz(q) {
  let title = document.getElementById('title');
  title.textContent = q.title;
  
  let alternatives = document.querySelectorAll('.alternative');
  console.log(alternatives);
  alternatives.forEach(function(element, index){
    element.textContent = q.alternatives[index];
      element.addEventListener('click', function(){
      if (q.correctAnswer == index) {
        console.log('Correct Answer!');
      } else {
        console.log('Wrong Answer!');
      }
  });
  
  let btn = document.getElementById('button');
btn.addEventListener('click', function() {
  console.log("Good luck!");
    });
  });
}

quiz(question);