import styles from './card.module.css';

const Card = ({ title, text, icon, color }) => {
	const { card, cardTitle, cardText, cardIcon } = styles;
	return (
		<div className={`${card} ${styles['card-' + color]}`}>
			<h2 className={cardTitle}>{title}</h2>
			<p className={cardText}>{text}</p>
			<img className={cardIcon} src={icon} alt={`${title} icon`} />
		</div>
	);
};

export default Card;
