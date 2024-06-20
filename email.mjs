import {program} from 'commander';
import { mailTransport } from './mailTransport.mjs';

program
.option('-s, --subject')
.option('-t, --to')
.option('-m, --message');

program.parse();

const options = program.opts();
const args = program.args;
console.log(options); //object//
console.log(args); //array//
if (options.subject && options.to && options.message) {
    //Send email
    mailTransport.sendMail({
        from: 'noreply@shopa.life',
        to:args[1],
        subject:args[0],
        text:args[2]
    })
    .then(console.log) //if it works//
    .catch(console.log); //if it fails//
    // console.log('Message sent');
}else{
    console.log('Some options are missing');
}