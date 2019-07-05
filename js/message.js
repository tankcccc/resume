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
    let name=myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message');
    let message=new Message()
    message.save({
    name:name,
    content: content
    }).then(function(object) {
      let li=document.createElement('li')
      li.innerText=`${object.attributes.name}: ${object.attributes.content}`
      let messageList=document.querySelector('#messageList')
      messageList.appendChild(li)
    })
})


var query = new AV.Query('Message');
  query.find().then(function (messages) {
    console.log(messages)
    let array=messages.map((item)=>item.attributes)
    console.log(array)
    array.forEach((item)=>{
      console.log('here')
      let li=document.createElement('li')
      li.innerText=`${item.name}: ${item.content}`
      let messageList=document.querySelector('#messageList')
      messageList.appendChild(li)
    })
    todos.forEach(function(message) {
      todo.set('status', 1);
    });
    return AV.Object.saveAll(todos);
  }).then(function(todos) {
    // 更新成功
  }, function (error) {
    // 异常处理
  });


