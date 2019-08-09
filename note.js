const fs = require('fs');
const getnotes= function(){
    return 'your notes'
}
const addnote=function (title, body){
    const notes = loadnotes();
    //const duplicateNotes = notes.filter((note)=>note.title === title
    //);
    const duplicateNotes = notes.find((note)=>note.title === title
    );
debugger
    if(!duplicateNotes){
        notes.push({
        title:title,
        body:body
    });
    savenotes(notes);
    console.log('new note added');
    
}
else{
    console.log('note title taken');
    
}
    }
    

const savenotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('note.json',dataJSON);
}

const loadnotes = function(){
     try{
         const dataBuffer = fs.readFileSync('note.json');
         const dataJSON = dataBuffer.toString();
         return JSON.parse(dataJSON);
     }catch(e){
         return[]
    }
}
const removenote = function(title){
    const notes = loadnotes();
    const removeNotes = notes.filter(function(note){
        return note.title !== title;
    });
    if(notes.length > removeNotes.length){
    savenotes(removeNotes);
    console.log('note removed');
    
}
else{
    console.log('note title not found');
    
}
    
}

const listNotes = function(){
    const notes = loadnotes();
    notes.forEach((note) => {
        console.log("Title:" + note.title +"Body:"+ note.body);
        
        
    });
}

const readNotes = function (title){
    const notes = loadnotes();
    const read =notes.find((note)=>note.title === title
    );
    if (read){
        console.log("your note: "+ read.title+" :- "+read.body);
        
    }else{
        console.log('no note here');
        
    }
    
}
module.exports={
    getnotes:getnotes,
    addnote:addnote,
    removenote:removenote,
    listNotes:listNotes,
    readNotes:readNotes
}