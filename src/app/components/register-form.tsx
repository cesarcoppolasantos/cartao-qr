import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function RegisterForm() {
  return (
    <div className="border border-green-500 rounded-xl p-8 hover:scale-105 transition-all duration-300">
      <div className="text-center mb-4">
        <h1 className="font-bold text-2xl">Seja Bem-vindo!</h1>
        <h2 className="text-md">Preencha os campos abaixo para criar sua conta</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-1/2">
            <span className="font-semibold">Nome</span>
            <input
              placeholder="Digite seu nome"
              className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200"
              type="text"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <span className="font-semibold">Sobrenome</span>
            <input
              placeholder="Digite seu sobrenome"
              className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col">
            <span className="font-semibold">Data de Nascimento</span>
            <input placeholder="Digite seu e-mail" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="date" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="font-semibold">Gênero</span>

          <div className="flex flex-row gap-2">
            <label className="flex items-center gap-1">
              <span className="text-sm">Masculino</span>
              <input
                type="radio"
                name="genero"
                value="masculino"
                className="w-4 h-4"
              />
            </label>

            <label className="flex items-center gap-1">
              <span className="text-sm">Feminino</span>
              <input
                type="radio"
                name="genero"
                value="feminino"
                className="w-4 h-4"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
            <span className="font-semibold">E-mail</span>
            <input placeholder="Digite seu e-mail" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="text" />
        </div>
        <div className="flex flex-col">
            <span className="font-semibold">Senha</span>
            <input placeholder="Digite sua senha" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="password" />
        </div>
        <div className="flex flex-col">
            <span className="font-semibold">Confirme sua senha</span>
            <input placeholder="Confirme sua senha" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="password" />
        </div>

        <button className="border border-green-500 bg-green-50 rounded-md w-full py-2 mt-4 focus:outline-none focus:ring-2 ring-green-200 hover:bg-green-100 cursor-pointer font-semibold">Registrar</button>
      </div>
    </div>
  );
}

