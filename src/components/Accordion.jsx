import { AccordionItem } from './AccordionItem';

export const Accordion = ({ array }) => {
  return (
    <div>
      {array.map((el, i) => (
        <li key={i}>
          <AccordionItem title={el.title} content={el.content} />
        </li>
      ))}
    </div>
  );
};
