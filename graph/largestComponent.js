/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.
*/

const componentCount = (graph, current, visited) => {
  if (visited.has(String(current))) {
    return 0;
  }
  visited.add(String(current));
  let size = 1;
  for (let neighbor of graph[current]) {
    size += componentCount(graph, neighbor, visited);
  }
  return size;
};

const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();

  for (let node in graph) {
    if (!visited.has(String(node))) {
      const size = componentCount(graph, node, visited);
      if (size > largest) {
        largest = size;
      }
    }
  }

  return largest;
};
console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
); // -> 4
