import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sound from "../click3.wav";
import slide from "../slide.wav";
import move from "../project-slide2.wav"
import {
    faSquareJs,
    faHtml5,
    faCss3Alt,
    faReact,
    faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
    faDesktop,
    faMobileScreenButton,
    faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
    const [activeProject, setActiveProject] = React.useState(1);
    const [popNumber, setPopNumber] = React.useState(0);
    const clickAudio = new Audio(sound);
    const slideAudio = new Audio(slide);
    const moveAudio = new Audio(move);

    const activeStyle = {
        // filter:"blur(0px)",
        opacity: "1",
        // transform:"scale(1.05)",
    };
    const imgActive = {
        opacity: ".3",
        transform: "scale(1)",
    };
    const pStyle = {
        opacity: "1",
        fontWeight: "800",
        fontSize: "2rem",
        margin: "0",
    };
    function closePop() {
        setPopNumber(0);
    }
    function handleSlideLeft() {
        if (activeProject > 1) {
            setActiveProject((prevActiveProject) => prevActiveProject - 1);
            moveAudio.play();

        }
        if (activeProject === 1) {
            setActiveProject(4);
            moveAudio.play();

        }
    }
    function handleSlideRight() {
        if (activeProject < 4) {
            setActiveProject((prevActiveNumber) => prevActiveNumber + 1);
            moveAudio.play();

        } else if (activeProject === 4) {
            setActiveProject(1);
            moveAudio.play();

        }
    }
    document.onkeydown = function (e) {
        if (e.key === "Enter") {
            clickAudio.play();
            if (popNumber !== 0) {
                closePop();
            } else {
                setPopNumber(activeProject);
            }
        }
        if (e.key === "Escape") {
            closePop();
        }
        if (popNumber !== 0) {
            if (e.key === "ArrowRight") {
                if (popNumber < 4) {
                    slideAudio.play();
                    setPopNumber((prevPopNumber) => prevPopNumber + 1);
                }
            } else if (e.key === "ArrowLeft") {
                if (popNumber > 1) {
                    slideAudio.play();
                    setPopNumber((prevPopNumber) => prevPopNumber - 1);
                }
            }
        } else {
            if (e.key === "ArrowRight") {
                handleSlideRight();
            } else if (e.key === "ArrowLeft") {
                handleSlideLeft();
            }
        }
        // if (e.key === "ArrowDown") {
        //     if (activeProject === 0) {
        //         props.handleUp();
        //     } else {
        //         if (activeProject > 0 && activeProject < 3) {
        //             setActiveProject(
        //                 (prevActiveNumber) => prevActiveNumber + 2
        //             );
        //         } else if (activeProject < 5 && activeProject > 2) {
        //             setActiveProject(
        //                 (prevActiveNumber) => prevActiveNumber - 2
        //             );
        //         }
        //     }
        // } else if (e.key === "ArrowUp") {
        //     if (activeProject === 0) {
        //         props.handleDown();
        //     } else {
        //         if (activeProject > 0 && activeProject < 3) {
        //             setActiveProject(
        //                 (prevActiveNumber) => prevActiveNumber + 2
        //             );
        //         } else if (activeProject < 5 && activeProject > 2) {
        //             setActiveProject(
        //                 (prevActiveNumber) => prevActiveNumber - 2
        //             );
        //         }
        //     }
        // }

        if (e.key === "ArrowDown") {
            props.handleUp();
            console.log(props.activeNumber);
        } else if (e.key === "ArrowUp") {
            props.handleDown();
            console.log(props.activeNumber);
        }
    };
    function handleClick(number){
        clickAudio.play(); 
        setPopNumber(number)
    }
    return (
        <div className="projects">
            <div className="projects-container ">
                <div
                    style={activeProject === 1 ? activeStyle : {}}
                    className={`project-box ${popNumber === 1 && "active"}`}
                    onClick={() => handleClick(1)}
                >
                    <p style={activeProject === 1 ? pStyle : {}}>Artifex</p>
                    <div
                        className="background"
                        style={activeProject === 1 ? imgActive : {}}
                    ></div>
                    <div className="project-pop">
                        <div className="close-project" onClick={closePop}>
                            X
                        </div>
                        <div className="screens">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="active"
                            />
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <span className="project-desc">
                            Artifex Store Website is a fictional online store
                            that showcases a range of products. It provides
                            users with an immersive shopping experience,
                            complete with a product catalog, shopping cart, and
                            seamless checkout process.
                        </span>
                        <div className="tech">
                            <h3>
                                Technologies:
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faBootstrap} />
                                <FontAwesomeIcon icon={faSquareJs} />
                                <FontAwesomeIcon icon={faReact} />
                            </h3>
                        </div>
                    </div>
                </div>
                <div
                    style={activeProject === 2 ? activeStyle : {}}
                    className={`project-box ${popNumber === 2 && "active"}`}
                    onClick={() => handleClick(2)}
                >
                    <p style={activeProject === 2 ? pStyle : {}}>Tuder</p>
                    <div
                        className="background"
                        style={activeProject === 2 ? imgActive : {}}
                    ></div>
                    <div className="project-pop">
                        <div
                            className="close-project"
                            onClick={() => setPopNumber(0)}
                        >
                            X
                        </div>
                        <div className="screens">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="active"
                            />
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <span className="project-desc">
                            Tuder is a versatile tool that allows you to
                            effortlessly download videos from YouTube by simply
                            providing the video URL. With the ability to
                            download videos in various qualities and formats,
                            including audio-only downloads, this project aims to
                            provide a seamless and user-friendly experience for
                            accessing your favorite YouTube content offline.
                        </span>
                        <div className="tech">
                            <h3>
                                Technologies:
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faSquareJs} />
                                <FontAwesomeIcon icon={faReact} />
                            </h3>
                        </div>
                    </div>
                </div>
                <div
                    style={activeProject === 3 ? activeStyle : {}}
                    className={`project-box ${popNumber === 3 && "active"}`}
                    onClick={() => handleClick(3)}
                >
                    <p style={activeProject === 3 ? pStyle : {}}>Drop</p>
                    <div
                        className="background"
                        style={activeProject === 3 ? imgActive : {}}
                    ></div>
                    <div className="project-pop">
                        <div
                            className="close-project"
                            onClick={() => setPopNumber(0)}
                        >
                            X
                        </div>
                        <div className="screens">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="active"
                            />
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <span className="project-desc">
                            Welcome to Drop Website project! This is a
                            fully responsive front-end project built using HTML,
                            CSS and Bootstrap. The website is
                            designed to provide information about education
                            programs and courses.
                        </span>
                        <div className="tech">
                            <h3>
                                Technologies:
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faBootstrap} />
                            </h3>
                        </div>
                    </div>
                </div>
                <div
                    style={activeProject === 4 ? activeStyle : {}}
                    className={`project-box ${popNumber === 4 && "active"}`}
                    onClick={() => handleClick(4)}
                >
                    <p style={activeProject === 4 ? pStyle : {}}>Portfolio</p>
                    <div
                        className="background"
                        style={activeProject === 4 ? imgActive : {}}
                    ></div>
                    <div className="project-pop">
                        <div
                            className="close-project"
                            onClick={() => setPopNumber(0)}
                        >
                            X
                        </div>
                        <div className="screens">
                            <FontAwesomeIcon
                                icon={faDesktop}
                                className="active"
                            />
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </div>
                        <span className="project-desc">
                            Artifex Store Website is a fictional online store
                            that showcases a range of products. It provides
                            users with an immersive shopping experience,
                            complete with a product catalog, shopping cart, and
                            seamless checkout process.
                        </span>
                        <div className="tech">
                            <h3>
                                Technologies:
                                <FontAwesomeIcon icon={faHtml5} />
                                <FontAwesomeIcon icon={faCss3Alt} />
                                <FontAwesomeIcon icon={faBootstrap} />
                                <FontAwesomeIcon icon={faSquareJs} />
                                <FontAwesomeIcon icon={faReact} />
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;
