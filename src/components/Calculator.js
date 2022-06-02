import React from 'react'

const Calculator = () => {

    // make the calculation here
    const calculate = () => {
        // eslint-disable-next-line
        let answer = eval(document.getElementById('myinput').value);
        document.getElementById('myinput').value = answer;
    }

    //Handle input from keyboard
    const handler = (event) => {
        //Check whether user hits enter key if yes then calculate and display result
        if (event.key === "Enter") {
            calculate();
        }
    }

    // Handle input from onscreen keys
    const handleInput = (e) => {
        if (e.target.value === "=") {
            //if '=' is pressed calculate result
            calculate();
        } else if(e.target.value === "ac"){
            //if 'ac' is pressed clear the input field
            document.getElementById('myinput').value = "";
        } else if(e.target.value === "backspace"){
            //if 'backspace' is erase the inputfield
            let orivalue = document.getElementById('myinput').value;
            let result = orivalue.substring(0, orivalue.length-1);
            document.getElementById('myinput').value = result;
        } else{
            //Append the value to the input from the onscreen buttons
            document.getElementById('myinput').value = document.getElementById('myinput').value + e.target.value;
        }
    }

    return (
        <main className='container my-3 col-lg-6'>
            <div className="text-center">
                <h2>iCalc - Calculate Faster</h2>
            </div>
            <div className="container border border-dark">
                <div className="row px-2">
                    <input type="text" className='col my-3 fs-2 text-end' id='myinput' placeholder='0' onKeyPress={(e) => handler(e)} />
                </div>
                <div className="buttons px-2">
                    <div className="row">
                        <button className="col btn btn-danger m-1 fs-2" value="ac" onClick={(e) => handleInput(e)}>Clear</button>
                        <button className="col btn btn-danger m-1 fs-2" value="backspace" onClick={(e) => handleInput(e)}><i class="fa-solid fa-delete-left"></i></button>
                    </div>
                    <div className="row">
                        <button className="col btn btn-secondary m-1 fs-2" value="7" onClick={(e) => handleInput(e)}>7</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="8" onClick={(e) => handleInput(e)}>8</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="9" onClick={(e) => handleInput(e)}>9</button>
                        <button className="col btn btn-danger m-1 fs-2" value="/" onClick={(e) => handleInput(e)}>/</button>
                    </div>
                    <div className="row">
                        <button className="col btn btn-secondary m-1 fs-2" value="4" onClick={(e) => handleInput(e)}>4</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="5" onClick={(e) => handleInput(e)}>5</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="6" onClick={(e) => handleInput(e)}>6</button>
                        <button className="col btn btn-danger m-1 fs-2" value="*" onClick={(e) => handleInput(e)}>*</button>
                    </div>
                    <div className="row">
                        <button className="col btn btn-secondary m-1 fs-2" value="1" onClick={(e) => handleInput(e)}>1</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="2" onClick={(e) => handleInput(e)}>2</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="3" onClick={(e) => handleInput(e)}>3</button>
                        <button className="col btn btn-danger m-1 fs-2" value="-" onClick={(e) => handleInput(e)}>-</button>
                    </div>
                    <div className="row pb-2">
                        <button className="col btn btn-secondary m-1 fs-2" value="." onClick={(e) => handleInput(e)}>.</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="0" onClick={(e) => handleInput(e)}>0</button>
                        <button className="col btn btn-secondary m-1 fs-2" value="=" onClick={(e) => handleInput(e)}>=</button>
                        <button className="col btn btn-danger m-1 fs-2" value="+" onClick={(e) => handleInput(e)}>+</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Calculator