const baseURL = "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/";

const dirs = [{ name: "root", id: "" }];
const cache = {};

const setModalLoading = (loading) => {
	const modalLoading = document.getElementsByClassName("Loading")[0];
	modalLoading.style.display = loading === true ? "initial" : "none";
};

const setImg = (show, url) => {
	const imgBox = document.getElementsByClassName("ImageViewer")[0];
	if (show) {
		imgBox.style.display = "initial";
		const imgContent = imgBox.getElementsByClassName("content")[0];
		imgContent.innerHTML = `<img src="https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public${url}">`;
	} else {
		imgBox.style.display = "none";
	}
	imgBox.addEventListener("keydown", (e) => {
		if (e.key === "Escape") imgBox.style.display = "none";
	});
};

const breadRender = () => {
	const bread = document.getElementsByClassName("Breadcrumb")[0];
	bread.innerHTML = "";
	for (let dir of dirs) {
		let dirNode = document.createElement("div");
		dirNode.innerText = dir.name;
		bread.appendChild(dirNode);
	}
};

const dataFetch = async (path = "") => {
	setModalLoading(true);
	try {
		const option = {
			method: "get",
			headers: {
				"Content-Type": "application/json",
			},
		};
		if (cache[path]) {
			return cache[path];
		}
		const data = await fetch(`${baseURL}${path}`, option);
		const content = await data.json();
		setModalLoading(false);
		cache[path] = content;
		return content;
	} catch (e) {
		setModalLoading(false);
		throw e;
	}
};

const render = (content) => {
	const nodeBoard = document.getElementsByClassName("Nodes")[0];
	nodeBoard.innerHTML = "";
	if (dirs.length !== 1) {
		let prev = document.createElement("div");
		prev.classList.add("Node");
		prev.innerHTML = '<img src="./assets/prev.png">';
		prev.addEventListener("click", () => {
			dirs.pop();
			dataLoadAndRender();
		});
		nodeBoard.appendChild(prev);
	}
	for (let item of content) {
		const newDiv = document.createElement("div");
		newDiv.classList.add("Node");
		if (item.type === "DIRECTORY") {
			newDiv.innerHTML = `<img src="./assets/directory.png">
            <div>${item.name}</div>`;
			newDiv.addEventListener("click", () => {
				dirs.push({ name: item.name, id: item.id });
				dataLoadAndRender();
			});
		} else {
			newDiv.innerHTML = `<img src="./assets/file.png">
            <div>${item.name}</div>`;
			newDiv.addEventListener("click", () => setImg(true, item.filePath));
		}
		nodeBoard.appendChild(newDiv);
	}
};

const dataLoadAndRender = () => {
	const topId = dirs[dirs.length - 1].id;
	setImg(false);
	breadRender();
	if (cache[topId]) {
		render(cache[topId]);
		return;
	}
	dataFetch(topId).then((content) => render(content));
};

dataLoadAndRender();
