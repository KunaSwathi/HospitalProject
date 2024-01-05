import { useEffect, useRef, useState } from 'react';
import './admin-receptionist-page.component.css';
import { GridComponent } from '../../gridcomponent/grid.component';

import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { deleteAdminReceptionist, getAdminReceptionist, saveAdminReceptionist } from '../../services/admin-receptionist.service';

export function AdminReceptionistPage() {
    //variables for popup
    const [showPopup, setShowPopup] = useState(false);

     //create variable for id
     const [receptionistID,setReceptionistID]=useState(0);

    //variable for save button text
    const [ saveBtn, setSaveBtn]=useState("Save");

    //ref variables
   const nameRef= useRef();
   const emailRef = useRef();

    const receptionistIdRef = useRef(0);


    // Grid Header data
    const [receptionistGridHeader, setReceptionistGridHeader] = useState([
        "Id", "Name", "Email", "Address", "Phone", "Options"
    ]);

    //Grid Body Data
    const [receptionistGridData, setReceptionistGridData] = useState([]);

    // Function to open the popup
    const openPopup = () => {
        setShowPopup(true);
        
    };

    // Function to close the popup
    const closePopup = () => {
        setShowPopup(false);
    };



    // create a function for get data from api
    function getAdminReceptionistData() {
        getAdminReceptionist().then((res) => {
            setReceptionistGridData(res.data)
        })
    }

    // use effect
    useEffect(() => {
        getAdminReceptionistData();
    }, [])

    //create a function for edit
    function editAdminReceptionistData(value) {
       openPopup();
       nameRef.current.value=value.name;
       emailRef.current.value=value.email;
       
        receptionistIdRef.current.value = value.id;
        
        setSaveBtn("Update");
        setReceptionistID(value.id);

    }


    // delete function for nurse data
    function deleteAdminReceptionistRecord(value) {
        let confirmDelete = window.confirm("are you sure you want delete data");

        if (confirmDelete == true) {
            deleteAdminReceptionist(value.id).then((res) => {
                getAdminReceptionistData();
            })
        }
    }

    function clearData(){
        
        setSaveBtn("Save");
        setReceptionistID(0);
    }

    return (
        <div>
            <AdminHeaderComponent></AdminHeaderComponent>
            <form className="container Bayanno-form">
                <div className='row'>
                    <div className='col-3'>
                        <h3 style={{ margin: "20px 0px", color: "#818da1", fontWeight: "200px" }}>
                            <ArrowRightCircle></ArrowRightCircle>&nbsp;Receptionist</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9'></div>
                    <div className='col-3'>
                        <div className="container mt-4">
                            <button type="button" className="add_button" onClick={openPopup}>
                                +AddReceptionist
                            </button>
                        </div>
                    </div>
                </div>


                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <div className='row'>
                                <div className='col-11'>
                                    <h4>Bayanno Hospital Mangaement System</h4>
                                </div>
                                <div className='col-1'>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closePopup}></button>
                                </div>
                            </div>

                            <hr></hr>
                            <h2>Add Receptionist</h2>
                            <br></br>
                            <br></br>
                            <form className='container' method='post' action='http://localhost:4001/saveReceptionist/' >
                                <div>
                                    <input type='hidden' ref={receptionistIdRef} name="receptionistID"></input>
                                </div>

                                <div className="row">
                                    <div className='col-3'>
                                        <label>Name</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="username"
                                            id="name" name="name"
                                            ref={nameRef}
                                            
                                        />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Email</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Email"
                                            id="email" name="email"
                                            ref={emailRef}
                                           
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="mb-3 row">
                                    <div className='col-3'>
                                        <label className="form-label">
                                            Address
                                        </label>
                                    </div>
                                    <div className='col-7'>
                                        <textarea
                                            className="form-control"
                                            id="address" name="address"
                                            rows="3" 
                                        ></textarea>
                                    </div>
                                </div>
                                <br />
                                <div className="row">
                                    <div className='col-3'>
                                        <label>Phone</label>
                                    </div>
                                    <div className='col-7'>
                                        <input
                                            type="text" className="form-control"
                                            placeholder="Phone"
                                            id="phone" name="phone"
                                           
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3'></div>
                                    <div className='col-7'>
                                        <input
                                            type="submit"
                                            value={saveBtn}
                                            className="btn btn-success w-150 mt-3"
                                        ></input>
                                        &nbsp;&nbsp;&nbsp;
                                        <input
                                            type="submit"
                                            value="Cancel"
                                            className="btn btn-danger w-150 mt-3"
                                            onClick={()=>{clearData()}}
                                        ></input>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <GridComponent
                    headers={receptionistGridHeader}
                    body={receptionistGridData}
                    editItemFromGrid={(value) => { editAdminReceptionistData(value) }}
                    deleteRecord={(value) => { deleteAdminReceptionistRecord(value) }}
                ></GridComponent>
            </form>
            <br></br>
            <br></br>
            <footer className="main">
                © 2017 <strong>Bayanno Hospital Management System</strong>
                <strong className="pull-right"> VERSION 4.0</strong>
                Developed by
                <a >Creativeitem</a>
            </footer>
        </div>
    )
}