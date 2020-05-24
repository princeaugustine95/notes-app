const notes=require('./notes.js');
const yargs= require('yargs');
const chalk = require('chalk');


/*
console.log(msg);
console.log(chalk.green.bold('Success'));
console.log(chalk.green.bold.inverse('This is the second message'));
*/

// const command = process.argv[2];
// if(command==='Add'){
//     console.log("Adding Element");
// }
// else if(command==='Remove'){

//     console.log("Removing Element");

// }

yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            desrcibe:'body of the note',
            demandOption:true,
            type:'string'
            
        }
    },
    handler(argv){
      notes.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'Removing a note',
    builder:{
        title:{
            describe:'Removing a Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'Listing a note',
   
    handler(){
        console.log(chalk.green.inverse("Here are your notes"));
        notes.listNotes();
    }
});

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Reading a Single Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);

    }
});

yargs.parse();