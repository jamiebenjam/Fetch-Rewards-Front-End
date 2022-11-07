# FauxCo Job Application Form

This React application has a form with name, email, and password fields as well as dropdown selections for occupation and state. All fields are required with additional regex email validation and a 12 character minimum password. The form shows error messages and will not submit if the requirements are not met. Once all fields are filled out correctly, the submit button will take the user to a submission success message.

TextInput.js is a reusable component containing code for the name, email, and password input fields and allows for easy additions of field inputs for future use. I created this component when I noticed repetition in the input attributes and realized it could be refactored.

## Styling

Styling was comprised of custom fonts, sourced background images and PNGs, as well as custom CSS and Bootstrap. My vision was to incorporate element's of Fetch Rewards' purple color scheme and bright colors but bring my own perspective. Fetch Rewards uses very fun, bright, saturated colors on their site. While my application uses some intense color, it leans calmer due to the hues and soft edges with the gradient as well as rounder edges on the Serif font.

## Concept

The prompt allowed for a great deal of creative direction given the information required was name, email, password, occupation, and state. Since recently submitting applications myself and providing the information asked for, this subject was top of mind and I chose to make this form a job application.

## Installation

Clone this repository to your system,

### `$ cd front-end-take-home`

and run:

### `$ npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
