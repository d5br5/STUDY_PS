function solution(record) {
  let user = {};
  for (let i = 0; i < record.length; i++) {
    let cmd = record[i].split(" ");
    if (cmd[0] === "Enter" || cmd[0] === "Change") user[cmd[1]] = cmd[2];
  }
  let res = [];
  for (let i = 0; i < record.length; i++) {
    let cmd = record[i].split(" ");
    if (cmd[0] === "Enter") res.push(`${user[cmd[1]]}님이 들어왔습니다.`);
    else if (cmd[0] === "Leave") res.push(`${user[cmd[1]]}님이 나갔습니다.`);
  }
  return res;
}