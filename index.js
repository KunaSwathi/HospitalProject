//import http
let http = require("http");

//import express
let express= require("express");

//import body parser
const bodyParser = require("body-parser");

//import cors
const cors = require("cors");




//creating a server
http.createServer((req,res)=>{
    res.writeHead(200,"Success");
    res.write("API SERVER");
    res.end();
}).listen(4000);

//create an object for api
let app= express();

//add port
app.listen(4001);

//use cors
app.use(cors());

//use body-parser
app.use(bodyParser.urlencoded({extended:false}));



//import db file
const db_con = require("./db_con");




//create API for getUsers
app.get("/login",async(req,res)=>{
    let data=await db_con.getUsersData();
    res.write(JSON.stringify(data));
    res.end();
})

//create API for getAdminDepartment
app.get("/department", async (req, res) => {
    let data = await db_con.getAdminDepartmentData();
    res.write(JSON.stringify(data));
    res.end();
})


//create a post api for admin department
app.post("/saveDepartment",async(req,res)=>{
   
        let data = await db_con.saveAdminDepartmentData(req.body.name,req.body.description);
        // res.write(JSON.stringify(data));
        res.redirect("http://localhost:3000/admin/admin-department-page");
        res.end();
    
})
//create delete api for delete department
app.delete("/deleteDepartment/:id", async(req,res)=>{
    let data = await db_con.deleteAdminDepartmentData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})


