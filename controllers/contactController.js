const asyncHandler= require("express-async-handler")
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
  });
  
  //@desc Create New contact
  //@route POST /api/contacts
  //@access private
  const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    // const contact = await Contact.create({
    //   name,
    //   email,
    //   phone,
    //   user_id: req.user.id,
    // });
  
    // res.status(201).json(contact);
  });
  //Username  =rushichorge2003

//rXRpw8yRZDMeKCzw
//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact =(req,res)=>{
    res.status(200).json({message:`Get contacts from ${req.param.id}`})
}


//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact =(req,res)=>{
    res.status(200).json({message:`Update contacts from ${req.param.id}`})
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact=(req,res)=>{
    res.status(200).json({message:`Delete contacts from ${req.param.id}`})
}


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};