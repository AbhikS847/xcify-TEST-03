const table = document.querySelector('table');
/*const makeRequest = async()=>{
    const req = await fetch('https://localhost:5001/api/users',{
    });
    const res = await req.json();
    console.log(res);
}*/

const makeRequest = async() =>{
    $.get('https://localhost:5001/api/users',(data)=>{
        const users = data;
        console.log(users);
        for(i=0;i<users.length;i++){
            console.log(users[i]);
            const tableRow = document.createElement('tr');
            const tableID = document.createElement('td');
            const tableName = document.createElement('td');
            const tableLocation = document.createElement('td');
            tableID.innerHTML = `${users[i].id}`;
            tableName.innerHTML = `${users[i].userName}`;
            tableLocation.innerHTML = `${users[i].location}`;
            table.append(tableRow,tableID,tableName,tableLocation);
        }
    });
}

makeRequest();