//create a get api for admin doctor
app.get("/doctor", async(req, res)=>{
    let data= await db_con.getAdminDoctorData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for Admin doctor
app.post("/saveDoctor", async(req,res)=>{
    let data = await db_con.saveAdminDoctorData(req.body.name,req.body.email,req.body.phone, req.body.department);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-doctor-page")
    res.end();
})


//create a delete api for admin Doctor
app.delete("/deleteDoctor/:id", async(req,res)=>{
    let data = await db_con.deleteAdminDoctorData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})

//create a get api for admin patient
app.get("/patient", async(req, res)=>{
    let data= await db_con.getAdminPatientData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin Patient
app.post("/savePatient",async(req,res)=>{

    let data = await db_con.saveAdminPatientData(req.body.name,req.body.email,req.body.phone,req.body.sex,req.body.birthdate,req.body.age,req.body.bloodgroup);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-patient-page")
    res.end();
})

//create a delete api for admin Patient
app.delete("/deletePatient/:id", async(req,res)=>{
    let data = await db_con.deleteAdminPatientData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})

//create a get api for admin nurse
app.get("/nurse", async(req, res)=>{
    let data= await db_con.getAdminNurseData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin Patient
app.post("/saveNurse",async(req,res)=>{

    let data = await db_con.saveAdminNurseData(req.body.name,req.body.email,req.body.address,req.body.phone);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-nurse-page");
    res.end();
})

//create a delete api for admin Patient
app.delete("/deleteNurse/:id", async(req,res)=>{
    let data = await db_con.deleteAdminNurse(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})

//create a get api for admin laboratorist
app.get("/laboratorist", async(req, res)=>{
    let data= await db_con.getAdminLaboratoristData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin Laboratorist
app.post("/saveLaboratorist",async(req,res)=>{

    let data = await db_con.saveAdminLaboratoristData(req.body.name,req.body.email,req.body.address,req.body.phone);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-laboratorist-page")
    res.end();
})

//create a delete api for admin Laboratorist
app.delete("/deleteLaboratorist/:id", async(req,res)=>{
    let data = await db_con.deleteAdminLaboratoristData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})

//create a get api for admin pharmacist
app.get("/pharmacist", async(req, res)=>{
    let data= await db_con.getAdminPharmacistData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin pharmacist
app.post("/savePharmacist",async(req,res)=>{

    let data = await db_con.saveAdminPharmacistData(req.body.name,req.body.email,req.body.address,req.body.phone);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-pharmacist-page");
    res.end();
})

//create a delete api for admin pharmacist
app.delete("/deletePharmacist/:id", async(req,res)=>{
    let data = await db_con.deleteAdminPharmacistData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})


//create a get api for admin accountant
app.get("/accountant", async(req, res)=>{
    let data= await db_con.getAdminAccountantData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin accountant
app.post("/saveAccountant",async(req,res)=>{

    let data = await db_con.saveAdminAccountantData(req.body.name,req.body.email,req.body.address,req.body.phone);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-accountant-page");
    res.end();
})

//create a delete api for admin accountant
app.delete("/deleteAccountant/:id", async(req,res)=>{
    let data = await db_con.deleteAdminAccountantData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})


//create a get api for admin receptionist
app.get("/receptionist", async(req, res)=>{
    let data= await db_con.getAdminReceptionistData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin receptionist
app.post("/saveReceptionist",async(req,res)=>{
    if(req.body.receptionistID > 0){
        let data = await db_con.updateAdminReceptionistData(req.body.receptionistID,req.body.name,req.body.email,req.body.address,req.body.phone);
        // res.write(JSON.stringify(data));
        res.redirect("http://localhost:3000/admin/admin-receptionist-page");
        res.end();
    }
else{

    let data = await db_con.saveAdminReceptionistData(req.body.name,req.body.email,req.body.address,req.body.phone);
    res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-receptionist-page");
    res.end();
}
})

//create a delete api for admin receptionist
app.delete("/deleteReceptionist/:id", async(req,res)=>{
    let data = await db_con.deleteAdminReceptionistData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})


//create a get api for ContactPage
app.get("/contactPage",async(req,res)=>{

    let data = await db_con.getContactPageData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for ContactPage
app.post("/saveContactPage",async(req,res)=>{

    let data = await db_con.saveContactPageData(req.body.yourname,req.body.youremail,req.body.phone,req.body.address,req.body.message);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/contact-page");
    res.end();
})

//create a get api for Appointment
app.get("/appointment", async(req,res)=>{
    let data = await db_con.getAppointmentData();
    res.write(JSON.stringify(data));
    res.end();
});

//create a post api for Appointment
app.post("/saveAppointment",async(req,res)=>{

    let data = await db_con.saveAppointmentData(req.body.name,req.body.email,req.body.phone,req.body.date,req.body.department,req.body.doctor,req.body.message);
    // res.write(JSON.stringify(data));
    // console.log("Success");
    res.redirect("http://localhost:3000/appointment-page");
    res.end();
    
})

//create a get api for account edit profile
app.get("/accountEdit" , async(req,res)=>{
    let data = await db_con.getAdminAccountEditProfileData();
    res.write(JSON.stringify(data));
    res.end();
});
// create a post api for admin account edit profile
app.post("/saveAccountEdit" , async(req,res)=>{
    let data = await db_con.saveAdminAccountEditProfileData(req.body.name,req.body.email);
    res.write(JSON.stringify(data));
    res.end();
});


// create a get api for admin account change password
app.get("/accountPassword",async(req,res)=>{
    let data = await db_con.getAdminAccountChangePasswordData();
    res.write(JSON.stringify(data));
    res.end();
})

// Create a post API for change password
app.post("/saveAccountPassword",async(req,res)=>{
    let data = await db_con.saveAdminAccountChangePasswordData(req.body.currentPassword,req.body.newPassword,req.body.confirmPassword);
    res.write(JSON.stringify(data));
    res.end();
})

//create a get api for admin noticeboard
app.get("/noticeboard", async(req, res)=>{
    let data= await db_con.getAdminNoticeboardData();
    res.write(JSON.stringify(data));
    res.end();
})

//create a post api for admin noticeboard
app.post("/saveNoticeboard",async(req,res)=>{

    let data = await db_con.saveAdminNoticeboardData(req.body.title,req.body.description,req.body.startdate,req.body.enddate);
    // res.write(JSON.stringify(data));
    res.redirect("http://localhost:3000/admin/admin-noticeboard-page");
    res.end();
})

//create a delete api for admin Noticeboard
app.delete("/deleteNoticeboard/:id", async(req,res)=>{
    let data = await db_con.deleteAdminNoticeboardData(req.params.id);
    res.write(JSON.stringify(data));
    res.end();
})