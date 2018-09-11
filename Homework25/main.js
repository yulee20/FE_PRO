Vue.component('modal', {
    template: '#modal-template'
  })

var table = new Vue({
    el: '#table',
    data: {
        model: [
            { 
                id: '1',
                title: 'Person',
                age: '12',
                address: 'Kiev' 
            }
        ],
        showModal: false
    },
    methods: {
        addNewRow() { 
          this.model.push({ id: '', title: '', age: '', address: '' });
        },
        deleteRow(index) { 
            this.model.splice(index, 1);
        }
      }
})

// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Привет, Vue!'
//     }
//   })

//   var app2 = new Vue({
//     el: '#app-2',
//     data: {
//       message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//     }
//   })

//   var app3 = new Vue({
//     el: '#app-3',
//     data: {
//       seen: true
//     }
//   })

//   var app4 = new Vue({
//     el: '#app-4',
//     data: {
//       todos: [
//         { text: 'Изучить JavaScript' },
//         { text: 'Изучить Vue' },
//         { text: 'Создать что-нибудь классное' }
//       ]
//     }
//   })

//   var app5 = new Vue({
//     el: '#app-5',
//     data: {
//       message: 'Привет, Vue.js!'
//     },
//     methods: {
//       reverseMessage: function () {
//         this.message = this.message.split('').reverse().join('')
//       }
//     }
//   })

//   var app6 = new Vue({
//     el: '#app-6',
//     data: {
//       message: 'Привет, Vue!'
//     }
//   })

//   new Vue({
//     data: {
//       a: 1
//     },
//     created: function () {
//       // `this` указывает на экземпляр vm
//       console.log('Значение a: ' + this.a)
//     }
//   })