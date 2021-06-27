document.querySelectorAll('#user-list tr').forEach((el) => {
    el.addEventListener('click', function() {
        const id = el.querySelector('td').textContent;
        getComment(id);
    });
});

async function getUser(){
    try{
        const res = await axios.get('/users');
        const users = res.data;
        console.log(users);
        
    }
}