const {send} = require('./mailScripto');
const ALL_PEEPS = require('./mondmondPeepsData.json').peopArray;

const matchPeeps = () => {
    let matchingDone = false;
    let matchedArr = {};
    while(!matchingDone){
        matchedArr = ALL_PEEPS.map((mondMondpeep) => {
            return {peep: mondMondpeep , matchedTo: {}};
        });

        let unmatched = ALL_PEEPS;

        matchedArr.map((pairToMatch) => {
            let matched = false;
            let its_a_mondmond_match = {};
            while(!matched){
                if(unmatched.length == 1 && unmatched[0].key == pairToMatch.peep.key) {break;};
                its_a_mondmond_match = unmatched[Math.floor(Math.random() * unmatched.length)];
                matched = its_a_mondmond_match.key != pairToMatch.peep.key;
            }
           pairToMatch.matchedTo = its_a_mondmond_match;
           unmatched = unmatched.filter((peepo) => peepo.key != its_a_mondmond_match.key);
        });
        matchingDone = unmatched.length == 0; 
    }
    return matchedArr;
} 

(() => {
    const matchedPeeps = matchPeeps();
    matchedPeeps.map((peep)=>{
        send(peep.peep, peep.matchedTo);
    })
})();
