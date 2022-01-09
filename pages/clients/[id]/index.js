import React from 'react';
import { useRouter } from 'next/router';

export default function ClientsProjectPage() {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>Projects of Given Client</h1>
        </div>
    )
}
