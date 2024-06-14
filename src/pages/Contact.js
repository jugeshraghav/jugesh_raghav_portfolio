import { BsFillSendFill } from "react-icons/bs";
import "../App.css";
export const Contact = () => {
  return (
    <>
      <div className="bg-teal-50 rounded-xl flex justify-between py-8 px-16 gap-8">
        <div className=" mx-auto">
          <h1 className="font-bold text-5xl text-teal-600 text-center mb-6">
            Contact Me
          </h1>
          <p className="text-sm text-center">
            Ready to code something incredible together? Drop me a line!
          </p>
          <div className="flex align-center gap-6 mx-auto my-4">
            <div className="border-2 border-teal-600 rounded-lg p-2 text-sm">
              <p className="font-bold">Address</p>
              <p>Jagatpuri, New Delhi, India</p>
            </div>
            <div className="border-2 border-teal-600 rounded-lg p-2 text-sm">
              <p className="font-bold">Email</p>
              <p>jugeshraghav1506@gmail.com</p>
            </div>
            <div className="border-2 border-teal-600 rounded-lg p-2 text-sm">
              <p className="font-bold">Contact</p>
              <p>+91 8619677453</p>
            </div>
          </div>
        </div>

        {/* <form className="flex flex-col gap-6  rounded-lg w-2/4">
          <div className="text-center">
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
        </form> */}
      </div>
    </>
  );
};
