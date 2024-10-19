import styles from './header.module.css';

const Header = () => {
	const { header, titleBold, titleLight, text } = styles;
	return (
		<header className={header}>
			<h2 className={titleLight}>Reliable, efficient delivery</h2>
			<h2 className={titleBold}>Powered by Technology</h2>
			<p className={text}>
				Our Artificial Intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</header>
	);
};

export default Header;
