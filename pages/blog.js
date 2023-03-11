// import "./App.css";
import React from "react";
import { useEffect, useState, useCallback } from "react";
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import BlogCard from '../src/components/BlogCard';
import BlogNewsletter from '../src/components/BlogNewsletter';

const App = () => {

    const variables = { page: 0 };

    const query = `
        query GetUserArticles($page: Int!) {
            user(username: "Empowerhercom") {
                publication {
                    posts(page: $page) {
                        title
                        brief
                        slug
                        coverImage
                    }
                }
            }
        }
`;

    const fetchData = async () => {
        const data = await fetch("https://api.hashnode.com/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });
        const result = await data.json();
        const post = result.data.user.publication.posts;
        setPosts(post)
        setLoading(false)
    };


    const memoedFunction = useCallback(() => {
        return fetchData()
    }, [fetchData])

    useEffect(() => {
        memoedFunction()
    });

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true)

    return (
        <div className='overflow-hidden'>
            <NavBar />
            <main className="main bg-light">
                <div className="container xl:max-w-screen-xl px-4 mx-auto py-24 relative">
                    <section className="App font-mono">

                        {loading && <p className="ml-6">fetching blogs...</p>}

                        {posts &&
                            posts.map((post) => (
                                <article key={post.id} className="flex justify-between ml-6 mr-4 mb-6 p-4 items-center text-justify cursor-pointer hover:shadow-2xl shadow-lg">
                                    <a href={`https://blog.empowerher.community/${post.slug}`} target="_blank" rel="noopener noreferrer">
                                        <img src={post.coverImage} alt="blog post cover" className="lg:w-96 w-36" />
                                    </a>
                                    <a href={`https://blog.empowerher.community/${post.slug}`} target="_blank" rel="noopener noreferrer">
                                        <figcaption className="ml-6">
                                            <h2 className="font-bold lg:text-lg text-sm mb-2">{post.title}</h2>
                                            <p className="lg:text-base text-xs">{post.brief}</p>
                                        </figcaption>
                                    </a>
                                </article>
                            ))}
                    </section>
                </div>
            </main>
            <BlogCard />
            <BlogNewsletter/>
            <Footer />
        </div>
    );
}

export default App;
