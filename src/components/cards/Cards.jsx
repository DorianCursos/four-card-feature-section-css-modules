import { CARD_DATA } from '../../constants/card-data';
import Card from '../card/Card';
import styles from './cards.module.css';

const Cards = () => {
	const { cards } = styles;
	return (
		<div className={cards}>
			{CARD_DATA.map(card => (
				<Card key={card.id} {...card} />
			))}
		</div>
	);
};

export default Cards;
