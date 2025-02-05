# Quick Quiz Platform

## Overview

This project is a web-based quiz platform designed to allow instructors to create quizzes and students to take them in an interactive environment. The application provides a streamlined experience for both roles, enabling efficient question management, quiz participation, and result calculation. The platform is built using React for the frontend, Firebase as the backend database and authentication service, and Material UI for styling.

## Functionality

The platform consists of two main user roles:

### Instructor Role:

- Instructors can add, edit, and delete quiz questions. Questions can be multiple-choice or true/false. Questions are stored in Firebase Firestore. The instructor dashboard lists all created questions.

### Student Role:

- Students can access the available quiz and answer the questions. The quiz consists of multiple-choice and true/false questions. After submission, the student's score is calculated based on correct answers. Results are displayed as a percentage.

### Authentication System:

- Users can sign up and log in securely using Firebase Authentication.The system differentiates between students and instructors to provide appropriate access.

### Real-Time Updates: 

- Any changes made by the instructor to the quiz are instantly reflected for students.

## How It Works

### Registration

When a user first visits the platform, they are greeted with a login and signup page. Only students can sign up by creating an account, while instructors must log in with pre-existing credentials. Firebase Authentication manages user credentials securely. Upon successful login, the system determines the user’s role and redirects them accordingly.

![image](https://github.com/user-attachments/assets/b67f8a21-2128-407e-8528-1d533b8b7e00)

![image](https://github.com/user-attachments/assets/754d252e-0586-4420-a6cd-e5a51cfdf129)

### Instructor Page

Instructors are taken to the Instructor Panel, where they can manage quiz questions. They can add new questions by filling out a form that includes the question text, type (multiple-choice or true/false), answer options, and the correct answer. Once a question is created, it is stored in Firebase Firestore and displayed in a table where instructors can review and delete questions as needed. The interface provides a structured and efficient way to manage quizzes.

![image](https://github.com/user-attachments/assets/99f56d44-a625-431c-99fe-c89eb9c1d48a)

### Student Page

Students, on the other hand, are directed to the Student Quiz Interface, where they can participate in the quiz. The system retrieves all available quiz questions from Firestore and displays them one by one. Students select their answers using radio buttons and submit their responses when they are ready. The interface ensures clarity by visually separating each question for a seamless experience.

![image](https://github.com/user-attachments/assets/dc502a9a-a6b7-448c-8286-7ab20e0f6e7e)

After submission, the system validates that all questions have been answered before grading the quiz. It then compares the student’s answers to the correct answers stored in the database and calculates the final score, displaying it as a percentage. This allows students to instantly see their performance.

![image](https://github.com/user-attachments/assets/083882c2-12b0-4a64-8483-db8fe0541e46)

Once the quiz is completed, users can log out using the Logout button located in the navigation bar. This ensures they are securely signed out and redirected to the login page. The entire process is designed to be intuitive and interactive, allowing students to participate in quizzes effortlessly while instructors efficiently manage questions.

#### The available registered instructor credentials are:

Email: rauf@gmail.com

Password: rauf1234


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
