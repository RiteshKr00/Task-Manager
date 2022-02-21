import React, { useState, useEffect } from "react";
const axios = require("axios");

const InprogressTask = () => {
  const [refresh, setRefresh] = useState();
  const [data, setData] = useState([]);
  const [subtask, setSubTask] = useState([]);

  const FetchList = async () => {
    try {
      const response = await axios.get("/fetch_in");
      console.log("after request");
      console.log(response);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  const AddSubTask = async (taskid, info) => {
    try {
      const response = await axios.put("/createsubtask", {
        taskid,
        info,
      });
      console.log(response);
      setRefresh(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  const ChangeSubTaskStatus = async (taskid, subtaskid, status) => {
    try {
      const response = await axios.put("/change", {
        taskid,
        subtaskid,
        status,
      });
      console.log("after request");

      console.log(response);
      setRefresh(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  const CompleteTask = async (taskid, subtaskid, status) => {
    try {
      const response = await axios.put("/complete", {
        taskid,
      });
      console.log("after request");

      console.log(response);
      setRefresh(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  useEffect(() => {
    FetchList();
  }, [refresh]);
  return (
    <>
      {data
        ? data.length === 0
          ? "No"
          : data.map((todo) => {
              return (
                <div key={todo._id} className="bg-gray-900">
                  InprogressTask
                  <div className="max-w-2xl px-8 py-4  mx-6 md:mx-40 lg:mx-auto bg-white rounded-lg shadow-md bg-gray-600">
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <div
                          href="#"
                          className="text-2xl font-bold text-green-500  "
                        >
                          <span>
                            <input
                              className="mr-5  text-gray-300  my-2 hover:text-gray-500 "
                              type="checkbox"
                              onChange={(e) => {
                                e.preventDefault();
                                CompleteTask(todo._id);
                              }}
                              // checked={todo.completed}
                              id={todo._id}
                              value={todo.completed}
                            />
                          </span>{" "}
                          {todo.title}
                        </div>
                        <div className="  text-sm text-gray-400 ">
                          {Intl.DateTimeFormat("en-US", {
                            day:"2-digit",
                            year: "numeric",
                            month: "long",
                            weekday: "long",
                            hour: "numeric",
                            minute: "numeric",
                          }).format(new Date(todo.dueDate))}
                        </div>
                      </div>

                      <p className="mt-2 text-gray-300 dark:text-gray-300">
                        {todo.description}
                      </p>
                      <div>
                        {" "}
                        <h2 className="text-green-500">
                          Subtask
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              console.log(todo._id);
                              AddSubTask(todo._id, subtask);
                            }}
                            className="ml-2 px-6 py-2  leading-5 bg-primary text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                          >
                            Add SubTask ▶
                          </button>
                        </h2>
                        <div className="divide-y divide-yellow-500 bg-gray-900 top-16 left-0  z-40 rounded flex flex-col  font-semibold w-full shadow-md  p-6 pt-2">
                          <input
                            id="topic"
                            type="text"
                            placeholder="Enter the SubTask"
                            value={subtask}
                            onChange={(e) => setSubTask(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                          />{" "}
                          {todo.subtask.length === 0
                            ? ""
                            : todo.subtask.map((sub) => {
                                return (
                                  <div className="flex justify-between">
                                    <div className="mr-5 text-gray-300  my-2 hover:text-gray-500 ">
                                      {sub.info}
                                    </div>
                                    {console.log(sub.done)}
                                    <input
                                      className="mr-5  text-gray-300  my-2 hover:text-gray-500 "
                                      type="checkbox"
                                      onChange={(e) => {
                                        e.preventDefault();
                                        console.log(
                                          todo._id,
                                          sub._id,
                                          sub.done
                                        );
                                        ChangeSubTaskStatus(
                                          todo._id,
                                          sub._id,
                                          sub.done
                                        );
                                      }}
                                      checked={sub.done}
                                      id={sub._id}
                                      value={sub.done}
                                    />
                                  </div>
                                );
                              })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-gray-300 dark:text-blue-400 hover:underline"></div>
                    </div>
                  </div>
                </div>
              );
            })
        : "Loading"}
    </>
  );
};

export default InprogressTask;
