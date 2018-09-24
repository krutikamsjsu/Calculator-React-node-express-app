import axios from "axios";

export function calculateValue(values){
      return(dispatch)=>{
          return axios({
              method: 'post',
              url: 'http://localhost:3001/calculate',
              data: values
          }).then((response)=>{
              dispatch(calVal(response.data));
          })
      }
  }

export function calVal(values){
      return{
          type:"CALCULATE_RESULT",
          payload:values
      }
  }

/*import * as API from '../api/API';
export const calculateValue = (values) => {
  var result;
  API.calculate(values)
      .then((data) => {
              values.result = data.result;
          console.log(values.result);

      });
  /*return dispatch => {
      dispatch({ payload:values, type: "CALCULATE_RESULT" });
  };*/
/*  return{
      type:"CALCULATE_RESULT",
      payload:values
  }
};*/
