import { GetStaticProps } from 'next';
import Head from "next/head";
import Link from "next/link";
import { FC } from 'react';

import Heading from "../../components/Heading";
import { ContactType } from '../../types';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { contacts: data },
	};
};

type ContactsProps = {
    contacts: ContactType[]
}

const Contacts: FC<ContactsProps> = ({ contacts }) => {
	return (
		<>
			<Head>
				<title>Main page</title>
			</Head>
			<Heading text="Contacts list:" />
			<ul>
				{contacts &&
					contacts.map(({ id, name }) => (
						<li key={id}>
							<Link href={`/contacts/${id}`}>{name}</Link>
						</li>
					))}
			</ul>
		</>
	);
};
export default Contacts;
