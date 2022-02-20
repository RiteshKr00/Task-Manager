import React from "react";

const ArchivedTask = () => {
  return (
    <div>
      ArchivedTask
      <div class="max-w-2xl px-8 py-4 my-2 mx-6 md:mx-40 lg:mx-auto bg-white rounded-lg shadow-md bg-gray-600">
        <div class="mt-2">
          <div className="flex justify-between">
            <div href="#" class="text-2xl font-bold text-green-500  ">
              Todays Task1
            </div>
            <div className="  text-sm text-gray-400 ">due 25 dec 2021</div>
          </div>

          <p class="mt-2 text-gray-300 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          </p>
          <div>
            {" "}
            <h2 className="text-green-500">Subtask</h2>
            <div className="divide-y divide-yellow-500 bg-gray-900 top-16 left-0  z-40 rounded flex flex-col  font-semibold w-full shadow-md  p-6 pt-2">
              <div className="mr-5 text-gray-300  my-2 hover:text-gray-500 ">
                Subtask1 : Revise
              </div>
              <div className="mr-5 text-gray-300  my-2 hover:text-gray-500">
                Subtask2 : Run
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div className="text-gray-300 dark:text-blue-400 hover:underline"></div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedTask;
