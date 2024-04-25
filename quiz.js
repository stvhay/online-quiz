/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const questions = [
        {
            prompt: "Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Think of some relative or friend whom you frequently see (but who is not with you at present) and consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Visualise a rising sun. Consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Visualise a rising sun. Consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Visualise a rising sun. Consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Visualise a rising sun. Consider carefully the picture that comes before your mind’s eye.",
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
            prompt: "Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",
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
            prompt: "Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",
            question: "A window display including colors, shapes and details of individual items for sale.",
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
            prompt: "Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",
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
            prompt: "Think of the front of a shop which you often go to. Consider the picture that comes before your mind’s eye.",
            question: "You enter the shop and go to the counter. The counter Assistant serves you. Money changes hands.",
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
            prompt: "Finally think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",
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
            prompt: "Finally think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",
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
            prompt: "Finally think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",
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
            prompt: "Finally think of a country scene which involves trees, mountains and a lake. Consider the picture that comes before your mind’s eye.",
            question: "A strong wind blows on the trees and on the lake causing reflections in the water.",
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
        }
    ];
    let results = {}

    function showQuestion(n) {
        const currentQuestion = questions[n];
        // Generate the HTML for the question text
        let questionHTML = `<div class='question'>`
        if (currentQuestion.prompt) {
            questionHTML += `<h4>${currentQuestion.prompt}</h4>`;
        }
        if (currentQuestion.question) {
            questionHTML += `<h2>${currentQuestion.question}</h2>`;
        }
        questionHTML += `</div>`;


        // Check if an image path is provided and valid and add image
        if (currentQuestion.image) {
            questionHTML += `<img src="${currentQuestion.image}" alt="Question Image" style="width:100%; max-width:40ex;">`;
        }

        // Append the answers as buttons
        questionHTML += `${Object.keys(currentQuestion.answers).map(key => `
            <button onclick="selectAnswer('${key}', ${n})">
                ${currentQuestion.answers[key]}
            </button>`)
            .join('<br>')}`;
        // questionHTML += `${Object.keys(currentQuestion.answers).map(key => `
        //     <button onclick="selectAnswer('${key}', ${n})">
        //         ${key} : ${currentQuestion.answers[key]}
        //     </button>`)`
        //     .join('<br>')}`;

        // Set the innerHTML of the quizContainer
        quizContainer.innerHTML = questionHTML;
        updateProgressBar(n-1);
    }

    function updateProgressBar(questionIndex) {
        const progressBar = document.getElementById('progressBar');
        const totalQuestions = questions.length;
        const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    window.selectAnswer = function(answerKey, questionIndex) {
        if (questionIndex < questions.length - 1) {
            updateScores(answerKey, questionIndex);
            showQuestion(questionIndex + 1);
        } else {
            updateScores(answerKey, questionIndex);
            getEmail();
        }
    };

    function updateScores(answerKey, questionIndex) {
        const currentQuestion = questions[questionIndex];
        Object.keys(currentQuestion.scores[answerKey]).forEach(category => {
            if (!results[category]) {
                results[category] = 0;
            }
            results[category] += currentQuestion.scores[answerKey][category];
        });
    }

    function getEmail() {
        quizContainer.innerHTML = ""
        updateProgressBar(questions.length-1);
        let resultsHTML = `<p><div id="userForm"><input type="text" id="name" placeholder="Enter your name"><input type="email" id="email" placeholder="Enter your email"><button id="emailbtn">Submit</button></div>`
        resultsHTML += `<p>Privacy: We are not storing your scores, we are simply signing you up for Sadie’s very occasional newsletter. You can unsubscribe at any time.`
        resultsContainer.innerHTML = resultsHTML;
        document.getElementById('emailbtn').addEventListener('click', submitResults);
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function submitResults() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var data = {
            name: name,
            email: email
        };
        if (!validateEmail(data.email)) {
            alert('Please enter a valid email address.');
            return; // Stop the function if the email is invalid
        }

        fetch('https://script.google.com/macros/s/YOUR_DEPLOYMENT_HERE/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        showResults();
    }

    function showResults() {
        quizContainer.innerHTML = "";
        if (results.vividness <= 32) { // Aphantasia
            let resultsHTML = `<h2>Aphantasia</h2>`;
            resultsHTML += `<a href="https://www.sadied.com/aphantasia-association-1">Welcome to the club!</a> Compared to most people, your visual imagination is quite dim. That means that everyone else in your meditation circle actually is “seeing” that beach sunrise in their mind’s eye, while you were just thinking about one. “Undressing someone with your eyes,” is actually possible, it turns out -- at least for some people. (Not us, though.) `;
            resultsHTML += `<p><b>What does this mean?</b> Aphantasia is correlated with a tendency to go into STEM fields, a tendency to remember your past as stories rather than as moments you can mentally time travel to and relive in a sensory way, and a lack of emotion when thinking about your past or future.`;
            resultsHTML += `<p>These correlations are weak, however. So far, scientists have only found a strong link between aphantasia and the neural correlates of visualization -- which is to say, activation of the visual areas of your brain when you’re trying to visualize. When aphants try to visualize, fMRI shows the visual areas of our brain refuse to light up.`;
            resultsHTML += `<p>The inability to visualize does not necessarily mean you are bad or good at anything. Indeed, there is a small subset of aphants who are weirdly good at spatial relation tasks. Most of us, however, are not great at mentally rotating objects and we tend to have a poor visual memory.`;
            resultsHTML += `<p>Interestingly, most of us do dream in visual imagery and we can hallucinate on drugs. Aphantasia is a lack of voluntary visualization, involuntary visualization is still on the table for us.`;
            resultsContainer.innerHTML = resultsHTML;
            return;
        }
        if (results.vividness <= 48) { // Hypophantasia
            let resultsHTML = `<h2>Hypophantasia</h2>`;
            resultsHTML += `<p>Hello there hypophant! You have lower than average visual imagery, but you’re within the normal range.`;
            resultsContainer.innerHTML = resultsHTML;
            return;
        }
        if (results.vividness <= 64) { // Neurotypical
            let resultsHTML = `<p>Hello there hypophant! You have lower than average visual imagery, but you’re within the normal range.`;
            resultsContainer.innerHTML = resultsHTML;
            return;
        }
        else { // Hyperphantasia
            let resultsHTML = `<h2>Hyperphantasia</h2>`;
            resultsHTML += `<p>Hello there, hyperphant! Compared to most people, your visual imagination is quite vivid. You can summon up images that are bright and realistic.`;
            resultsHTML += `<p><b>What does this mean?</b> There’s not much research on hyperphantasia yet, but overall you guys tend to gravitate to artistic and creative fields. You also tend to remember things episodically instead of semantically -- which means you can mentally time travel to moments from your past and relive sensory details. As a result, you may have stronger emotions and increased difficulty getting over or moving on from past trauma. (Of course, you probably recall happy moments more vividly than other people, too.)`;
            resultsHTML += `<p>There are, however, many people who buck these trends. Vivid visualization abilities have only been strongly linked to activation in the brain’s visual areas (when you try to visualize). That means, you’re not just imagining that you’re good at imagining. Links to other traits have been weak so far.`;
            resultsContainer.innerHTML = resultsHTML;
            return;
        }
    }

    showQuestion(0);
});