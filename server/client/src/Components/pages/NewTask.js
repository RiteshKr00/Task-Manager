import React, { useState, useEffect, useContext } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { addMonths } from "date-fns";
import Toast from "../component/Toast";

registerLocale("es", es);
const axios = require("axios");
const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState();
  let navigate = useNavigate();

  const Add = async () => {
    try {
      const response = await axios.post("/create", {
        title,
        description,
        date,
      });
      console.log("after request");
      Toast("Task Added", 1);
      console.log(response);
      console.log(response.data);
      navigate("/inprogress");
    } catch (err) {
      console.log(err);
      console.log(err.response);
      Toast(err.response.data,2)
    }
  };
  return (
    <div className="h-screen bg-gray-900">
      <div className="md:ml-40 md:mr-10 pb-4 md:h-screen ">
        <section className="mt-4 mx-4 max-w-4xl p-6 md:mx-auto  bg-secondary rounded-md shadow-md bg-gray-600">
          <div className="flex justify-between ">
            <div className="text-lg font-semibold text-green-500 capitalize dark:text-white">
              Add New Task{" "}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                Add();
              }}
              className="px-6 py-2 leading-5 bg-primary text-green-500 transition-colors duration-200 transform bg-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-400 focus:outline-none focus:bg-gray-800 focus:text-green-500"
            >
              Add ✔
            </button>
          </div>
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
              <div>
                <label
                  className="text-gray-400 dark:text-gray-200"
                  htmlFor="topic"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter the Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-400 dark:text-gray-200"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Enter the description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full h-40 px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-400 dark:text-gray-200"
                  htmlFor="due"
                >
                  Revision Date
                </label>
                <DatePicker
                  id="due"
                  placeholderText="Select Due Date (Default:24 hrs)"
                  showTimeSelect
                  minDate={new Date()}
                  maxDate={addMonths(new Date(), 5)}
                  showDisabledMonthNavigation
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                  selected={date}
                  onChange={(date) => {
                    console.log(date);
                    setDate(date);
                  }}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewTask;
