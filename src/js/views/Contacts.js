import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAgenda();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					{Object.entries(store.update).length === 0 ? (
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					) : (
						<Link className="btn btn-primary" to="/add">
							Edit that contact
						</Link>
					)}
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{JSON.stringify(store.delete)}
						{JSON.stringify(store.update)}
						{Object.entries(store.user).map(([key, value]) => {
							return (
								<ContactCard
									key={key}
									name={value.full_name}
									phone={value.phone}
									email={value.email}
									address={value.address}
									id={value.id}
									// onDelete={() => setState({ showModal: true })}
								/>
							);
						})}
						{/* <ContactCard onDelete={() => setState({ showModal: true }) } />
						<ContactCard />
						<ContactCard />
						<ContactCard /> */}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
