var taskManager = new Vue({
    el: '.task-manager',
    data: {
        main: [],
        listL: [],
        listR: [],
        count: 0
    },
    
    methods: {
        moveR(){
            this.listR.push(this.main.pop());
        },
        moveL(){
            this.listL.push(this.main.pop());
        },
        remove(pos, event){
            event.target.remove();
            this.main.splice(pos, 1);
        }
    }
}) 

setInterval(function(){
    if (taskManager.main.length > 4) {
        taskManager.count++;
        return;
    }
    taskManager.main.push(taskManager.count++);
}, 500);