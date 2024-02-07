<!DOCTYPE html>
<html>
<head>
 
</head>
<body>
  <h1>Employee Review System</h1>
  <p>The Employee Review System is a web-based application that helps organizations manage employee reviews, assignments, and interactions. It provides features for user authentication, review creation, admin management, and more.</p>

  <h2>Features</h2>
  <ul>
    <li><strong>User Authentication:</strong>
      <ul>
        <li>Sign up and login functionality.</li>
        <li>User sessions management.</li>
      </ul>
    </li>
    <li><strong>Employee Management:</strong>
      <ul>
        <li>Admins can add new employees.</li>
        <li>Admins can assign tasks and review assignments.</li>
      </ul>
    </li>
    <li><strong>Review System:</strong>
      <ul>
        <li>Users can create and manage reviews.</li>
        <li>Reviews include content, reviewer, and the reviewed employee.</li>
      </ul>
    </li>
    <li><strong>Admin Panel:</strong>
      <ul>
        <li>Admins can assign reviewers to employees.</li>
        <li>Admins can promote employees to admin status.</li>
      </ul>
    </li>
    <li><strong>Dashboard:</strong>
      <ul>
        <li>Users can view their reviews and received reviews.</li>
        <li>Admins have access to employee lists and assignments.</li>
      </ul>
    </li>
    <li><strong>Database Integration:</strong>
      <ul>
        <li>Uses MongoDB for data storage.</li>
        <li>Mongoose for database interaction.</li>
      </ul>
    </li>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Clone the repository:
      <pre>git clone https://github.com/Vicky2457/Employee_review_System.git </pre>
    </li>
    <li>Install dependencies:
      <pre>npm install</pre>
    </li>
    <li>Configure the application by setting up environment variables (if required).</li>
    <li>Start the server:
      <pre>npm start</pre>
    </li>
    <li>Access the application in your web browser at <a href="http://localhost:3000">http://localhost:3000</a>.</li>
  </ol>

  <h2>Configuration</h2>
  <p>You may need to configure the following:</p>
  <ul>
    <li><strong>Database Connection:</strong> Set up MongoDB connection details in <code>config.js</code>.</li>
    <li><strong>Passport Authentication:</strong> Customize Passport strategies and settings in <code>passportlocal.js</code>.</li>
    <li><strong>Environment Variables:</strong> Store sensitive information and configuration options as environment variables.</li>
  </ul>

  <h2>Usage</h2>
  <ul>
    <li>Sign up as a new user or log in with existing credentials.</li>
    <li>Access the dashboard for employee reviews and assignments.</li>
    <li>Admin users can access the admin panel for employee management.</li>
    <li>Create and manage reviews for employees.</li>
    <li>Log out when you're done.</li>
  </ul>


</body>
</html>
