class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}


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
      let currPos = 0;
      let tempNode = this.head;
      while(currPos < pos){
        if(tempNode.next === null){
          console.log('Item not found');
          return;
        }
        currPos++;
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, tempNode.next);
    }
}

function main(){
    const arr = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
    const SLL = new LinkedList();
    arr.forEach(item => {
        SLL.insertLast(item)
    })

    SLL.insertLast('Tauhida');
    SLL.remove('squirrel');
    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida');

    console.log(SLL);
}

main();