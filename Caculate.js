const formula = "";//輸入算式
const formula_dismantle = Array.from(formula);
let combination = '';
let AllNum = [];
let NotNum = ["+","-"];
let OtherNotNum = ["*","/"];
let Ans = 0;
let LittleNum = [];
let LittleCut = [];
let LittleAns = 0;

formula_dismantle.forEach(element => {
    if(NotNum.indexOf(element)===-1){
        combination += element;
    }
    else{
        AllNum.push(combination);
        AllNum.push(element);
        combination = '';
    }
});

if(combination!==''){
    AllNum.push(combination);
}

combination='';

AllNum.forEach(function(value,index){
    if(value.indexOf('*')!==-1 || value.indexOf('/')!==-1){
        LittleNum=[];
        LittleCut=[];
        LittleCut = Array.from(value);
        combination = '';
        LittleCut.forEach(x =>{
            if(OtherNotNum.indexOf(x)===-1){
                combination += x;
            }
            else{
                LittleNum.push(combination);
                LittleNum.push(x);
                combination = '';
            }
        })
        LittleNum.push(combination);
        LittleAns = Number(LittleNum[0]);
        LittleNum.forEach(function(v2,index2){
            if(index2!==0){
                if(index2%2===0){
                    if(LittleNum[index2-1]==="*"){
                        LittleAns = Number(LittleAns)*Number(v2);
                    }
                    if(LittleNum[index2-1]==="/"){
                        LittleAns = Number(LittleAns)/Number(v2);
                    }
                }
            }
        })
        AllNum[index] = LittleAns;
    }
})

Ans = Number(AllNum[0])

AllNum.forEach(function(v3,index3){
    if(index3!==0){
        if(index3%2===0){
            if(AllNum[index3-1]==='+'){
                Ans = Ans + Number(v3);
            }
            if(AllNum[index3-1]==='-'){
                Ans = Ans - Number(v3);
            }
        }
    }
})

console.log(formula+"="+Ans);
