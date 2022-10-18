const logger = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

function invokeAction({action, id, name, email, phone}) {
    switch(action) {
        case "list":
            logger.listContacts();

            break;

        case "get":
            logger.getContactById(id);
            
            break;
        
        case "add":
            logger.removeContact(id);
            
                
             break;

        case "remove":
            logger.addContact(name, email, phone);
            
            break;

        default:
            console.log("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
