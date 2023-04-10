import React from 'react'
import './Slider.css'

function Slider() {
  return (
   <div>
  <div id="slider">
    <input type="radio" name="slider" id="slide1" defaultChecked />
    <input type="radio" name="slider" id="slide2" />
    <input type="radio" name="slider" id="slide3" />
    <input type="radio" name="slider" id="slide4" />
    <div id="slides">
      <div id="overflow">
        <div className="inner">
          <div className="slide slide_1">
            <div className="slide-content">
              <h2>Slide 1</h2>
              <p>Content for Slide 1</p>
            </div>
          </div>
          <div className="slide slide_2">
            <div className="slide-content">
              <h2>Slide 2</h2>
              <p>Content for Slide 2</p>
            </div>
          </div>
          <div className="slide slide_3">
            <div className="slide-content">
              <h2>Slide 3</h2>
              <p>Content for Slide 3</p>
            </div>
          </div>
          <div className="slide slide_4">
            <div className="slide-content">
              <h2>Slide 4</h2>
              <p>Content for Slide 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="controls">
      <label htmlFor="slide1" />
      <label htmlFor="slide2" />
      <label htmlFor="slide3" />
      <label htmlFor="slide4" />
    </div>
    <div id="bullets">
      <label htmlFor="slide1" />
      <label htmlFor="slide2" />
      <label htmlFor="slide3" />
      <label htmlFor="slide4" />
    </div>
  </div>
</div>

  )
}

export default Slider
