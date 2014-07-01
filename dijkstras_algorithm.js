var Node = function (value){
	this.value = value;
	this.edges = [];
}
Node.prototype.connect = function(node, value){
	var edge = new Edge(this, node, value)
	this.edges.push(edge);
}
Node.prototype.BFS = function(target_value, searched_array){
	if(!searched_array){
		var searched_array = [];
	}

	for(var i = 0; i < this.edges.length; i++){
		console.log(this.edges[i].nodes[1]);
		this.edges[i].nodes[1].BFS(target_value, searched_array.push[this]);
	}
}
var Edge = function(node1, node2, value){
	this.nodes = [node1, node2]
	this.value = value
}


var n1 = new Node('node1');
var n2 = new Node('node2');
var n3 = new Node('node3');
var n4 = new Node('node4');
n1.connect(n2, 0.1);
n2.connect(n3, 0.2);
n2.connect(n4, 0.3);
console.log(n1);

n1.BFS('node4', []);