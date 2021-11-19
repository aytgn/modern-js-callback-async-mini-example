//INITIAL POSTS
const posts = [
  {
    title: "Post One",
    body: "this is post one",
  },
  {
    title: "Post Two",
    body: "this is post two",
  },
];
//cb = call back
function createPost(post, cb) {
  //lets mimic server response time
  setTimeout(function () {
    console.log("create post started")
    //push post to posts
    posts.push(post);
    cb();
  }, 2000);
}
function getPosts() {
  //lets mimic server response time
  setTimeout(function () {
    console.log("get posts started")
    let output = "";
    //create a list element foreach post and add it to output
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    //show the output
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "this is post three" }, getPosts); //Takes 2 sec

//HANDLERS
// function createPost(post) {
//   //lets mimic server response time
//   setTimeout(function () {
//     //push post to posts
//     posts.push(post);
//   }, 2000);
// }
// function getPosts() {
//   //lets mimic server response time
//   setTimeout(function () {
//     let output = "";
//     //create a list element foreach post and add it to output
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     //show the output
//     document.body.innerHTML = output;
//   }, 1000);
// }
// //ONLOAD
// createPost({ title: "Post Three", body: "this is post three" }); //Takes 2 sec
// getPosts(); //takes 1 sec, run before createPost end!!!
