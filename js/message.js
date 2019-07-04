var APP_ID = 'WUuurc5Xdnwbl1r8p03SQKkq-gzGzoHsz';
var APP_KEY = 'CPlPrYJA6EIlHhK3IyoXjJqX';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content=myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    let message=new Message()
    message.save({
    content: content
    }).then(function(object) {
    console.log(object)
    console.log(adasd)
    })
})

var query = new AV.Query('Message');
  query.find().
  then(function (message) {
    todos.forEach(function(todo) {
      todo.set('status', 1);
    });
    return AV.Object.saveAll(todos);
  }).then(function(todos) {
    // 更新成功
  }, function (error) {
    // 异常处理
  });


