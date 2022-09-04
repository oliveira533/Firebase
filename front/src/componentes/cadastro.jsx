import React from 'react'
import '../index.css'
import firebaseApp from '../firebase'

function Cadastro(){
    return(
        <div className='w-screen h-screen flex justify-center items-center bg-slate-800'>
            <form className='border-2 flex flex-col bg-slate-500 w-96 h-1/3 rounded-lg justify-items-stretch items-center'>
                <h1 className='font-bold text-center mt-3'>Cadastro</h1>
                <div>
                    <label className=''>Usuário</label>
                    <br/>
                    <input type='text' name='user' placeholder='Usuário' className='border bg-slate-200 placeholder:text-gray-600 rounded-md mb-4 w-64'/>
                </div>

                <div>
                    <label className=''>Senha</label>
                    <br/>
                    <input type='password' name='passrow' placeholder='Senha' className='border bg-slate-200 placeholder:text-gray-600 rounded-md mb-4 w-64'/>
                </div>

                <div>
                    <label className=''> Confirme a senha</label>
                    <br/>
                    <input type='password' name='passrow' placeholder='Confirme a senha' className='border bg-slate-200 placeholder:text-gray-600 rounded-md mb-7 w-64'/>
                </div>

                <button type='submit' className='bg-slate-200 border rounded-md w-64'>Entrar</button>
            </form>
        </div>
    )
}

export default Cadastro