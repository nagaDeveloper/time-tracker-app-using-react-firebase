# Time Tracker Application (Live on udemy)

## Description
The Time Tracker application is a robust project management tool built with React and Firebase. This application helps in tracking the time you spend on various tasks, thereby improving your productivity and time management. It provides an interactive interface where you can easily create, update, fetch, and delete tasks. In addition, the application offers a comprehensive breakdown of the total time spent on tasks in weeks, months, and in total.

## Key Features
1. **User Authentication:** Register new users and login for existing users, leveraging Firebase authentication.
2. **Task Management:** Create, fetch, update, and delete tasks with real-time data sync using Firebase Firestore.
3. **Time Reporting:** Get comprehensive reports on the total time spent on tasks over different periods (weekly, monthly, and overall).

## Pre-requisites
- Node.js (Version 12.0 or higher)
- Firebase account

## Installation and Setup
Follow these steps to get the application up and running on your local machine:

1. Clone this repository to your local machine.
```
git clone https://github.com/tweneboah/time-tracker-application.git
```

2. Navigate to the project folder and install the required dependencies.
```
cd time-tracker-application
npm install
```

3. Create a Firebase project and enable email/password authentication:
   - Go to the Firebase [console](https://console.firebase.google.com/) and create a new project.
   - Navigate to the 'Authentication' section and enable 'Email/Password' authentication.

4. Create a Firestore database:
   - Navigate to the 'Database' section and create a Firestore database.
   - Start the database in test mode.

5. Now, you'll need to add your Firebase configuration to the application:
   - Go to the 'Project Settings' and copy your configuration details.
   - In the project folder, create a `.env` file at the root level.
   - Paste your configuration details in the `.env` file as follows:

```
REACT_APP_API_KEY = "your API key"
REACT_APP_AUTH_DOMAIN = "your auth domain"
REACT_APP_PROJECT_ID = "your project ID"
REACT_APP_STORAGE_BUCKET = "your storage bucket"
REACT_APP_MESSAGING_SENDER_ID = "your messaging sender ID"
REACT_APP_APP_ID = "your app ID"
```

6. Start the development server:
```
npm start
```
The application will start running at `http://localhost:3000`.

## Usage
Register for an account or login if you already have one. You can then proceed to create, fetch, update, and delete tasks. The application will automatically calculate and display the total time you have spent on tasks, segmented by weeks, months, and the total overall time.

## Contributing
We welcome contributions from everyone. Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License
This project is licensed under the terms of the MIT license. For more information, see [LICENSE.md](LICENSE.md).

## Contact
For any inquiries, please open an issue in this repository.

We hope you find this application useful in managing your tasks and tracking your time efficiently!
