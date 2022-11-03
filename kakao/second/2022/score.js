import {getScore} from "./api.js";

const oneKey = "98763c19-78c7-4d57-81e3-59480e22c96f";

const data = await getScore(oneKey);

console.log(data);
