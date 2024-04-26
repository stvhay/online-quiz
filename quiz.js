/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    // Define DOM elements to display quiz and results.
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const progressBar = document.getElementById('progressBar');

    // Define quiz questions and scoring.
    const test = {
        questions: [
            {
                prompt: `Think of some relative or friend whom you frequently see (but who is not with
                    you at present) and consider carefully the picture that comes before your mind’s
                    eye.`,
                question: "The exact contours of face, head, shoulders and body.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of some relative or friend whom you frequently see (but who is not with
                    you at present) and consider carefully the picture that comes before your mind’s
                    eye.`,
                question: "Characteristic poses of head, attitudes of body etc.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of some relative or friend whom you frequently see (but who is not with
                    you at present) and consider carefully the picture that comes before your mind’s
                    eye.`,
                question: "The precise carriage, length of step etc., in walking.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of some relative or friend whom you frequently see (but who is not with
                    you at present) and consider carefully the picture that comes before your mind’s
                    eye.`,
                question: "The different colors worn in some familiar clothes.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                    mind’s eye.`,
                question: "The sun rising above the horizon into a hazy sky.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                    mind’s eye.`,
                question: "The sky clears and surrounds the sun with blueness.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                    mind’s eye.`,
                question: "Clouds. A storm blows up with flashes of lightning.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                    mind’s eye.`,
                question: "A rainbow appears.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of the front of a shop which you often go to. Consider the picture that
                    comes before your mind’s eye.`,
                question: "The overall appearance of the shop from the opposite side of the road.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of the front of a shop which you often go to. Consider the picture that
                    comes before your mind’s eye.`,
                question: `A window display including colors, shapes and details of individual items
                    for sale.`,
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of the front of a shop which you often go to. Consider the picture that
                    comes before your mind’s eye.`,
                question: "You are near the entrance. The color, shape and details of the door.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Think of the front of a shop which you often go to. Consider the picture that
                    comes before your mind’s eye.`,
                question: `You enter the shop and go to the counter. The counter Assistant serves you.
                    Money changes hands.`,
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                    Consider the picture that comes before your mind’s eye.`,
                question: "The contours of the landscape.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                    Consider the picture that comes before your mind’s eye.`,
                question: "The color and shape of the lake.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                    Consider the picture that comes before your mind’s eye.`,
                question: "The color and shape of the trees.",
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
            {
                prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                    Consider the picture that comes before your mind’s eye.`,
                question: `A strong wind blows on the trees and on the lake causing reflections in the
                    water.`,
                image: null,
                answers: {
                    1: 'No image at all, I only “know” I am thinking of the object',
                    2: 'Dim and vague image',
                    3: 'Moderately realistic and vivid',
                    4: 'Realistic and reasonably vivid',
                    5: 'Perfectly realistic, as vivid as real seeing'
                },
                scores: {
                    1: { vividness: 1 },
                    2: { vividness: 2 },
                    3: { vividness: 3 },
                    4: { vividness: 4 },
                    5: { vividness: 5 },
                }
            },
        ],

        results: [
            {
                aphantasia: {
                    criteria: {
                        vividness: {
                            max: 32,
                        },
                    },
                    display: {
                        heading: "Aphantasia",
                        description: `
                            <a href="https://www.sadied.com/aphantasia-association-1">Welcome to the club!</a>
                            Compared to most people, your visual imagination is quite dim. That means that
                            everyone else in your meditation circle actually is “seeing” that beach sunrise
                            in their mind’s eye, while you were just thinking about one. “Undressing someone
                            with your eyes,” is actually possible, it turns out -- at least for some people.
                            (Not us, though.)
                            <p><b>What does this mean?</b> Aphantasia is correlated with a tendency to go into
                            STEM fields, a tendency to remember your past as stories rather than as moments you
                            can mentally time travel to and relive in a sensory way, and a lack of emotion when
                            thinking about your past or future.
                            <p>These correlations are weak, however. So far, scientists have only found a
                            strong link between aphantasia and the neural correlates of visualization -- which
                            is to say, activation of the visual areas of your brain when you’re trying to
                            visualize. When aphants try to visualize, fMRI shows the visual areas of our brain
                            refuse to light up.
                            <p>The inability to visualize does not necessarily mean you are bad or good at
                            anything. Indeed, there is a small subset of aphants who are weirdly good at
                            spatial relation tasks. Most of us, however, are not great at mentally rotating
                            objects and we tend to have a poor visual memory.
                            <p>Interestingly, most of us do dream in visual imagery and we can hallucinate on
                            drugs. Aphantasia is a lack of voluntary visualization, involuntary visualization
                            is still on the table for us.`,
                    },
                },
            },
            {
                hypophantasia: {
                    criteria: {
                        vividness: {
                            max: 48,
                        },
                    },
                    display: {
                        heading: "Hypophantasia",
                        description: `
                            <p>Hello there hypophant! You have lower than average visual imagery, but you’re
                            within the normal range.`,
                    },
                },
            },
            {
                neurotypical: {
                    criteria: {
                        vividness: {
                            max: 64,
                        },
                    },
                    display: {
                        description: `
                            <p>You have higher-than-average visual imagery -- but you’re still in the normal
                            range.`,
                    },
                },
            },
            {
                hyperphantasia: { 
                    criteria: { },
                    display: {
                        heading: "Aphantasia",
                        description: `
                            <h2>Hyperphantasia</h2>
                            <p>Hello there, hyperphant! Compared to most people, your visual imagination is
                            quite vivid. You can summon up images that are bright and realistic.
                            <p><b>What does this mean?</b> There’s not much research on hyperphantasia yet, but
                            overall you guys tend to gravitate to artistic and creative fields. You also tend
                            to remember things episodically instead of semantically -- which means you can
                            mentally time travel to moments from your past and relive sensory details. As a
                            result, you may have stronger emotions and increased difficulty getting over or
                            moving on from past trauma. (Of course, you probably recall happy moments more
                            vividly than other people, too.)
                            <p>There are, however, many people who buck these trends. Vivid visualization
                            abilities have only been strongly linked to activation in the brain’s visual areas
                            (when you try to visualize). That means, you’re not just imagining that you’re good
                            at imagining. Links to other traits have been weak so far.`,
                    },
                },
            },
        ],
    };

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
            <p><form id="userForm">
                <input type="text" id="name" placeholder="Enter your name" required>
                <input type="email" id="email" placeholder="Enter your email" required>
                <button id="emailbtn">Submit</button></form>
            <p>Privacy: We are not storing your scores, we are simply signing you up for Sadie’s
            very occasional newsletter. You can unsubscribe at any time.`;
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();
            submitEmail();
        });
    };

    const submitEmail = () => { // POST to Google script endpoint.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const data = {
            name: name,
            email: email
        };

        fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_HERE/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        showResults();
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
        } else {
            getEmail();
        }
    };

    // Initiate the quiz.
    showQuestion(0);
});