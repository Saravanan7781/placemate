import './FillDetails.css'
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { VscLoading } from "react-icons/vsc";

function FillDetails() {

    //section values
    const [workspaceName, setWorkspaceName] = useState("");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");


    // progress bar animation
    const [currentStep, setCurrentStep] = useState(0)

    function handleBackClick() {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }
    function handleNextClick() {

        if (currentStep < 2) {
            if (workspaceName === "" || input1 === "" || input2 === "" || input3 === "" || input4 === "") {
                if (workspaceName === "") {
                    const ele = document.getElementById("workspaceName")

                    ele.style.border = "solid 2px red";
                }
            }
            else {
                setCurrentStep(currentStep + 1);
            }

        }
    }


    useEffect(() => {
        const c1 = document.querySelector('.step1-circle');
        const c2 = document.querySelector('.step2-circle');
        const c3 = document.querySelector('.step3-circle');

        const t1 = document.querySelector('.step1-txt');
        const t2 = document.querySelector('.step2-txt');
        const t3 = document.querySelector('.step3-txt');

        const r1 = document.querySelector('.step1-rect');
        const r2 = document.querySelector('.step2-rect');

        console.log(currentStep)
        if (currentStep == 0) {
            c1.className = "step1-circle circle activec";
            c2.className = "step2-circle circle";
            c3.className = "step3-circle circle";

            t1.className = "step1-txt txt activet"
            t2.className = "step2-txt txt"
            t3.className = "step3-txt txt"

            r1.className = "step1-rect rect"
            r2.className = "step2-rect rect"

        }

        if (currentStep == 1) {
            c1.className = "step1-circle circle sactivec";
            c2.className = "step2-circle circle activec";
            c3.className = "step3-circle circle";

            t1.className = "step1-txt txt"
            t2.className = "step2-txt txt activet"
            t3.className = "step3-txt txt"

            r1.className = "step1-rect rect activer"
            r2.className = "step2-rect rect"
        }

        if (currentStep == 2) {
            c1.className = "step1-circle circle sactivec";
            c2.className = "step2-circle circle sactivec";
            c3.className = "step3-circle circle activec";

            t1.className = "step1-txt txt"
            t2.className = "step2-txt txt"
            t3.className = "step3-txt txt activet"

            r1.className = "step1-rect rect activer"
            r2.className = "step2-rect rect activer"
        }

        return () => {
            console.log("lol")
        }
    }, [currentStep])


    //check Avaiablity
    const [isCheckLoading, setisCheckLoading] = useState(0)
    const [showCheckBtn, setShowCheckBtn] = useState(1)
    const [showCheckMsg, setshowCheckMsg] = useState(0)
    const [checkMsgtext, setCheckMsgtext] = useState("")

    async function checkAvaiablity() {

        const nameEle = document.getElementById("workspaceName")


        setisCheckLoading(1)
        setShowCheckBtn(0)

        setTimeout(() => {
            setShowCheckBtn(0)
            setisCheckLoading(0)
            setCheckMsgtext("WorkSpace name available")
            setshowCheckMsg(1)

            setTimeout(() => {
                const ele_p = document.querySelector(".idMSG")
                ele_p.style.color = "green";
            }, 1);
            nameEle.classList.add("greenh")

        }, 2000)
    }



    return (
        <div className="filld">
            <div className="top-ctn">
                <div className="back-ctn">
                    {currentStep == 0 ? <></> :
                        <div className="back-btn" onClick={() => { handleBackClick() }}>
                            <IoIosArrowBack />
                            <p>Back</p>
                        </div>}

                </div>
                <div className="progress-ctn">
                    <div className="progressBar">
                        <div className="step1-circle circle activec"></div>
                        <div className="step1-txt txt"><p>Step 1</p></div>
                        <div className="step1-rect rect"></div>
                        <div className="step2-circle circle"></div>
                        <div className="step2-txt txt"><p>Step 2</p></div>
                        <div className="step2-rect rect"></div>
                        <div className="step3-circle circle"></div>
                        <div className="step3-txt txt"><p>Finish</p></div>
                    </div>
                </div>
                <button onClick={() => { handleNextClick() }}>Next</button>
            </div>
            <div className="body-ctn">
                {currentStep == 0 ?
                    <div className="details-ctn">
                        <div className="text">
                            <div><p className='head'>WorkSpace Setup</p></div>
                            <p className='txt'>Enter the details to create workspace for your college</p>
                        </div>
                        <div className="inputarea-ctn">
                            <div className="row1-ctn row">
                                <div className="input-ctn">
                                    <div className="lable">WorkSpace Name</div>
                                    <input id='workspaceName' type="text" placeholder='Workspace Name' onChange={(e) => { setWorkspaceName(e.target.value) }} />
                                </div>
                                <div className="checkbtn-ctn">
                                    {showCheckBtn ?
                                        <div className="namecheck-btn" onClick={() => { checkAvaiablity() }}>
                                            <p>Check name availablity</p>
                                        </div> : <></>}

                                    {showCheckMsg ?
                                        <div className="msgctn">
                                            <p className='idMSG'>{checkMsgtext}</p>
                                        </div> : <></>}

                                    {isCheckLoading ?
                                        <div className="loadingctn">
                                            <div className="iconctn">
                                                <VscLoading className='icon' />
                                            </div>
                                            <p>Checking workspace name...</p>
                                        </div> : <></>}
                                </div>
                            </div>
                            <div className="row2-ctn row">
                                <div className="input-ctn">
                                    <div className="lable">college Name</div>
                                    <input type="text" placeholder='College Name' onChange={(e) => { setInput1(e.target.value) }} />
                                </div>
                                <div className="input-ctn">
                                    <div className="lable">Phone number</div>
                                    <input type="text" placeholder='Phone number' onChange={(e) => { setInput2(e.target.value) }} />
                                </div>
                            </div>
                            <div className="row3-ctn row">
                                <div className="input-ctn">
                                    <div className="lable">Address</div>
                                    <input type="text" placeholder='Address' onChange={(e) => { setInput3(e.target.value) }} />
                                </div>
                                <div className="input-ctn">
                                    <div className="lable">Phone number</div>
                                    <input type="text" placeholder='Colloge Name' onChange={(e) => { setInput4(e.target.value) }} />
                                </div>
                            </div>
                        </div>


                    </div> : <></>}
                <div className="nextbtn-ctn">
                    <div className="nextbtn" onClick={() => { handleNextClick() }}>
                        <p>Next</p><GrLinkNext className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillDetails