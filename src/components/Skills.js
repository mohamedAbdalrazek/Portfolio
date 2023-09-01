import React from "react";
import slide from "../slide.wav";

function Skills(props) {
    const slideAudio = new Audio(slide);

    const styleLeft = {
        left: "-150%",
    };
    const styleRight = {
        left: "150%",
    };
    const styleMid = {};
    const arrowHidden = {
        opacity: ".2",
        cursor: "default",
    };
    const [slideNumber, setSlideNumber] = React.useState(1);
    function handleSlideLeft() {
        if (slideNumber > 0) {
            slideAudio.play();

            setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
        }
    }
    function handleSlideRight() {
        if (slideNumber < 2) {
            slideAudio.play();

            setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
        }
    }
    document.onkeydown = function (e) {
        if (e.key === "ArrowRight") {
            handleSlideRight();
        } else if (e.key === "ArrowLeft") {
            handleSlideLeft();
        }
        if (e.key === "ArrowDown") {
            props.handleDown();
        } else if (e.key === "ArrowUp") {
            props.handleUp();
        }
    };
    return (
        <div className="skills">
            <span
                className="left"
                onClick={handleSlideLeft}
                style={slideNumber === 0 ? arrowHidden : {}}
            >
                &lt;
            </span>
            <h1>Skills</h1>
            <div
                className="section"
                style={slideNumber === 0 ? styleMid : styleLeft}
            >
                <h3>Frontend</h3>
                <div className="skill-row">
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JS</div>
                    <div>React</div>
                    <div>Bootstrap</div>
                </div>
            </div>
            <div
                className="section"
                style={
                    slideNumber === 1
                        ? styleMid
                        : slideNumber > 1
                        ? styleLeft
                        : styleRight
                }
            >
                <h3>Machine Learning</h3>
                <div className="skill-row">
                    <div>Python</div>
                    <div>Matlab</div>
                    <div>Pytorch</div>
                    <div>RNN</div>
                    <div>CNN</div>
                </div>
            </div>
            <div
                className="section"
                style={
                    slideNumber === 2
                        ? styleMid
                        : slideNumber > 2
                        ? styleLeft
                        : styleRight
                }
            >
                <h3>Design</h3>
                <div className="skill-row">
                    <div>Photoshop</div>
                    <div>Illustrator</div>
                    <div>UI/UX</div>
                </div>
            </div>
            <span
                className="right"
                onClick={handleSlideRight}
                style={slideNumber === 2 ? arrowHidden : {}}
            >
                &gt;
            </span>
        </div>
    );
}
export default Skills;
