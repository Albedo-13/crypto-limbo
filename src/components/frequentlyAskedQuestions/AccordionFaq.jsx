import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { convertScssToObject } from "../../utils/utils";
import variables from "../../styles/_variables.scss?inline";

export const AccordionFaq = ({ item, handleChange, expanded }) => {
  const colors = convertScssToObject(variables);

  return (
    <Accordion expanded={expanded === `accordion${item.id}`} onChange={handleChange(`accordion${item.id}`)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: `${colors.white}` }} />}>
        <Typography>{item.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
