import { BsFillSendFill } from "react-icons/bs";
import "../App.css";
export const Contact = () => {
  return (
    <>
      <div className="bg-teal-50 rounded-xl flex justify-between py-8 px-16 gap-8">
        <div className="w-2/4">
          <h1 className="font-bold text-5xl text-teal-600 text-center mb-6">
            Contact Me
          </h1>
          <p className="text-sm">
            Ready to code something incredible together? Drop me a line!
          </p>
          <div>
            <p>Address</p>
            <p>Jagatpuri, New Delhi</p>
            <p>India</p>
          </div>
          <div>
            <p>Email</p>
            <p>Jagatpuri, New Delhi</p>
          </div>
        </div>

        <form className="flex flex-col gap-6  rounded-lg w-2/4">
          <div className="text-center">
            <h1 className="text-teal-600 font-xl font-bold">Let's Connect</h1>
            <p className="contact-form-tagline">
              Don't be Shy, I am always at your service.
            </p>
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="border border-teal-600 rounded-lg p-2 text-sm"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border border-teal-600 rounded-lg p-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-teal-600 rounded-lg p-2 text-sm"
          />
          <textarea
            row="5"
            placeholder="Your Message"
            className="border border-teal-600 rounded-lg p-2 text-sm"
          ></textarea>
          <button className="bg-teal-600 rounded-lg p-2 text-white font-bold flex gap-2 justify-center items-center text-sm">
            <BsFillSendFill />
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};
