import { useState } from "react";

function FormHandlingPractice() {
  const [formData , setFormData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    phonenumber : "",
    password : "",
    confirmPassword : ""
  });
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setFormData({
      ...formData , 
      [e.target.name] : e.target.value
    })
  }
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Form Data Submitted: ", formData);
    setFormData({
      firstname : "",
      lastname : "",
      email : "",
      phonenumber : "",
      password : "",
      confirmPassword : ""
    })
  }
  return (
    <>
        <div className="bg-slate-800">
          <div className="h-auto p-10">
            <h1 className="text-white mx-60 pt-10">Form Handling :-</h1>
            {/* Form */}
            <form onSubmit={handleForm}>  
              <input onChange={handleChange} name="firstname" value={formData.firstname} className="mx-60 mt-10" type="text" placeholder="Enter firstname..."/>
              <input onChange={handleChange} name="lastname" value={formData.lastname} className="mx-60 mt-10" type="text" placeholder="Enter lastname..."/>
              <input onChange={handleChange} name="email" value={formData.email} className="mx-60 mt-10" type="email" placeholder="Enter email..."/>
              <input onChange={handleChange} name="phonenumber" value={formData.phonenumber} className="mx-60 mt-10" type="telephone" placeholder="Enter phone number..."/>
              <input onChange={handleChange} name="password" value={formData.password} className="mx-60 mt-10" type="password" placeholder="Enter password..."/>
              <input onChange={handleChange} name="confirmPassword" value={formData.confirmPassword} className="mx-60 mt-10" type="password" placeholder="Enter confirm password..."/>
              <button className="mx-60 mt-10 p-4 bg-red-500" type="submit">Submit</button>
            </form>
            <div>
              <h2 className="text-white">User Details :</h2>
              <div>
                <span>First name : {formData.firstname}</span>
                <br />
                <span>Last name : {formData.lastname}</span>
                <br />
                <span>Email : {formData.email}</span>
                <br />
                <span>Phone Number : {formData.phonenumber}</span>
                <br />
                <span>Password : {formData.password}</span>
                <br />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default FormHandlingPractice;