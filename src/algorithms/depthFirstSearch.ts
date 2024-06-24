interface node {
  key: string;
  //string array of nodes this node is connected to
  edges: node[];
}

export default function depthFirstSearch() {
  const visited = [];
  const stack = [];

  //start with a
  visited.push(nodeA);
  for (let i = 0; i < nodeA.edges.length; i++) {}

  console.log(visited.includes(nodeA));

  return true;
}

const nodeA: node = { key: "A", edges: [] };
const nodeB: node = { key: "B", edges: [nodeA] };
const nodeC: node = { key: "C", edges: [nodeA] };
const nodeD: node = { key: "D", edges: [nodeA] };
const nodeE: node = { key: "E", edges: [nodeD] };

nodeD.edges.push(nodeE);
nodeA.edges.push(nodeC);
nodeA.edges.push(nodeD);
nodeA.edges.push(nodeB);

console.log(nodeA.edges);
depthFirstSearch();
