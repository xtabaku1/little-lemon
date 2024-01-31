import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const previousDate = useRef(null);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "17:00",
      guests: 1,
      occasion: "Birthday",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "Minimum 1 guest")
        .max(10, "Maximum 10 guests"),
      occasion: Yup.string(),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      if (formik.values.date && formik.values.date !== previousDate.current) {
        updateTimes(formik.values.date);
        previousDate.current = formik.values.date;
      }
    };

    fetchAvailableTimes();
  }, [formik.values.date, updateTimes]);

  return (
    <form onSubmit={formik.handleSubmit} className="reservation-form">
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          {...formik.getFieldProps("date")}
          min={new Date().toISOString().split("T")[0]}
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" {...formik.getFieldProps("time")}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div>{formik.errors.time}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...formik.getFieldProps("guests")}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" {...formik.getFieldProps("occasion")}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>

      <div className="form-group">
        <input
          type="submit"
          value="Make Your reservation"
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
};

export default BookingForm;
