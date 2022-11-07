
// Create Array (random set of data)

const contactList = [{ "name": "Mil Caghy", "birth_date": "4/8/1994", "children": 3, "country": "China", "can_program": false },
{ "name": "Leland McLise", "birth_date": "3/16/1989", "children": 2, "country": "Zimbabwe", "can_program": true },
{ "name": "Clementia Caistor", "birth_date": "6/1/1991", "children": 4, "country": "China", "can_program": false },
{ "name": "Pearline Seers", "birth_date": "8/1/1971", "children": 0, "country": "Poland", "can_program": true },
{ "name": "Stanly Shirtliff", "birth_date": "3/17/1983", "children": 0, "country": "Greece", "can_program": true },
{ "name": "Jesselyn Braden", "birth_date": "8/23/1994", "children": 3, "country": "Russia", "can_program": true },
{ "name": "Binny Capp", "birth_date": "6/10/1973", "children": 3, "country": "France", "can_program": false },
{ "name": "Jakie Nockalls", "birth_date": "12/8/1989", "children": 2, "country": "Mexico", "can_program": false },
{ "name": "Teresina Caccavella", "birth_date": "8/9/1982", "children": 1, "country": "Philippines", "can_program": true },
{ "name": "Mehetabel Benneyworth", "birth_date": "10/3/1973", "children": 0, "country": "China", "can_program": false }]

// Output of the total about of children.
var sum = 0;
var i
for (var i = 0; i < contactList.length; i++) {
    sum += contactList[i].children
    document.getElementById("total").innerHTML = sum;
    console.log(`There are a total of ` + sum + ` children`);

}

//Outputs the amount of children each person has
var child = "";
for (var i = 0 in contactList) {
    child += contactList[i].name + " " + "has " + contactList[i].children + " children" + "<br>";
    console.log(child);
    document.getElementById("kids").innerHTML = child;
}

//Output of person info
var info = "";

list: for (var i = 0 in contactList) {
    info += "Name: " + contactList[i].name + "<br>";
    info += "Birth Date: " + contactList[i].birth_date + "<br>";
    info += "Children: " + contactList[i].children + "<br>";
    info += "Country: " + contactList[i].country + "<br>";
    info += "Ability to Program : " + contactList[i].can_program + "<br><br>";
}
document.getElementById("person").innerHTML = info;
