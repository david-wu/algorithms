var Node = function (value){
	this.value = value;
}
Node.prototype.setParent = function(node){
	this.parent = node;
	node.child = this;
}
Node.prototype.setChild = function(node){
	this.child = node;
	node.parent = this;	
}
var LinkedList = function (elements) {
	this.nodeCount = 0;
	for(var i = 0; i < elements.length; i++){
		this.push(elements[i]);
	}
}

// O(1)
LinkedList.prototype.push = function(value){
	this.nodeCount++;
	var node = new Node(value);
	if(this.nodeCount === 1){
		this.firstNode = node;
	}else{
		node.setParent(this.lastNode);
	}
	this.lastNode = node;
}
LinkedList.prototype.pop = function(){
	if(this.nodeCount === 0){
		return nil;
	}
	this.nodeCount--;
	if(this.nodeCount === 0){
		var value = this.lastNode.value;
		this.firstNode = false;
		this.lastNode = false;
		return value
	}
	var value = this.lastNode.value
	this.lastNode = this.lastNode.parent;
	this.lastNode.child = undefined;
	return value;
}
LinkedList.prototype.unshift = function(value){
	this.nodeCount++;
	var node = new Node(value);
	if(this.nodeCount === 1){
		this.lastNode = node;
	}else{
		node.setChild(this.firstNode);
	}
	this.firstNode = node;
}
LinkedList.prototype.shift = function(){
	if(this.nodeCount === 0){
		return nil;
	}
	this.nodeCount--;
	if(this.nodeCount === 0){
		var value = this.firstNode.value;
		this.firstNode = false;
		this.lastNode = false;
		return value
	}
	var value = this.firstNode.value;
	this.firstNode = this.firstNode.child;
	this.firstNode.parent = undefined;
	return value;
}

// O(n)
LinkedList.prototype.indexOf = function(value){
	currentNode = this.firstNode;
	currentIndex = 0;

	while(!(value === currentNode.value)){
		currentNode = currentNode.child
		currentIndex++;
		if (typeof currentNode === 'undefined'){
			return value + ' not found'
		}
	}
	return currentIndex
}
LinkedList.prototype.get = function(index){
	var currentNode = this.firstNode;
	for(var i = 0; i < index; i++){
		currentNode = currentNode.child
	}
	return currentNode
}

var ll = new LinkedList([2,3,4,4,5,20,22]);
// ll.push(5);
// ll.push(10);
// ll.push(15);
// ll.push(20);
// ll.push(25);
// ll.unshift(1);
// ll.unshift(0);
// ll.unshift(2);

// console.log('#####');
// console.log(ll.pop());
// console.log(ll.pop());

// console.log('#####');
// console.log(ll.shift());
// console.log(ll.shift());

// console.log('#####');
// console.log(ll);
// console.log('#####');
// console.log(ll.indexOf(20));
console.log(ll.get(5).value)