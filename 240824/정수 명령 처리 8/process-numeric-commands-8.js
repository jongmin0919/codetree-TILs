class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push_front(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    push_back(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    pop_front() {
        if (this.size === 0) {
            return -1;
        }

        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        this.size--;
        return value;
    }

    pop_back() {
        if (this.size === 0) {
            return -1;
        }

        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.size--;
        return value;
    }

    get_size() {
        return this.size;
    }

    is_empty() {
        return this.size === 0 ? 1 : 0;
    }

    front() {
        return this.head ? this.head.value : -1;
    }

    back() {
        return this.tail ? this.tail.value : -1;
    }
}

// 입력 처리 및 명령 실행
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0], 10);
const commands = input.slice(1);

const dll = new DoublyLinkedList();
let result = [];

for (let i = 0; i < N; i++) {
    const [command, value] = commands[i].split(" ");
    
    switch (command) {
        case 'push_front':
            dll.push_front(parseInt(value, 10));
            break;
        case 'push_back':
            dll.push_back(parseInt(value, 10));
            break;
        case 'pop_front':
            result.push(dll.pop_front());
            break;
        case 'pop_back':
            result.push(dll.pop_back());
            break;
        case 'size':
            result.push(dll.get_size());
            break;
        case 'empty':
            result.push(dll.is_empty());
            break;
        case 'front':
            result.push(dll.front());
            break;
        case 'back':
            result.push(dll.back());
            break;
    }
}

console.log(result.join("\n"));