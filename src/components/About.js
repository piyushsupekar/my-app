import React from "react";
export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: "black",
  //   color: "white",
  //   // borderRadius: "10px", 
  // });

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#252525' : 'white',
    border: `1px solid ${props.mode === 'dark' ? 'white' : 'black'}`
  }

  // const [btntext, setBtnText] = useState("Enable Dark Mode")

  // let toggleStyle = () => {
  //   if (myStyle.color === 'white') {
  //     setMyStyle({
  //       backgroundColor: "white",
  //       color: "black",
  //       // borderRadius: "10px", 
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  //   else {
  //     setMyStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //       // borderRadius: "10px", 
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  // }
  return (
    <div>
      <div
        className="accordion container my-3"
        id="accordionExample"
        style={ myStyle }>
        <h1>About us </h1>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={ myStyle }
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              ACcording to Text Utils { " " }
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div
              className="accordion-body"
              style={ myStyle }>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={ myStyle }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo ">
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div
              className="accordion-body"
              style={ myStyle }>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={ myStyle }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div
              className="accordion-body"
              style={ myStyle }>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="container my-3">
          {/* <button
            type="button"
            onClick={ toggleStyle }
            className="btn btn-primary">
            { btntext }
          </button> */}
        </div>

      </div>

    </div >
  );
}
