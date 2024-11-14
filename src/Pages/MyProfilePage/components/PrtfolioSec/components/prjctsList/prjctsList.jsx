import Slack_app from './projects/web_dev/slack_app/slackord';
import Lampaz_form from './projects/web_dev/lampaz_form/lampaz_form';
import Jollibee_lp from './projects/web_dev/jollibee_lp/jollibee_lp';
import Momentum_app from './projects/web_dev/momentum_app/momentum_app'
import TicTacToe from './projects/web_dev/ticTacToe/ticTacToe';
import Bank_and_budget_app from './projects/web_dev/bank_budget/bank_budget'
import My_profile from './projects/web_dev/my_profile/my_profile';
import Journal_app from './projects/web_dev/journal_app/journal_app';
import Stock_trading_app from './projects/web_dev/stock_trading/stock_trading';
import Yellevate from './projects/data_analyst/yellevate/yellevate'
import Joodash_proj from './projects/data_analyst/joodash/joodash';
import Olist_trading from './projects/data_analyst/olist_trading/olist_trading';
import Youtube_dashboard from './projects/data_analyst/youtube_db/youtube_db'

const webProjectList = [
    {
        name: 'Booking Form',
        src: Lampaz_form,
        web_link: 'https://lampaz-surveyform.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/Survey-Form',
        category:'html_css',
        field: 'web_development',
        description: "This project is a responsive form featuring a title, description, and form fields for name, email, and a number with validation. It includes labels, placeholders, a dropdown, radio buttons, checkboxes, and a comments section. A submit button allows users to send responses to the address bar, with the layout adapting smoothly across devices for a user-friendly experience."
    },
    {
        name: 'Landing Page',
        src: Jollibee_lp,
        web_link: 'https://jollibee-landingpage.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/Jollibee',
        category: 'html_css',
        field: 'web_development',
        description: "This responsive product landing page features a header with a logo, a fixed navigation bar linking to sections, an embedded product video, and an email form with HTML5 validation and a submit button. It uses CSS flexbox and media queries for a smooth, adaptable layout across all screen sizes."
    },
    {
        name: 'Momentum App',
        src: Momentum_app,
        web_link: 'https://momentum-todolist.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/Momentum',
        category: 'html_css',
        field: 'web_development',
        description: 'This application serves as a personalized homepage where users can input their names and receive a customized greeting. It displays the current time, highlights the user’s main focus for the day, and features a todo list. Users can also view a random motivational quote and add their own quotes, creating an inspiring and productive environment.'
    },
    {
        name: 'TicTac Toe',
        src: TicTacToe,
        web_link: 'https://tictactoe-onepiece.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/TicTacToe',
        category: 'html_css',
        field: 'web_development',
        description: 'This Tic Tac Toe project creates a responsive game with a 2D array to manage moves, alternating turns between "X" and "O." It saves move history, allowing users to review moves with "Previous" and "Next" buttons after a game ends. A reset button clears the board, hides navigation, and resets the history for a fresh start. The focus is on simplicity and smooth game flow.'
    },
    {
        name: 'Bank/Budget App',
        src: Bank_and_budget_app, 
        web_link: 'https://bankandbudget.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/BankApp-v2',
        category: 'react',
        field: 'web_development',
        description: 'This React-based Banking and Budget Tracking App allows users to create accounts, manage balances, and track expenses, with data saved in local storage for persistence. It includes essential banking functions—deposits, withdrawals, and transfers—and an expense tracker that updates balances in real-time. Robust error handling and an intuitive interface ensure a smooth user experience.'
    },
    {
        name: 'Slack App',
        src: Slack_app,
        web_link: 'https://slackord.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/Slack-API',
        category: 'react',
        field: 'web_development',
        description: 'This React application allows users to create an account with email and password, log in, and engage in seamless communication through channels. Users can create new channels, add other users to them, and send or receive messages, either as direct messages or within channels. The app is designed to facilitate organized, real-time messaging and effective collaboration.'
    },
    {
        name: 'My Profile',
        src: My_profile,
        web_link: 'https://ivannollora.netlify.app/',
        documentation_link: 'https://github.com/giiyomi/Ivan-s_Profile',
        category: 'react',
        field: 'web_development',
        description: 'This is a personal profile website created in React, featuring a clean, user-friendly interface with interactive elements. The site is organized into tabs for Home, About Me, Skills, Portfolio, and Contact Me, offering a seamless browsing experience. Each section has been thoughtfully designed to be visually appealing and functional, and the website is fully responsive, ensuring accessibility across various devices.'
    },
    {
        name: 'Journal App',
        src: Journal_app,
        web_link: 'https://github.com/giiyomi/Journal_App.git',
        documentation_link: 'https://github.com/giiyomi/Journal_App',
        category: 'rails',
        field: 'web_development',
        description: `The Journal App is a task management system built with Ruby on Rails, allowing users to create, edit, and view categories and tasks. It helps users organize tasks by category and prioritize their daily activities with a "Today's Tasks" feature. Users can also delete tasks as needed. The app uses Devise for secure user authentication, enabling account creation and task linking. Although not responsive, the app provides a simple and effective way to manage tasks and stay organized.`
    },
    {
        name: 'Stock Trading App',
        src: Stock_trading_app,
        web_link: 'https://github.com/giiyomi/Stock-Trading-App.git',
        documentation_link: 'https://github.com/giiyomi/Stock-Trading-App.git',
        category: 'rails',
        field: 'web_development',
        description: `The Stock Trading App project was developed over three weeks, focusing on creating a robust platform for stock trading with comprehensive user management and transaction tracking features. Built using RSpec for testing, the application enables CRUD functionality for various user roles, including Admin, Broker, and Buyer, with secure authentication. Key user stories were implemented to ensure that traders could register, log in, and manage their stock portfolios. Traders receive email notifications on signup status and account approval, can buy and sell stocks to adjust their portfolios, and have access to a dedicated Portfolio page and a Transaction page for monitoring activity. Admins can manually create and manage users, approve trader accounts, and view both pending trader signups and transaction histories, using callbacks to update user status automatically. The Admin dashboard provides streamlined oversight, allowing easy monitoring of all user and transaction activities, thereby maintaining control over the app's operational flow.`
    },
    {
        name: 'Olis Trading',
        src: Olist_trading,
        web_link: null,
        documentation_link: 'https://drive.google.com/drive/folders/1W_lykeKS8erC0nUsYtN_NffA5hq-SGcX?usp=drive_link',
        category: 'powerbi',
        field: 'data_analytics',
        description: `This project involves creating a Power BI report for a Brazilian e-commerce company, analyzing over 100,000 orders from 2016 to 2018. The report focuses on three key areas: a general dashboard for sales and customer ratings, delivery performance to identify delays in shipping, and product quality to track customer satisfaction. Tasks include importing and cleaning the data, building a data model, and using DAX measures to calculate order fulfillment times and review scores. The final deliverable is a set of interactive dashboards that provide actionable insights for the company's management.`
    },
    {
        name: 'Joodash',
        src: Joodash_proj,
        web_link: null,
        documentation_link: 'https://drive.google.com/drive/folders/1k7N24kYcn8V2b78CaeSRuProxJL8sk__?usp=drive_link',
        category: 'powerbi',
        field: 'data_analytics',
        description: `In the project for Joodash, a food delivery service, I developed a comprehensive Power BI dashboard that provides insights into key business metrics focused on delivery time. The dashboard analyzes factors such as vehicle type, order type, weather conditions, and road traffic, offering visualizations through various charts to illustrate average delivery times across these conditions. Using DAX formulas, I calculated specific metrics, including median delivery times, average delivery times in different weather conditions, and a comparison of delivery efficiency between scooters and motorcycles. A map feature was incorporated to compare geographical delivery and restaurant locations, enhancing spatial analysis. I also provided recommendations for improved data collection and accuracy, allowing Joodash to refine its service quality and benchmark performance against competitors as it prepares for expansion across Asia.`
    },
    {
        name: 'Youtube Dashboard',
        src: Youtube_dashboard,
        web_link: null,
        documentation_link: 'https://drive.google.com/drive/folders/1DShJ6A_pvSH20s0w5Bzn7jNxrXKFkeeq?usp=drive_link',
        category: 'powerbi',
        field: 'data_analytics',
        description: `The YouTube Analytics Dashboard is an interactive Power BI tool that visualizes key YouTube metrics from November 2017 to June 2018, including views, comments, likes, and dislikes across different content categories, channels, and geographic locations. It highlights top-performing channels, displays category engagement, and provides trend analysis over time, helping users identify popular content, understand audience distribution, and develop data-driven strategies for optimizing engagement on YouTube.`
    },
    {
        name: 'Yellevate',
        src: Yellevate,
        web_link: null,
        documentation_link: 'https://drive.google.com/drive/folders/1fMGmT6VcurbYbcS10Mc078ubaYKulBl6?usp=drive_link',
        category: 'excel_sql',
        field: 'data_analytics',
        description: `Yellevate has been facing ongoing challenges with client disputes over the past few years. These disputes occur when customers are dissatisfied with the company's services and refuse to pay for them. Initial analysis revealed that nearly 20% of disputes resulted in a loss, leading to an average annual revenue decline of about 5%. To better understand the root causes and patterns of these disputes, Yellevate’s executives tasked the analytical team with gathering and examining key metrics. The focus was on assessing the processing time for invoice settlements, the time taken by Yellevate to resolve disputes, the percentage of disputes that resulted in a loss, the revenue impact from these lost disputes, and identifying the country with the highest losses. Using Excel and SQL, the team analyzed this data to provide insights, helping the company address these issues and minimize future revenue loss.`
    },
    
].map((project, index) => ({ ...project, id: index + 1 }));

export default webProjectList

