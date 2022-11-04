import Head from "next/head";
import { FC } from 'react';
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";
import { SocialType } from '../types';

export const getStaticProps = async () => {
	const response = await fetch(`${process.env.API_HOST}/socials`);
	const data = await response.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { socials: data },
	};
};

type SocialsProps = {
    socials: SocialType[]
}

const Home: FC<SocialsProps> = ({ socials }) => (
	<div className={styles.wrapper}>
		<Head>
			<title>Main page</title>
		</Head>
		<Heading text="Next.js Application" />
		<Socials socials={socials} />
	</div>
);
export default Home;
