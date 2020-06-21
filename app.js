const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');


yargs.command({
    command: 'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:'true',
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:'true',
            type:'string'
        }
    },
    handler(args){
        notes.addNote(args.title,args.body);
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Title of the note to be removed',
            demandOption:'true',
            type:'string'
        }
    },
    handler(args){
        notes.removeNote(args.title);
    }
})

yargs.command({
    command: 'list',
    describe:'list all the notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Title of the note',
            demandOption:'true',
            type:'string'
        }
    },
    handler(args){
        notes.readNote(args.title);
    }
})

yargs.parse();