const fs=require('fs');
const chalk = require('chalk');
const getNotes=()=>
{
    return "Your Notes...";
}

const addNote=(title,body)=>{
        const notes=loadNotes();

        const duplicateNotes=notes.filter((note)=> note.title===title);

        if(duplicateNotes.length===0){

            notes.push({
                title:title,
                body:body
            });
            console.log(chalk.green.inverse("New Note Added"));
        }
        else{
            console.log(chalk.red.inverse("Note Title Taken"));
        }
       

        saveNotes(notes);
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes=function()
{
    
    try
    {
    const dataBuffer=fs.readFileSync('notes.json');
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON);
    }
    catch(e)
    {
            return [];
    }

}

const removeNote=(title)=>{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>note.title!==title); 
    
    if(notesToKeep.length < notes.length)
    {
        console.log(chalk.green.bold("Note Removed"));
        saveNotes(notesToKeep);
    }
    else{
        
        console.log(chalk.red.bold("Note not found"));
    }
}

const listNotes=()=>{

    const notes=loadNotes();
    
    notes.forEach(note => {
        console.log(note.title);
    });


}
debugger

const readNote=(title)=>{

    const notes=loadNotes();
    const note=notes.find((note)=>note.title===title);
    if(note){console.log(chalk.green.bold("Here is your note"+ "\n"+note.title+"\n"+note.body));}
    else{
        console.log(chalk.red.bold("Note not found"));
    }
    

}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote

}