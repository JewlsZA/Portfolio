import "./AboutStyle.css"
import Work from "../../images/work.jpeg"
import Code from "../../images/sovtech.png"

// This component renders the About me section of the page
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Work} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My ultimate motto is to do good for the world... and write cool code!
        </p>
        <p className="a-desc">
          I have experience working in fast-paced environments including
          operations, sales and finance. I always strive to create a happy
          environment for all and pay attention to my colleagues needs. I
          recently graduated from the HyperionDev Immersive Full Stack Web and
          Software Engineer Bootcamp. I specialise in MERN (MongoDB, Express,
          React, Node) stack development with valuable experience in JAVA, MS
          SQL DB, CSS and HTML
        </p>
        <div className="a-code">
          <img src={Code} alt="" className="a-code-img" />
          <div className="a-code-texts">
            <h2 className="a-code-title"> Why I want to work for SovTech</h2>
            <p className="a-code-desc">
              {" "}
              I aspire to work for a company that hires open-minded people who
              are kind to each other and focus on delivering well-designed
              applications that exceed the clients’ expectations. From what I
              have seen on SovTech’s social media it looks like everyone is
              having a blast of a time. I believe to achieve excellence in your
              field of work, you need teams that know one another on a personal
              level and strive to see their peers succeed. I want to become a
              leader people can trust to get the job done.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
