import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/SideBar";
import React from "react";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Random from "./components/Random";
import Contact from "./components/Contact";
import Start from "./components/Start";
import sound from "./click3.wav";
// import a7a from "./load.mp3";
// import a7a from "./load.mp3"
function App() {
    const clickAudio = new Audio(sound);
    const [showStart, setShowStart] = React.useState(true);
    //     const aboutAudio = new Audio(a7a);
    const [activeNumber, setActiveNumber] = React.useState(0);
    let width = document.width;
    const isMobile = width >= 320 && width < 480;
    const [showMobilePop, setShowMobilePop] = React.useState(isMobile);
    console.log(isMobile);

    function toggleStart() {
        setShowStart(false);
        clickAudio.play();
    }
    function handleClick(key) {
        if (activeNumber !== key) {
            clickAudio.play();
        }
        setActiveNumber(key);
        if (isMobile) {
            setShowMobilePop(true);
        }
    }
    function handleDown() {
        setActiveNumber((prevActiveNumber) => prevActiveNumber + 1);
        clickAudio.play();
    }
    function handleUp() {
        setActiveNumber((prevActiveNumber) => prevActiveNumber - 1);
        clickAudio.play();
    }
    document.onkeydown = function (e) {
        if (e.key === "ArrowDown" && activeNumber < 3) {
            handleDown();
        } else if (e.key === "ArrowUp" && activeNumber > 0) {
            handleUp();
        }
    };
    function section() {
        switch (activeNumber) {
            case 0:
                return (
                    <AboutMe
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 1:
                return (
                    <Skills
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 2:
                return (
                    <Projects
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 3:
                return <Contact activeNumber={activeNumber} />;
                break;
            default:
                break;
        }
    }
    return (
        <div className="app">
            {activeNumber > 0 && <div className="arrow-up" onClick={handleUp}></div>}
            {/* <IconPage /> */}
            {showStart ? (
                <Start toggleStart={toggleStart} />
            ) : (
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 side-bar">
                        <SideBar
                            activeNumber={activeNumber}
                            handleClick={handleClick}
                        />
                    </div>
                    <div className="main-section col-lg-9 col-md-8 col-sm-6 col-xl-9">
                        {!showMobilePop && section()}
                    </div>
                </div>
            )}
            {/* {audio} */}
            {activeNumber <3 &&!showStart && <div className="arrow-down" onClick={handleDown}></div>}
        </div>
    );
}

export default App;
