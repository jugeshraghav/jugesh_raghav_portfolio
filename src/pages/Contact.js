import { BsFillSendFill } from "react-icons/bs";
import "../App.css";
export const Contact = () => {
  return (
    <>
      <form className="flex flex-col gap-6 mx-auto p-8  rounded-lg  border-4 border-teal-600 md:w-2/4">
        <div className="text-center">
          <h1 className="text-teal-600 font-xl font-bold">Let's Connect</h1>
          <p className="contact-form-tagline">
            Don't be Shy, I am always at your service.
          </p>
        </div>

        <input
          type="text"
          placeholder="Your Name"
          className="border border-teal-600 rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="border border-teal-600 rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border border-teal-600 rounded-lg p-2"
        />
        <textarea
          row="5"
          placeholder="Your Message"
          className="border border-teal-600 rounded-lg p-2"
        ></textarea>
        <button className="bg-teal-600 rounded-lg p-2 text-white font-bold flex gap-2 justify-center items-center">
          <BsFillSendFill />
          Send Message
        </button>
      </form>
    </>
  );
};
