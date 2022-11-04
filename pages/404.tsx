import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import Heading from "../components/Heading";

const Error: FC = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 10000);
	}, [router]);

	return (
		<>
			<Head>
				<title>404 Page not found</title>
			</Head>
			<Heading text="404 Page not found" />
			<h2>Something is going wrong...</h2>
		</>
	);
};

export default Error;
