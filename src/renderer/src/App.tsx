import userHook from './hooks/userHook';


function App(): JSX.Element {

    const {
      users,
      name,
      setName,
      email,
      setEmail,
      response,
      addUser,
    } = userHook();


    addUser;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1 className='text-blue-500 text-2xl'>Electron + React + Sequelize</h1>
    <input
      type="text"
      placeholder="Nome"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{ color:'black', margin: '10px', padding: '10px' }}
    />
    <input
      type="email"
      placeholder="E-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{ color:'black', margin: '10px', padding: '10px' }}
    />
    <button onClick={addUser} style={{ padding: '10px', fontSize: '16px' }}>
      Criar Usuário
    </button>
    {response && <p>{response}</p>}

    <div>
      <h2>Usuários</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default App
