// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// const GoToTop = () => {
//   const [visible, setvisible] = useState(false);
//   const GoToTopButton = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };
//   const listenToScroll = () => {
//     let hiddenOnHeight = 20;
//     const winScroll =
//       document.body.scrollTop || document.documentElement.scrollTop;
//     if (winScroll > hiddenOnHeight) {
//       setvisible(true);
//     } else {
//       setvisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listenToScroll);
//     return () => window.removeEventListener("scroll", listenToScroll);
//   }, []);

//   return (
//     <div>
//       <Wrapper>
//         {visible && (
//           <div className="topButton" onClick={GoToTopButton}>
//             <ArrowUpwardIcon className="topButtonIcon" />
//           </div>
//         )}
//       </Wrapper>
//     </div>
//   );
// };

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   position: relative;

//   .topButton {
//     font-size: 1.5rem;
//     width: 4rem;
//     height: 4rem;
//     color: #fff;
//     background-color: #0075b0;

//     border-radius: 50%;
//     position: fixed;
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;

//     .topButtonIcon {
//       animation: gototop 1.2s linear infinite alternate-reverse;
//     }

//     @keyframes gototop {
//       0% {
//         transform: translateY(-0.2rem);
//       }
//       100% {
//         transform: translateY(0.5rem);
//       }
//     }
//   }
// `;
// export default GoToTop;
import { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link } from "react-router-dom";

const GoToTop = () => {
  const [visible, setvisible] = useState(false);

  const GoToTopButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const hiddenOnHeight = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hiddenOnHeight) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      <Wrapper>
        {visible && (
          <div className="topButton" onClick={GoToTopButton}>
            <ArrowUpwardIcon className="topButtonIcon" />
          </div>
        )}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .topButton {
    font-size: 1.2rem; /* Reduced size */
    width: 3rem; /* Reduced size */
    height: 3rem; /* Reduced size */
    color: #fff;
    background-color: #0075b0;

    border-radius: 50%;
    position: fixed;
    bottom: 4rem; /* Adjusted position */
    right: 2rem; /* Adjusted position */
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .topButtonIcon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.2rem);
      }
      100% {
        transform: translateY(0.5rem);
      }
    }
  }

  .whatsAppButton {
    font-size: 1rem; /* Adjust as needed */
    width: 2.5rem; /* Size of WhatsApp button */
    height: 2.5rem; /* Size of WhatsApp button */
    color: #fff;
    background-color: #25d366; /* WhatsApp green color */
    border-radius: 50%;
    position: fixed;
    bottom: 7rem; /* Position above the top button */
    right: 1.7rem; /* Position above the top button */
    z-index: 998; /* Ensures WhatsApp button is below the top button */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none; /* Removes underline from link */

    .whatsAppIcon {
      width: 1.5rem; /* Adjust size of the image inside the button */
      height: 1.5rem; /* Adjust size of the image inside the button */
    }
  }
`;

export default GoToTop;
