function solution(w, h) {
  let count = 0;
  for (let i = 0; i < w; i++) {
    let left = i * h / w;
    let right = (1 + i) * h / w;
    count += Math.ceil(right) - Math.floor(left);
  }
  return w * h - count;
}