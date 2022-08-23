const { json } = require("body-parser");

const emailField = document.getElementById("email");
const nameFiled = document.getElementById("name");
const passwordFiled = document.getElementById("password");

const gender=document.querySelector('input[name=genderS]:checked');
const day = document.getElementById("dob-day");
const month = document.getElementById("dob-month");
const year = document.getElementById("dob-year");

const school = document.getElementById("sc10");
const college = document.getElementById("sc12");
const bachelors = document.getElementById("scb");
const mastars = document.getElementById("scm");
const phd = document.getElementById("phd");

const submitBtn = document.getElementById("submit");





const info = {
  email: '',
  name: "",
  password: "",
  gender: "",
  day: "",
  month: "",
  year: "",
  school: "",
  college: "",
  bachelors: "",
  mastars: "",
  phd: "",
};



submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
  info.email=emailField.value;
  info.name=nameFiled.value;
  info.password=passwordFiled.value;
  info.gender=gender.value
  info.day=day.value
  info.month=month.value
  info.year=year.value
  info.school=school.value
  info.college=college.value
  info.bachelors=bachelors.value
  info.mastars=mastars.value
  info.phd=phd.value
  
  fetch('http://localhost:5000',{
    method:"POST",
    mode:'no-cors',
    headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(info)
  })

});
