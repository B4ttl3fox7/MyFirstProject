var ourRequest = new XMLHttpRequest();

ourRequest.open('GET','https://z4h33r-lang.github.io/MyFirstProject/week4/cities1.json');

ourRequest.onload = function() {
console.log(ourRequest.responseText);
};

ourRequest.send();
