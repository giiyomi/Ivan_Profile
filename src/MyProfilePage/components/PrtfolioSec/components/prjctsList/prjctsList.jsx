import Slack_app from './projects/slack_app/slackord';
import Lampaz_form from './projects/lampaz_form/lampaz_form';
import Jollibee_lp from './projects/jollibee_lp/jollibee_lp';
import Momentum_app from './projects/momentum_app/momentum_app'
import TicTacToe from './projects/ticTacToe/ticTacToe';
import Bank_and_budget_app from './projects/bank_budget/bank_budget'
import My_profile from './projects/my_profile/my_profile';

const projectList = [
    {
        name: 'Booking Form',
        src: Lampaz_form,
        link: 'https://lampaz-surveyform.netlify.app/',
        category:'html_css',
        description: "This project is a responsive form featuring a title, description, and form fields for name, email, and a number with validation. It includes labels, placeholders, a dropdown, radio buttons, checkboxes, and a comments section. A submit button allows users to send responses to the address bar, with the layout adapting smoothly across devices for a user-friendly experience."
    },
    {
        name: 'Landing Page',
        src: Jollibee_lp,
        link: 'https://jollibee-landingpage.netlify.app/',
        category: 'html_css',
        description: "This responsive product landing page features a header with a logo, a fixed navigation bar linking to sections, an embedded product video, and an email form with HTML5 validation and a submit button. It uses CSS flexbox and media queries for a smooth, adaptable layout across all screen sizes."
    },
    {
        name: 'Momentum App',
        src: Momentum_app,
        link: 'https://momentum-todolist.netlify.app/',
        category: 'html_css',
        description: 'This application serves as a personalized homepage where users can input their names and receive a customized greeting. It displays the current time, highlights the user’s main focus for the day, and features a todo list. Users can also view a random motivational quote and add their own quotes, creating an inspiring and productive environment.'
    },
    {
        name: 'TicTac Toe',
        src: TicTacToe,
        link: 'https://tictactoe-onepiece.netlify.app/',
        category: 'html_css',
        description: 'This Tic Tac Toe project creates a responsive game with a 2D array to manage moves, alternating turns between "X" and "O." It saves move history, allowing users to review moves with "Previous" and "Next" buttons after a game ends. A reset button clears the board, hides navigation, and resets the history for a fresh start. The focus is on simplicity and smooth game flow.'
    },
    {
        name: 'Bank/Budget App',
        src: Bank_and_budget_app, 
        link: 'https://bankandbudget.netlify.app/',
        category: 'react',
        description: 'This React-based Banking and Budget Tracking App allows users to create accounts, manage balances, and track expenses, with data saved in local storage for persistence. It includes essential banking functions—deposits, withdrawals, and transfers—and an expense tracker that updates balances in real-time. Robust error handling and an intuitive interface ensure a smooth user experience.'
    },
    {
        name: 'Slack App',
        src: Slack_app,
        link: 'https://slackord.netlify.app/',
        category: 'react',
        description: 'This React application allows users to create an account with email and password, log in, and engage in seamless communication through channels. Users can create new channels, add other users to them, and send or receive messages, either as direct messages or within channels. The app is designed to facilitate organized, real-time messaging and effective collaboration.'
    },
    {
        name: 'My Profile',
        src: My_profile,
        link: 'https://ivanlang.netlify.app/',
        category: 'react',
        description: 'This is a personal profile website created in React, featuring a clean, user-friendly interface with interactive elements. The site is organized into tabs for Home, About Me, Skills, Portfolio, and Contact Me, offering a seamless browsing experience. Each section has been thoughtfully designed to be visually appealing and functional, and the website is fully responsive, ensuring accessibility across various devices.'
    },
].map((project, index) => ({ ...project, id: index + 1 }));

export default projectList