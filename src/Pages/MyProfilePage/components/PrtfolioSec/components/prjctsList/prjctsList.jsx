import Slack_app from './projects/slack_app/slackord';
import Lampaz_form from './projects/lampaz_form/lampaz_form';
import Jollibee_lp from './projects/jollibee_lp/jollibee_lp';
import Momentum_app from './projects/momentum_app/momentum_app'
import TicTacToe from './projects/ticTacToe/ticTacToe';
import Bank_and_budget_app from './projects/bank_budget/bank_budget'
import My_profile from './projects/my_profile/my_profile';
import Journal_app from './projects/journal_app/journal_app';
import Stock_trading_app from './projects/stock_trading/stock_trading';

const projectList = [
    {
        name: 'Booking Form',
        src: Lampaz_form,
        web_link: 'https://lampaz-surveyform.netlify.app/',
        github_link: 'https://github.com/giiyomi/Survey-Form',
        category:'html_css',
        description: "This project is a responsive form featuring a title, description, and form fields for name, email, and a number with validation. It includes labels, placeholders, a dropdown, radio buttons, checkboxes, and a comments section. A submit button allows users to send responses to the address bar, with the layout adapting smoothly across devices for a user-friendly experience."
    },
    {
        name: 'Landing Page',
        src: Jollibee_lp,
        web_link: 'https://jollibee-landingpage.netlify.app/',
        github_link: 'https://github.com/giiyomi/Jollibee',
        category: 'html_css',
        description: "This responsive product landing page features a header with a logo, a fixed navigation bar linking to sections, an embedded product video, and an email form with HTML5 validation and a submit button. It uses CSS flexbox and media queries for a smooth, adaptable layout across all screen sizes."
    },
    {
        name: 'Momentum App',
        src: Momentum_app,
        web_link: 'https://momentum-todolist.netlify.app/',
        github_link: 'https://github.com/giiyomi/Momentum',
        category: 'html_css',
        description: 'This application serves as a personalized homepage where users can input their names and receive a customized greeting. It displays the current time, highlights the user’s main focus for the day, and features a todo list. Users can also view a random motivational quote and add their own quotes, creating an inspiring and productive environment.'
    },
    {
        name: 'TicTac Toe',
        src: TicTacToe,
        web_link: 'https://tictactoe-onepiece.netlify.app/',
        github_link: 'https://github.com/giiyomi/TicTacToe',
        category: 'html_css',
        description: 'This Tic Tac Toe project creates a responsive game with a 2D array to manage moves, alternating turns between "X" and "O." It saves move history, allowing users to review moves with "Previous" and "Next" buttons after a game ends. A reset button clears the board, hides navigation, and resets the history for a fresh start. The focus is on simplicity and smooth game flow.'
    },
    {
        name: 'Bank/Budget App',
        src: Bank_and_budget_app, 
        web_link: 'https://bankandbudget.netlify.app/',
        github_link: 'https://github.com/giiyomi/BankApp-v2',
        category: 'react',
        description: 'This React-based Banking and Budget Tracking App allows users to create accounts, manage balances, and track expenses, with data saved in local storage for persistence. It includes essential banking functions—deposits, withdrawals, and transfers—and an expense tracker that updates balances in real-time. Robust error handling and an intuitive interface ensure a smooth user experience.'
    },
    {
        name: 'Slack App',
        src: Slack_app,
        web_link: 'https://slackord.netlify.app/',
        github_link: 'https://github.com/giiyomi/Slack-API',
        category: 'react',
        description: 'This React application allows users to create an account with email and password, log in, and engage in seamless communication through channels. Users can create new channels, add other users to them, and send or receive messages, either as direct messages or within channels. The app is designed to facilitate organized, real-time messaging and effective collaboration.'
    },
    {
        name: 'My Profile',
        src: My_profile,
        web_link: 'https://ivannollora.netlify.app/',
        github_link: 'https://github.com/giiyomi/Ivan-s_Profile',
        category: 'react',
        description: 'This is a personal profile website created in React, featuring a clean, user-friendly interface with interactive elements. The site is organized into tabs for Home, About Me, Skills, Portfolio, and Contact Me, offering a seamless browsing experience. Each section has been thoughtfully designed to be visually appealing and functional, and the website is fully responsive, ensuring accessibility across various devices.'
    },
    {
        name: 'Journal App',
        src: Journal_app,
        web_link: 'https://github.com/giiyomi/Journal_App.git',
        github_link: 'https://github.com/giiyomi/Journal_App',
        category: 'rails',
        description: `The Journal App is a task management system built with Ruby on Rails, allowing users to create, edit, and view categories and tasks. It helps users organize tasks by category and prioritize their daily activities with a "Today's Tasks" feature. Users can also delete tasks as needed. The app uses Devise for secure user authentication, enabling account creation and task linking. Although not responsive, the app provides a simple and effective way to manage tasks and stay organized.`
    },
    {
        name: 'Stock Trading App',
        src: Stock_trading_app,
        web_link: 'https://github.com/giiyomi/Stock-Trading-App.git',
        github_link: 'https://github.com/giiyomi/Stock-Trading-App.git',
        category: 'rails',
        description: `The Stock Trading App project was developed over three weeks, focusing on creating a robust platform for stock trading with comprehensive user management and transaction tracking features. Built using RSpec for testing, the application enables CRUD functionality for various user roles, including Admin, Broker, and Buyer, with secure authentication. Key user stories were implemented to ensure that traders could register, log in, and manage their stock portfolios. Traders receive email notifications on signup status and account approval, can buy and sell stocks to adjust their portfolios, and have access to a dedicated Portfolio page and a Transaction page for monitoring activity. Admins can manually create and manage users, approve trader accounts, and view both pending trader signups and transaction histories, using callbacks to update user status automatically. The Admin dashboard provides streamlined oversight, allowing easy monitoring of all user and transaction activities, thereby maintaining control over the app's operational flow.`
    },
].map((project, index) => ({ ...project, id: index + 1 }));

export default projectList

