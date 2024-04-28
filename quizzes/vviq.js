/* jshint esversion: 6 */

const answers = {
    1: 'No image at all, I only “know” I am thinking of the object',
    2: 'Dim and vague image',
    3: 'Moderately realistic and vivid',
    4: 'Realistic and reasonably vivid',
    5: 'Perfectly realistic, as vivid as real seeing',
};

const scores = {
    1: { vividness: 1 },
    2: { vividness: 2 },
    3: { vividness: 3 },
    4: { vividness: 4 },
    5: { vividness: 5 },
};

// Define quiz questions and scoring.
const test = {
    questions: [
        {
            prompt: `Think of some relative or friend whom you frequently see (but who is not with
                you at present) and consider carefully the picture that comes before your mind’s
                eye.`,
            question: "The exact contours of face, head, shoulders and body.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of some relative or friend whom you frequently see (but who is not with
                you at present) and consider carefully the picture that comes before your mind’s
                eye.`,
            question: "Characteristic poses of head, attitudes of body etc.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of some relative or friend whom you frequently see (but who is not with
                you at present) and consider carefully the picture that comes before your mind’s
                eye.`,
            question: "The precise carriage, length of step etc., in walking.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of some relative or friend whom you frequently see (but who is not with
                you at present) and consider carefully the picture that comes before your mind’s
                eye.`,
            question: "The different colors worn in some familiar clothes.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                mind’s eye.`,
            question: "The sun rising above the horizon into a hazy sky.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                mind’s eye.`,
            question: "The sky clears and surrounds the sun with blueness.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                mind’s eye.`,
            question: "Clouds. A storm blows up with flashes of lightning.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Visualise a rising sun. Consider carefully the picture that comes before your
                mind’s eye.`,
            question: "A rainbow appears.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of the front of a shop which you often go to. Consider the picture that
                comes before your mind’s eye.`,
            question: "The overall appearance of the shop from the opposite side of the road.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of the front of a shop which you often go to. Consider the picture that
                comes before your mind’s eye.`,
            question: `A window display including colors, shapes and details of individual items
                for sale.`,
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of the front of a shop which you often go to. Consider the picture that
                comes before your mind’s eye.`,
            question: "You are near the entrance. The color, shape and details of the door.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Think of the front of a shop which you often go to. Consider the picture that
                comes before your mind’s eye.`,
            question: `You enter the shop and go to the counter. The counter Assistant serves you.
                Money changes hands.`,
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                Consider the picture that comes before your mind’s eye.`,
            question: "The contours of the landscape.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                Consider the picture that comes before your mind’s eye.`,
            question: "The color and shape of the lake.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                Consider the picture that comes before your mind’s eye.`,
            question: "The color and shape of the trees.",
            answers: answers,
            scores: scores,
        },
        {
            prompt: `Finally think of a country scene which involves trees, mountains and a lake.
                Consider the picture that comes before your mind’s eye.`,
            question: `A strong wind blows on the trees and on the lake causing reflections in the
                water.`,
            answers: answers,
            scores: scores,
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