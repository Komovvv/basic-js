const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (Array.isArray(members) === true) {
      let abbrevArr = members.map(function (elem) {
        if (typeof elem === 'string') {
          return elem.toUpperCase().replace(/ /g,'').slice(0, 1);
        }
      });
    
      let pureAbbrevArr = abbrevArr.filter(function(elem) {return elem !== undefined});
    
      let dreamTeamName = pureAbbrevArr.sort().join('');
    
      return dreamTeamName;
    } else {
      return false;
    }
}

module.exports = {
  createDreamTeam
};
