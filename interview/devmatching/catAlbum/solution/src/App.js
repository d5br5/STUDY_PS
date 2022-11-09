import Nodes from "./Nodes.js";
import Breadcrumb from "./Breadcrumb.js";
import ImageView from "./ImageView.js";
import { request } from "./api.js";
import Loading from "./Loading.js";

const cache = {};

export default function App($app) {
	this.state = {
		isRoot: true,
		nodes: [],
		depth: [],
		isLoading: false,
		selectedFilePath: null,
	};

	const setLoading = (loading) => {
		this.setState({
			...this.state,
			isLoading: loading,
		});
	};

	const loading = new Loading({
		$app,
		initialState: this.state.isLoading,
	});

	const imageView = new ImageView({
		$app,
		initialState: this.state.selectedFilePath,
	});

	const breadcrumb = new Breadcrumb({
		$app,
		initialState: this.state.depth,
	});

	const nodes = new Nodes({
		$app,
		initialState: {
			isRoot: this.state.isRoot,
			nodes: this.state.nodes,
		},
		onClick: async (node) => {
			try {
				if (node.type === "DIRECTORY") {
					let nextNodes;
					if (cache[node.id]) {
						nextNodes = cache[node.id];
					} else {
						setLoading(true);
						nextNodes = await request(node.id);
						cache[node.id] = nextNodes;
					}
					this.setState({
						...this.state,
						isRoot: false,
						depth: [...this.state.depth, node],
						nodes: nextNodes,
					});
				} else if (node.type === "FILE") {
					this.setState({
						...this.state,
						selectedFilePath: node.filePath,
					});
				}
			} catch (e) {
			} finally {
				setLoading(false);
			}
		},
		onBackClick: async () => {
			try {
				const nextState = { ...this.state };
				nextState.depth.pop();

				const prevNodeId =
					nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id;
				if (prevNodeId === null) {
					this.setState({
						...nextState,
						isRoot: true,
						nodes: cache.root,
					});
				} else {
					this.setState({
						...nextState,
						isRoot: false,
						nodes: cache[prevNodId],
					});
				}
			} catch (e) {}
		},
	});

	this.setState = (nextState) => {
		this.state = { ...nextState };
		breadcrumb.setState(this.state.depth);
		nodes.setState({
			isRoot: this.state.isRoot,
			nodes: this.state.nodes,
		});
		imageView.setState(this.state.selectedFilePath);
		loading.setState(this.state.isLoading);
	};

	const init = async () => {
		try {
			setLoading(true);
			const rootNodes = await request();
			this.setState({
				...this.state,
				isRoot: true,
				nodes: rootNodes,
			});
			cache.root = rootNodes;
		} catch (e) {
		} finally {
			setLoading(false);
		}
	};

	init();
}
