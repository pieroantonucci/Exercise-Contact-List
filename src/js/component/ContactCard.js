import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});
	const handleDelete = () => {
		actions.preDeleteContact({
			id: props.id
		});
		actions.deleteContact({
			id: props.id
		});
	};
	const handleUpdate = props => {
		actions.preUpdateContact({
			id: props.id
		});
		// props.history.push("/add");
	};

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img src={MikePhoto} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<button className="btn" onClick={() => handleUpdate(props)} as={Link} to="/add">
							<i className="fas fa-pencil-alt mr-3" />
						</button>
						<button
							className="btn"
							onClick={() => {
								// props.onDelete();
								handleDelete();
							}}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.email}</span>
				</div>
			</div>
		</li>
	);
};

// export default withRouter(ContactCard());

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	id: PropTypes.string,
	history: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
