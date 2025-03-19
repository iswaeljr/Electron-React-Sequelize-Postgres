import { useState, useEffect  } from 'react';
import User from '~/src/main/database/models/User';

const userHook = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState<string | null>(null);

    const fetchUsers = async () => {
    const result = await  (window as any).api.user.getUsers();
    setUsers(result);
  };

    const addUser = async () => {
      try {
        const user = await  (window as any).api.user.createUser({ name, email }); // Chama a função exposta no preload
        
        setResponse(`Usuário criado: ${user.name} (${user.email})`);
        fetchUsers();
      } catch (error) {
        console.error('Erro ao criar usuário:', error);
        setResponse('Erro ao criar usuário.');
      }
    };

    useEffect(() => {
      fetchUsers();
    }, []);

    return {
        users,
        name,
        setName,
        email,
        setEmail,
        response,
        addUser,
      };
};



export default userHook;