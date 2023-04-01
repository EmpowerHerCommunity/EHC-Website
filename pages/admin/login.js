import {useState} from 'react'

const login = () => {

  const URL ="https://empowerher.pythonanywhere.com/api/v1/indexapi/adminapi/login/" 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        });
      
        if (response.ok) {
          alert('logged in')
          // Login successful, store user data in session storage
          const data = await response.json();
          // sessionStorage.setItem('user', JSON.stringify(data));
      
          // Redirect to user profile page
          router.push('/profile');
        } else {
          // Login failed, display error message
          const error = await response.text();
          setError(error);
        }
      }
      function handleSubmit(event) {
        event.preventDefault();
        handleLogin(username, password);
      }
      
  return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={event => setUsername(event.target.value)} className='border w-96 h-12'/>
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={event => setPassword(event.target.value)} className='border w-96 h-12' />
          </label>
          <br />
          <button type="submit" className='border w-56 bg-primary text-white font-medium h-12'>Login</button>
          {error && <p>{error}</p>}
        </form>
      )
}

export default login