import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./frequentlyAskedQuestions.scss";
import { convertScssToObject } from "../../utils/utils";
import variables from "../../styles/_variables.scss?inline";

// TODO: change style names (acc left and right => acc-column)


export const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = useState(null);
  const colors = convertScssToObject(variables);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <p className="faq__subtitle">
          When an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <hr className="horizontal-separator" />
        <div className="faq-accordions">
          <div className="faq-accordions-left">
            <Accordion expanded={expanded === 'accordion1'} onChange={handleChange('accordion1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: `${colors.white}` }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: `${colors.white}` }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="faq-accordions-right">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: `${colors.white}` }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: `${colors.white}` }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 4</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
