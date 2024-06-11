const inp = document.querySelector('.inp');

const btn = document.querySelector('.btn');

const taskList = document.querySelector('.task-list');

const checkbox = document.querySelector('.checkbox');

btn.addEventListener('click', (e)=>{
    console.log(inp.value);

    let newItem = document.createElement('div');

    newItem.setAttribute('class', 'item');

    let str = ` <div class="section-A">
                <input class="checkbox" type="checkbox">
                <li>${inp.value}</li>
                </div>
                <div class="section-B">
                <span class="down-arrow">⬇️</span>
                <span class="bin">🗑</span>
                <span class="up-arrow">⬆️</span>
                </div>`

    newItem.innerHTML = str;

    console.log(newItem);

    inp.value = '';

    taskList.append(newItem);

})

taskList.addEventListener('click', (e)=>{
    console.log(e.target);
    const element = e.target.getAttribute('class');
    console.log(element);

    if(element === 'bin'){
        const item = e.target.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
    else if(element === 'down-arrow'){
        const currItem = e.target.parentElement.parentElement;
        const nextItem = currItem.nextElementSibling;
        console.log(nextItem);
        nextItem.after(currItem);
    }
    else if(element === 'up-arrow'){
        const currItem = e.target.parentElement.parentElement;
        const prevItem = currItem.previousElementSibling;
        console.log(prevItem);
        prevItem.before(currItem);
    }
    else if(element === 'checkbox'){
        const textItem = e.target.nextElementSibling;
        console.log(textItem);
        textItem.classList.toggle('checked');
    }
    
    
})