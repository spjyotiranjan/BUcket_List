var bucketlist = []

var listcontainer = document.getElementById("list-container")

function addValues(){
    var value= document.getElementById("input-field").value
    bucketlist.push(value)
    displaylist()
}

function displaylist(){
    listcontainer.innerHTML = ""

    for(i=0;i<bucketlist.length;i++){
        var li=document.createElement("li")
        li.innerHTML = bucketlist[i] + `<span><img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" ></span>`
        listcontainer.append(li)

    }
}

function reset(){
    bucketlist = []
    displaylist()
}

function remove(i){
    bucketlist.splice(i,1)
    displaylist()
}