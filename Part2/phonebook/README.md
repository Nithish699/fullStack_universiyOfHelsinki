# Phonebook Application

This is a simple phonebook application built as part of the Full Stack Open course (Part 2). The application allows users to manage a list of contacts, including adding, deleting, and searching for phone numbers.

## Features

- Add new contacts with a name and phone number.
- Prevent duplicate entries for the same name.
- Search for contacts by name.
- Delete existing contacts from the phonebook.
- Display a notification for successful or failed operations.

## Technologies Used

- **Frontend**: React, Axios for HTTP requests
- **Backend**: Node.js, Express
- **Database**: JSON Server (for development)

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/phonebook.git
    cd phonebook
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Start the JSON Server for backend:
    ```bash
    npm run server
    ```

## Project Structure

- `/src`: Contains React components and application logic.
  - `/components`: Reusable React components.
  - `/services`: Contains modules for handling API requests.
- `/public`: Static files for the frontend.
- `/db.json`: Mock database for development.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project is part of the [Full Stack Open](https://fullstackopen.com/) course by the University of Helsinki. Special thanks to the course instructors for their guidance and resources.
