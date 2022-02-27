import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className='cardPage'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <p>
                Presenting
                <br />
                The
              </p>
              <h3>
                DRAGON
                <br />
                CARD
              </h3>
              <div>
                <img src='./img/HOTG_BLACKBG-transformed 2.png'></img>
              </div>
              <p>
                The first NFT collection
                <br />
                with
                <br />
                Custodial of Digital Assets
                <br />
                &<br />
                Debit Card
              </p>
            </div>
            <div className='col-md-7'>
              <img
                src='./img/SubtractM.png'
                className='mobileEllipse d-none'></img>
              <div>
                <img src='./img/Group 7.png' className='topEllipse'></img>
                <img
                  style={{
                    objectFit: "cover",
                    width: "350px",
                    marginTop: "40px",
                  }}
                  src='./img/VISAcard.png'></img>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img
            src='./img/Group 45 (1).png'
            style={{
              objectFit: "cover",
            }}
            className='mb-5'></img>
        </div>

        <div>
          <img src='./img/Group 46.png' className='pt-5 mt-5 hideMobile'></img>
          <div className='mobileList d-none'>
            <ul>
              <li className='leftEllipse'>
                First NFT collection with
                <br />
                Higher monthly Spending
                <br />
                limit for its debit card.
              </li>
              <li className='leftEllipse'>
                Custodial of Digital Assets
                <br />& NFTs
              </li>
              <li className='leftEllipse'>
                First NFT project with its
                <br />
                own Gateway Processor
                <br />
                for Crypto, Fiat and Cards
              </li>
              <li>
                <img
                  src='./img/VISAcard.jpeg'
                  style={{ width: "300px", padding: "25px 0px" }}></img>
              </li>
              <li className='leftEllipse'>
                Launchpad for creation and <br />
                launch of NFT projects
              </li>
              <li className='leftEllipse'>
                First Card with its own <br></br> metaverse & Marketplace &{" "}
                <br></br>
                Video Game
              </li>
              <li className='leftEllipse'>
                First NFT platform to <br /> buy, sell, create and fractionalize{" "}
                <br />
                NFT & digital assets
                {/* First NFT platform to
                <br />
                buy, sell and create Digital
                <br />
                assets & NFTs */}
              </li>
            </ul>
          </div>
        </div>
        <div className='presenting container'>
          <p>Presenting</p>
          <h3>
            The first card with NFT
            <br /> Metaverse in its bloodline.{" "}
          </h3>
        </div>

        <div className='cardButtom container'>
          <div className='row'>
            <div className='col-md-6'>
              <p>
                We just dare to think outside the box for <br />
                our holders.
              </p>
              <p>First NFT debit card for the NFT’s, Crypto’s & Metaverse’s</p>
              <img src='./img/Vector 8.png' className='hideMobile'></img>
            </div>
            <div className='col-md-6'>
              <img src='./img/ccard 2.png'></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
