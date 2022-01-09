import React from 'react';
import Link from 'next/link';

export default function ClientsPage() {
    const clients = [
        { id : "monty", name : "Monty" },
        { id : "honey", name : "Honey" },
        { id : "jk", name : "JK" },
        { id : "ns", name : "NP" }
    ]
    return (
        <div>
            <h1>Clients Page</h1>
            <ul>
                {
                    clients.map((client) => {
                        return (<li key={client.id}>
                            <Link href={{
                                pathname : '/clients/[id]',
                                query : { id : client.id }
                            }}>{client.name}</Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
