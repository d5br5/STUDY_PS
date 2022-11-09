export default function Nodes({ $app, initialState, onClick, onBackClick }) {
	this.state = initialState;
	this.$target = document.createElement("div");
	this.$target.className = "Nodes";
	$app.appendChild(this.$target);

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.onClick = onClick;
	this.onBackClick = onBackClick;

	this.render = () => {
		if (this.state.nodes) {
			const nodesTemplate = this.state.nodes
				.map((node) => {
					const iconPath = node.type === "FILE" ? "./assets/file.png" : "./assets/directory.png";
					return `
                    <div class="Node" data-nodeid="${node.id}">
                        <img src=${iconPath} />
                        <div>${node.name}</div>
                    </div>
                `;
				})
				.join("");
			this.$target.innerHTML = !this.state.isRoot
				? `<div class="Node"><img src="./assets/prev.png"></div>${nodesTemplate}`
				: nodesTemplate;
		}

		// this.$target.querySelectorAll(".Node").forEach($node =>{
		//     $node.addEventListener("click", (e)=>{
		//         const nodeId = e.currentTarget.dataset.nodeid;
		//         if(!nodeId) {
		//             this.onBackClick();
		//         }else{
		//             const selectedNode = this.state.nodes.find(node=>node.id === nodeId);
		//             if(selectedNode) this.onClick(selectedNode)
		//         }

		//     })
		// })
	};

	this.$target.addEventListener("click", (e) => {
		const $node = e.target.closest(".Node");
		if ($node) {
			const nodeId = $node.dataset.nodeid;
			if (!nodeId) {
				this.onBackClick();
			} else {
				const selectedNode = this.state.nodes.find((node) => node.id === nodeId);
				if (selectedNode) this.onClick(selectedNode);
			}
		}
	});

	this.render();
}

// class Node {
//     constructor({$app, initialState}){
//         this.state = initialState;
//         this.$target = document.createElement("ul");
//         $app.appendChild(this.$target);
//         this.render();
//     }
//     setState(nextState){
//         this.state = nextState;
//         this.render();
//     }
//     render(){
//         this.$target.innerHTML = this.state.nodes.map(node=>`<li>${node.name}</li>`)
//     }
// }
