import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from 'swr';

//src/pages/UsuarioDetalhe.jsx
const UsuarioDetalhe = () => {
    //extrair id da url
    const { id } = useParams();

    //estados para controlar os dados do usuário e carregamento
    const [usuario, setUsuario] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //useeffetc para evento de consulta de usuario
    useEffect(() => {
        async function buscarUsuario() {
            try {
                setIsLoading(true);
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();

                setUsuario(data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            } finally {
                setIsLoading(false);
            }
        }
        buscarUsuario();
    }, [id]);//id é o parametro a ser observado


    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            {isLoading ? (
                <p>Carregando...</p>) : (
                <ul>
                    <li>Nome: {usuario.name}</li>
                    <li>Email: {usuario.email}</li>
                    <li>Telefone: {usuario.phone}</li>
                </ul>
            )}
        </div>
    )
}
export default UsuarioDetalhe;