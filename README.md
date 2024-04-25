# VIV-Q Quiz

This is a quiz to test your level of aphantasia.

## Credit

This is a replica of the aphantasia quiz hosted by the Aphantasia Network.

https://aphantasia.com/study/vviq/

## Documentation

The questions of the quiz can be modified by adjusting the `questions` variable in the Javascript:

```javascript
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
        }
	}

```

- The `prompt` and `question` keys of the dictionary are for text.
- The `image` key links to an optional image to be displayed.
- `answers` is a dictionary of answers, which can be keyed with numbers, letters, or strings.
- `scores` maps categories of numerical scores, which are incremented by the value when the question is selected.

The above example just has one scoring dimension--__vividness__.

The quiz also asks for an email address and name, and sends this information to a Google Scripts endpoint for processing.