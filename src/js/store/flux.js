const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				name: "",
				email: "",
				phone: "",
				address: "",
				id: ""
			},
			delete: [],
			update: [],
			contactUpdate: []
		},
		actions: {
			getOneAgenda: () => {
				const store = getStore();
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/" + store.update.id, {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(data => data.json())
					.then(data => setStore({ contactUpdate: data }));
			},
			createContact: contact => {
				const store = getStore();
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contact),
					headers: { "Content-Type": "application/json" }
				})
					.then(data => data.json())
					.then(data => setStore({ user: data }))
					.catch(error => console.log("Error creating agenda", error));
			},
			getAgenda: () => {
				setStore({ update: [] });
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/piero_agenda", {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				})
					.then(data => data.json())
					.then(data => setStore({ user: data }))
					.catch(error => console.log("Error getting agenda", error));
			},
			deleteContact: id => {
				const store = getStore();
				const id2 = store.delete.id;
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id2, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then()
					.catch(error => console.log("i can't delete that sir", error));
			},
			preDeleteContact: id => {
				const store = getStore();
				setStore({ delete: id });
			},
			preUpdateContact: id => {
				const store = getStore();
				setStore({ update: id });
			},
			updateContact: contact => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + store.update.id, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: { "Content-type": "application/json" }
				});
			}
		}
	};
};

export default getState;
