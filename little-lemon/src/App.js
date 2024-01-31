import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { fetchAPI, submitAPI } from "./utils/api";
import "./App.css";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = async () => {
    const today = new Date();
    const times = fetchAPI(today);
    console.log("times", times);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const updateTimes = async (selectedDate) => {
    console.log("Update times", selectedDate);
    const times = fetchAPI(new Date(selectedDate));
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const submitForm = async (formData) => {
    const submissionResult = submitAPI(formData);

    if (submissionResult === true) {
      // Navigate to the confirmed page upon successful submission
      navigate("/confirmed");
    } else {
      // Handle submission failure if necessary
    }
  };

  // Hook into the router to get the navigate function
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/booking"
            element={
              <BookingForm
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
