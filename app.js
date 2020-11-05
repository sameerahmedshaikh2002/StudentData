let obj;

let i;

let arr = [];

let h1 = document.getElementById("h1");

let name = document.getElementById("name");

let fatherName = document.getElementById("fatherName");

let age = document.getElementById("age");

let rollNo = document.getElementById("rollNo");

let email = document.getElementById("email");

function submit() {

    obj = {

        name: name.value,

        fatherName: fatherName.value,

        age: age.value,

        rollNo: rollNo.value,

        email: email.value,

    }

    name.value = ""

    fatherName.value = ""

    age.value = ""

    rollNo.value = ""

    email.value = ""

    for (i in obj) {

        if (obj[i] === "") {

            alert("type a value");

            return;

            break

        }

    }

    arr.push(obj);

    console.log(arr);

}

function getUserByRollNo(result) {
    h1.innerHTML = "PROFILE DATA"
    let table = document.getElementById("table")
        let tr2 = document.createElement("tr");
        let tr3 = document.createElement("tr");
        let tr4 = document.createElement("tr");
        let tr5 = document.createElement("tr");
        let tr6 = document.createElement("tr");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let th5 = document.createElement("th");
        let th6 = document.createElement("th");
        table.appendChild(tr2)
        table.appendChild(tr3)
        table.appendChild(tr4)
        table.appendChild(tr5)
        tr2.appendChild(th2)
        tr3.appendChild(th3)
        tr4.appendChild(th4)
        tr5.appendChild(th5)
        tr6.appendChild(th6)
        th2.innerHTML = result.name
        th3.innerHTML = result.fatherName
        th4.innerHTML = result.age
        th5.innerHTML = result.email
        th6.innerHTML = result.rollNo

}


function render() {

    let table = document.getElementById("table")
    for (let j = 0; j < arr.length; j++) {
        let tr2 = document.createElement("tr");
        let tr3 = document.createElement("tr");
        let tr4 = document.createElement("tr");
        let tr5 = document.createElement("tr");
        let tr6 = document.createElement("tr");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let th5 = document.createElement("th");
        let th6 = document.createElement("th");
        table.appendChild(tr2)
        table.appendChild(tr3)
        table.appendChild(tr4)
        table.appendChild(tr5)
        tr2.appendChild(th2)
        tr3.appendChild(th3)
        tr4.appendChild(th4)
        tr5.appendChild(th5)
        tr6.appendChild(th6)
        th2.innerHTML = arr[j].name
        th3.innerHTML = arr[j].fatherName
        th4.innerHTML = arr[j].age
        th5.innerHTML = arr[j].email
        th6.innerHTML = arr[j].rollNo
    }
}
function getAllStudent () {
    render();
}
function getStudent() {

    let check = prompt("type a Roll Number");
for (let j= 0;j < arr.length;j++) {
    if (arr[j].rollNo === check) {
        getUserByRollNo(arr[j])
        return;
        break;
    }
    else {
        alert("type a correct rollNO")
    }
}
}





