// import mysql2
const mysql = require("mysql2");

//create connection object
let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nithikvarma@3112",
    database: "hospital"
});

//create connection
function startConnection() {
    con.connect((err) => {
        if (err) throw err;
        console.log("Connected");
    })
};

//create function to get login users
async function getUsers() {
    //start connection
    startConnection();

    //get data from db 
    let data = await con.promise().query("select * from Login");
    return data[0];
}

//craete connection for admin department
async function getAdminDepartment() {

    //start connection
    startConnection();

    //get data from db 
    let data = await con.promise().query("select * from Department");
    return data[0];
}


//create a connection for save Admin department
async function saveAdminDepartment(name, description) {
    //start connection
    startConnection();
    //get data from db
    let data = await con.promise().query(`insert into Department(name,description) values("${name}","${description}")`);
    return data[0];
}


//create a coonection for update Admin department
async function updateAdminDepartment(id, name, description) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(`update Department set name="${name}" , description="${description}" where id = "${id}"`);
    return data[0];
}

//create a connection for delete admin department
async function deleteAdminDepartment(id) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(`delete from Department where id="${id}"`);
    return data[0];
}


//create a function to get Admin Doctor
async function getAdminDoctor() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Doctor;");
    return data[0];
}

//create a function to save Admin Doctor
async function saveAdminDoctor(name, email, phone, department) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(`insert into Doctor(name,email,phone,department) values("${name}","${email}","${phone}","${department}")`);
    return data[0];

}

//create a function for delete admin Doctor
async function deleteAdminDoctor(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Doctor where id = "${id}"`);
    return data[0];
}


//create a function to get Admin Patient
async function getAdminPatient() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Patient;");
    return data[0];
}

//create a function for save admin Patient
async function saveAdminPatient(name, email, phone, sex, birthdate, age, bloodgroup) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Patient(name,email,phone,sex,birthdate,age,bloodgroup) 
    values("${name}","${email}","${phone}","${sex}","${birthdate}","${age}","${bloodgroup}")`);
    return data[0];
}

//create a function for delete admin Patient
async function deleteAdminPatient(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Patient where id = "${id}"`);
    return data[0];
}

//create a function to get Admin Nurse
async function getAdminNurse() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Nurse;");
    return data[0];
}

//create a function for save admin Nurse
async function saveAdminNurse(name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Nurse(name,email,address,phone) 
    values("${name}","${email}","${address}","${phone}")`);
    return data[0];
}

//create a function for delete admin Nurse
async function deleteAdminNurse(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Nurse where id = "${id}"`);
    return data[0];
}

//create a function to get Admin Laboratorist
async function getAdminLaboratorist() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Laboratorist;");
    return data[0];
}

//create a function for save admin Laboratorist
async function saveAdminLaboratorist(name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Laboratorist(name,email,address,phone) 
    values("${name}","${email}","${address}","${phone}")`);
    return data[0];
}

//create a function for delete admin Laboratorist
async function deleteAdminLaboratorist(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Laboratorist where id = "${id}"`);
    return data[0];
}

//create a function to get Admin Pharmacist
async function getAdminPharmacist() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Pharmacist");
    return data[0];
}

//create a function for save admin Pharmacist
async function saveAdminPharmacist(name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Pharmacist(name,email,address,phone) 
    values("${name}","${email}","${address}","${phone}")`);
    return data[0];
}

//create a function for delete admin Pharmacist
async function deleteAdminPharmacist(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Pharmacist where id = "${id}"`);
    return data[0];
}

//create a function to get Admin Accountant
async function getAdminAccountant() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Accountant");
    return data[0];
}

//create a function for save Admin Accountant
async function saveAdminAccountant(name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Accountant(name,email,address,phone) 
    values("${name}","${email}","${address}","${phone}")`);
    return data[0];
}

//create a function for delete admin Accountant
async function deleteAdminAccountant(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Accountant where id = "${id}"`);
    return data[0];
}


//create a function to get Admin Receptionist
async function getAdminReceptionist() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Receptionist");
    return data[0];
}

//create a function for save Admin Receptionist
async function saveAdminReceptionist(name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Receptionist(name,email,address,phone) 
    values("${name}","${email}","${address}","${phone}")`);
    return data[0];
}


//create a function for update Admin Receptionist
async function updateAdminReceptionist(id,name, email, address, phone) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` update Receptionist set name="${name}", email="${email}", address="${address}", phone="${phone}" where id="${id}"`);
    return data[0];
}

//create a function for delete admin Receptionist
async function deleteAdminReceptionist(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Receptionist where id = "${id}"`);
    return data[0];
}


//create a function to get Contact
async function getContactPage() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Contact");
    return data[0];
}

//create a function for save Contact Page
async function saveContactPage(yourname, youremail, phone, address, message) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Contact(yourname,youremail,phone,address,message) 
    values("${yourname}","${youremail}","${phone}","${address}","${message}")`);
    return data[0];
}


//create a function to get appointment
async function getAppointment() {
    //start connectio
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Appointment");
    return data[0];
}

//create a function to save Appointment
async function saveAppointment(name, email, phone, date, department, doctor, message) {
    //start connection
    startConnection();

    let data = await con.promise().query(`insert into Appointment(name,email,phone,date,department,doctor,message)
    values("${name}","${email}","${phone}","${date}","${department}","${doctor}","${message}")`);
    return data[0];
}

// create a function to get admin Edit Profile
async function getAdminAccountEditProfile() {
    // start connection
    startConnection();
    // get data from db
    let data = await con.promise().query("select * from AdminEditProfile");
    return data[0];
}

