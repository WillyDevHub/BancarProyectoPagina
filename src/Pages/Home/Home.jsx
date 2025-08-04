import "./Home.css";
import cliente from "../../data/clientes.json"
import intro from "../../data/intro.json"
import { Image } from "../../components/Generals/Complements";


const Home = () => {
  return(
    <>
    <IntroInfo/>
    <Card/>
    </>
  )
};

const IntroInfo = ()=>{
  return(
    <div className="content-introInfo">
        <IntroInfoBody title={intro.title} info={intro.info}/>
    </div>
  )
}


const IntroInfoBody = ({title, info})=>{
  return(
    <>
     <h2>{title}</h2>
     <p>{info}</p>
    </>
  )
}

const CardBody = ({title, text, picture})=>{
  return(
    <div className="reseña">
      <Image url={picture} comment={title}/>
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    </div>
  )
}

const Card = ()=>{
  return( 
      <>
      {cliente.map(({id,image, student, comment})=>
          <CardBody key={id} title={student} text={comment} picture={image}/>
      )}
      </>
  )
}



export default Home