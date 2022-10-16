function submit(){
    val = document.getElementById('input').value  

    var msg = document.querySelector('#hh4');
    
    if(val === '') {
        msg.innerHTML = 'input text';
        setTimeout(() => msg.remove(),3000);
    } else{
        var words = document.createTextNode(val);
        var li = document.createElement('li');
        li.appendChild(words);
    
        var btn = document.createElement("button")
        btn.innerHTML = "delete"
    
        li.appendChild(btn);
        li.setAttribute('id','list')
        
        var div = document.createElement('div');
        div.appendChild(li);
        div.setAttribute('id','divv')
        document.getElementById('results').appendChild(div);
    
    
        btn.onclick = function() {
            div.remove()
        }
    
        document.getElementById('input').value = ""
    }
}

function clearlist() {
    var mylist = document.getElementById('results');
    mylist.innerHTML='';
}

