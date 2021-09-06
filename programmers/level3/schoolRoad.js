function solution(m, n, puddles) {
	let route = [];
	let zeros = [];

	for (let i = 0; i < m; i++) {
		zeros.push(0);
	}
	for (let i = 0; i < n; i++) {
		route.push([...zeros]);
	}
	for (let i = 0; i < puddles.length; i++) {
		route[puddles[i][1] - 1][puddles[i][0] - 1] = -1;
	}

	route[0][0] = 1;

	for (let i = 1; i < n; i++) {
		if (route[i][0] === -1) {
			for (let j = i; j < n; j++) {
				route[j][0] = 0;
			}
			break;
		} else {
			route[i][0] = 1;
		}
	}

	for (let i = 1; i < m; i++) {
		if (route[0][i] === -1) {
			for (let j = i; j < m; j++) {
				route[0][j] = 0;
			}
			break;
		} else {
			route[0][i] = 1;
		}
	}

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			if (route[i][j] === -1) {
				route[i][j] = 0;
			} else {
				route[i][j] = route[i - 1][j] + route[i][j - 1];
			}
		}
	}

	return route[n - 1][m - 1];
}

console.log(solution(4, 3, [[2, 2]]));

//JAVA
// import java.util.*;

// class Solution {
//     public int solution(int m, int n, int[][] puddles) {

//         int[][] route = new int[n][m];
//         route[0][0]=1;

//         for(int i=0; i<puddles.length; i++){
//             route[puddles[i][1]-1][puddles[i][0]-1] = -1;
//         }

//         for (int i = 1; i < n; i++) {
//             if (route[i][0]==-1) {
//                 for (int j = i; j < n; j++) {
//                     route[j][0] = 0;
//                 }
//                 break;
//             } else {
//                 route[i][0] = 1;
//             }
//         }

//         for (int i = 1; i < m; i++) {
//             if (route[0][i]==-1) {
//                 for (int j = i; j < m; j++) {
//                     route[0][j] = 0;
//                 }
//                 break;
//             } else {
//                 route[0][i] = 1;
//             }
//         }

//         for (int i = 1; i < n; i++) {
//             for (int j = 1; j < m; j++) {
//                 if (route[i][j]==-1) {
//                     route[i][j] = 0;
//                 } else {
//                     route[i][j] = (route[i - 1][j]%1000000007 + route[i][j - 1]%1000000007);
//                 }
//             }
//         }

//         return route[n-1][m-1]%1000000007;
//     }
// }
