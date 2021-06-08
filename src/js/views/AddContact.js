import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState({});
	const [email, setEmail] = useState({});
	const [phone, setPhone] = useState({});
	const [address, setAddress] = useState({});

	const handleSubmit = e => {
		actions.createContact({
			full_name: name,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "piero_agenda"
		});
	};

	const handleSubmit2 = e => {
		actions.updateContact({
			full_name: name,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "piero_agenda"
		});
	};

	useEffect(() => {
		actions.getOneAgenda();
	}, []);

	return (
		<div className="container">
			<div>
				{Object.entries(store.update).length === 0 ? (
					<>
						<h1 className="text-center mt-5">Add a new contact</h1>
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									onChange={event => setName(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									onChange={event => setEmail(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									onChange={event => setPhone(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter address"
									onChange={event => setAddress(event.target.value)}
								/>
							</div>
							<button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
								save
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link>
						</form>
					</>
				) : (
					<>
						<h1 className="text-center mt-5">Update a contact</h1>
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									defaultValue={store.contactUpdate.full_name}
									onChange={event => setName(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									defaultValue={store.contactUpdate.email}
									onChange={event => setEmail(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									defaultValue={store.contactUpdate.phone}
									onChange={event => setPhone(event.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter address"
									defaultValue={store.contactUpdate.address}
									onChange={event => setAddress(event.target.value)}
								/>
							</div>
							<button type="button" className="btn btn-primary form-control" onClick={handleSubmit2}>
								update
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link>
						</form>
					</>
				)}
			</div>
		</div>
	);
};
