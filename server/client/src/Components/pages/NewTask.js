import React, { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [dueDate, setDueDate] = useState();

  return (
    <div className="md:ml-40 md:mr-10">
      <section className="mt-4 mx-4 max-w-4xl p-6 md:mx-auto  bg-secondary rounded-md shadow-md bg-gray-600">
        <div className="flex justify-between ">
          <div className="text-lg font-semibold text-green-500 capitalize dark:text-white">
            Add New Task{" "}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              //   Schedule();
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
              <label className="text-gray-400 dark:text-gray-200" htmlFor="due">
                Revision Date
              </label>
              <DatePicker
                id="due"
                locale="es"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-300 border border-gray-300 rounded-md  focus:border-blue-500  focus:outline-none focus:ring"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
              />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default NewTask;
