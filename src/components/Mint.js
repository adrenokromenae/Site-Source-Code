import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";
import desktopIcon from "../styles/desktopicon1.png"
import mobileIcon from "../styles/mobileicon.png"

import { config, abi } from "../config.js"

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  position: static;
  width: 177px;
  height: 56px;
  left: 0px;
  top: 0px;
  font-size: 20px;
  background: #373434;
  border: 2px solid #ff1818;
  border-radius: 4px;
  color: #fff;
`;

export const StyledRoundButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 48px;
color:#fff;
position: static;
width: 62px;
height: 56px;
left: 0px;
top: 0px;
font-size:32px;
background: #373434;
border: 2px solid #FF1818;
border-radius: 4px;

  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG] = useState(config);

  const claimNFTs = async () => {

    let cost = CONFIG.WEI_COST;

    let ethValue = blockchain.web3.utils.fromWei(cost.toString(), "ether") * Number(mintAmount);
    let value = blockchain.web3.utils.toWei(ethValue.toString(), "ether")

    let tx = {
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: value,
    }

    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);

    console.log(blockchain.web3.currentProvider.accounts)
    if (blockchain.web3.currentProvider.accounts && blockchain.web3.currentProvider.accounts.length) {
      try {
        let gas = await blockchain.smartContract.methods
          .mint(mintAmount).estimateGas(tx)
        tx.gas = blockchain.web3.utils.toHex(gas)
      } catch (err) {
        setFeedback("Insufficient Funds");
        setClaimingNft(false);
        return
      }
    }

    console.log("tx", tx)
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send(tx)
      .once("error", (err) => {
        console.log(err);
        setMintAmount(1)
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > CONFIG.MAX_AMOUNT) {
      newMintAmount = CONFIG.MAX_AMOUNT;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.smartContract]);

  const saleEnded =
    <>
      <s.TextTitle style={{ textAlign: "center", color: "#fff" }}>
        The sale has ended.
      </s.TextTitle>
      <s.TextDescription
        style={{ textAlign: "center", color: "#fff" }}
      >
        You can still find {CONFIG.NFT_NAME} on
      </s.TextDescription>
      <s.SpacerSmall />
      <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
        {CONFIG.MARKETPLACE}
      </StyledLink>
    </>

  const connectToMetaMask =
    <s.Container ai={"center"} jc={"center"}>
      <s.SpacerSmall />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>

        <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>

          <img alt="icon-12" width="36px" height="auto" className="mint-icon" src={desktopIcon} style={{ marginRight: 10, marginLeft: 10, }} />
          <span style={{ color: '#fff' }}>Mint with WalletConnect</span>
        </div>
        <StyledButton
          onClick={(e) => {
            e.preventDefault();
            dispatch(connect());
            getData();
          }}
        >
          CONNECT
        </StyledButton>

      </div>
      {blockchain.errorMsg !== "" &&
        <>
          <s.SpacerSmall />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            {blockchain.errorMsg}
          </s.TextDescription>
        </>
      }
    </s.Container>

  const buyNFT =
    <>
      <StyledButton
        onClick={(e) => {
          e.preventDefault();
          dispatch(disconnect());
          setFeedback("Click buy to mint your NFT.")
        }}
      >
        DISCONNECT
      </StyledButton>
      <s.TextDescription
        style={{
          textAlign: "center",
          color: "#fff",
        }}
      >
        {feedback}
      </s.TextDescription>
      <s.SpacerMedium />
      <s.Container ai={"center"} jc={"center"} fd={"row"}>
        <div className="mintButtons">
          <StyledButton
            disabled={claimingNft ? 1 : 0}
            onClick={(e) => {
              e.preventDefault();
              claimNFTs();
              getData();
            }}
          >
            {claimingNft ? "BUSY" : "BUY"}
          </StyledButton>
          <StyledRoundButton
            style={{ lineHeight: 0.4, marginLeft: 22 }}
            disabled={claimingNft ? 1 : 0}
            onClick={(e) => {
              e.preventDefault();
              decrementMintAmount();
            }}
          >
            -
          </StyledRoundButton>
          <s.SpacerMedium />
          <s.TextDescription
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {mintAmount}
          </s.TextDescription>
          <s.SpacerMedium />
          <StyledRoundButton
            disabled={claimingNft ? 1 : 0}
            onClick={(e) => {
              e.preventDefault();
              incrementMintAmount();
            }}
          >
            +
          </StyledRoundButton>
        </div>
      </s.Container>
      <s.SpacerSmall />
      <s.Container ai={"center"} jc={"center"} fd={"row"}>
        <div class="officialLaunchEnd">
          <span>
            Only {data.totalSupply - data.supply} Left !
          </span>
          <span style={{ color: "red" }}>{CONFIG.MAX_AMOUNT} Max</span>
        </div>
      </s.Container>
    </>

  return (
    <div className="container mintComponent">
      <s.Screen>
        <div className="mintBackground">
          <img src={"./img/Mask Group (2).png"} />
        </div>
        <s.Container
          className="mintMobile"
          flex={1}
          ai={"center"}
          style={{ padding: 24, paddingTop: 0, textAlign: "center" }}
        >
          <s.SpacerSmall />
          <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
            <s.SpacerLarge />
            <s.Container
              flex={2}
              jc={"center"}
              ai={"center"}
              style={{
                padding: 24,
                borderRadius: 8,
                maxHeight: 340,
              }}
            >
              <s.SpacerSmall />
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? saleEnded : (
                <>
                  <s.SpacerXSmall />
                  <s.SpacerSmall />
                  {blockchain.account == "" ||
                    blockchain.smartContract == null ? (
                    connectToMetaMask
                  ) : (
                    buyNFT
                  )}
                </>
              )}
              <s.SpacerMedium />
            </s.Container>
            <s.SpacerLarge />
          </ResponsiveWrapper>
          <s.SpacerMedium />
        </s.Container>
      </s.Screen>
    </div>
  );
}

export default Mint;
