const yargs = require('yargs');
const fs = require('fs');
const notes = require('./note.js');


yargs.command({
    command:'add',
    describe:'add a new notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv){
        notes.addnote(argv.title,argv.body);
        
        
    }

});

yargs.command({
    command:'remove',
    describe:'remove a notes',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removenote(argv.title);
        
        
    }

});
yargs.command({
    command:'list',
    describe:'show note list',

    handler: function (argv){
        notes.listNotes();
        
        
    }

});
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },

    handler: function (argv){
        notes.readNotes(argv.title);
        
        
    }

});
console.log(yargs.argv);