import React, { Component } from "react";

class Body extends Component {
  render() {
    return (
      <div className="bodyComponent">
        <section className="hero-section">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 ">
                <img src="./img/hero image 1.png"></img>
                <div className="heroButtons">
                  <a href="/mint">Mint Now</a>
                  <a
                    href="https://opensea.io/0x350662c9315bf31cd70ef43c23a0ca48f9370b63"
                    target="_blank"
                  >
                    View on Opensea.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutSection" className=" mt-5" style={{}}>
          <div className="container">
            <h3>
              The Handbag that carries <br />
              the powers of the Gods!
            </h3>
            <p>
              The lost tales tell the story of how the fight against dragons
              became very profitable. Apart from getting their expensive skin,
              whoever kills a dragon gets the dragon’s unique magical trait,
              power or gift, thus making the slayer a very powerful, highly
              revered or uniquely talented individual, sometimes regarded as
              demigods.
            </p>
            <div className="">
              <img src="./img/dragonimg.png"></img>
            </div>

            <div className="staticNft">
              <h4>
                Presenting the world’s first NFT Collection of HandBags made out
                of Dragon skin.
              </h4>
              <p>
                <span>9999</span> Static NFT Handcrafted Handbags +{" "}
                <span>151</span> Rotating NFT Handcrafted Handbags ={" "}
                <span>10,150</span> Dragon Skin Bags
              </p>
              <p>
                In the modern world, dragon-slayers are powerful, revered,
                talented and gifted people who are now commonly known as Stars,
                Celebrities, Icons, Industry Legends, Millionaires, Billionaires
                and lots more.
              </p>
              <p>
                Our purpose is to establish a community where high-rated
                individuals can bank NFTs with top-notch financial services and
                infrastructure that support easy and secure access to the
                Metaverse and further provide a Marketplace that features unique
                tools.
              </p>
            </div>
          </div>
        </section>

        <section id="addSection" className="">
          <img src="./img/Subtract (2).png"></img>
        </section>

        <section id="handbagSection" className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./img/Rectangle 20.png"
                style={{
                  width: "100%",
                  paddingBottom: "25px",
                }}
              ></img>
              <br />
              <img
                src="./img/BAGPNG.png"
                style={{
                  margin: "25px 0px",
                  width: "100%",
                  objectFit: "cover",
                }}
              ></img>
            </div>

            <div className="col-md-6">
              <h2>The Handbag</h2>
              <p>
                Is it the most Powerful, Magical, Celestial, or Divine Craft?
              </p>

              <p>
                This question remains unanswered. Legend has it that the Gods
                came to earth and seeded animals, plants and the entire
                ecosystem by spreading seedlings from their handbags. These
                seedlings evolved in different forms and shapes, having the
                ability to reproduce and in the process, legendary dragons were
                formed but with a special touch of the Gods.
              </p>

              <p>
                These dragons were created with skins that matches the handbag
                coverings of the Gods which they had during creation. These
                skins also inhibit the ability to create and transfer traits,
                power or magical gifts.
              </p>

              <p>
                Other powerful characteristics were exhibited by these dragons
                and there was no two-alike. One could be a water dragon that
                navigates the seas while another all made out of platinum,
                another look all white with big roars. Common dragons however
                existed but only lived in caves with red eyes looking for the
                next meal.
              </p>

              <p>
                The legendary creatures also have the most advanced type of skin
                since it can be converted into any color, strength or resistive
                structure.
              </p>

              <p>
                A new hunting season is now on for slayers to get these rare and
                expensive dragon skins which can be crafted into the
                power-harnessing piece known as THE HANDBAG OF THE GODS.
              </p>
              <p>Would you get one?</p>
            </div>
          </div>
        </section>

        <section id="levels" className="container">
          <div className="row">
            <div className="col-md-6 zIndex">
              <div>
                <img src="./img/logo (2).png" className="imgFaq"></img>
                <div className="levelCompare">
                  <div>
                    <h4>
                      6 Levels
                      <br />
                      of
                      <br />
                      Rarity
                      <br />
                    </h4>
                    <p className="text-capitalize">Common</p>
                    <p className="text-capitalize">UnCommon</p>
                    <p className="text-capitalize">Rare</p>
                    <p className="text-capitalize">super rare</p>
                    <p className="text-capitalize">Mythic</p>
                    <p className="text-capitalize">Legend</p>
                  </div>
                  <div>
                    <h4>
                      7 Levels
                      <br />
                      of
                      <br />
                      Traits
                      <br />
                    </h4>
                    <p>Handle</p>
                    <p>Handle Base</p>
                    <p>Charm</p>
                    <p>Edge Corners</p>
                    <p>Front Leather</p>
                    <p>Left side leather</p>
                    <p>Rotating or static</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <img src="./img/Vector (3).png" />
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="mb-5">FAQ</h2>

                <div
                  class="accordion md-accordion"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne1">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-minus mr-3 rotate-icon d-none"></i>{" "}
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>How can I buy a Handbag of the Gods NFT?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne1"
                      class="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne1"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Purchasing happens through our websites which can be
                        found at the top in a button that says mint or a link to
                        opensea.io. When minting commences, connect your wallet
                        and click on mint or buy. Follow procedures you will
                        have your NFT in no time.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne2">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne2"
                        aria-expanded="true"
                        aria-controls="collapseOne2"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>What kind of Airdrop will you make?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne2"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne2"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        We will launch a token which will be our native token
                        and will be distributed after the sale of the first 9999
                        Dragon Skin Handbag collection.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne3">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne3"
                        aria-expanded="true"
                        aria-controls="collapseOne3"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>Can I Mint on My Mobile device?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne3"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne3"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes, you will be able to mint through a Metamask Wallet
                        connection on your mobile phone or desktop computer.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne4">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne4"
                        aria-expanded="true"
                        aria-controls="collapseOne4"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>How Many Traits Are in The Collection?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne4"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne4"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        There are 6 levels of rarity and 7 levels of traits,
                        hence, more than 200 unique traits are available
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne5">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne5"
                        aria-expanded="true"
                        aria-controls="collapseOne5"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>Do you have a rarity system?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne5"
                      class="collapse"
                      role="tabpanel"
                      aria-labelledby="headingOne5"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes Common, Uncommon, Rare, Super Rare, Mythic & Legend
                        plus after the sale we will show our rarity % thru
                        rarity.tools for easy search.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne6">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne6"
                        aria-expanded="true"
                        aria-controls="collapseOne6"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>Will there be a Secondary Market?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne6"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne6"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes, opensea.io & our own NFT marketplace called
                        Elisseev’s when we launch after the collection has been
                        sold.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne7">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne7"
                        aria-expanded="true"
                        aria-controls="collapseOne7"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>Will there be a Community Fund?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne7"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne7"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes and we will grow this community fund by depositing
                        in it 5% of our secondary market sales, 5% for all the
                        sales of plots of land from our upcoming Metaverse & 5%
                        from the future video Game Play to earn that will have 1
                        avatar character per every NFT of the collection.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne8">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne8"
                        aria-expanded="true"
                        aria-controls="collapseOne8"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>{" "}
                          <div>Are their Secondary Sales Royalties?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne8"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne8"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes,
                        <p>- 5% of the secondary market sales </p>
                        <p>- 5% of our own NFT Marketplace</p>
                        <p>
                          - 5% from the sales 150,000+ plots of land of our
                          Metaverse
                        </p>{" "}
                        <p>- 5% from the Earn to Play upcoming video game</p>
                        with 1 avatar character for every NFT of the collection.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne10">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne10"
                        aria-expanded="true"
                        aria-controls="collapseOne10"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div> Will the Community have a vote?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne10"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne10"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes, for some decisions we prefer to have a vote from
                        the community since the are the engine behind this
                        vehicle and they have to be part of the journey.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne11">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne11"
                        aria-expanded="true"
                        aria-controls="collapseOne11"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>{" "}
                          <div>Are Tokens coming out of the collection?</div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne11"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne11"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Yes we will bring a token after the sale has been
                        complete for our holders.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne12">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne12"
                        aria-expanded="true"
                        aria-controls="collapseOne12"
                      >
                        <h5 class="mb-0">
                          <i class="fa fa-plus mr-3 rotate-icon"></i>
                          <div>
                            What would be the price of each NFT when the minting
                            goes live?
                          </div>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne12"
                      class="collapse "
                      role="tabpanel"
                      aria-labelledby="headingOne12"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Pre sale whitelist is 1000 bags on the 8th of Jan 10AM
                        CST for 0.2 ETH, Regular public sale is 8999 bags on the
                        15th of Jan 10AM CST for 0.3. Limit of 2 per person
                        only.
                      </div>
                    </div>
                  </div>
                  <img
                    src="./img/drag_big_gold_rose 1.png"
                    className="accordionBackground"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="theRoadMap">
          <div className="container">
            <p className="sectionHeading">ROADMAP</p>

            <div className="roadmapChart">
              <div className="singleRoad">
                <div>
                  <p>
                    On 01/08/2022 at 10am CST & 01/15/2022 we will be launching
                    The First ever NFT Collection of 9999 + 151 3D Handcrafted
                    dragon skin Handags for the Metaverse with 6 levels of
                    rarity & 7 levels of traits called THE HANDBAG OF THE GOD’S.
                    Minting functionality & secondary marketplace will be shared
                    thru our discord, twitter and instagram accounts.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="./img/logo (6).png" class="mr-3"></img>
                  <h4>thehandbagofthegods.com</h4>
                </div>
              </div>
              <div className="singleRoad">
                <div>
                  <p>
                    After the collection sells out, we will open our NFT
                    Marketplace to buy, sell or create NFTs called Elisseev’s.
                    We will further serve as a Launchpad for future projects and
                    collections. This marketplace will be expanding to deliver
                    other services which include integrations with markets such
                    as opensea.io.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="./img/Frame 67.png"></img>
                  <h4>[ Coming Soon ]</h4>
                </div>
              </div>
              <div className="singleRoad">
                <div>
                  <p>
                    Marketverse will be our own Metaverse and it will have
                    150,000+ plots of land in which holders will have 1 lot per
                    NFT leaving So the NFT doubles as video game avatar
                    character.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="./img/Frame 68 (1).png"></img>
                  <h4>[ Coming Soon ]</h4>
                </div>
              </div>
              <div className="singleRoad">
                <div>
                  <p>
                    The first debit card for the NFT WORLD. Use it inside the
                    Metaverse, Use it in the real world, Use it in Buying
                    online, Enjoy a higher spending cap, Go to our
                    MarketVerse.nft to interact with your account and card, Use
                    your phone, Use your computer or go to any ATM - 24hrs for
                    our NFT holders.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img src="./img/Frame 69 (1).png" class="mr-4"></img>
                  <h4>[ Coming Soon ]</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <img src="./img/Attachment_1638629620.png"></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img src="./img/whitebag1.png"></img>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img src="./img/dragon-bag_big08_nobg 1.png"></img>
              </div>
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Team</h1>
            <div className="row  d-flex justify-content-center">
              <div
                className="col-md-5"
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Yamil Santiago</h3>
                <p>
                  Administrator
                  <br />
                  &<br />
                  Blockchain Expert
                </p>

                <img src="./img/Rectangle 13 (11).png"></img>
              </div>
              <div
                className="col-md-5"
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Horacio Velozo</h3>
                <p>
                  Designer
                  <br />
                  & <br />
                  3D Modeler
                </p>

                <img
                  src="./img/Rectangle 13 (12).png"
                  style={{ display: "block", margin: "auto" }}
                ></img>
              </div>
              <div
                className="col-md-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Chushoga</h3>
                <p>
                  Designer
                  <br />
                  &<br />
                  3D Modeler
                </p>

                <img src="./img/Rectangle 13 (10).png"></img>
              </div>

              <div
                className="col-md-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Sudeep</h3>
                <p>
                  Designer
                  <br />
                  & <br />
                  Developer
                </p>

                <img src="./img/Rectangle 13 (13).png"></img>
              </div>
              <div
                className="col-md-4"
                style={{
                  textAlign: "center",
                }}
              >
                <h3>Nicole E</h3>
                <p>
                  Front Developer
                  <br />
                  & <br />
                  Blockchain
                </p>

                <img src="./img/Rectangle 13 (15).png"></img>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "30px 0px",
                }}
              >
                <img src="./img/bag1.png" style={{ width: "70%" }}></img>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                <img src="./img/bag2.png" style={{ width: "70%" }}></img>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="./img/bag3.png" style={{ width: "70%" }}></img>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Body;
