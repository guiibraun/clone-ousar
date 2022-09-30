import { PostsType } from "../../types/Posts"

type Props = {
    posts: PostsType[]
}

const Blog = ({posts}: Props) => {
    return (
        <div>
            {posts.map((item, index) => (
                <div key={index}>
                    {item.title.rendered}
                </div>
            ))}
        </div>
    )
}

export default Blog

export const getStaticProps = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts')
    const res: PostsType[] = await req.json()

    return {
        props: {
            posts: res
        },
        revalidate: 7200
    }
}