//create a function to save admin edit profile
async function saveAdminAccountEditProfile(name, email) {
    // start connection
    startConnection();
    // get data from db
    let data = await con.promise().query(`insert into AdminEditProfile(name,email) values("${name}","${email}")`);
    return data[0];
}

// create a function to get admin change password
async function getAdminAccountChangePassword() {
    // start connection
    startConnection();
    // get data from db
    let data = await con.promise().query("select * from AdminChangePassword");
    return data[0];

}

//create a function to save admin change password
async function saveAdminAdminChangePassword(currentPassword, newPassword, confirmPassword) {
    // start connection
    startConnection();
    //  get data from db
    let data = await con.promise().query(`insert into  AdminChangePassword(currentPassword,newPassword,confirmPassword) values("${currentPassword}","${newPassword}","${confirmPassword}")`);
    return data[0];
}

//create a function to get Admin Noticeboard
async function getAdminNoticeboard() {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query("select * from Noticeboard");
    return data[0];
}

//create a function for save Admin Noticeboard
async function saveAdminNoticeboard(title,description,startdate,enddate) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` insert into Noticeboard(title,description,startdate,enddate) 
    values("${title}","${description}","${startdate}","${enddate}")`);
    return data[0];
}


//create a function for update Admin Noticeboard
async function updateAdminNoticeboard(id,title,description,startdate,enddate) {
    //start connection
    startConnection();

    //get data from db
    let data = await con.promise().query(` update Noticeboard set title="${title}",description="${description}", startdate="${startdate}", enddate="${enddate}" where id="${id}"`);
    return data[0];
}

//create a function for delete admin Noticeboard
async function deleteAdminNoticeboard(id) {
    //start connection
    startConnection();

    // get data from db
    let data = await con.promise().query(`delete from Noticeboard where id = "${id}"`);
    return data[0];
}

//export connection
module.exports = {
    getUsersData: async () => getUsers(),
    getAdminDepartmentData: async () => getAdminDepartment(),
    saveAdminDepartmentData: async (name, description) => saveAdminDepartment(name, description),
    updateAdminDepartmentData: async (id, name, description) => updateAdminDepartment(id, name, description),
    deleteAdminDepartmentData: async (id) => deleteAdminDepartment(id),

    getAdminDoctorData: async () => getAdminDoctor(),
    saveAdminDoctorData: async (name, email, phone, department) => saveAdminDoctor(name, email, phone, department),
    deleteAdminDoctorData: async (id) => deleteAdminDoctor(id),

    getAdminPatientData: async () => getAdminPatient(),
    saveAdminPatientData: async (name, email, phone, sex, birthdate, age, bloodgroup) => saveAdminPatient(name, email, phone, sex, birthdate, age, bloodgroup),
    deleteAdminPatientData: async (id) => deleteAdminPatient(id),

    getAdminNurseData: async () => getAdminNurse(),
    saveAdminNurseData: async (name, email, address, phone) => saveAdminNurse(name, email, address, phone),
    deleteAdminNurse: async (id) => deleteAdminNurse(id),

    getAdminLaboratoristData: async () => getAdminLaboratorist(),
    saveAdminLaboratoristData: async (name, email, address, phone) => saveAdminLaboratorist(name, email, address, phone),
    deleteAdminLaboratoristData: async (id) => deleteAdminLaboratorist(id),

    getAdminPharmacistData: async () => getAdminPharmacist(),
    saveAdminPharmacistData: async (name, email, address, phone) => saveAdminPharmacist(name, email, address, phone),
    deleteAdminPharmacistData: async (id) => deleteAdminPharmacist(id),

    getContactPageData: async () => getContactPage(),
    saveContactPageData: async (yourname, youremail, phone, address, message) => saveContactPage(yourname, youremail, phone, address, message),

    getAppointmentData: async () => getAppointment(),
    saveAppointmentData: async (name, email, phone, date, department, doctor, message) => saveAppointment(name, email, phone, date, department, doctor, message),

    getAdminAccountantData: async () => getAdminAccountant(),
    saveAdminAccountantData: async (name, email, address, phone) => saveAdminAccountant(name, email, address, phone),
    deleteAdminAccountantData: async (id) => deleteAdminAccountant(id),


    getAdminReceptionistData: async () => getAdminReceptionist(),
    saveAdminReceptionistData: async (name, email, address, phone) => saveAdminReceptionist(name, email, address, phone),
    updateAdminReceptionistData : async(id,name, email, address, phone)=>updateAdminReceptionist(id,name, email, address, phone),
    deleteAdminReceptionistData: async (id) => deleteAdminReceptionist(id),

    getAdminAccountEditProfileData: async () => getAdminAccountEditProfile(),
    saveAdminAccountEditProfileData: async (name, email) => saveAdminAccountEditProfile(name, email),

    getAdminAccountChangePasswordData: async () => getAdminAccountChangePassword(),
    saveAdminAccountChangePasswordData: async (currentPassword, newPassword, confirmPassword) => saveAdminAdminChangePassword(currentPassword, newPassword, confirmPassword),

    getAdminNoticeboardData: async()=> getAdminNoticeboard(),
    saveAdminNoticeboardData : async(title,description,startdate,enddate)=> saveAdminNoticeboard(title,description,startdate,enddate),
    updateAdminNoticeboardData : async(id,title,description,startdate,enddate)=> updateAdminNoticeboard(id,title,description,startdate,enddate),
    deleteAdminNoticeboardData : async(id)=> deleteAdminNoticeboard(id)

};