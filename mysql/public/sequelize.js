// Comment loading by clicking user name
document.querySelectorAll('#user-list tr').forEach((el) => {
    el.addEventListener('click', function () {
      const id = el.querySelector('td').textContent;
      getComment(id);
    });
  });
  // User Loading
  async function getUser() {
    try {
      const res = await axios.get('/users');
      const users = res.data;
      console.log(users);
      const tbody = document.querySelector('#user-list tbody');
      tbody.innerHTML = '';
      users.map(function (user) {
        const row = document.createElement('tr');
        row.addEventListener('click', () => {
          getComment(user.id);
        });
        // Row cell add
        let td = document.createElement('td');
        td.textContent = user.id;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.name;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.age;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = user.married ? 'Married' : 'Single';
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } catch (err) {
      console.error(err);
    }
  }
  // Load comment
  async function getComment(id) {
    try {
      const res = await axios.get(`/users/${id}/comments`);
      const comments = res.data;
      const tbody = document.querySelector('#comment-list tbody');
      tbody.innerHTML = '';
      comments.map(function (comment) {
        // Row Cell add
        const row = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = comment.id;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = comment.User.name;
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = comment.comment;
        row.appendChild(td);
        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.addEventListener('click', async () => { // 수정 클릭 시
          const newComment = prompt('Input replace contents');
          if (!newComment) {
            return alert('You have to input the contents');
          }
          try {
            await axios.patch(`/comments/${comment.id}`, { comment: newComment });
            getComment(id);
          } catch (err) {
            console.error(err);
          }
        });
        const remove = document.createElement('button');
        remove.textContent = 'Delete';
        remove.addEventListener('click', async () => { 
          try {
            await axios.delete(`/comments/${comment.id}`);
            getComment(id);
          } catch (err) {
            console.error(err);
          }
        });
        // Add button
        td = document.createElement('td');
        td.appendChild(edit);
        row.appendChild(td);
        td = document.createElement('td');
        td.appendChild(remove);
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } catch (err) {
      console.error(err);
    }
  }
  // Create User
  document.getElementById('user-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const age = e.target.age.value;
    const married = e.target.married.checked;
    if (!name) {
      return alert('Input user name, please.');
    }
    if (!age) {
      return alert('Input age, please.');
    }
    try {
      await axios.post('/users', { name, age, married });
      getUser();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
    e.target.age.value = '';
    e.target.married.checked = false;
  });
  // Add comment
  document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.userid.value;
    const comment = e.target.comment.value;
    if (!id) {
      return alert('Input User Id, Please.');
    }
    if (!comment) {
      return alert('Input Comment, please');
    }
    try {
      await axios.post('/comments', { id, comment });
      getComment(id);
    } catch (err) {
      console.error(err);
    }
    e.target.userid.value = '';
    e.target.comment.value = '';
  });