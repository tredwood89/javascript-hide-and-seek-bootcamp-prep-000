function getFirstSelector(selector) {

    return document.querySelector(selector)
}

function nestedTarget() {

    return document.querySelector('#nested .target')
}

function increaseRankBy(n){

  var ranks = document.querySelectorAll('ul.ranked-list li')

  for (let i=0; i<ranks.length; i++) {

    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {

  var nodes = document.querySelectorAll('#grand-node div');
  var deepest = nodes[nodes.length- 1];

    if(!nodes.length) return false;
    return nodes[nodes.length-1];
}
