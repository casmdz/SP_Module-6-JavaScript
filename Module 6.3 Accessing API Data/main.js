const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

//create Constants to hold DOM Elements
const DOM_Elements =  {
    ranger_list : '.ranger-list'
}
//https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

const create_list = ( id , name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.name))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}