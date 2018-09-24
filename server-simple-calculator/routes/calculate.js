var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var reqOper1 = req.body.operand1;
    var reqOper2 = req.body.operand2;
    var reqOpertn = req.body.operation;
    var result;
    if(reqOper1 === null && reqOper2 === null){
        result = "Please insert Operand1 and Operand2";
    }else if(reqOper1 === null && reqOper2 !== null){
        result = reqOper2;
    }else if(reqOper1 !== null && reqOper2=== null){
        result = reqOper1;
    }else{
        if(reqOpertn == '+'){
            result = Number(reqOper1)+Number(reqOper2);
        }else if(reqOpertn == '-'){
            result = Number(reqOper1)-Number(reqOper2);
        }else if(reqOpertn == '*'){
            result = Number(reqOper1)*Number(reqOper2);
        }else {
            if (Number(reqOper2) === 0) {
                result = ".... INFINITY ....  :'("
            }
            else
                result = Number(reqOper1) / Number(reqOper2);
        }
    }
    res.send({result:result});
});

module.exports = router;
