import { Component } from "react";
import s from './CreatefeedbackButton.module.css';
import PropTypes from 'prop-types' 


class CreatefeedbackButton  extends Component {

    

render() 
{
    
    const { good, neutral, bad, clickButtonFeedback } = this.props;
return ( 
    
    <ul  className ={s.list}>
        <li className ={s.item}>
        <button 
         className ={s.button}
         type= "button"
         name = {good}
         onClick = {clickButtonFeedback}   > 
           {good}
        </button>
        </li>
        <li className ={s.item}>
        <button
          className ={s.button}
          type= "button"
          name = { neutral}
          onClick = {clickButtonFeedback} 
        >
          { neutral}
        </button>
        </li>
        <li className ={s.item}>
        <button 
          className ={s.button}
          type= "button"
          name = { bad }
          onClick = {clickButtonFeedback}
        >
          {bad}
        </button>
        </li>

       

       
    </ul>
    )
  
}
}

CreatefeedbackButton.propTypes = {
good:PropTypes.string,
neutral:PropTypes.string,
bad:PropTypes.string,
clickButtonFeedback:PropTypes.func,

}

export default CreatefeedbackButton;