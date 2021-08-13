const router = require("express").Router();
const Note = require("../models/Note");

// add note
router.post("/add", async (req,res)=>{
    const newNote = new Note({
        text: req.body.text
    });
    try{
        const note = await newNote.save();
        res.status(201).json(note);
    }catch(err){
        res.status(500).json(err);
    }

});


// edit note
router.put("/:id", async(req,res)=>{
    try{
        const editedNote = await Note.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(editedNote);
    }catch(err){
        res.status(500).json(err);
    }
});


// delete note
router.delete("/:id", async(req,res)=>{
    try{
        await Note.findByIdAndDelete(req.params.id);
        res.status(200).json("the note has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
});

// get note
router.get("/get/:id", async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    }catch(err){
        res.status(500).json(err);
    }
});

// get all notes
router.get("/all", async(req,res)=>{
    try{
        const note = await Note.find();
        res.status(200).json(note);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;