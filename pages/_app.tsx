import Layout from "../components/Layout";
import "../styles/globals.scss";
import "../public/youtube.png";
import youtubeImg from "../public/youtube.png";
import Image from "next/image";
import { FC } from 'react';
import { AppProps } from 'next/app';

const MyApp: FC = ({ Component, pageProps }: AppProps) => (
	<Layout>
		<main>
			<Component {...pageProps} />
		</main>
		<Image
			src={youtubeImg}
			width={500}
			height={350}
			alt="youtube"
			placeholder="blur"
		/>
	</Layout>
);
export default MyApp;
