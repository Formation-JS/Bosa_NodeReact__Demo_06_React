// Requete :  https://api.infocenter.belgium.be/v1/organisms/10215

import axios from 'axios';
import useSWR from 'swr';

function fetcherOrganismById(id) {
    console.log('fetcherOrganismById', id);

    // Fake Request for API
    /*
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve({
                id: 10215,
                acro: "ETCS",
                name: "SPF Emploi, Travail et Concertation sociale"
            })

        }, 500);
    });
    */

    // Request by Axios
    return axios.get(`organisms/${id}`, {
        baseURL: 'https://api.infocenter.belgium.be/v1/',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response) => {
        const data = response.data.results.data;
        return {
            id: data.id,
            name: data.name_fr,
            acro: data.acro_fr
        };
    });
}

function Loader() { return <p>Chargement...</p>; };

function OrganismDetail({ id, name, acro }) {

    return (
        <p>
            <abbr>{acro}</abbr> - <span>{name}</span>
        </p>
    );
}

function OrganismError() {
    return (
        <p>Erreur lors de la requete !</p>
    );
}

function OrganismInfo({ organismId }) {

    const { isLoading, data } = useSWR('organisms/' + organismId, () => fetcherOrganismById(organismId));

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : data ? (
                <OrganismDetail {...data} />
            ) : (
                <OrganismError />
            )}
        </>
    );
};

export default OrganismInfo;
