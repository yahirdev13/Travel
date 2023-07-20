import { method } from 'lodash';
import { ImageBackground } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, { useEffect, useState, useRef } from 'react';

export default function DetailsScreenp(props) {
	const carousel = useRef();
	const [aciveIndex, setActiveIndex] = useState(0);

	const getPlaces = async () => {
		try {
			const response = await fetch(
				"http://192.168.62.185:3000/travel/api/place",
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}
			);

			const json = await response.json();
			SVGMetadataElement(json);
		} catch (error) {
			console.error(error);
		}
	}


	const DetailsScreen = ({ navigation }) => {  
		return (
			<View style={styles.container}>
				<ImageBackground
					resizeMode='cover'
					style={styles.background}
					source={require('../../assets/imagenes/imageBackground.jpg')}
				>
					
				//</ImageBackground>
			</View>
		);
	};
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
