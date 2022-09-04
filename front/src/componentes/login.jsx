import React from 'react'
import '../index.css'
import firebaseApp from '../firebase'
import { getFirestore, getDocs, collection, Firestore} from 'firebase/firestore'
import { useEffect, useState } from 'react'

function Login(){

    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    const fnGetUsers = async() => {
        const db = getFirestore(firebaseApp);
        const userCollectionRef = collection(db, 'user');
        
        const data = await getDocs(userCollectionRef);

        setUsers(data.map())

        console.log(users)

        return users;
    }

    fnGetUsers()

    return(
        <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
            <form className='border-2 flex flex-col bg-slate-500 w-96 h-1/3 rounded-lg justify-items-stretch items-center'>
                <h1 className='font-bold text-center mt-3'>Login</h1>
                <div>
                    <label className=''>Usuário</label>
                    <br/>
                    <input type='text' name='user' placeholder='Usuário' className='border bg-slate-200 placeholder:text-gray-600 rounded-md mb-4 w-64'/>
                </div>

                <div>
                    <label className=''>Senha</label>
                    <br/>
                    <input type='password' name='passrow' placeholder='Senha' className='border bg-slate-200 placeholder:text-gray-600 rounded-md mb-7 w-64'/>
                </div>

                <button type='' className='bg-slate-200 border rounded-md w-64 mb-7'>Entrar</button>
                <a href='#'>Cadastro</a>
            </form>
        </div>
    );
}

export default Login