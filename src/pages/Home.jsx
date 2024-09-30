import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import Section from "../components/Section";
import Client from "../components/Client";
import Aplication from "../components/Aplication";
const URL = import.meta.env.VITE_API_URL;

const Home = () => {
    const [data, setData] = useState({
        clients:[],
        aplications:[]
    });
    const [userError, setUserError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        fetchAllData(controller.signal);

        return () => {
            controller.abort();
        };
    }, []);

    const fetchAllData = async (signal) => {
        try {
            const response = await fetch(`${URL}/home`, { signal });
            const objeto = await response.json();

            if (objeto.status === "error") {
                setUserError(`Tuvimos un error: ${objeto.msg}`);
                return;
            }
            setData(objeto.data);

        } catch (error) {
            if (error.name !== 'AbortError') {
                console.log("Error al hacer el fetch de los datos:", error);
                setUserError("Error al cargar los datos");
            }
        } finally {
            setLoading(false);
        }
    }

    const { hero, sections, aplications, clients } = data;

    return (
        <div>
            {
            hero && 
            <Hero {...hero} />
            }
            { sections &&
            sections.map((section) => {
                return <Section key={section.id} {...section} />
            })
            }
            <article className="Aplicaiones">
                <div className="Aplicaciones-container">
                    {
                    aplications.map((aplication) => {
                        return <Aplication key={aplication.id} {...aplication} />
                    })
                    }
                </div>
            </article>
            <article className="Clients">
                <div className="Clients-container">
                    {
                    clients.map((client) => {
                        return <Client key={client.id} {...client} />
                    })
                    }
                </div>
            </article>
        </div>
    );
}

export default Home;