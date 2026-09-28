import Navbar from "../attributes/Navbar";
import "./Learning.css";
// import "../home/Home.css";
import Hero from "../home/Hero.png";

import { TaggedContentCard } from "react-ui-cards";
const cardData = [
  {
    href: "/learning/ccpage",
    thumbnail:
      "https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960",
    title: "Cloud computing -Salesforce",
    description: "Best resource to learn Cloud computing",
    tags: ["Free"],
  },
  {
    href: "/learning/softwaretestinfpage",
    thumbnail:
      "https://static.wixstatic.com/media/4cdf87_9e9081d1352843778dec36e8d8ff8c95~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
    title: "Software testing",
    description: "Grate material to learn the software testing",
    tags: ["Free"],
  },
  {
    href: "/learning/ccmulesoft",
    thumbnail:
      "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg?w=1060&t=st=1691315861~exp=1691316461~hmac=87318722d9b334d9ce0454cbdd3b676c146bdd6e28af7d30f3f30549eea36586",
    title: "Cloud computing- Mulesoft",
    description: "Rated course for cloud computing",
    tags: ["Free "],
  },
];
function Learning() {
  return (
    <>
      <Navbar />
      <h1
        className="HeaderText Ht"
        style={{ backgroundColor: "white", paddingTop: "50px" }}
      >
        Learning
      </h1>
      {/* <div className="cards">
        {cardData.map((card, index) => (
          <div className="mycard-Learn animate-down">
            {" "}
            <TaggedContentCard
              key={index}
              href={card.href}
              thumbnail={card.thumbnail}
              title={card.title}
              description={card.description}
              tags={card.tags}
            />
          </div>
        ))}
      </div> */}

      <main style={{ padding: "30px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          {/* Background Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: -10,
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              backgroundImage:
                "linear-gradient(to right, rgba(143, 142, 142, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(143, 142, 142, 0.5) 1px, transparent 1px)",
              backgroundSize: "6rem 4rem",
            }}
          ></div>
          <div>
            <img
              src={
                "https://img.freepik.com/free-photo/young-man-writing-notebook-study-session_23-2149285403.jpg?t=st=1724395556~exp=1724399156~hmac=7c029e97914eca27674d7bd36e85422222d42aebd90958949c70dc4275434565&w=1060"
              }
              alt="Hero"
            />
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Spot Color Behind Text */}
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "20px",
                height: "300px",
                width: "300px",
                borderRadius: "50%",
                backgroundColor: "#00a8c5",
                opacity: 0.4,
                filter: "blur(110px)",
                zIndex: -1, // Behind the text but above the grid
                overflow: "hidden",
              }}
            ></div>

            {/* Text Content */}
            <div className="hero-text" style={{ position: "relative" }}>
              <h1>Empower Your Learning Journey with Cutting-Edge Tools</h1>
              <p>
                Unlock your potential and enhance your skills with our
                innovative learning platform. Join us in redefining the future
                of education and achieving your goals.
              </p>
              <div
                style={{
                  fontSize: "20px",
                  color: "black",
                  margin: "30px",
                }}
              >
                Comming Soon ...{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Learning;
