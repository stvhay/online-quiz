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
            questionHTML += `<h2>${currentQuestion.question}</h2></div>`;
        }

        // Check if an image path is provided and valid
        if (currentQuestion.image) {
            questionHTML += `<img src="${currentQuestion.image}" alt="Question Image" style="width:100%; max-width:40ex;">`;
        }

        // Append the answers as buttons
        questionHTML += `${Object.keys(currentQuestion.answers).map(key => `
            <button onclick="selectAnswer('${key}', ${n})">
                ${currentQuestion.answers[key]}
            </button>
        `).join('<br>')}`;
        // questionHTML += `${Object.keys(currentQuestion.answers).map(key => `
        //     <button onclick="selectAnswer('${key}', ${n})">
        //         ${key} : ${currentQuestion.answers[key]}
        //     </button>
        // `).join('<br>')}`;

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
        let resultsHTML = '<div id="userForm"><input type="text" id="name" placeholder="Enter your name"><input type="email" id="email" placeholder="Enter your email"><button id="emailbtn">Submit</button></div>'
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
        quizContainer.innerHTML = ""
        let resultsHTML = '<h1>Results</h1><ul>';
        Object.keys(results).forEach(category => {
            if (category !== 'innerHTML') {
                resultsHTML += `<li>${category}: ${results[category] || 0} </li>`;
            }
        });
        resultsHTML += `</ul>`;
        resultsContainer.innerHTML = resultsHTML;
    }

    showQuestion(0);
});