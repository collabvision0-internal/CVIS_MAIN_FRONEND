// // // import React, { useState } from "react";
// // // import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
// // // import Navbar from "../attributes/Navbar";
// // // import axios from "axios";
// // // const Cont = () => {
// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     country: "",
// // //     phone: "",
// // //     message: "",

// // //     // Add country field to form data
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevData) => ({
// // //       ...prevData,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (
// // //       !formData.firstName ||
// // //       !formData.lastName ||
// // //       !formData.email ||
// // //       !formData.message ||
// // //       !formData.phone ||
// // //       !formData.country // Validate country field
// // //     ) {
// // //       alert("Please fill in all mandatory fields.");
// // //       return;
// // //     }

// // //     const countryCode = {
// // //       india: "+91",
// // //       us: "+1",
// // //       singapur: "+65",
// // //     };

// // //     if (formData.country) {
// // //       const countcode = countryCode[formData.country.toLowerCase()];

// // //       if (countcode) {
// // //         formData.phone = `${countcode}${formData.phone}`;
// // //       }
// // //     }
// // //     // cviswebsitebackend.onrender.com
// // //     try {
// // //       const response = await axios.post(
// // //         "https://cviswebsitebackend.onrender.com/contact",
// // //         formData
// // //       );
// // //       console.log("SUBMITTED", response.data);
// // //     } catch (e) {
// // //       console.log(e);
// // //       s;
// // //     }

// // //     // try {
// // //     //   const response = await axios.post(
// // //     //     "https://cviswebsitebackend.onrender.com/feedback",
// // //     //     formData
// // //     //   );

// // //     //   console.log(response.data);
// // //     // } catch (e) {
// // //     //   console.log(e);
// // //     // }

// // //     // Handle form submission logic here (e.g., send data to server)
// // //     console.log(formData);
// // //     setFormData({
// // //       firstName: "",
// // //       lastName: "",
// // //       email: "",
// // //       message: "",
// // //       country: "",
// // //       phone: "", // Reset country field
// // //     });
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />{" "}
// // //       <h3
// // //         style={{
// // //           margin: "100px 20px 10px 20px",
// // //           textAlign: "center",
// // //           fontSize: "1.2em",
// // //         }}
// // //       >
// // //         {/* We'd love to hear from you! Whether you have questions, need support, or
// // //         are interested in our services, please fill out the form below. Our team
// // //         will get back to you as soon as possible. */}
// // //         <br />
// // //         <></>
// // //         <br />
// // //         <div
// // //           style={{
// // //             color: "#0075aa",
// // //             fontSize: "1.2em",
// // //             marginTop: "10px",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           Get answers to your questions
// // //         </div>
// // //         <div
// // //           style={{
// // //             color: "#0075aa",
// // //             fontSize: "1.2em",
// // //             marginTop: "10px",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           Our clients turn to us to help them reimagine ways of working with
// // //           technology.
// // //         </div>

// // //         <br />
// // //       </h3>
// // //       <div className="feed-form-container">
// // //         <form onSubmit={handleSubmit} className="feed-form animate-left">
// // //           <h1 style={{ textAlign: "center", margin: "40px" }}> Contact Us </h1>
// // //           <div className="form-group single-line-input">
// // //             <input
// // //               type="text"
// // //               name="firstName"
// // //               placeholder="First Name"
// // //               value={formData.firstName}
// // //               onChange={handleChange}
// // //               required
// // //               style={{ border: "none", borderBottom: "1px solid black" }}
// // //             />
// // //             <input
// // //               type="text"
// // //               name="lastName"
// // //               placeholder="Last Name"
// // //               value={formData.lastName}
// // //               onChange={handleChange}
// // //               required
// // //               style={{ border: "none", borderBottom: "1px solid black" }}
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <input
// // //               type="email"
// // //               name="email"
// // //               placeholder="Email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               required
// // //               style={{ border: "none", borderBottom: "1px solid black" }}
// // //             />
// // //           </div>{" "}
// // //           <div className="form-group">
// // //             {/* <label htmlFor="country">Select Your Country:</label> */}
// // //             <select
// // //               id="country"
// // //               name="country"
// // //               value={formData.country}
// // //               onChange={handleChange}
// // //               style={{
// // //                 width: "100%",
// // //                 paddingTop: "10px",
// // //                 paddingBottom: "25px",

// // //                 border: "none",
// // //                 borderBottom: "1px solid black",
// // //               }}
// // //               required
// // //             >
// // //               <option value="">Select Country</option>
// // //               <option value="India">India</option>
// // //               {/* <option value="US">us</option> */}
// // //               <option value="Singapore">Singapore</option>
// // //             </select>
// // //             <input
// // //               type="text"
// // //               name="phone"
// // //               placeholder="phone"
// // //               value={formData.phone}
// // //               onChange={handleChange}
// // //               required
// // //               style={{ border: "none", borderBottom: "1px solid black" }}
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <textarea
// // //               name="message"
// // //               placeholder="Your Message"
// // //               value={formData.message}
// // //               onChange={handleChange}
// // //               required
// // //               style={{
// // //                 width: "97%",
// // //               }}
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <button type="submit">Send Message</button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Cont;
// // import React, { useState } from "react";
// // import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
// // import Navbar from "../attributes/Navbar";
// // import axios from "axios";

// // const Cont = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     country: "",
// //     phone: "",
// //     message: "",
// //   });

// //   const [isLoading, setIsLoading] = useState(false); // Loader state

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (
// //       !formData.firstName ||
// //       !formData.lastName ||
// //       !formData.email ||
// //       !formData.message ||
// //       !formData.phone ||
// //       !formData.country
// //     ) {
// //       alert("Please fill in all mandatory fields.");
// //       return;
// //     }

// //     const countryCode = {
// //       india: "+91",
// //       us: "+1",
// //       singapore: "+65",
// //     };

// //     if (formData.country) {
// //       const countcode = countryCode[formData.country.toLowerCase()];
// //       if (countcode) {
// //         formData.phone = `${countcode}${formData.phone}`;
// //       }
// //     }

// //     setIsLoading(true); // Start loading

// //     try {
// //       const response = await axios.post(
// //         "https://cviswebsitebackend.onrender.com/contact",
// //         formData
// //       );
// //       console.log("SUBMITTED", response.data);
// //       alert("Form submitted successfully!");
// //       setFormData({
// //         firstName: "",
// //         lastName: "",
// //         email: "",
// //         message: "",
// //         country: "",
// //         phone: "",
// //       }); // Reset form data after successful submission
// //     } catch (e) {
// //       console.log(e);
// //       alert("Form submission failed. Please try again.");
// //     } finally {
// //       setIsLoading(false); // Stop loading
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <h3
// //         style={{
// //           margin: "100px 20px 10px 20px",
// //           textAlign: "center",
// //           fontSize: "1.2em",
// //         }}
// //       >
// //         <br />
// //         <div
// //           style={{
// //             color: "#0075aa",
// //             fontSize: "1.2em",
// //             marginTop: "10px",
// //             textAlign: "center",
// //           }}
// //         >
// //           Get answers to your questions
// //         </div>
// //         <div
// //           style={{
// //             color: "#0075aa",
// //             fontSize: "1.2em",
// //             marginTop: "10px",
// //             textAlign: "center",
// //           }}
// //         >
// //           Our clients turn to us to help them reimagine ways of working with
// //           technology.
// //         </div>
// //         <br />
// //       </h3>
// //       <div className="feed-form-container">
// //         <form onSubmit={handleSubmit} className="feed-form animate-left">
// //           <h1 style={{ textAlign: "center", margin: "40px" }}>Contact Us</h1>
// //           <div className="form-group single-line-input">
// //             <input
// //               type="text"
// //               name="firstName"
// //               placeholder="First Name"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               required
// //               style={{ border: "none", borderBottom: "1px solid black" }}
// //               disabled={isLoading} // Disable input when loading
// //             />
// //             <input
// //               type="text"
// //               name="lastName"
// //               placeholder="Last Name"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               required
// //               style={{ border: "none", borderBottom: "1px solid black" }}
// //               disabled={isLoading} // Disable input when loading
// //             />
// //           </div>
// //           <div className="form-group">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //               style={{ border: "none", borderBottom: "1px solid black" }}
// //               disabled={isLoading} // Disable input when loading
// //             />
// //           </div>
// //           <div className="form-group">
// //             <select
// //               id="country"
// //               name="country"
// //               value={formData.country}
// //               onChange={handleChange}
// //               style={{
// //                 width: "100%",
// //                 paddingTop: "10px",
// //                 paddingBottom: "25px",
// //                 border: "none",
// //                 borderBottom: "1px solid black",
// //               }}
// //               required
// //               disabled={isLoading} // Disable select when loading
// //             >
// //               <option value="">Select Country</option>
// //               <option value="India">India</option>
// //               <option value="Singapore">Singapore</option>
// //             </select>
// //             <input
// //               type="text"
// //               name="phone"
// //               placeholder="Phone"
// //               value={formData.phone}
// //               onChange={handleChange}
// //               required
// //               style={{ border: "none", borderBottom: "1px solid black" }}
// //               disabled={isLoading} // Disable input when loading
// //             />
// //           </div>
// //           <div className="form-group">
// //             <textarea
// //               name="message"
// //               placeholder="Your Message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               style={{ width: "97%" }}
// //               disabled={isLoading} // Disable textarea when loading
// //             />
// //           </div>
// //           <div className="form-group">
// //             <button type="submit" disabled={isLoading}>
// //               {isLoading ? "Sending..." : "Send Message"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default Cont;
// import React, { useState } from "react";
// import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
// import Navbar from "../attributes/Navbar";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

// const Cont = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     phone: "",
//     message: "",
//   });

//   const [isLoading, setIsLoading] = useState(false); // Loader state

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (
//       !formData.firstName ||
//       !formData.lastName ||
//       !formData.email ||
//       !formData.message ||
//       !formData.phone ||
//       !formData.country
//     ) {
//       toast.error("Please fill in all mandatory fields.");
//       return;
//     }

//     // Additional validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     const phonePattern = /^\d+$/;
//     if (!phonePattern.test(formData.phone)) {
//       toast.error("Please enter a valid phone number containing only digits.");
//       return;
//     }

//     const countryCode = {
//       india: "+91",
//       us: "+1",
//       singapore: "+65",
//     };

//     if (formData.country) {
//       const countcode = countryCode[formData.country.toLowerCase()];
//       if (countcode) {
//         formData.phone = `${countcode}${formData.phone}`;
//       }
//     }

//     setIsLoading(true); // Start loading

//     try {
//       const response = await axios.post(
//         "https://cviswebsitebackend.onrender.com/contact",
//         formData
//       );
//       console.log("SUBMITTED", response.data);
//       toast.success("Form submitted successfully!");
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         message: "",
//         country: "",
//         phone: "",
//       }); // Reset form data after successful submission
//     } catch (e) {
//       console.log(e);
//       toast.error("Form submission failed. Please try again.");
//     } finally {
//       setIsLoading(false); // Stop loading
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <h3
//         style={{
//           margin: "100px 20px 10px 20px",
//           textAlign: "center",
//           fontSize: "1.2em",
//         }}
//       >
//         <br />
//         <div
//           style={{
//             color: "#0075aa",
//             fontSize: "1.2em",
//             marginTop: "10px",
//             textAlign: "center",
//           }}
//         >
//           Get answers to your questions
//         </div>
//         <div
//           style={{
//             color: "#0075aa",
//             fontSize: "1.2em",
//             marginTop: "10px",
//             textAlign: "center",
//           }}
//         >
//           Our clients turn to us to help them reimagine ways of working with
//           technology.
//         </div>
//         <br />
//       </h3>
//       <div className="feed-form-container">
//         <form onSubmit={handleSubmit} className="feed-form animate-left">
//           <h1 style={{ textAlign: "center", margin: "40px" }}>Contact Us</h1>
//           <div className="form-group single-line-input">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               pattern="[A-Za-z]{1,}"
//               title="First name should contain only letters."
//               style={{ border: "none", borderBottom: "1px solid black" }}
//               disabled={isLoading}
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               pattern="[A-Za-z]{1,}"
//               title="Last name should contain only letters."
//               style={{ border: "none", borderBottom: "1px solid black" }}
//               disabled={isLoading}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               style={{ border: "none", borderBottom: "1px solid black" }}
//               disabled={isLoading}
//             />
//           </div>
//           <div className="form-group">
//             <select
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               style={{
//                 width: "100%",
//                 paddingTop: "10px",
//                 paddingBottom: "25px",
//                 border: "none",
//                 borderBottom: "1px solid black",
//               }}
//               disabled={isLoading}
//             >
//               <option value="">Select Country</option>
//               <option value="India">India</option>
//               <option value="Singapore">Singapore</option>
//             </select>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               pattern="\d+"
//               title="Phone number should contain only digits."
//               style={{ border: "none", borderBottom: "1px solid black" }}
//               disabled={isLoading}
//             />
//           </div>
//           <div className="form-group">
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               minLength="2"
//               title="Message should be at least 10 characters long."
//               style={{ width: "97%" }}
//               disabled={isLoading}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" disabled={isLoading}>
//               {isLoading ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Cont;
import React, { useState } from "react";
import "../home/bookDemo/FeedForm.css"; // Import your custom CSS file
import Navbar from "../attributes/Navbar";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications
import { Circles } from "react-loader-spinner"; // Import a loader component from react-loader-spinner

const Cont = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message ||
      !formData.phone ||
      !formData.country
    ) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    // Additional validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^\d+$/;
    if (!phonePattern.test(formData.phone)) {
      toast.error("Please enter a valid phone number containing only digits.");
      return;
    }

    const countryCode = {
      india: "+91",
      us: "+1",
      singapore: "+65",
    };

    if (formData.country) {
      const countcode = countryCode[formData.country.toLowerCase()];
      if (countcode) {
        formData.phone = `${countcode}${formData.phone}`;
      }
    }

    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://cviswebsitebackend.onrender.com/contact",
        formData
      );
      console.log("SUBMITTED", response.data);
      toast.success("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        country: "",
        phone: "",
      }); // Reset form data after successful submission
    } catch (e) {
      console.log(e);
      toast.error("Form submission failed. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%", // 60% of the viewport height
            width: "100%", // 100% of the viewport width
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Optional: background to make loader stand out

            // Ensure it appears above other content
          }}
        >
          <Circles
            height="80"
            width="80"
            color="#0075aa"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperclassName=""
          />
        </div>
      ) : (
        <div>
          <h3
            style={{
              margin: "100px 20px 10px 20px",
              textAlign: "center",
              fontSize: "1.2em",
            }}
          >
            <br />
            <div
              style={{
                color: "#0075aa",
                fontSize: "1.2em",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Get answers to your questions
            </div>
            <div
              style={{
                color: "#0075aa",
                fontSize: "1.2em",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Our clients turn to us to help them reimagine ways of working with
              technology.
            </div>
            <br />
          </h3>
          <div className="feed-form-container">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdkA8__ZIDmlSHx6Z7RScP1Jy3motPUnBVGHRXNfUKlBd-VnA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Cont;
