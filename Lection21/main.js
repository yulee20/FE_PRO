//task1

{
    var users = [
        { id: 1, name: 'Vasya', surname: 'Vasiliev' },
        { id: 2, name: 'Ivan', surname: 'Ivanov' },
        { id: 3, name: 'Irina', surname: 'Plushkina' }
    ];
}

var data = users.map(item => { return item.name + ' ' + item.surname;  })
console.log(data);


//task2

{
    var users = [
        { id: 1, age: 21, name: 'Vasya', surname: 'Vasiliev' },
        { id: 2, age: 28, name: 'Ivan', surname: 'Ivanov' },
        { id: 3, age: 18, name: 'Irina', surname: 'Plushkina' }
    ];
}

result = users.filter( item => item.age > 20 );
    
    console.log(result);

//Task 3

{
    var orders = [{
        id: 5,
        date: '21-01-2015',
        amount: 783
    }, {
        id: 8,
        date: '24-01-2015',
        amount: 67
    }, {
        id: 21,
        date: '29-01-2015',
        amount: 1234
    }, {
        id: 78,
        date: '04-02-2015',
        amount: 123
    }, {
        id: 23,
        date: '15-02-2015',
        amount: 245
    }];
}

var res = orders.reduce((prev, item, pos, list) => {
    if (!item.amount) {
        return prev;
    }

    prev.count++;
    prev.sum += item.amount;

    if (pos === list.length - 1){
        return prev.sum / prev.count;
    }
    
    return prev;
}, { sum: 0, count: 0 });

console.log(res);