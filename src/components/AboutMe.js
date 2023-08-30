import React from "react";
import photo from "../left.png";
import sound from "../click3.wav";
// import slide from "../slide.wav"

function AboutMe(props) {
    const [showPopLeft, setShowPopLeft] = React.useState(false);
    const [showPopRight, setShowPopRight] = React.useState(false);
    const [showPopMid, setShowPopMid] = React.useState(false);
    const [popNumber, setPopNumber] = React.useState(0);
    const clickAudio = new Audio(sound);
    let width = window.screen.width;
    const isTablet = (width >= 768 && width <1024)
    console.log(width)
    // const slideAudio = new Audio(slide);
    const myStyle = {
        width: "100%",
        height: "calc(100vh - 50px  )",
        zIndex: "4",
        transform: "scale(1)",
        borderRadius: "10px",
        position: "relative",
    };
    const headerStyle = {
        // left:"80px",
        fontWeight: "800",
        fontSize: "2rem",
    };
    const pStyle = {
        opacity: "100%",
        marginLeft: "0",
    };
    const hidden = {
        display:"none",
    }
    document.onkeydown = function (e) {
        // console.log(e.key)
        if (e.key === "ArrowRight") {
            if (popNumber < 2) {
                // slideAudio.play()
                setPopNumber((prevPopNumber) => prevPopNumber + 1);
            }
        } else if (e.key === "ArrowLeft") {
            if (popNumber > 0) {
                // slideAudio.play()

                setPopNumber((prevPopNumber) => prevPopNumber - 1);
            }
        }
        if (e.key === "Escape") {
            disableAll();
        }
        if (e.key === "Enter") {
            clickAudio.play();
            if (popNumber === 0) {
                handleClickLeft();
            } else if (popNumber === 1) {
                handleClickMid();
            } else {
                handleClickRight();
            }
        }
        if (e.key === "ArrowDown") {
            props.handleUp();
        } else if (e.key === "ArrowUp") {
            props.handleDown();
        }
    };
    function handleClickLeft() {
        setShowPopLeft((prevShowPopLeft) => !prevShowPopLeft);
        setShowPopRight(false);
        setShowPopMid(false);
        clickAudio.play();

        setPopNumber(0);
    }
    function handleClickRight() {
        setShowPopLeft(false);
        setShowPopMid(false);
        setPopNumber(2);
        clickAudio.play();

        setShowPopRight((prevShowPopRight) => !prevShowPopRight);
    }
    function handleClickMid() {
        setShowPopLeft(false);
        setShowPopRight(false);
        setPopNumber(1);
        clickAudio.play();

        setShowPopMid((prevShowPopMid) => !prevShowPopMid);
    }
    function disableAll() {
        setShowPopLeft(false);
        setShowPopRight(false);
        setShowPopMid(false);
    }
    return (
        <div className="a-b2a">
            <div className="overlay" onClick={disableAll}></div>
            <div className="about-main">
                    <h1>About Me</h1>
                    <p>
                        I'm Mohamed Adelrazek, an enthusiastic frontend
                        developer with a passion for technology and creativity.
                        Originally from Cairo, Egypt, and currently studying
                        engineering in Turkey
                    </p>
                </div>
            <div className="about">
                
                <div
                    className={`left ${popNumber === 0 && "active"}`}
                    style={showPopLeft ? myStyle : showPopMid&&isTablet? hidden: {}}
                    onClick={handleClickLeft}
                >
                    <h3 style={showPopLeft ? headerStyle : {}}>FrontEnd</h3>

                    <p style={showPopLeft ? pStyle : {}}>
                        As a frontend developer, I specialize in creating
                        captivating and user-friendly web experiences. With a
                        strongfoundation in HTML, CSS and JavaScript, I have the
                        skills to bring designs to life and ensure seamless
                        functionality across different devices. I stay updated
                        with the latest frontend frameworks and technologies,
                        such as React and Vue.js, to deliver modern and
                        responsive web applications
                    </p>
                </div>
                {/* <div
                className={`mid ${popNumber===1 && "active"}`}
                style={showPopMid ? myStyle : {}}
                onClick={handleClickMid}
            >
                <h3 style={showPopMid ? headerStyle : {}}>Engineering</h3>

                <p style={showPopMid ? pStyle : {}}>
                    My educational background in electrical engineering provides
                    me with a solid foundation in problem-solving, critical
                    thinking, and analytical skills. This knowledge complements
                    my technical expertise in frontend development and machine
                    learning, allowing me to approach projects with a
                    comprehensive and interdisciplinary mindset.
                </p>
            </div> */}
                <div
                    className={`right ${popNumber === 1 && "active"}`}
                    style={showPopMid ? myStyle : showPopLeft&&isTablet? hidden:{}}
                    onClick={handleClickMid}
                >
                    <h3 style={showPopMid ? headerStyle :{}}>Ai</h3>
                    <p style={showPopMid ? pStyle : {}}>
                        In addition to frontend development, I have a keen
                        interest and expertise in machine learning. I have
                        acquired knowledge in various machine learning
                        algorithms, data analysis, and predictive modeling
                        through courses and practical projects. This background
                        enables me to leverage data-driven approaches and
                        implement intelligent features within web applications,
                        opening up new possibilities for enhanced user
                        experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;
