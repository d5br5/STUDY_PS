function solution(skill, skill_trees) {
  let skills = skill.split("");

  let count =0;

  for(let i=0; i<skill_trees.length; i++){
    if(isPossible(skills, skill_trees[i])) count ++;
  }

  return count;
}

function isPossible(skill, skilltree){

  let possible = [];
  for(let i=0; i<skill.length; i++){
    possible.push(false);
  }

  for(let i=0; i<skilltree.length; i++){
    if(skilltree[i]===skill[0]) {
      possible[0] = true;
      continue;
    }
    if(skill.includes(skilltree[i])){
      let index = skill.indexOf(skilltree[i]);
      if(possible[index-1]){
        possible[index] = true;
      } else{
        return false;
      }
    }
  }
  return true;

}