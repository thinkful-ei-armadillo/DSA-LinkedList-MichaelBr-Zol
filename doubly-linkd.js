class _Node {
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

// 9
class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head, this.tail);
    // this.tail === null ? this.tail = this.head : this.tail = this.tail.next;
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      const newNode = new _Node(item, null, tempNode);
      tempNode.next = newNode;
      this.tail = newNode;
    }
  }

  insertBefore(item, target){
    if(!this.head){
      return null;
    }
    if(this.head.value === target){
      this.insertFirst(item);
    }
    let tempNode = this.head;
    let currNode = this.head;

    while(currNode !== null && currNode.value !== target){
      tempNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      return 'Item not found';
    }
    const newNode = new _Node(item, currNode, tempNode);
    tempNode.next = newNode;
    currNode.prev = newNode;
  }

  insertAfter(item, target){
    if(!this.head){
      return null;
    }
    
    let currNode = this.head;
    while(currNode !== null && currNode.value !== target){
      currNode = currNode.next;
    }
    if(currNode === null){
      return 'Item not found';
    }

    let nextNode = currNode.next;
    const newNode = new _Node(item, nextNode, currNode);
    currNode.next = newNode;
    nextNode.prev = newNode;
  }

  insertAt(item, pos){
    if(!this.head){
      return null;
    }

    let tempNode = this.head;
    let currNode = this.head;

    for(let i = 0; i < pos - 1; i++){
      tempNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      return 'Item not found';
    }

    const newNode = new _Node(item, currNode, tempNode);
    tempNode.next = newNode;
    currNode.prev = newNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let tempNode = this.head;
    while(currNode !== null && currNode.value !== item){
      tempNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      return 'Item not found';
    }

    let nextNode = currNode.next;
    nextNode.prev = currNode.prev;
    tempNode.next = currNode.next;
  }
  
  find(item){
    if(!this.head){
      return null;
    }

    let currNode = this.head;
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }
}

// 10
function reverse(list){
  if(!list.head){
    return null;
  }

  let tempNode = list.head;
  let currNode = list.head;
  while(currNode !== null){
    let prevNext = currNode.next;
    let prevPrev = currNode.prev;

    tempNode = currNode;
    currNode = currNode.next;

    tempNode.next = prevPrev;
    tempNode.prev = prevNext;
  }
 
  let prevHead = list.head;
  let prevTail = list.tail;

  list.head = prevTail;
  list.tail = prevHead;
  return list;
}

function display(list){
  if(!list.head){
    return null;
  }
  let currNode = list.head;
  let listArr = [];
  while(currNode !== null){
    listArr.push(currNode.value);
    currNode = currNode.next;
  }
  return listArr;
}

function mainDLL(){
  const DLL = new DoubleLinkedList();

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');
  reverse(DLL);

  console.log(DLL.find('Aquaria'));
  console.log(DLL.find('Caprica'));
  console.log(DLL.find('Gemenon'));
  console.log(DLL.find('Sagittaron'));
  console.log(DLL.find('Tauron'));
}

mainDLL();