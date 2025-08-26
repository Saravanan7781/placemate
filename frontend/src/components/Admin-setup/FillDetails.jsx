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

                if (input1 === "") {
                    const ele = document.getElementById("input1")
                    ele.style.border = "solid 2px red";
                }

                if (input2 === "") {
                    const ele = document.getElementById("input2")
                    ele.style.border = "solid 2px red";
                }

                if (input3 === "") {
                    const ele = document.getElementById("input3")
                    ele.style.border = "solid 2px red";
                }

                if (input4 === "") {
                    const ele = document.getElementById("input4")
                    ele.style.border = "solid 2px red";
                }
            }
            else {
                setCurrentStep(currentStep + 1);
            }

        }
    }

    function changeBorderColor(ele) {
        console.log(ele)
        ele.style.border = "";
    }


    // enable next button on filling details
    useEffect(() => {
        const ele = document.getElementById("nextbtn")
        if (workspaceName !== "" && input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
            ele.style.opacity = 1;
        }
        else {
            ele.style.opacity = 0.2;
        }
    }, [workspaceName, input1, input2, input3, input4]);


    // progress bar animation
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

    //select plan

    const [selectedPlan, setSelectedPlan] = useState(0)

    function handleSelect(plan) {
        const plan1 = document.querySelector('.selectBox1');
        const plan2 = document.querySelector('.selectBox2');
        const plan3 = document.querySelector('.selectBox3');

        if (plan == 1) {
            setSelectedPlan(1)
            plan1.style.background = "#6F36FF";
            plan1.style.border = "solid 2px white";
            plan1.style.boxShadow = "0px 0px 0px 2px black";

            plan2.style.background = "white";
            plan2.style.border = "solid 2px black";
            plan2.style.boxShadow = "0px 0px 0px 0px black";

            plan3.style.background = "white";
            plan3.style.border = "solid 2px black";
            plan3.style.boxShadow = "0px 0px 0px 0px black";
        }
        // else if (plan == 2) {
        //     plan2.style.background = "#6F36FF";
        //     plan2.style.border = "solid 2px white";
        //     plan2.style.boxShadow = "0px 0px 0px 2px black";

        //     plan1.style.background = "white";
        //     plan1.style.border = "solid 2px black";
        //     plan1.style.boxShadow = "0px 0px 0px 0px black";

        //     plan3.style.background = "white";
        //     plan3.style.border = "solid 2px black";
        //     plan3.style.boxShadow = "0px 0px 0px 0px black";
        // }
        // else if (plan == 3) {
        //     plan3.style.background = "#6F36FF";
        //     plan3.style.border = "solid 2px white";
        //     plan3.style.boxShadow = "0px 0px 0px 2px black";

        //     plan2.style.background = "white";
        //     plan2.style.border = "solid 2px black";
        //     plan2.style.boxShadow = "0px 0px 0px 0px black";

        //     plan1.style.background = "white";
        //     plan1.style.border = "solid 2px black";
        //     plan1.style.boxShadow = "0px 0px 0px 0px black";
        // }

    }

    // enable button
    useEffect(() => {
        const ele = document.getElementById("nextbtn")
        if (selectedPlan == 0) {
            ele.style.opacity = 0.2;
        }
        else {
            ele.style.opacity = 1;
        }
    }, [selectedPlan]);



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
                                    <input id='workspaceName' type="text" placeholder='Workspace Name' onChange={(e) => { setWorkspaceName(e.target.value) }} value={workspaceName} />
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
                                    <input id='input1' type="text" placeholder='College Name' onChange={(e) => { setInput1(e.target.value); changeBorderColor(e.target) }} value={input1} />
                                </div>
                                <div className="input-ctn">
                                    <div className="lable">Phone number</div>
                                    <input id='input2' type="text" placeholder='Phone number' onChange={(e) => { setInput2(e.target.value); changeBorderColor(e.target) }} value={input2} />
                                </div>
                            </div>
                            <div className="row3-ctn row">
                                <div className="input-ctn">
                                    <div className="lable">Address</div>
                                    <input id='input3' type="text" placeholder='Address' onChange={(e) => { setInput3(e.target.value); changeBorderColor(e.target) }} value={input3} />
                                </div>
                                <div className="input-ctn">
                                    <div className="lable">Phone number</div>
                                    <input id='input4' type="text" placeholder='Colloge Name' onChange={(e) => { setInput4(e.target.value); changeBorderColor(e.target) }} value={input4} />
                                </div>
                            </div>
                        </div>


                    </div> : <></>}
                {currentStep == 1 ? <div className="selectPlan">
                    <div className="title">
                        <p>Select your Plan</p>
                    </div>
                    <div className="body">
                        <div className="planBox" onClick={() => { handleSelect(1) }}>
                            <div className="planSelect"><div className="select selectBox1"></div></div>
                            <div className="planName"><p className='plan1'>Free</p></div>
                            <div className="planPrice"><p className="rate">$0</p><p className="year">/ year</p></div>
                            <div className="planDesc"><p>Limited Resource (512Mb space), Upto 1000 users, Access 100 users at same time</p></div>
                        </div>
                        <div className="planBox planBox2" onClick={() => { handleSelect(2) }}>
                            <div className="planHide"><p>Currently Unavailable</p></div>
                            <div className="planSelect"><div className="select selectBox2"></div></div>
                            <div className="planName"><p className='plan2'>Pro</p></div>
                            <div className="planPrice"><p className="rate">$60</p><p className="year">/ year</p></div>
                            <div className="planDesc"><p>Limited Resource (1GB space), Upto 2000 users, Access 200 users at same time</p></div>
                        </div>
                        <div className="planBox planBox3" onClick={() => { handleSelect(3) }}>
                            <div className="planHide"><p>Currently Unavailable</p></div>
                            <div className="planSelect"><div className="select selectBox3"></div></div>
                            <div className="planName"><p className='plan3'>Pro +</p></div>
                            <div className="planPrice"><p className="rate">$120</p><p className="year">/ year</p></div>
                            <div className="planDesc"><p>Unlimited Resource, Unlimited user accounts, Up to 500 users can access at a same time.</p></div>
                        </div>
                    </div>
                </div> : <></>}
                {currentStep == 2 ? <div className="confirm">
                    <div className="title">
                        <p>Conform your Details</p>
                    </div>
                    <div className="body">
                        
                    </div>
                </div> : <></>}
                <div className="nextbtn-ctn">
                    <div id='nextbtn' className="nextbtn" onClick={() => { handleNextClick() }}>
                        <p>Next</p><GrLinkNext className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillDetails