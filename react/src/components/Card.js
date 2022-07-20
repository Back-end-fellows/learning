function Card(prop) {
	return (
		<>
			<div className="card" key={prop.element.id}>
				<h1>{prop.element.title}</h1>
				<p>{prop.element.content}</p>
			</div>
		</>
	);
}

export default Card;
