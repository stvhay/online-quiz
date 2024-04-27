/* jshint esversion: 6 */

// this quiz code needs a test dictionary loaded externally that provides the content of the test.
// The variable submitUrlData.url can be defined to activate email collection.

document.addEventListener('DOMContentLoaded', () => {
    // Define DOM elements to display quiz and results.
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const progressBar = document.getElementById('progressBar');

    // Collect results.
    let scores = {};

    // Place question n into quiz container.
    const showQuestion = (n) => {
        const showKey = false;
        const { prompt, question, image, answers } = test.questions[n];
        
        // Prepare an array of answers (HTML fragments).
        const answerFragments = Object.keys(answers).map(answer => `
            <button onclick="selectAnswer('${answer}', ${n})">
                ${showKey ? `${answer}: ` : ''}${answers[answer]}
            </button>`);

        quizContainer.innerHTML = `
            <div class='question'>
                ${prompt ? `<h4>${prompt}</h4>` : ''}
                ${question ? `<h2>${question}</h2>` : ''}
            </div>
            ${image ? `<img src="${image}" alt="Question Image" style="width:100%; max-width:40ex;">` : '' }
            ${answerFragments.join('<br>')}`;

        updateProgressBar(n-1);
    };

    const updateProgressBar = (questionIndex) => {
        const totalQuestions = test.questions.length;
        const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    };

    // Increment scores according to their category weights.
    const updateScores = (answerKey, questionIndex) => {
        const currentQuestion = test.questions[questionIndex];
        Object.keys(currentQuestion.scores[answerKey]).forEach(category => {
            if (!results[category]) results[category] = 0;
            results[category] += currentQuestion.scores[answerKey][category];
        });
    };

    // Collect user info.
    const getEmail = () => {
        // Clear the quiz and finalize progress bar.
        quizContainer.innerHTML = "";
        updateProgressBar(test.questions.length-1);

        // Present the form.
        resultsContainer.innerHTML = `
            ${submitEmailData.aboveFormHTML ? submitEmailData.aboveFormHTML : ""}
            <p><form id="userForm">${submitEmailData.formHTML}</form>
            ${submitEmailData.belowFormHTML ? submitEmailData.belowFormHTML : ""}`;
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            submitEmailData.submit();
            showResults();
        });
    };

    // Interpret the results and display the results.
    const showResults = () => {
        // clear other displays
        quizContainer.innerHTML = "";
        progressBar.style.display = 'none';

        // Each dictionary in test.results array defines criteria across all dimensions, and display items, for each result category.
        for (const resultsCategory of test.results) {
            // The resultsCategory dict has one key to ensure test are processed in order.
            if (resultsCategory.length != 1) console.log("Malformed resultsCategory: length != 1");
            const category = Object.keys(resultsCategory)[0];
            const { criteria, display } = resultsCategory[category];

            // tests is a dict of tests keyed on dimension.
            // display is a dict with keys heading and description.
            // The logic is if any test fails, then the score is not in this category.
            let failed = false; // keep track if a test has failed.
            for (const [dimension, tests] of Object.entries(criteria)) { // iterate over dimensions
                for (const [test, criterion] of Object.entries(tests)) { // iterate over tests
                    switch (test) {
                        case 'max': // Tests if criteron is above the maximum.
                            if (scores[dimension] > criterion) failed = true;
                            break;
                        case 'min': // Tests if criteron is below the minimum.
                            if (scores[dimension] < criterion) failed = true;
                            break;
                        default:
                            console.log(`An unsupported test was defined in the criteria.'${test}'.`);
                    }
                    if (failed) break; // There is no need to test more conditions, since one has failed.
                }
            }
            if (!failed) { // all conditions have passed, therefore we have found the category and can exit.
                let { heading, description } = display;
                resultsContainer.innerHTML = `
                    ${heading ? `<h2>${heading}</h2>` : ''}
                    ${description ? description : ''}`;
                break;
            }
        }
    };

    // Define window-scope function attached to static HTML DOM element.
    window.selectAnswer = (answerKey, questionIndex) => {
        updateScores(answerKey, questionIndex);
        if (questionIndex < test.questions.length - 1) {
            showQuestion(questionIndex + 1);
        } else if (typeof submitEmailData === 'undefined') {
            showResults();
        } else {
            getEmail();
        }
    };

    // Initiate the quiz.
    showQuestion(0);
});