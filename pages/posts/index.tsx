import { GetStaticProps } from 'next';
import Head from "next/head";
import Link from "next/link";
import { FC } from 'react';
import Heading from "../../components/Heading";
import { PostType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { posts: data },
	};
};

type PostsProps = {
    posts: PostType[]
}

const Posts: FC<PostsProps> = ({ posts }) => (
	<>
		<Head>
			<title>Posts</title>
		</Head>
		<Heading tag="h3" text="Posts list: " />
		<ul>
			{posts &&
				posts.map(({ id, title }) => (
					<li key={id}>
						<Link href={`/posts/${id}`}>{title}</Link>
					</li>
				))}
		</ul>
	</>
);
export default Posts;
