import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import style from '../styles/pokemonDetails.module.css';
import { Image, Input, Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

function DetailsPage() {

	const [favoriteList, setFavoriteList] = useState([]);
	console.log('favoriteList:', favoriteList)
	const [pokemon, setPokemon] = useState({});
	let timoutRef = useRef();
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");
  const param = useParams();
  const  pokemon_name  = param.pokemonName

	const getPokemon = async (searchQuery) => {
		// if (searchQuery == "") return;
    console.log(pokemon_name);
		setLoading(true);
		try {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name || searchQuery}`)
			console.log(res);
			setPokemon(res.data);
			setLoading(false)
		} catch (error) {
			console.log('error:', error)
			if (!searchQuery) alert(error.message);
			setLoading(false);
		}
		getFavorites();
	}

	function getFavorites() {
		setFavoriteList(JSON.parse(localStorage.getItem("favorites")) || []);
	}

	const handleDoFavorite = () => {
		const index = favoriteList.indexOf(pokemon?.name);
		if (index !== -1) {
			favoriteList.splice(index, 1);
		} else {
			favoriteList.push(pokemon?.name);
		}
		localStorage.setItem("favorites", JSON.stringify(favoriteList))
		getFavorites()
	}

	useEffect(() => {
		getPokemon();
	}, [])

	useEffect(() => {
		if (timoutRef.current) clearTimeout(timoutRef.current);
		timoutRef.current = setTimeout(() => {
			getPokemon(search)
		}, 5000);
	}, [search])

	return loading ? <h1>Loading...</h1> : (<div>
		<Input id={style["search-input"]} placeholder='search Pokemon...' onChange={(e) => setSearch(e.currentTarget.value)} />
		<article className={style.pokemon}>
			<div className={style["container"]}>
				<aside className={style["pokemon-pic"]}>
					<Image title={pokemon?.name + " front deafult"} src={pokemon?.sprites?.front_default} alt={pokemon?.name + " front deafult"} />
					<Image title={pokemon?.name + " front shiny"} src={pokemon?.sprites?.front_shiny} alt={pokemon?.name + " front shiny"} />
					<Image title={pokemon?.name + " back shiny"} src={pokemon?.sprites?.back_shiny} alt={pokemon?.name + " back shiny"} />
					<Image title={pokemon?.name + " back default"} src={pokemon?.sprites?.back_default} alt={pokemon?.name + " back default"} />
				</aside>
				<div className={style["pokemon-details"]}>
					<h1>{pokemon?.name} <span onClick={handleDoFavorite}>{favoriteList.includes(pokemon?.name) ? <AiFillHeart /> : <AiOutlineHeart />}</span></h1>
					<div className={style["pokemon-tables"]}>
						<Table>
							<Tbody>
								<Tr>
									<Th><bdi>ID</bdi></Th>
									<Td>{pokemon?.id}</Td>
								</Tr>
								<Tr>
									<Th><bdi>Base Experience</bdi></Th>
									<Td>{pokemon?.base_experience}</Td>
								</Tr>
								<Tr>
									<Th><bdi>Type</bdi></Th>
									<Td>
										{
											pokemon?.types?.map(type => type.type.name).join(", ")
										}
									</Td>
								</Tr>
								<Tr>
									<Th><bdi>HP</bdi></Th>
									<Td>{pokemon?.stats && pokemon?.stats[0]?.base_stat}</Td>
								</Tr>
								<Tr>
									<Th><bdi>Attack</bdi></Th>
									<Td>{pokemon?.stats && pokemon?.stats[1]?.base_stat}</Td>
								</Tr>
								<Tr>
									<Td><bdi>Defense</bdi></Td>
									<Td>{pokemon?.stats && pokemon?.stats[2]?.base_stat}</Td>
								</Tr>
							</Tbody>
						</Table>
						<table>
							<tbody>
								<tr>
									<th><bdi>Special-Attack</bdi></th>
									<td>{pokemon?.stats && pokemon?.stats[3]?.base_stat}</td>
								</tr>
								<tr>
									<th><bdi>Special-Defense</bdi></th>
									<td>{pokemon?.stats && pokemon?.stats[4]?.base_stat}</td>
								</tr>
								<tr>
									<th><bdi>Speed</bdi></th>
									<td>{pokemon?.stats && pokemon?.stats[5]?.base_stat}</td>
								</tr>
								<tr>
									<th><bdi>Abilities</bdi></th>
									<td>
										{
											pokemon?.abilities?.map(el => el.ability.name).join(", ")
										}
									</td>
								</tr>
								<tr>
									<th><bdi>Weight</bdi></th>
									<td>{pokemon?.weight}</td>
								</tr>
								<tr>
									<th><bdi>Height</bdi></th>
									<td>{pokemon?.height}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className={style["pokemon-moves"]}>
				<p><bdi>Moves</bdi> {pokemon?.moves?.map(el => el.move.name).join(", ")}</p>
			</div>
		</article>
	</div>
	)
}

export default DetailsPage