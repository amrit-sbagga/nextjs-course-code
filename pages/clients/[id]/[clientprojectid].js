import React from 'react';
import { useRouter } from 'next/router';

export default function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>Project page for Specific Project for a Selected Client</h1>
        </div>
    )
}
