import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Feedback = () => {
  useEffect(() => {
    document.title = "Feedback";
  }, []);
  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16  bg-mainBg  py-8">
        <div className="container mx-auto flex justify-center items-center">
          <Heading
            title="Provide Your Special Feedback Here"
            subtitle="If you've any issues about any services or want's to claim warranty then let use know here."
          ></Heading>
        </div>
      </div>
      <div className="mt-7 container mx-auto px-8 lg:px-80 ">
        <form
          onSubmit={() => handleForm()}
          className="border-2 border-mainBg backdrop-blur-3xl  bg-mainBg/10 p-5 rounded-lg"
        >
          <input
            className="border-2 border-mainBg w-full py-2 px-4 rounded-lg mb-3"
            type="text"
            placeholder="Your Name"
          />
          <br />
          <input
            className="border-2 border-mainBg w-full py-2 px-4 rounded-lg mb-3"
            type="email"
            placeholder="Your Email"
          />
          <br />
          <textarea
            className="border-2 border-mainBg w-full h-28 py-2 px-4 rounded-lg mb-3"
            placeholder="Write your feedback here"
            name=""
            id=""
          ></textarea>
          <br />
          <input
            className="btn bg-mainBg text-white rounded-[32px] px-7 hover:bg-green-600"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
