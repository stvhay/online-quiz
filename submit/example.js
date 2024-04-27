/* jshint esversion: 6 */

const submitEmailData = {
    aboveFormHTML: null,
    formHTML: `
        <input type="text" id="name" placeholder="Enter your name" required>
        <input type="email" id="email" placeholder="Enter your email" required>
        <button id="emailbtn">Submit</button>`,
    belowFormHTML: `
        <p>Privacy: We are not storing your scores, we are simply signing you up for a
           very occasional newsletter. You can unsubscribe at any time.`,
    submit: () => {
        const url = 'https://example.com/api/endpoint';
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
