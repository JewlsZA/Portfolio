import "./IntroStyle.css"
import Me from "../../images/me.png"

// This component renders the introduction part of the page
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Hello, My name is </h2>
          <h1 className="i-name"> Julian </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
                Graduate Full Stack Web Developer
              </div>
              <div className="i-title-item">BComm Management Sciences</div>
              <div className="i-title-item">Can turn coffee into code</div>
              <div className="i-title-item">Owns two sausage dogs</div>
              <div className="i-title-item"> 🚀🌕 💎🤲 </div>
            </div>
          </div>
          <p className="i-desc">
            Don't let process becomes a substitute for thinking, if things are
            not failing, you are not innovating enough.
          </p>
        </div>
      </div>

      <div className="i-right">
        {/* Created using clip path generator https://bennettfeely.com/clippy/ */}
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-image" />
      </div>
    </div>
  )
}

export default Intro
