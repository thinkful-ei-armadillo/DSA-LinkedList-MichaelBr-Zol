class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

// 1 & 2
class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    remove(item){
        if(!this.head){
            return null;
        }

        if(this.head.value === item){
            this.head = this.head.next
        }

        let currNode = this.head;
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode= currNode.next;
        }

        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    find(item){
        let currNode = this.head;

        if(!this.head){
            return null;
        }

        while(currNode.value !== item){
            if(currNode.next === null){
                return null;
            } else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    insertBefore(item, target){
        if(!this.head){
            this.insertFirst(item);
        }

        let tempNode = this.head;
        let prevNode = this.head;
        while(tempNode !== null && tempNode.value !== target){
          prevNode = tempNode;
          tempNode = tempNode.next;
        }
        if(tempNode === null){
          console.log('Item not found');
          return;
        }
        prevNode.next = new _Node(item, prevNode.next)
    }

    insertAfter(item, target){
      if(!this.head){
        this.insertFirst(item);
      }

      let tempNode = this.head;
      while(tempNode.next !== null && tempNode.value !== target){
        tempNode = tempNode.next;
      }
      if(tempNode === null){
        console.log('Item not found');
        return;
      }
      let newNode = new _Node(item, tempNode.next);
      tempNode.next = newNode;
    }

    insertAt(item, pos){
      let tempNode = this.head;
      let currNode = this.head;
      for(let i = 0; i < pos - 1; i++){
        tempNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      tempNode.next = new _Node(item, currNode);
    }
}

// 3
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

function size(list){
  return display(list).length;
}

function isEmpty(list){
  if(display(list).length === 0){
    return true;
  }
  return false;
}

function findPrevious(list, target){
  if(!list.head){
    return null;
  }
  if(list.head.value === target){
    return `No previous items, '${target}' was the first item.`;
  }

  let tempNode = list.head;
  let currNode = list.head;
  while(currNode !== null && currNode.value !== target){
    tempNode = currNode;
    currNode = currNode.next;
  }
  if(currNode === null){
    console.log('Item not found');
    return;
  }
  return tempNode.value;
}

function findLast(list){
  let arr = display(list);
  let idx = display(list).length - 1;
  return arr[idx];
}

//4
/*
  While there are items in the list, the function loops through each item in the list checking
  if it is the same as the next item in the list. If they are the same, the second of the pair
  is skipped by the loop, and the loop continues. If they are not the same, the loop continues

  The time complexity of this is O(n^2) because of the nested while loops
*/

//5
function reverse(head, prev){
  if(head.next === null){
    head.next = prev;
    return head;
  }
  const result = reverse(head.next, head);
  head.next = prev;
  return result;
}

//6
function thirdToLast(list){
  let currNode = list.head;
  while(currNode.next.next.next !== null){
    currNode = currNode.next;
  }
  return currNode.value;
}

//7
function middle(list){
  const middleNode = Math.floor(size(list) / 2);
  if(size(list) % 2 !== 0){
    return display(list)[middleNode];
  }
  else{
    return `${display(list)[middleNode - 1]}\n${display(list)[middleNode]}`;
  }
}

//8
function cycle(list){
  
}

function main(){
  const SLL = new LinkedList();  
  
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  // SLL.remove('squirrel'); /* commented out to remove console message */
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  console.log(display(SLL));
  console.log(middle(SLL));
}

main();