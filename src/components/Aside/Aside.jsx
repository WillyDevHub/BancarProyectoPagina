import utils from "../../data/panel.json";
import "./Aside.css";

const Aside = () => {
  return (
    <aside>
      <PanelDetails title="dudas?"/>
    </aside>
  );
};

const Content = ({text}) => <p>{text}</p>;


const Details = ({ children }) => <details>{children}</details>;

const PanelDetails = ({title}) => {
  return (
    <div className="container-menu-details">
        <h3>{title}</h3>
      {utils.map(({id, title, content }) => (
        <Details key={id}>
          <summary>{title}</summary>
          <Content text={content} />
        </Details>
      ))}
    </div>
  );
};

export default Aside;
