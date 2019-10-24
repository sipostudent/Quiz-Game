const correctAnswers = ['B', 'B', 'B', 'B']; // stores all of the correct answers of the quiz.
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => { // `EventListener` attached to form to listen for when a user has submitted the form.
  e.preventDefault(); // Prevent the default action of `page refreshing`.

  let score = 0; // Set local variable score of 0 to being with
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; // The user answers from each input field.

  // check the answers
  userAnswers.forEach((answer, index) => { // the `answer` is the value iterated and the `index` is the position in the array.
    if (answer === correctAnswers[index]){ // Compares answer with the equivilant `index` in the correct answer `array`
      score += 25; // 25 gets added to the `score` (meaning 25%) if the equivilant `index` matches the correct answer `array` but nothing happens if their is no match.
    }
  });

	// show the result
	scrollTo(0,0); // scrolls user to top of page where score output is displayed
  result.querySelector('span').textContent = `${score}%`; // outputs total score percentage, but only after `scrollTo` has taken user to the top of page to see the output
	result.classList.remove('d-none');
	
	let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`; // output updates everytime `callBack function` fires
    if(output === score){ // callBack function is stopped if output and score are equal
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});
