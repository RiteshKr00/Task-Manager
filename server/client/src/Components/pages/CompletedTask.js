import React, { useState, useEffect } from "react";
const axios = require("axios");

const CompletedTask = () => {
  const [data, setData] = useState([]);

  const FetchList = async () => {
    try {
      const response = await axios.get("/fetch_comp");
      console.log("after request");
      console.log(response);
      setData(response.data);

      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  useEffect(() => {
    FetchList();
  }, []);
  return (
    <>
      {console.log(data)}
      {data
        ? data.length === 0
          ? "No"
          : data.map((todo) => {
              return (
                <div key={todo._id} className="bg-gray-900">
                  Completed Task
                  <div className="max-w-2xl px-8 py-4  mx-6 md:mx-40 lg:mx-auto bg-white rounded-lg shadow-md bg-gray-600">
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <div
                          href="#"
                          className="text-2xl font-bold text-green-500  "
                        >
                          {todo.title}
                        </div>
                        <div className="  text-sm text-gray-400 ">
                          due 25 dec 2021
                        </div>
                      </div>
                      <p className="mt-2 text-gray-300 dark:text-gray-300">
                        {todo.description}
                      </p>
                      <div>
                        {" "}
                        <h2 className="text-green-500">Subtask</h2>
                        <div className="divide-y divide-yellow-500 bg-gray-900 top-16 left-0  z-40 rounded flex flex-col  font-semibold w-full shadow-md  p-6 pt-2">
                          {todo.subtask.length === 0 ? (
                            <h1 className="mr-5 text-gray-300  my-2 hover:text-gray-500 ">
                              No Sub Task
                            </h1>
                          ) : (
                            todo.subtask.map((sub) => {
                              return (
                                <div className="flex justify-between">
                                  <div className="mr-5 text-gray-300  my-2 hover:text-gray-500 ">
                                    {sub.info}d
                                  </div>
                                  {console.log(sub.done)}
                                  {/* <input
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
                                    /> */}
                                </div>
                              );
                            })
                          )}
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

export default CompletedTask;
