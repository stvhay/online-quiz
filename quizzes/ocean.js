/* jshint esversion: 6 */

// This test repeats these answers and scores, so consolidating here.
const answers = {
    1: 'Disagree',
    2: 'Slightly Disagree',
    3: 'Neutral',
    4: 'Slightly Agree',
    5: 'Agree',
};

const scoresPos = (dimension) => {
    return {
        1: { [dimension]: 1 },
        2: { [dimension]: 2 },
        3: { [dimension]: 3 },
        4: { [dimension]: 4 },
        5: { [dimension]: 5 },
    };
};

const scoresNeg = (dimension) => {
    return {
        1: { [dimension]: -5 },
        2: { [dimension]: -4 },
        3: { [dimension]: -3 },
        4: { [dimension]: -2 },
        5: { [dimension]: -1 },
    };
};

const test = {
    instructions: `
        <p>Describe yourself as you generally are now, not as you wish to be in the future. Describe
           yourself as you honestly see yourself, in relation to other people you know of the same sex
           as you are, and roughly your same age.`,
    questions: [
        {
            question: "I am the life of the party.",
            answers: answers,
            scores: scoresPos('extroversion'),
        },
        {
            question: 'I feel little concern for others.',
            answers: answers,
            scores: scoresNeg('agreeableness'),
        },
        {
            question: 'I get stressed out easily.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I am always prepared.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I have a rich vocabulary.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: "I don't talk a lot.",
            answers: answers,
            scores: scoresNeg('extroversion'),
        },
        {
            question: 'I am interested in people.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I am relaxed most of the time.',
            answers: answers,
            scores: scoresPos('neuroticism'),
        },
        {
            question: 'I leave my belongings around.',
            answers: answers,
            scores: scoresNeg('conscientiousness'),
        },
        {
            question: 'I have difficulty understanding abstract ideas.',
            answers: answers,
            scores: scoresNeg('openness'),
        },
        {
            question: 'I feel comfortable around people.',
            answers: answers,
            scores: scoresPos('extroversion'),
        },
        {
            question: 'I insult people.',
            answers: answers,
            scores: scoresNeg('agreeableness'),
        },
        {
            question: 'I worry about things.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I pay attention to details.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I have a vivid imagination.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: 'I keep in the background.',
            answers: answers,
            scores: scoresNeg('extroversion'),
        },
        {
            question: 'I sympathize with others&#39; feelings.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I seldom feel blue.',
            answers: answers,
            scores: scoresPos('neuroticism'),
        },
        {
            question: 'I make a mess of things.',
            answers: answers,
            scores: scoresNeg('conscientiousness'),
        },
        {
            question: 'I am not interested in abstract ideas.',
            answers: answers,
            scores: scoresNeg('openness'),
        },
        {
            question: 'I start conversations.',
            answers: answers,
            scores: scoresPos('extroversion'),
        },
        {
            question: 'I am not interested in other people&#39;s problems.',
            answers: answers,
            scores: scoresNeg('agreeableness'),
        },
        {
            question: 'I am easily disturbed.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I get chores done right away.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I have excellent ideas.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: 'I have little to say.',
            answers: answers,
            scores: scoresNeg('extroversion'),
        },
        {
            question: 'I have a soft heart.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I get upset easily.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I often forget to put things back in their proper place.',
            answers: answers,
            scores: scoresNeg('conscientiousness'),
        },
        {
            question: 'I do not have a good imagination.',
            answers: answers,
            scores: scoresNeg('openness'),
        },
        {
            question: 'I talk to a lot of different people at parties.',
            answers: answers,
            scores: scoresPos('extroversion'),
        },
        {
            question: 'I am not really interested in others.',
            answers: answers,
            scores: scoresNeg('agreeableness'),
        },
        {
            question: 'I change my mood a lot.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I like order.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I am quick to understand things.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: "I don't like to draw attention to myself.",
            answers: answers,
            scores: scoresNeg('extroversion'),
        },
        {
            question: 'I take time out for others.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I have frequent mood swings.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I shirk my duties.',
            answers: answers,
            scores: scoresNeg('conscientiousness'),
        },
        {
            question: 'I use difficult words.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: "I don't mind being the center of attention.",
            answers: answers,
            scores: scoresPos('extroversion'),
        },
        {
            question: 'I feel others&#39; emotions.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I get irritated easily.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I follow a schedule.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I spend time reflecting on things.',
            answers: answers,
            scores: scoresPos('openness'),
        },
        {
            question: 'I am quiet around strangers.',
            answers: answers,
            scores: scoresNeg('extroversion'),
        },
        {
            question: 'I make people feel at ease.',
            answers: answers,
            scores: scoresPos('agreeableness'),
        },
        {
            question: 'I often feel blue.',
            answers: answers,
            scores: scoresNeg('neuroticism'),
        },
        {
            question: 'I am exacting in my work.',
            answers: answers,
            scores: scoresPos('conscientiousness'),
        },
        {
            question: 'I am full of ideas.',
            answers: answers,
            scores: scoresPos('openness'),
        },
    ],
    results: [
        {
            factor1: {
                criteria: {
                    extroversion: { },
                },
                display: {
                    heading: "Extroversion",
                    description: `
                        <p>Factor I was labelled as Extroversion by the developers of the IPIP-BFFM.
                           Factor I is sometimes given other names, such as Surgency or Positive
                           Emotionality.
                        <p>Extraversion is typically characterized by an individual's tendency to
                           seek out social interaction and stimulation, as well as their level of
                           enthusiasm and assertiveness in social situations. Individuals who score
                           high on this dimension tend to be outgoing, sociable, and talkative.
                           They enjoy being around others and seek out social situations. They are
                           often described as having a high level of energy, enthusiasm, and
                           assertiveness. They may also be more likely to engage in risk-taking
                           behaviors, such as partying, drinking, or other forms of
                           excitement-seeking.
                        <p>In contrast, individuals who score low on extraversion are more
                           introverted and reserved. They may prefer to spend time alone or in
                           small groups, and may feel uncomfortable in large social gatherings.
                           They may also be less assertive and more cautious in their interactions
                           with others.
                        <p>Research has shown that extraversion is linked to a range of outcomes,
                           including job performance, social support, and well-being. For example,
                           individuals who score high on extraversion tend to be more successful in
                           careers that involve social interaction and communication. They may also
                           have more social support networks and experience higher levels of
                           subjective well-being.`,
                },
            },
        },
        {
            factor2: {
                criteria: {
                    neutoticism: { },
                },
                display: {
                    heading: "Neuroticism",
                    description: `
                        <p>Factor II was labeled as Emotional Stability by the developers of the
                           IPIP-BFFM. Factor II is often referred to by its low end, Neuroticism.
                        <p>Individuals who score high on emotional stability are characterized as
                           being emotionally resilient, calm, and even-tempered. They tend to
                           experience fewer negative emotions and are better able to cope with
                           stress and adversity. They are also more likely to exhibit positive
                           emotions, such as happiness, contentment, and enthusiasm.
                        <p>In contrast, individuals who score low on emotional stability tend to be
                           more prone to negative emotions, such as anxiety, depression, and anger.
                           They may be more reactive to stress and may find it difficult to cope
                           with challenging situations. They may also exhibit a range of
                           maladaptive behaviors, such as substance abuse or self-harm.
                        <p>Research has shown that emotional stability is linked to a range of
                           outcomes, including mental health, physical health, and interpersonal
                           relationships. For example, individuals who score high on emotional
                           stability tend to have better mental health outcomes, such as lower
                           rates of depression and anxiety. They may also have better physical
                           health outcomes, such as lower rates of cardiovascular disease.
                           Additionally, they tend to have more stable and supportive relationships
                           with others.`,
                },
            },
        },
        {
            factor3: {
                criteria: {
                    agreeableness: { },
                },
                display: {
                    heading: "Agreeableness",
                    description: `
                        <p>Factor III is labeled as Agreeableness.
                        <p>Individuals who score high on agreeableness are characterized as being
                           warm, kind, and considerate. They tend to be cooperative and are
                           motivated to maintain harmonious social relationships. They may also
                           have a strong sense of empathy and concern for the welfare of others.
                        <p>In contrast, individuals who score low on agreeableness tend to be more
                           competitive and skeptical. They may be less motivated to maintain social
                           harmony and may be more likely to express their opinions forcefully, even
                           if they may conflict with others.
                        <p>Research has shown that agreeableness is linked to a range of outcomes,
                           including interpersonal relationships, job performance, and mental
                           health. For example, individuals who score high on agreeableness tend to
                           have more positive and supportive relationships with others. They may
                           also be more successful in careers that require teamwork and
                           collaboration. Additionally, they tend to have better mental health
                           outcomes, such as lower rates of depression and anxiety. However, it is
                           important to note that excessively high levels of agreeableness can also
                           have negative consequences, such as being overly compliant or lacking
                           assertiveness.`,
                },
            },
        },
        {
            factor4: {
                criteria: {
                    conscientiousness: { },
                },
                display: {
                    heading: "Conscientiousness",
                    description: `
                        <p>Factor IV is labeled as Conscientiousness.
                        <p>Individuals who score high on conscientiousness are characterized as
                           being reliable, hardworking, and efficient. They tend to be
                           well-organized and responsible, and are motivated to achieve their
                           goals. They may also exhibit a strong sense of self-discipline and
                           perseverance.
                        <p>In contrast, individuals who score low on conscientiousness tend to be
                           more impulsive and disorganized. They may have difficulty setting and
                           achieving goals, and may be more likely to engage in behaviors that are
                           not in their best interest.
                        <p>Research has shown that conscientiousness is linked to a range of
                           outcomes, including academic and job performance, health behaviors, and
                           longevity. For example, individuals who score high on conscientiousness
                           tend to have better academic and job performance, as well as lower rates
                           of absenteeism and turnover. They may also be more likely to engage in
                           health-promoting behaviors, such as exercising regularly and maintaining
                           a healthy diet. Additionally, they tend to live longer than individuals
                           who score low on conscientiousness.
                        <p>However, it is important to note that excessively high levels of
                           conscientiousness can also have negative consequences, such as being
                           overly perfectionistic or rigid.`,
                },
            },
        },
        {
            factor5: {
                criteria: {
                    openness: { },
                },
                display: {
                    heading: "Openness to Experience",
                    description: `
                        <p>Factor V was labeled as Intellect/Imagination by the developers of the
                           IPIP-BFFM but it is also most commonly known in the literature as
                           Openness to Experience.    Individuals who score high on openness to
                           experience are characterized as being imaginative, curious, and open to
                           new ideas and experiences. They tend to be intellectually curious and
                           enjoy exploring new concepts and ideas. They may also exhibit a
                           preference for creativity and aesthetics.
                        <p>In contrast, individuals who score low on openness to experience tend to
                           be more traditional and conservative. They may have a preference for
                           familiar and predictable experiences, and may be less likely to seek out
                           novel experiences.
                        <p>Research has shown that openness to experience is linked to a range of
                           outcomes, including creativity, innovation, and cultural competence. For
                           example, individuals who score high on openness to experience tend to be
                           more creative and innovative, and may be more successful in careers that
                           require these skills. Additionally, they tend to be more open-minded and
                           accepting of diverse cultures and perspectives.
                        <p>However, it is important to note that excessively high levels of
                           openness to experience can also have negative consequences, such as
                           being overly impulsive or having difficulty with routine tasks.`,
                },
            },
        },
    ],
};