import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

export const AccordionFaq = ({ item, handleChange, expanded }) => {
  return (
    <Accordion expanded={expanded === `accordion-${item.id}`} onChange={handleChange(`accordion-${item.id}`)}>
      <AccordionSummary expandIcon={<AddIcon />}>
        <Typography>{item.summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
