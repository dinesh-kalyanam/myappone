import React from "react";
import Pic from "./Images/image.png"


const SampleOne = () => {
    return (

        <div className="mainContainer" >

<div className="containerLeft"><h1>Select Category</h1> 
<div className="card">Moives By Songs</div>
<div className="card">2023 Moives</div>
<div className="card">Best Of 20s</div>
<div className="card">Best Of 90s </div>
<div className="card">2023 Moives</div>
<div className="card">Best Of 20s</div>



</div>

            <div className="containerRight"><h1>Question</h1> 
            <div>

            <h2>Look at the Picture and tell that what is the name of the movie</h2>
        <div > <img className="image" src={Pic}/></div>
        <form>
            <label style={{fontSize: '20px'}}>Guss the Movie Name With Shown Picture</label> 
            <br />
            <input type="radio" />Lockcargil
            <br />
            <input type="radio"/>Choricargil
            <br />
            <input type="radio" />Choricargil2
            <br />
            <input type="radio" />Choricargil3
        </form>
            </div>
            </div>

           
        </div>
    )
}
export default SampleOne