import React from "react";
import "./Wedding.css";

function Wedding() {
  return (
    <div>
      <div className="main">
        <h1 style={{textAlign:'center' , fontSize:"30px" ,marginTop:"30px"}}>Wedding</h1>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://image3.jdomni.in/banner/28072020/BF/A3/A6/BF67AB941F2D7AF6F0E2A65779_1595931754548.jpg?output-format=webp" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Digamber / Shwetamber Jains</h2>
                <p className="card_text">
                  A simple and solemn affair, a Jain wedding is a series of
                  rituals like Phere, Havan and Granthi Bandhan.
                </p>
                {/* <button className="btn card_btn">Read More</button> */}
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Bengali, Oriya and Assamese</h2>
                <p className="card_text">
                  These wedding is a series of rituals that are conducted prior
                  to, during and immediately after wedding.
                </p>
                {/* <button className="btn card_btn">Read More</button> */}
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src="https://image3.jdomni.in/banner/28072020/5E/8B/E2/C91FD224EF9EBF6430B943587A_1595937006597.jpg?output-format=webp" />
              </div>
              <div className="card_content">
                <h2 className="card_title">Brahmin, Rajput and Kayastha</h2>
                <p className="card_text">
                  These Wedding comprises of various ceremonies such as Tilak &
                  the Ban(commencement of wedding ceremony).
                </p>
                {/* <button className="btn card_btn">Read More</button> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Wedding;
