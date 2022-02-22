import React, { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Toast from "../component/Toast";

const axios = require("axios");
const ArchivedTask = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState();
  const FetchList = async () => {
    try {
      const response = await axios.get("/fetch_archive");
      console.log("after request");
      console.log(response);
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  const DeleteTask = async (taskid) => {
    try {
      const response = await axios.delete("/delete", { data: { taskid } });
      console.log(response);
      setRefresh(response.data);
      console.log(response.data);
      // navigate("/completed");
      Toast("Task Deleted", 1);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };
  useEffect(() => {
    FetchList();
  }, [refresh]);
  return (
    <div className="pb-12 md:pb-1">
      {data ? (
        data.length === 0 ? (
          <div>
            <h1 className="pt-5 pt-36 text-gray-500 bold text-xl text-center">
              No Task in Archive
            </h1>
          </div>
        ) : (
          data.map((todo) => {
            return (
              <div key={todo._id} className="bg-gray-900 pb-4">
                {/* Completed Task */}
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
                  <div className="flex items-center justify-end mt-4">
                    <div className="transform hover:scale-125 text-gray-300 text-xl dark:text-blue-400 hover:text-red-500 active:scale-100">
                      <AiOutlineDelete
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(todo._id);
                          DeleteTask(todo._id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default ArchivedTask;
