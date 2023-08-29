import { useState } from "react";

import "./frequentlyAskedQuestions.scss";
import { AccordionFaq } from "./AccordionFaq";

// TODO: change style names (acc left and right => acc-column)
// TODO: gradient borders
// TODO?: min section height to avoid jumping?

const accordionItemsSettings = {
  left: [
    {
      id: 1,
      summary: "What is the difference between Defi and Metaverse ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      summary: "What Should I do if Google verification fails to bind ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      summary: "How to complete your KYC Verification ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      summary: "What should I do if I enter the Google verification code incorrectly ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ],
  right: [
    {
      id: 5,
      summary: "Can We Enter in Website Without Login or Sign Up ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 6,
      summary: "What should I do if I lost the binded phone number ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 7,
      summary: "How to register an account on the web ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 8,
      summary: "How we Change mobile number ?",
      details:
        "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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

  const accordions = renderAccordionItems(accordionItemsSettings);
  return (
    <section className="faq">
      <div className="bg-section-spray-small" />
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__subtitle">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <hr className="horizontal-separator" />
        {accordions}
      </div>
    </section>
  );
};
