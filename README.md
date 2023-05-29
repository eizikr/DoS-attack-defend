# Cyber Risks Assessment Project

This project is a simulation of a Distributed Denial of Service (DDoS) attack implemented in JavaScript as part of the "Cyber Risks Assessment" course at SCE College in Beer Sheva. The project includes a Python script for launching the attack and a server-side application that implements various protection mechanisms against the attack.

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contact](#contact)

## Introduction
The purpose of this project is to assess the risks associated with a DDoS attack and evaluate the effectiveness of different protection mechanisms. It consists of a client-side Python script that simulates the attack and a server-side application implemented in Node.js that incorporates several protection mechanisms.

## Project Structure
The project has the following structure:

- `DOS_ATTACK_script.py`: Python script for launching the DDoS attack.
### Inside ServerCode:
- `app.js`: Server-side application code implemented in Node.js.
- `package.json`: Package configuration file for Node.js dependencies.
- `package-lock.json`: Detailed information about the installed packages.
- `server.js`: Node.js server setup code.

## Usage
To run the DDoS attack simulation, follow these steps:

1. Make sure you have Python installed on your system.
2. Open a terminal and navigate to the project directory.
3. Run the command `python DOS_ATTACK_script.py`.

Note: The target IP address and port are currently set to `127.0.0.1:2000` in the Python script. Modify it according to your target.

To start the server application with protection mechanisms, follow these steps:

1. Make sure you have Node.js installed on your system.
2. Open a terminal and navigate to the `ServerCode` directory.
3. Run the command `npm install` to install the required dependencies.
4. Run the command `npm start` to start the server.

Note: The server will be running on port `2000` by default. You can change it in the `ServerCode/server.js` file if needed.

## Contact
For any questions or inquiries about this project, feel free to reach out to me:

- Name: Itzik Rahamim
- Email: eizikr@icloud.com
- LinkedIn: [Itzik Rahamim on LinkedIn](https://www.linkedin.com/in/itzik-rahamim-developer)
