export default function View() {
  return (
    <div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-900"></hr>
     <div> <button
        type="submit"
        className="flex-col justify-center cursor-pointer  mt-3 text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600"
      >
        Add Task{""}
      </button></div>
      <div className="text-right"> <button
        type="submit"
        className="flex-col justify-center cursor-pointer  mt-3 text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5  mr-2 mb-2 dark:bg-blue-600"
      >
        All{""}
      </button></div>
    </div>
  );
}
