import React, {useState,useEffect} from 'react';
import '../App.css';
import './calci.css'

function Calci(){
    const initialRetirementAge = Number(localStorage.getItem('RetirementAge') || 100);
    const initialTargetReAmt = Number(localStorage.getItem('TargetReAmt') || 0);
    const initialAnnualReExp = Number(localStorage.getItem('AnnualReExp') || 0);
    const initialCurrentAge = Number(localStorage.getItem('CurrentAge') || 25);
    const initialCurrentSavings = Number(localStorage.getItem('CurrentSavings') || 10000);
    const initialContributions = Number(localStorage.getItem('Contributions') || 500);
    const initialcontributionsFreq = Number(localStorage.getItem('contributionsFreq') || 'Monthly');
    const initialPreReROR = Number(localStorage.getItem('PreReROR') || 7);
    const initialPostReROR = Number(localStorage.getItem('PostReROR') || 7);
    const initialInflation = Number(localStorage.getItem('Inflation') || 2.9);

    const [retirementAge, setRetirementAge] = useState(initialRetirementAge);
    const [targetReAmt, setTargetReAmt] = useState(initialTargetReAmt);
    const [annualReExp, setAnnualReExp] = useState(initialAnnualReExp);
    const [currentAge, setCurrentAge] = useState(initialCurrentAge);
    const [currentSavings, setCurrentSavings] = useState(initialCurrentSavings);
    const [contributions, setContributions] = useState(initialContributions);
    const [contributionsFreq, setcontributionsFreq] = useState(initialcontributionsFreq);
    const [preReROR, setPreReROR] = useState(initialPreReROR);
    const [postReROR, setPostReROR] = useState(initialPostReROR);
    const [inflation, setInflation] = useState(initialInflation);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });

    const calcRetirementAge = (updateTargetReAmt) => {
         const netPreReROR = (preReROR - inflation) / 100;

         let curBal = currentSavings;
         const annualCon = contributionsFreq === "Annually" ? contributions : contributions + 12;
         let reAge = currentAge;

         while(curBal < updateTargetReAmt) {
             curBal = annualCon + curBal * (1 + netPreReROR);
             reAge += 1;

            if (reAge > 200) break;
         }
         return reAge;
    };

    useEffect(() => {
       localStorage.setItem('retirementAge' , retirementAge);
       localStorage.setItem('targetReAmt' , targetReAmt);
       localStorage.setItem('annualReExp' , annualReExp);
       localStorage.setItem('currentAge' , currentAge);
       localStorage.setItem('currentSavings' , currentSavings);
       localStorage.setItem('contributions' , contributions);
       localStorage.setItem('contributionsFreq' , contributionsFreq);
       localStorage.setItem('preReROR' , preReROR);
       localStorage.setItem('postReROR' , postReROR);
       localStorage.setItem('inflation' , inflation);

    //    annualReExp <= targetReAmt + NetRateOfReturn
    // targetReAmt >= annualReExp / NetRateOfReturn

    let netPostReROR = (postReROR - inflation) / 100;
    if(netPostReROR === 0) netPostReROR = 0.001;

    let updateTargetReAmt = annualReExp / netPostReROR;
    setTargetReAmt(updateTargetReAmt);

    const reAge = calcRetirementAge(updateTargetReAmt);
    setRetirementAge(reAge);
    },
    [annualReExp,currentAge,currentAge,currentSavings,contributions,contributionsFreq,preReROR, postReROR, inflation]);
    return(
        <div className='App' style={{backgroundColor:'lightgray'}}>
            <div style={{textAlign:'left'}}>
            <h1>Financial Independence Calculator</h1>
            <h2>You can retire at age: {retirementAge}</h2>
<div>Target retirement Amount Monthly: {formatter.format (targetReAmt)}</div>
</div>
<form className="calci">
<div style={{display:'flex',margin:'20px'}}>
    <div style={{borderRadius:'10px', float:'right', display:'flex',flexDirection:'column',textAlign:'left', margin:'20px',alignItems:'flex-start',backgroundColor:'gray'}}>
    <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>Annual retirement expense(today's Rupees)
        <input type="number" value={annualReExp} onChange={(e) => setAnnualReExp(parseInt(e.target.value))}/>
    </label>
    <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>Current age 
    <input type="number" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)}/>
    </label>
    <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>Current Savings Balance
    <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(parseInt(e.target.value) || 0)}/>
    </label>
    <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>Regular Contributions
    <input type="number" value={contributions} onChange={(e) => setContributions(parseInt(e.target.value) || 0)}/>
    </label>
    <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>Contribution Frequency
<select>
    <option value="Monthly">Monthly
    </option>
    <option value="Annually">Annually</option>
</select>
       
    </label>
    </div>
    <div style={{borderRadius:'10px',display:'flex',height:'auto',width:'auto',alignItems:'flex-start',flexDirection:'column',backgroundColor:'gray'}}>
        <h2>Advanced</h2>
        <div style={{textAlign:'left'}}>
        <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>
            Pre-retirement rate of return
            <input type="number" value={preReROR} onChange={(e) => setPreReROR(parseInt(e.target.value) || 0)}/>
        </label>
        <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>
            Post-retirement rate of return
            <input type="number" value={postReROR} onChange={(e) => setPostReROR(parseInt(e.target.value) || 0)}/>
        </label>
        <label style={{display:'flex', flexDirection:'column',margin:'10px'}}>
            Inflation
            <input type="number" value={inflation} onChange={(e) => setInflation(parseFloat(e.target.value) || 0)}/>
        </label>
        </div>
    </div>
    </div>
</form>

        </div>
    );
}

export default Calci;