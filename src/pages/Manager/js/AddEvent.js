import React, { useState } from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import Navbar from "../../../component/NavigationBar/Navbar";

const axios = require("axios").default;


function AddEvent() {
  var date = new Date();
  date.setDate(date.getDate() + 7);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  var currentDate;
  if (String(day).length == 1) {
    currentDate = `${year}-${month}-0${day}`;
  }
  if (String(month).length == 1) {
    currentDate = `${year}-0${month}-${day}`;
  }

  // String(currentDate)

  // alert(String(day).length)
  // alert(currentDate)


  let array1 = [
    {
      title: "Event Name",
      // for: "eventname",
      type: "text",
      placeholder: "Event Name",
      id: "event_name",
      required: "true",
    },
    {
      title: "Date",
      // for: "date",
      type: "date",
      min: String(currentDate),

      placeholder: "Date",
      id: "l-name",
      required: "true",
    },
    {
      title: "Start Time",
      // for: "starttime",
      type: "time",
      placeholder: "Start Time",
      id: "start_time",
      required: "true",
    },
    {
      title: "Description",
      // for: "description",
      type: "text",
      placeholder: "Description",
      id: "description",
      required: "true",
    },
  ];

  const createEvent = (event) => {
    event.preventDefault();
    console.log("inside createEvent")
    console.log(event);
    console.log("inside event function");

    let eventData = {
      name: event.target[0].value,
      date: event.target[1].value,
      time: event.target[2].value,
      description: event.target[3].value,
      
    };

    console.log(eventData);

    axios .post("/api/manager/addevent" , eventData)
    .then((results)=> {
      console.log(results)
    }).catch((err)=> console.log("error : ", err))
  };

  return (
    <>
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>

        <div className="body-container-1">
          <div className="navbar-container">
            <Navbar></Navbar>
          </div>
          <div className="body-container-2">
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/Session"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Event</h1>
              </div>

              <div className="form-container">
                <form onSubmit={createEvent}>
                  <SampleForm arr={array1} />
                  <ResetSubmit></ResetSubmit>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
