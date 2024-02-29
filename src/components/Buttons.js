import {Link} from 'react-router-dom';

function Button(props) {
  return (
    props.link 
    ? <Link to={ props.link } role="button" className={`btn ${ props.className }`}>{ 
      props.blind 
      ? <span className="blind">{ props.blind }</span>
      : props.content 
    }</Link> 
    : <button type="button" className="btn">{ props.content }</button>
  )
}


export default Button;