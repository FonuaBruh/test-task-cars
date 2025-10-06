import React from "react";
import Header from "../../components/Header/Header";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.scss";

function Home() {
	return (
		<div className={styles.home}>
			<Header />
			<main className="container">
				<CardsContainer />
			</main>
		</div>
	);
}

export default Home;
