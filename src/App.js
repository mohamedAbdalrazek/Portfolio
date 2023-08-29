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
import Start from "./components/Start"
import sound from "./click3.wav";
// import a7a from "./load.mp3";
// import a7a from "./load.mp3"
function App() {
    const clickAudio = new Audio(sound);
    const [showStart, setShowStart] = React.useState(true)
//     const aboutAudio = new Audio(a7a);
    const [activeNumber, setActiveNumber] = React.useState(0);
    
    function handleClick(key) {
        if (activeNumber !== key) {
            clickAudio.play();
        }
        setActiveNumber(key);
    }
    function handleUp() {
        // if(activeNumber ===0){
        //     aboutAudio.play();
        // }
        setActiveNumber((prevActiveNumber) => prevActiveNumber + 1);
        clickAudio.play();
    }
    function handleDown() {
        // if(activeNumber ===2){
        //     aboutAudio.play();
        // }
        setActiveNumber((prevActiveNumber) => prevActiveNumber - 1);
        clickAudio.play();
    }
    document.onkeydown = function (e) {
        if (e.key === "ArrowDown" && activeNumber < 4) {
            handleUp();
        } else if (e.key === "ArrowUp" && activeNumber > 0) {
            handleDown();
        }
    };
    function section() {
        switch (activeNumber) {
            case 0:
                return <Home activeNumber={activeNumber} />;
                break;
            case 1:
                return (
                    <AboutMe
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 2:
                return (
                    <Skills
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 3:
                return (
                    <Projects
                        activeNumber={activeNumber}
                        handleUp={handleUp}
                        handleDown={handleDown}
                    />
                );
                break;
            case 4:
                return <Contact activeNumber={activeNumber} />;
                break;
            // case 4:
            //     return <Random activeNumber={activeNumber} />;
            //     break;
            default:
                break;
        }
    }
    return (
        <div className="app">
            {/* <IconPage /> */}
            {showStart ? <Start />:
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 side-bar">
                    <SideBar
                        activeNumber={activeNumber}
                        handleClick={handleClick}
                    />
                </div>
                <div className="main-section col-lg-9 col-md-8 col-sm-6 col-xl-9">
                    {section()}
                </div>
            </div>}
            {/* {audio} */}
        </div>
    );
}

export default App;
