import { useRouter } from 'next/router';
import React from 'react';

export default function BlogPostPage() {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>Blog Post Page</h1>
        </div>
    )
}