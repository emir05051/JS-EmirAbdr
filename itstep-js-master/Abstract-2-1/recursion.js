// 0 => 0
// 1 => 1
// 2 => 1
// 3 => 3
// 4 => 4
// 5 => 7
// ...
const fibonacci = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Array
//   .from({ length: 20 })
//   .map((_, n) => fibonacci(n))
//   .forEach(f => console.log(f));


const reverse = str => {
  if (str === "") {
    return "";
  } else {
    return reverse(str.slice(1)) + str[0];
  }
}

// console.log(reverse("abcde"));


const tree = [ [[1, 2], 3], [4, 5]];
// console.log(tree);


const print = node => {
  if (!Array.isArray(node)) {
    console.log(node);
  } else {
    node.forEach(print);
  }
}

// console.log(print(tree));

const sum = node => {
  if (!Array.isArray(node)) {
    return node;
  } else {
    return node.reduce((s, child) => s + sum(child), 0);
  }

}

// console.log(sum(tree));

const printInner = (element, address = "") => {
  if (element.children.length === 0) {
    console.log(address + element.tagName + " " + element.innerText);
  } else {
    Array.from(element.children)
      .forEach(child => printInner(child, address + element.tagName + " > "))
  }
}


window.addEventListener("load", () => {
  printInner(document.body);
});