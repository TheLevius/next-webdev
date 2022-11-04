import { GetServerSideProps } from 'next';
import Head from "next/head";
import { FC } from 'react';
import ContactInfo from "../../components/ContactInfo";
import Heading from "../../components/Heading";
import { ContactType } from '../../types';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.params;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const data = await response.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { contact: data },
	};
};

type ContactProps = {
    contact: ContactType
}

const Contact: FC<ContactProps> = ({ contact }) => (
	<>
		<Head>
			<title>{contact?.name ?? "empty"}</title>
		</Head>
		<Heading tag="h3" text={contact?.name ?? "empty"} />
		<ContactInfo contact={contact} />
	</>
);
export default Contact;
