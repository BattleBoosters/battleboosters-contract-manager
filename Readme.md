# Battleboosters CLI
Welcome to the BattleBoosters CLI Tool! This command-line interface allows you to manage and interact with the BattleBoosters program efficiently. With this tool, you can create events, manage fight cards, and handle tournament settings directly from your terminal.

## Prerequisites

* **Node.js:** Please ensure you have a recent version of Node.js installed. You can download it from https://nodejs.org/.
* **Project Setup:**
    1. Clone this repository.
    2. Run `npm install` to install the required dependencies.

## Getting Started

1. **Build the Project:** Run `npm run start`. This will build the project and place the executable files in the `dist` folder.
2. **Navigate to the `dist` folder:**  Open your command line and use `cd` to navigate to the `dist` directory within your project. For example: `cd my-battleboosters-project/dist`
3. **View Available Commands:** Run `node index.js help` to see a list of commands and their descriptions.

## Available Commands

* **create-competition**
    * Description: Creates a new Battleboosters competition.
    * Usage: `node index.js create-competition`


* **create-event**
    * Description: Creates a new Battleboosters event.
    * Usage: `node index.js create-event [options]`
    * Options:
        * `--main-card`: Set tournament type to main card.
        * `--prelims`: Set tournament type to prelims.
        * `--early-prelims`: Set tournament type to early prelims.
        * `--rank-config <path>`: Path to rank reward configuration file.

    
## Example Usage
```node index.js create-event --main-card --rank-config ./rank_rewards.json```

## Contributing

We welcome contributions to the Battleboosters CLI.

