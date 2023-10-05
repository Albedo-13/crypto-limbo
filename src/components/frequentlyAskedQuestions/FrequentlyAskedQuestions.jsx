import { useState } from "react";

import "./frequentlyAskedQuestions.scss";
import { AccordionFaq } from "./AccordionFaq";

const ACCORDION_ITEMS_SETTINGS = {
  left: [
    {
      id: 1,
      summary: "What is the difference between Defi and Metaverse ?",
      details:
        "If metaverse offers the environment and NFTs offer the tokens for interacting with the environment, DeFi offers the infrastructure for financial transactions.",
    },
    {
      id: 2,
      summary: "What Should I do if Google verification fails to bind ?",
      details:
        "It may be because the time isn’t correctly synced on your Google Authenticator app. To set the correct time: On your Android device, go to the main menu of the Google Authenticator app. Tap More (3 dots) > Settings > Time correction for codes > Sync now.",
    },
    {
      id: 3,
      summary: "How to complete your KYC Verification ?",
      details:
        "You can complete you KYC on Paytm app in less than 1 min, Just verify your Aadhaar number with OTP from UIDAI and enter few profile details, that’s it! If you don’t have Aadhaar you can request for visit by our agent or visit any of our KYC centres. Tap KYC icon > Enter your Aadhaar Details and validate OTP > Verify information",
    },
    {
      id: 4,
      summary: "What should I do if I enter the Google verification code incorrectly ?",
      details:
        "When you are trying to verify your online account, entering the wrong verification code usually results in an error message and a request to enter the code again. You are limited to a certain number of attempts before you are locked out of your account.",
    },
  ],
  right: [
    {
      id: 5,
      summary: "Can We Enter in Website Without Login or Sign Up ?",
      details:
        "Yes! You can surf through the website, search and explore cryptocurrencies, etc. But, however, you will need to sign up to start trading. Dont worry, it's easy and wont take long!",
    },
    {
      id: 6,
      summary: "What should I do if I lost the binded phone number ?",
      details:
        "We highly recommend you to call your service provider and ask. The process for blocking the Sim or number from being used in any way is different from service provider to service provider. You can in most cases go to a customer service center where you can procure a new Sim which is then programmed with your lost number.",
    },
    {
      id: 7,
      summary: "How to register an account on the web ?",
      details:
        "There is a button on top of the site that says \"Sign up\". Just click and fill in the fields with valid data. Check your details before sending. When you are sure that the entered data is correct, click the \"Sign up\" button. It's simple!",
    },
    {
      id: 8,
      summary: "How we Change mobile number ?",
      details:
        "So far, there is no such possibility, but we are working hard to add this and many other features to make your experience as comfortable as possible.",
    },
  ],
};

export const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(() => (isExpanded ? panel : false));
  };

  const renderAccordionItems = (items) => {
    const renderColumn = (column) => {
      return column.map((item) => {
        return <AccordionFaq key={item.id} item={item} handleChange={handleChange} expanded={expanded} />;
      });
    };

    const renderLeftColumn = renderColumn(items.left);
    const renderRightColumn = renderColumn(items.right);
    return (
      <div className="faq-accordions">
        <div className="faq-accordions-column">{renderLeftColumn}</div>
        <div className="faq-accordions-column">{renderRightColumn}</div>
      </div>
    );
  };

  const accordions = renderAccordionItems(ACCORDION_ITEMS_SETTINGS);
  return (
    <section className="faq" id="FrequentlyAskedQuestions">
      <div className="bg-section-spray-small" />
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__subtitle">
          Do you have any questions? Or maybe you are facing problems? Don't worry, you're not the first!{" "}
        </p>
        <hr className="h-line" />
        {accordions}
      </div>
    </section>
  );
};
