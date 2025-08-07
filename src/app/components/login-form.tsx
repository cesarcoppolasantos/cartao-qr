import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


export default function LoginForm() {
  return (
    <div className="border border-green-500 rounded-xl p-8 hover:scale-105 transition-all duration-300">
      <div className="text-center mb-4">
        <h1 className="font-bold text-2xl">Bem-vindo de volta!</h1>
        <h2 className="text-md">Entre em sua conta</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
            <span>E-mail</span>
            <input placeholder="Digite seu e-mail" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="text" />
        </div>

        <div className="flex flex-col mb-4">
            <div className="flex justify-between">
                <span>Senha</span>
                <span>Esqueceu sua senha?</span>
            </div>            
            <input placeholder="Digite sua senha" className="border border-green-500 rounded-md w-full px-1 placeholder:text-sm focus:outline-none focus:ring-2 ring-green-200" type="text" />
        </div>
        <button className="border border-green-500 bg-green-50 rounded-md w-full py-2 focus:outline-none focus:ring-2 ring-green-200 hover:bg-green-100 cursor-pointer font-semibold">Entrar</button>
      </div>

        <div className="relative text-center text-sm p-4 w-full">
          <span className="relative z-10 bg-white px-2 text-gray-500">Ou entre com</span>
          <div className="absolute inset-0 top-1/2 z-0 flex justify-between">
            <div className="w-[40%] border-t border-border border-gray-300"></div>
            <div className="w-[40%] border-t border-border border-gray-300"></div>
          </div>
        </div>
        <div className="flex justify-center gap-8">
            <button className="border border-green-500 bg-green-50 rounded-lg p-2 focus:outline-none focus:ring-2 ring-green-200 hover:bg-green-100 cursor-pointer font-semibold"><FaApple /></button>
            <button className="border border-green-500 bg-green-50 rounded-lg p-2 focus:outline-none focus:ring-2 ring-green-200 hover:bg-green-100 cursor-pointer font-semibold"><FaGoogle /></button>
            <button className="border border-green-500 bg-green-50 rounded-lg p-2 focus:outline-none focus:ring-2 ring-green-200 hover:bg-green-100 cursor-pointer font-semibold"><FaFacebook /></button>
        </div>


      <div className="mt-4">
        <span className="text-sm">Ainda não possui uma conta? <Link href="/" className="underline text-gray-500 hover:text-green-500">Clique aqui!</Link></span>
      </div>
    </div>
  );
}

