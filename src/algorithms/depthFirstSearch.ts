interface node {
  key: string;
  //string array of nodes this node is connected to
  edges: node[];
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

const visited: node[] = [];

export function traverse(node: node) {
  visited.push(node);
  for (let i = 0; i < node.edges.length; i++) {
    if (!visited.includes(node.edges[i])) {
      traverse(node.edges[i]);
    }
  }
  console.log(visited);

  return;
}

export default function depthFirstSearch(starterNode: node) {
  traverse(starterNode);
}

depthFirstSearch(nodeA);
