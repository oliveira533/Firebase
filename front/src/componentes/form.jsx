import React from 'react'
import '../index.css'

function Formu(){
    return(
        <div className='w-96'>
            <h1>Login</h1>
            <form className='border-2 block'>
                <label>Usuário</label>
                <br/>
                <input type='text' name='user' placeholder='Usuário' className='border bg-rose-200'/>
                <br/>
                <label>Senha</label>
                <br/>
                <input type='password' name='passrow' placeholder='Senha' className='border'/>
                <br/>
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Formu