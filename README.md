# Online Quiz

This is a browser Javascript template to administer and score an online user "quiz".

Sample quizzes are provided for aphantasia (vviq) and personality (OCEAN) tests.

The code supports multi-dimensional tests, with the ability to sum up scores
across the dimensions and establish minimum and maximum criteria for each.

## Credit

Sample quizzes are replicas of:

- https://aphantasia.com/study/vviq/
- https://openpsychometrics.org/tests/IPIP-BFFM/

## Documentation

The example HTML template can be changed to link to custom:
- CSS style (`style.css`)
- Quiz data (`quizzes/`)
- Email collection code (`submit/`)

### Defining questions

The questions of the quiz are defined with the `test.questions` variable:

```javascript
test.questions = [
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
    }
}
```

- `questions` is an array of question dictionaries.
- The `prompt` and `question` keys of the dictionary are for text.
- The `image` key links to an optional image to be displayed.
- `answers` is a dictionary of answers, which can be keyed with numbers, letters, or strings.
- `scores` maps categories of numerical scores, which are incremented by the value when the question is selected.

The above example just has one scoring dimension--__vividness__.

### Defining results criteria and display

The evaluation and display of quiz results is defined with the `test.questions` variable:

```javascript
test.results = [
    {
        neurotypical: {
            criteria: {
                vividness: {
                    max: 64,
                },
            },
            display: {
                description: `
                    <p>You have higher-than-average visual imagery -- but you’re still in the
                    normal range.`,
                scoreTransform: (n) => { return n; },
            },
        },
    },
];
```

- The `test.results` entry is an array of dictionaries defining behavior and output for each result category.
- `neurotypical` is an example category.
- `criteria` are test criteria keyed on dimension. If there are no criteria, a dimension (or dimensions)
should be provided, which will ensure the score for that dimension will be displayed.
- `vividness` is an example dimension with one criterion `max`.
- `max` and `min` are supported test names.
- `display` contains possible `heading` and `description` strings, and an (optional) score `scoreTransform` function .

### Data Collection

Data collection behavior is activated when a `submitEmailData` variable is defined.

`submitEmailData` is as a dictionary containing the following keys:
- `aboveFormHTML` : HTML data to display above a data submission form.
- `formHTML` : HTML data for the form itself (excluding `<form>` tags).
- `belowFormHTML : HTML data to display below a data submission form.
- `submit` : A javascript function to submit the form data to an endpoint.

```javascript
const submitEmailData = {
    formHTML: `
        <input type="text" id="name" placeholder="Enter your name" required>
        <input type="email" id="email" placeholder="Enter your email" required>
        <button>Submit</button>`,
    belowFormHTML: `
        <p>Privacy: We are not storing your scores, we are simply signing you up to a
           very occasional newsletter. You can unsubscribe at any time.`,
    submit: () => {
        const url = 'http://example.com/api/endpoint';
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const data = {
            name: name,
            email: email
        };

        return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    },
};
```
