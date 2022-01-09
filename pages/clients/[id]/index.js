import React from 'react';
import { useRouter } from 'next/router';

export default function ClientsProjectPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler(){
        //load data...
        //router.replace('/clients/monty/projA')
        //router.push('/clients/monty/projA')
        router.push({
            pathname : '/clients/[id]/[clientprojectid]',
            query : {id : router.query.id, clientprojectid : 'ProjectA'}
        })
    }
    
    return (
        <div>
            <h1>Projects of Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
