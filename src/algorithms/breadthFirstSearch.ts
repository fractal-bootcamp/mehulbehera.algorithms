interface node {
  key: string;
  //string array of nodes this node is connected to
  edges: node[];
}

const visited: node[] = [];
const queue: node[] = [];

export function traverseBFS(node: node) {
  visited.push(node);
  queue[queue.length] = node;

  while (queue.length !== 0) {
    const currNode = queue.pop();
    //console.log(currNode);
    for (let i = 0; i < currNode!.edges.length; i++) {
      if (!visited.includes(currNode!.edges[i])) {
        //console.log(currNode!.edges[i]);
        visited.push(currNode!.edges[i]);
        queue[queue.length] = currNode!.edges[i];
      }
    }
  }
}

export default function breadthFirstSearch(starterNode: node) {
  traverseBFS(starterNode);
  //console.log(visited);
}

const nodeA: node = { key: "A", edges: [] };
const nodeB: node = { key: "B", edges: [nodeA] };
const nodeC: node = { key: "C", edges: [nodeA] };
const nodeD: node = { key: "D", edges: [nodeB] };
const nodeE: node = { key: "E", edges: [nodeC, nodeD] };

nodeD.edges.push(nodeE);
nodeA.edges.push(nodeB);
nodeA.edges.push(nodeC);
nodeB.edges.push(nodeD);
nodeC.edges.push(nodeE);

breadthFirstSearch(nodeA);
